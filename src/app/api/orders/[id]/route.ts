import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
const status = z.enum(['PENDING','PREPARING','READY','COMPLETED','CANCELLED'])
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) { try { const body = z.object({ shopId: z.string().min(1), status }).parse(await req.json()); const order = await prisma.order.findFirst({ where: { id: params.id, shopId: body.shopId } }); if (!order) return NextResponse.json({ error: 'Order not found' }, { status: 404 }); const updated = await prisma.order.update({ where: { id: order.id }, data: { status: body.status } }); return NextResponse.json(updated) } catch { return NextResponse.json({ error: 'Invalid status update' }, { status: 400 }) } }
