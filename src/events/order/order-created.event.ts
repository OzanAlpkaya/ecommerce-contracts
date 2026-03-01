import { OrderStatus } from '../../enums/order-status.enum.js';

export interface OrderCreatedEvent {
  eventId: string;        // UUID - idempotency için
  occurredAt: string;     // ISO 8601
  orderId: string;
  userId: string;
  status: OrderStatus;
  total: number;
  items: Array<{
    productId: string;
    productName: string;  // snapshot
    quantity: number;
    unitPrice: number;    // snapshot
  }>;
}