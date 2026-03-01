export interface ProductStockUpdatedEvent {
  eventId: string;
  occurredAt: string;
  productId: string;
  previousStock: number;
  newStock: number;
}
