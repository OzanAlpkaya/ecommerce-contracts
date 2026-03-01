export interface CheckStockResponse {
  correlationId: string;
  available: boolean;
  items: Array<{
    productId: string;
    requestedQuantity: number;
    availableStock: number;
    sufficient: boolean;
  }>;
}
