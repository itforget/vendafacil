import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
const product = z.object({ shopId: z.string().min(1), name: z.string().trim().min(2).max(120), description: z.string().trim().max(500).optional(), priceCents: z.number().int().nonnegative(), categoryId: z.string().optional(), available: z.boolean().optional() })
export async function GET(req: NextRequest) { const shopId = new URL(req.url).searchParams.get('shopId'); if (!shopId) return NextResponse.json({ error: 'shopId required' }, { status: 400 }); return NextResponse.json(await prisma.product.findMany({ where: { shopId }, orderBy: { createdAt: 'desc' }, include: { category: true } })) }
export async function POST(req: NextRequest) { try { const data = product.parse(await req.json()); const result = await prisma.product.create({ data }); return NextResponse.json(result, { status: 201 }) } catch { return NextResponse.json({ error: 'Invalid product' }, { status: 400 }) } }
