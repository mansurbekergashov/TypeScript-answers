// Quyida 4ta type yozilgan siz ushbu typelarda yozilgan takrorlanishlarni oldini olishingiz kerak. type, & foydalaning.

// Reusable bo'lgan type va interfacelarga aylantiring.

// Nihoyatda toza kod bo'lsin

type Tstatus = "open" | "closed" | "draft" | "published";
type Tformat = "video" | "audio" | "image";
type TLevel = "beginner" | "intermediate" | "advanced";
type TtargetType = "product" | "course";
type Ttype = "purchase" | "refund" | "info" | "warning";
type Tpriority = "low" | "high";
type Tmethod = "standard" | "express";

type TBase = {
  id: number;
  username?: string;
  email?: string;
  rating?: number;
  title?: string;
  duration?: number;
  date?: string;
  userId?: number;


}

// ==============================
// 1. BasicUser type
// Foydalanuvchi uchun asosiy ma'lumotlar
// ==============================
type BasicUser = TBase & {
  createdAt: string;
  isActive: boolean;
};

// ==============================
// 2. CustomerProfile type
// Mijozlar uchun profil ma'lumotlari
// ==============================
type CustomerProfile = TBase & {
  fullName: string;
  phoneNumber: string;
};

// ==============================
// 3. VendorInfo type
// Sotuvchilar uchun ma'lumotlar
// ==============================
type VendorInfo = TBase & {
  companyName: string;
};

// ==============================
// 4. ProductDetails type
// Mahsulotlar uchun batafsil ma'lumot
// ==============================
type ProductDetails = TBase & {
  price: number;
  category: string;
  stockQuantity: number;
};

// ==============================
// 5. OrderInfo type
// Buyurtma ma'lumotlari
// ==============================
type OrderInfo = TBase & {
  customerId: number;
  totalPrice: number;
  status: Tstatus;
  orderDate: string;
};

// ==============================
// 6. MediaItem type
// Media kontenti uchun ma'lumotlar
// ==============================
type MediaItem = TBase & {
  format: Tformat;
  creator: string;
};

// ==============================
// 7. VideoContent type
// Video ma'lumotlari
// ==============================
type VideoContent = TBase & {
  views: number;
  resolution: string;
};

// ==============================
// 8. EventDetails type
// Tadbir ma'lumotlari
// ==============================
type EventDetails = TBase & {
  location: string;
  organizerId: number;
};

// ==============================
// 9. CourseInfo type
// Kurslar uchun ma'lumotlar
// ==============================
type CourseInfo = TBase & {
  instructor: string;
  durationHours: number;
  level: TLevel;
};

// ==============================
// 10. ReviewItem type
// Sharhlar uchun ma'lumotlar
// ==============================
type ReviewItem = TBase & {
  comment: string;
  targetType: TtargetType;
};

// ==============================
// 11. TransactionRecord type
// Tranzaksiya yozuvlari
// ==============================
type TransactionRecord = TBase & {
  amount: number;
  type: Ttype;
  status: Tstatus;
};

// ==============================
// 12. InventoryEntry type
// Ombor yozuvlari
// ==============================
type InventoryEntry = TBase & {
  productId: number;
  quantity: number;
  warehouse: string;
  lastUpdated: string;
};

// ==============================
// 13. CampaignData type
// Marketing kampaniyasi ma'lumotlari
// ==============================
type CampaignData = TBase & {
  budget: number;
  startDate: string;
  targetAudience: string;
};

// ==============================
// 14. SubscriptionInfo type
// Obuna rejalari ma'lumotlari
// ==============================
type SubscriptionInfo = TBase & {
  price: number;
  duration: "monthly" | "yearly";
  features: string[];
};

// ==============================
// 15. NotificationData type
// Bildirishnoma ma'lumotlari
// ==============================
type NotificationData = TBase & {
  message: string;
  type: Ttype;
  read: boolean;
};

// ==============================
// 16. SupportTicket type
// Texnik yordam chiptasi
// ==============================
type SupportTicket = TBase & {
  subject: string;
  status: Tstatus;
  priority: Tpriority;
};

// ==============================
// 17. BlogArticle type
// Blog maqolasi ma'lumotlari
// ==============================

type BlogArticle = TBase & {
  author: string;
  status: Tstatus;
  tags: string[];
};

// ==============================
// 18. PaymentDetails type
// To'lov usullari ma'lumotlari
// ==============================
type PaymentDetails = TBase & {
  type: string;
  cardNumber: string;
  isDefault: boolean;
};

// ==============================
// 19. ShippingDetails type
// Yetkazib berish ma'lumotlari
// ==============================
type ShippingDetails = TBase & {
  orderId: number;
  address: string;
  method: Tmethod;
  cost: number;
};

// ==============================
// 20. UserSettings type
// Foydalanuvchi sozlamalari
// ==============================
type UserSettings = TBase & {
  privacy: string;
  theme: "light" | "dark";
  notifications: boolean;
};
