import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { createOrder } from '@/lib/domain'
const schema = z.object({ shopId: z.string().min(1), customerName: z.string().trim().min(2).max(100), customerPhone: z.string().trim().max(30).optional(), items: z.array(z.object({ productId: z.string().min(1), quantity: z.number().int().positive().max(99) })).min(1).max(50) })
export async function POST(req: NextRequest) {
  try {
    const body = schema.parse(await req.json())
    const products = await prisma.product.findMany({ where: { id: { in: body.items.map(i => i.productId) }, shopId: body.shopId, available: true } })
    if (products.length !== body.items.length) return NextResponse.json({ error: 'One or more products are unavailable' }, { status: 400 })
    const lines = body.items.map(item => { const p = products.find(x => x.id === item.productId)!; return { productId: p.id, quantity: item.quantity, unitPrice: p.priceCents } })
    const calculated = createOrder(body.shopId, lines)
    const order = await prisma.order.create({ data: { shopId: body.shopId, customerName: body.customerName, customerPhone: body.customerPhone, totalCents: calculated.totalCents, items: { create: body.items.map(item => { const p = products.find(x => x.id === item.productId)!; return { productId: p.id, name: p.name, quantity: item.quantity, unitPriceCents: p.priceCents } }) } }, include: { items: true } })
    return NextResponse.json(order, { status: 201 })
  } catch { return NextResponse.json({ error: 'Invalid order request' }, { status: 400 }) }
}
