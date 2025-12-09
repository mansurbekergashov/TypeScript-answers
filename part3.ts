// Quyida 10ta interface yozilgan siz ushbu interfaceda yozilgan takrorlanishlarni oldini olishingiz kerak. type, &, extendslardan foydalaning.

// Reusable bo'lgan type va interfacelarga aylantiring.

// Nihoyatda toza kod bo'lsin


type Troles = "user" | "admin" | "guest";
type Tstatus = "pending" | "shipped" | "delivered" | "cancelled" | "completed" | "failed";
type TNumberArray = number[];
type TtransactionType = "purchase" | "refund" | "deposit";

interface IBase {
  id: number;
  createdAt: string;
  username?: string;
  email?: string;
  fullName?: string;
  isActive?: boolean;
  name?: string;
  price?: number;
  category?: string;
  description?: string;
  stockQuantity?: number;
  isAvailable?: boolean;
  customerId?: number;
  title?: string;
  organizerId?: number;
  startDate?: string;
}



// ==============================
// 1. User interfeysi
// Foydalanuvchi tizimidagi asosiy ma'lumotlar uchun
// ==============================

interface User extends IBase {
  phoneNumber?: string;
  address?: string;
  lastLogin: string;
  role: Troles;
}

// ==============================
// 2. Customer interfeysi
// Mijozlar uchun maxsus ma'lumotlar, User'ga o'xshash
// ==============================

interface Customer extends IBase {
  phoneNumber: string;
  address: string;
  purchaseHistory: number[];
  loyaltyPoints: number;
}

// ==============================
// 3. Vendor interfeysi
// Sotuvchilar uchun ma'lumotlar, User va Customer'ga o'xshash
// ==============================

interface Vendor extends IBase {
  phoneNumber?: string;
  address: string;
  companyName: string;
  vendorRating: number;
}

// ==============================
// 4. Product interfeysi
// Mahsulotlar katalogi uchun asosiy ma'lumotlar
// ==============================

interface Product extends IBase {
  vendorId: number;
  weight?: number;
}

// ==============================
// 5. InventoryItem interfeysi
// Ombor mahsulotlari uchun, Product'ga o'xshash
// ==============================

interface InventoryItem extends IBase {
  warehouseId: number;
  lastRestocked: string;
}

// ==============================
// 6. Order interfeysi
// Buyurtmalar uchun ma'lumotlar
// ==============================

interface Order extends IBase {
  products: TNumberArray;
  totalPrice: number;
  status: Tstatus;
  shippingAddress: string;
  paymentMethod: string;
  isPaid: boolean;
  orderNotes?: string;
}

// ==============================
// 7. Transaction interfeysi
// Moliyaviy operatsiyalar uchun, Order'ga o'xshash
// ==============================

interface Transaction extends IBase {
  amount: number;
  status: Tstatus;
  paymentMethod: string;
  isRefunded: boolean;
  transactionType: TtransactionType;
  orderId?: number;
}

// ==============================
// 8. Event interfeysi
// Tadbirlar va faoliyatlar uchun ma'lumotlar
// ==============================

interface Event extends IBase {
  location: string;
  isPublic: boolean;
  maxParticipants: number;
  registrationDeadline?: string;
}

// ==============================
// 9. Campaign interfeysi
// Marketing kampaniyalari uchun, Event'ga o'xshash
// ==============================

interface Campaign extends IBase {
  targetAudience: string;
  budget: number;
  endDate?: string;
}

// ==============================
// 10. Review interfeysi
// Foydalanuvchi sharhlari uchun ma'lumotlar
// ==============================

interface Review extends IBase {
  userId: number;
  targetId: number;
  rating: number;
  comment: string;
  isApproved: boolean;
  targetType: "product" | "vendor" | "event";
  helpfulVotes: number;
  reported?: boolean;
}