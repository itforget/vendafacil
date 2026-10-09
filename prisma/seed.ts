import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() { const shop = await prisma.shop.upsert({ where: { slug: 'demo' }, update: {}, create: { slug: 'demo', name: 'Açaí da Praça' } }); const bowls = await prisma.category.upsert({ where: { shopId_name: { shopId: shop.id, name: 'Favoritos' } }, update: {}, create: { shopId: shop.id, name: 'Favoritos' } }); await prisma.product.createMany({ data: [{ shopId: shop.id, categoryId: bowls.id, name: 'Açaí 500ml', description: 'Açaí cremoso com banana e granola', priceCents: 1890 }, { shopId: shop.id, categoryId: bowls.id, name: 'Sorvete 2 bolas', description: 'Escolha seus sabores favoritos', priceCents: 1290 }], skipDuplicates: true }) }
main().finally(() => prisma.$disconnect())
