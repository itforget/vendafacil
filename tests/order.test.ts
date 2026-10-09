import { describe, expect, it } from 'vitest'
import { createOrder, canTransitionOrder } from '../src/lib/domain'

describe('order domain', () => {
  it('rejects an empty cart and invalid quantities', () => {
    expect(() => createOrder('shop-a', [])).toThrow('Cart cannot be empty')
    expect(() => createOrder('shop-a', [{ productId: 'p1', quantity: 0, unitPrice: 10 }])).toThrow('Quantity must be positive')
  })

  it('calculates a safe total from integer cents', () => {
    const order = createOrder('shop-a', [
      { productId: 'p1', quantity: 2, unitPrice: 1250 },
      { productId: 'p2', quantity: 1, unitPrice: 499 },
    ])
    expect(order.shopId).toBe('shop-a')
    expect(order.totalCents).toBe(2999)
  })

  it('allows only forward order status transitions', () => {
    expect(canTransitionOrder('PENDING', 'PREPARING')).toBe(true)
    expect(canTransitionOrder('PREPARING', 'READY')).toBe(true)
    expect(canTransitionOrder('READY', 'COMPLETED')).toBe(true)
    expect(canTransitionOrder('COMPLETED', 'PREPARING')).toBe(false)
  })
})
