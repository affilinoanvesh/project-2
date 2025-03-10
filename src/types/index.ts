export interface ProductVariation {
  id: number;
  parent_id: number;
  name: string;
  sku?: string;
  price: number;
  regular_price?: number;
  sale_price?: number;
  cost_price?: number;
  supplier_price?: number;
  supplier_name?: string;
  supplier_updated?: Date;
  stock_quantity?: number;
  attributes: Array<{
    name: string;
    option: string;
  }>;
}

export interface Product {
  id: number;
  name: string;
  sku?: string;
  price: number;
  regular_price?: number;
  sale_price?: number;
  cost_price?: number;
  supplier_price?: number;
  supplier_name?: string;
  supplier_updated?: Date;
  stock_quantity?: number;
  type?: string;
  variations?: number[];
  productVariations?: ProductVariation[];
}

export interface OrderItem {
  id: number;
  product_id: number;
  variation_id?: number;
  name: string;
  quantity: number;
  price: number;
  total: string;
  sku?: string;
  cost_price?: number;
  profit?: number;
  margin?: number;
  meta_data?: Array<{
    key: string;
    value: string;
  }>;
}

export interface Order {
  id: number;
  number: string;
  date_created: string;
  date_created_nz?: string; // Date in NZ timezone
  date_created_display?: string; // Formatted date for display
  status: string;
  total: string;
  line_items: OrderItem[];
  shipping_total: string;
  payment_method: string;
  payment_method_title: string;
  cost_total?: number;
  profit?: number;
  margin?: number;
}

export interface InventoryItem {
  product_id: number;
  variation_id?: number;
  sku: string;
  cost_price: number;
  supplier_price?: number;
  supplier_name?: string;
  supplier_updated?: Date;
}

export interface OverheadCost {
  id: number;
  name: string;
  type: 'fixed' | 'percentage' | 'per_order' | 'per_item';
  value: number;
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface PnLSummary {
  totalRevenue: number;
  totalCost: number;
  totalProfit: number;
  averageMargin: number;
  orderCount: number;
  itemCount: number;
  periodStart: string;
  periodEnd: string;
}

export interface ApiCredentials {
  url: string;
  consumerKey: string;
  consumerSecret: string;
}

export interface Expense {
  id?: number;
  date: Date;
  category: string;
  amount: number;
  description: string;
  period?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  reference?: string;
  payment_method?: string;
  tax_deductible?: boolean;
  tags?: string[];
}

export interface ExpenseCategory {
  id?: number;
  name: string;
  description?: string;
  color?: string;
  is_tax_deductible?: boolean;
  budget_monthly?: number;
}

export interface ExpenseImport {
  id?: number;
  date: Date;
  filename: string;
  items_imported: number;
  items_skipped: number;
}

export interface SupplierPriceImport {
  id?: number;
  date: Date;
  filename: string;
  items_updated: number;
  items_skipped: number;
  supplier_name: string;
}

export interface SupplierPriceItem {
  id?: number;
  import_id?: number;
  sku: string;
  name?: string;
  supplier_price: number;
  supplier_name: string;
}

export interface ReportData {
  orders: Order[];
  products: Product[];
  expenses: Expense[];
  salesData: any[];
  productData: any[];
  expenseData: any[];
  profitabilityData: any[];
}