// Quyida 10ta interface yozilgan siz ushbu interfaceda yozilgan takrorlanishlarni oldini olishingiz kerak. type, &, extendslardan foydalaning.

// Reusable bo'lgan type va interfacelarga aylantiring.

// Nihoyatda toza kod bo'lsin

// ==============================
// 1. User interfeysi
// Foydalanuvchi tizimidagi asosiy ma'lumotlar uchun
// ==============================
interface User {
  id: number;
  username: string;
  email: string;
  fullName: string;
  createdAt: string;
  isActive: boolean;
  phoneNumber?: string;
  address?: string;
  lastLogin: string;
  role: "user" | "admin" | "guest";
}

// ==============================
// 2. Customer interfeysi
// Mijozlar uchun maxsus ma'lumotlar, User'ga o'xshash
// ==============================
interface Customer {
  id: number;
  username: string;
  email: string;
  fullName: string;
  createdAt: string;
  isActive?: boolean;
  phoneNumber: string;
  address: string;
  purchaseHistory: number[];
  loyaltyPoints: number;
}

// ==============================
// 3. Vendor interfeysi
// Sotuvchilar uchun ma'lumotlar, User va Customer'ga o'xshash
// ==============================
interface Vendor {
  id: number;
  username: string;
  email: string;
  fullName: string;
  createdAt: string;
  isActive: boolean;
  phoneNumber?: string;
  address: string;
  companyName: string;
  vendorRating: number;
}

// ==============================
// 4. Product interfeysi
// Mahsulotlar katalogi uchun asosiy ma'lumotlar
// ==============================
interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  stockQuantity: number;
  createdAt: string;
  isAvailable: boolean;
  vendorId: number;
  weight?: number;
}

// ==============================
// 5. InventoryItem interfeysi
// Ombor mahsulotlari uchun, Product'ga o'xshash
// ==============================
interface InventoryItem {
  id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
  stockQuantity: number;
  createdAt: string;
  isAvailable: boolean;
  warehouseId: number;
  lastRestocked: string;
}

// ==============================
// 6. Order interfeysi
// Buyurtmalar uchun ma'lumotlar
// ==============================
interface Order {
  id: number;
  customerId: number;
  products: number[];
  totalPrice: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
  shippingAddress: string;
  paymentMethod: string;
  isPaid: boolean;
  orderNotes?: string;
}

// ==============================
// 7. Transaction interfeysi
// Moliyaviy operatsiyalar uchun, Order'ga o'xshash
// ==============================
interface Transaction {
  id: number;
  customerId: number;
  amount: number;
  status: "completed" | "pending" | "failed";
  createdAt: string;
  paymentMethod: string;
  isRefunded: boolean;
  transactionType: "purchase" | "refund" | "deposit";
  orderId?: number;
  description?: string;
}

// ==============================
// 8. Event interfeysi
// Tadbirlar va faoliyatlar uchun ma'lumotlar
// ==============================
interface Event {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  startDate: string;
  location: string;
  organizerId: number;
  isPublic: boolean;
  maxParticipants: number;
  registrationDeadline?: string;
}

// ==============================
// 9. Campaign interfeysi
// Marketing kampaniyalari uchun, Event'ga o'xshash
// ==============================
interface Campaign {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  startDate: string;
  targetAudience: string;
  organizerId: number;
  isActive: boolean;
  budget: number;
  endDate?: string;
}

// ==============================
// 10. Review interfeysi
// Foydalanuvchi sharhlari uchun ma'lumotlar
// ==============================
interface Review {
  id: number;
  userId: number;
  targetId: number;
  rating: number;
  comment: string;
  createdAt: string;
  isApproved: boolean;
  targetType: "product" | "vendor" | "event";
  helpfulVotes: number;
  reported?: boolean;
}
