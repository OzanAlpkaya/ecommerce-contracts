export interface CheckStockRequest {
  correlationId: string;   // request-reply eşleştirmesi için
  items: Array<{
    productId: string;
    quantity: number;
  }>;
}
