import { OrderStatus } from '../../enums/order-status.enum';

export interface OrderStatusChangedEvent {
  eventId: string;
  occurredAt: string;
  orderId: string;
  userId: string;
  previousStatus: OrderStatus;
  newStatus: OrderStatus;
}