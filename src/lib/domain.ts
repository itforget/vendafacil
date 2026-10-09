export type OrderStatus = 'PENDING' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED'
export type CartLine = { productId: string; quantity: number; unitPrice: number }

export function createOrder(shopId: string, lines: CartLine[]) {
  if (!shopId) throw new Error('Shop is required')
  if (!lines.length) throw new Error('Cart cannot be empty')
  for (const line of lines) {
    if (!Number.isInteger(line.quantity) || line.quantity <= 0) throw new Error('Quantity must be positive')
    if (!Number.isInteger(line.unitPrice) || line.unitPrice < 0) throw new Error('Unit price must be valid')
  }
  return { shopId, lines, totalCents: lines.reduce((sum, line) => sum + line.quantity * line.unitPrice, 0) }
}

const transitions: Record<OrderStatus, OrderStatus[]> = {
  PENDING: ['PREPARING', 'CANCELLED'], PREPARING: ['READY', 'CANCELLED'], READY: ['COMPLETED'], COMPLETED: [], CANCELLED: [],
}
export function canTransitionOrder(from: OrderStatus, to: OrderStatus) { return transitions[from]?.includes(to) ?? false }
