// ==============================
// 1-masala sharti
// ==============================
// Ro‘zimuhammad yangi o‘qituvchi haqida ma’lumot kiritdi. Quyida obyekt berilgan, unga mos `Teacher` interfeysini yozing. Balki Ro‘zimuhammad bu safar o‘qituvchini eslab qolar 😊

interface Teacher {
  name: string;
  subject: string[];
  experience: number;
  isCertified?: boolean;
}

const teacher: Teacher = {
  name: "Ali Valiev",
  subject: ["Matematika", "Fizika"],
  experience: 5,
  isCertified: true,
};

// ==============================
// 2-masala sharti
// ==============================
// Subhoniddin o‘zining sevimli qo‘shig‘ini TypeScript’da ro‘yxatga oldi. Quyida obyekt berilgan, unga mos `Music` interfeysini yozing. Notalar ham, Subhoniddin ham xursand bo‘lsin 🎶

interface Music {
  title: string;
  artist: string;
  duration: number;
  genre?: string;
}

const song: Music = {
  title: "Yor-Yor",
  artist: "Ozodbek Nazarbekov",
  duration: 240,
  genre: "Folk",
};

// ==============================
// 3-masala sharti
// ==============================
// Diyorbek restoran menyusiga yangi taom qo‘shdi. Quyida obyekt berilgan, unga mos `MenuItem` interfeysini yozing. Oshqozonlar sizdan minnatdor bo‘ladi 😋

interface Item {
  id: number;
  name: string;
  price: number;
  isVegetarian?: boolean;
}

const item: Item = {
  id: 1,
  name: "Osh",
  price: 25000,
  isVegetarian: false,
};

// ==============================
// 4-masala sharti
// ==============================
// Feruza uyidagi sevimli kitobini ro‘yxatga oldi. Quyida obyekt berilgan, unga mos `Book` interfeysini yozing. Kitobxonlar xursand bo‘lsin 📚

interface Book {
  title: string;
  author: string;
  pages: number;
  publishedYear?: number;
}

const book: Book = {
  title: "Alpomish",
  author: "Xalq dastani",
  pages: 120,
  publishedYear: 1990,
};

// ==============================
// 5-masala sharti
// ==============================
// Asilbek YouTube’da yangi video joyladi. Quyida obyekt berilgan, unga mos `Video` interfeysini yozing. Balki millionta ko‘rish to‘plar 🎥

interface Vlog {
  title: string;
  views: number;
  duration: number;
  uploadedAt?: string;
}

const vlog: Vlog = {
  title: "Toshkentda bir kun",
  views: 15000,
  duration: 600,
  uploadedAt: "2025-06-20",
};

// ==============================
// 6-masala sharti
// ==============================
// Nigora onlayn do‘koniga yangi mahsulot qo‘shdi. Quyida obyekt berilgan, unga mos `Product` interfeysini yozing. Iqtisodiy inqirozning oldi olinsin 💸

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

const product: Product = {
  id: 101,
  name: "Smartfon",
  price: 2500000,
  description: "Eng so‘nggi model",
};

// ==============================
// 7-masala sharti
// ==============================
// Sardor kino saytiga yangi film qo‘shdi. Quyida obyekt berilgan, unga mos `Movie` interfeysini yozing. Rejissor xafa bo‘lib ketmasin 🎬

interface Movie {
  title: string;
  director: string;
  year: number;
  rating?: number;
}

const film: Movie = {
  title: "Baxt uchun kurash",
  director: "Shuhrat Abbasov",
  year: 1980,
  rating: 8.5,
};

// ==============================
// 8-masala sharti
// ==============================
// Muxlisa yangi mobil ilova ishlab chiqdi. Quyida obyekt berilgan, unga mos `App` interfeysini yozing. Ilova muvaffaqiyatli bo‘lsin 📱

interface App {
  name: string;
  version: string;
  downloads: number;
  developer: string;
}

const application: App = {
  name: "ChatApp",
  version: "1.0.0",
  downloads: 5000,
  developer: "Muxlisa",
};

// ==============================
// 9-masala sharti
// ==============================
// Behzod sport klubiga yangi a’zo sifatida qo‘shildi. Quyida obyekt berilgan, unga mos `Member` interfeysini yozing. Sportchilar xursand bo‘lsin 🏋️‍♂️

interface Member {
  id: number;
  name: string;
  membershipType: string;
  isActive: boolean;
}

const member: Member = {
  id: 23,
  name: "Behzod Xolmatov",
  membershipType: "Premium",
  isActive: true,
};

// ==============================
// 10-masala sharti
// ==============================
// Dilfuza galereya sahifasiga yangi rasm qo‘shdi. Quyida obyekt berilgan, unga mos `Image` interfeysini yozing. Rasmlar chiroyli ko‘rinsin 🖼️

interface Photo {
  url: string;
  alt: string;
  width: number;
  height: number;
}

const photo: Photo = {
  url: "https://example.com/image.jpg",
  alt: "Tog‘ manzarasi",
  width: 1920,
  height: 1080,
};

// ==============================
// 11-masala sharti
// ==============================
// Alisher o‘z blogiga yangi maqola yozdi. Quyida obyekt berilgan, unga mos `Post` interfeysini yozing. O‘quvchilar xursand bo‘lsin 📝

interface Aeticle {
  id: number;
  title: string;
  content: string;
  publishedDate?: string;
}

const article: Aeticle = {
  id: 5,
  title: "TypeScriptni o‘rganish bo‘yicha maslahatlar",
  content: "TypeScript haqida foydali maslahatlar...",
  publishedDate: "2025-06-15",
};

// ==============================
// 12-masala sharti
// ==============================
// Zilola onlayn kurslar platformasiga yangi kurs qo‘shdi. Quyida obyekt berilgan, unga mos `Course` interfeysini yozing. Bilim ulashsin 📚

interface Course {
  id: number;
  title: string;
  duration: number;
  instructor: string;
}

const course: Course = {
  id: 10,
  title: "Web dasturlash asoslari",
  duration: 20,
  instructor: "Zilola Rahimova",
};

// ==============================
// 13-masala sharti
// ==============================
// Farrux o‘zining sayohatlarini ro‘yxatga oldi. Quyida obyekt berilgan, unga mos `Trip` interfeysini yozing. Sarguzashtlar davom etsin ✈️

interface Trip {
  destination: string;
  duration: number;
  cost: number;
  isInternational: boolean;
}

const trip: Trip = {
  destination: "Istanbul",
  duration: 7,
  cost: 1500,
  isInternational: true,
};

// ==============================
// 14-masala sharti
// ==============================
// Xurshid onlayn kutubxonaga yangi elektron kitob qo‘shdi. Quyida obyekt berilgan, unga mos `EBook` interfeysini yozing. Kitobxonlar xursand bo‘lsin 📖

interface EBook {
  title: string;
  author: string;
  fileSize: number;
  format: string;
}

const ebook: EBook = {
  title: "O‘tgan kunlar",
  author: "Abdulla Qodiriy",
  fileSize: 2.5,
  format: "PDF",
};

// ==============================
// 15-masala sharti
// ==============================
// Madina fitnes ilovasiga yangi mashq qo‘shdi. Quyida obyekt berilgan, unga mos `Workout` interfeysini yozing. Sog‘lom hayot davom etsin 💪

interface Workout {
  id: number;
  name: string;
  duration: number;
  intensity: string;
}

const workout: Workout = {
  id: 3,
  name: "Yoga seansi",
  duration: 45,
  intensity: "O‘rtacha",
};

// ==============================
// 16-masala sharti
// ==============================
// Otabek onlayn do‘koniga yangi buyurtma kiritdi. Quyida obyekt berilgan, unga mos `Order` interfeysini yozing. Savdo muvaffaqiyatli bo‘lsin 💼

interface Order {
  id: number;
  customerName: string;
  totalPrice: number;
  status: string;
}

const order: Order = {
  id: 202,
  customerName: "Otabek Sattorov",
  totalPrice: 350000,
  status: "Yetkazib berilmoqda",
};

// ==============================
// 17-masala sharti
// ==============================
// Gulnoza ta’lim platformasiga yangi talaba qo‘shdi. Quyida obyekt berilgan, unga mos `Student` interfeysini yozing. Ta’lim davom etsin 📚

interface Student {
  id: number;
  name: string;
  grade: number;
  isEnrolled: boolean;
}

const student: Student = {
  id: 45,
  name: "Gulnoza Saidova",
  grade: 85,
  isEnrolled: true,
};

// ==============================
// 18-masala sharti
// ==============================
// Shaxzod o‘yin platformasiga yangi o‘yin qo‘shdi. Quyida obyekt berilgan, unga mos `Game` interfeysini yozing. O‘yinchilar xursand bo‘lsin 🎮

interface Game {
  title: string;
  platform: string;
  releaseYear: number;
  genre?: string;
}

const game: Game = {
  title: "Cyber Quest",
  platform: "PC",
  releaseYear: 2023,
  genre: "Action",
};

// ==============================
// 19-masala sharti
// ==============================
// Sevara tadbirlar ro‘yxatiga yangi tadbir qo‘shdi. Quyida obyekt berilgan, unga mos `Event` interfeysini yozing. Bayramlar davom etsin 🎉

interface Event1 {
  id: number;
  name: string;
  date: string;
  location: string;
}

const event1: Event1 = {
  id: 15,
  name: "Yangi yil kechasi",
  date: "2025-12-31",
  location: "Toshkent",
};

// ==============================
// 20-masala sharti
// ==============================
// Jamol yangi musiqa albomini ro‘yxatga oldi. Quyida obyekt berilgan, unga mos `Album` interfeysini yozing. Musiqa yangilansin 🎼

interface Album {
  title: string;
  artist: string;
  tracks: number;
  releaseDate: string;
}

const album: Album = {
  title: "Yulduzlar ostida",
  artist: "Sevara Nazarkhan",
  tracks: 12,
  releaseDate: "2025-03-10",
};

// ==============================
// 21-masala sharti
// ==============================
// Laziza ta’lim platformasiga yangi dars qo‘shdi. Quyida obyekt berilgan, unga mos `Lesson` interfeysini yozing. Ta’lim sifatli bo‘lsin 🎓

interface Lesson {
  id: number;
  title: string;
  duration: number;
  topic: string;
}

const lesson: Lesson = {
  id: 7,
  title: "React asoslari",
  duration: 90,
  topic: "Frontend dasturlash",
};

// ==============================
// 22-masala sharti
// ==============================
// Nodir blog saytiga yangi maqola joyladi. Quyida obyekt berilgan, unga mos `Blog` interfeysini yozing. O‘quvchilar xursand bo‘lsin 📝

interface Blog {
  id: string;
  title: string;
  author: string;
  publishDate?: string;
}

const blogPost: Blog = {
  id: "post-123",
  title: "JavaScriptda xatolar bilan ishlash",
  author: "Nodir Xasanov",
  publishDate: "2025-06-22",
};

// ==============================
// 23-masala sharti
// ==============================
// Shohjahon sayohat agentligiga yangi tur qo‘shdi. Quyida obyekt berilgan, unga mos `Tour` interfeysini yozing. Sarguzashtlar boshlansin 🌍

interface Tour {
  id: number;
  destination: string;
  price: number;
  durationDays: number;
}

const tour: Tour = {
  id: 8,
  destination: "Parij",
  price: 2000,
  durationDays: 5,
};

// ==============================
// 24-masala sharti
// ==============================
// Ma’mura restoran menyusiga yangi taom qo‘shdi. Quyida obyekt berilgan, unga mos `Dish` interfeysini yozing. Oshxona shuhrati oshirila! 😋

interface Dish {
  id: number;
  name: string;
  price: number;
  isSpicy: boolean;
}

const dish: Dish = {
  id: 12,
  name: "Manti",
  price: 20000,
  isSpicy: false,
};

// ==============================
// 25-masala sharti
// ==============================
// Ulug‘bek kutubxonaga yangi jurnal qo‘shdi. Quyida obyekt berilgan, unga mos `Magazine` interfeysini yozing. Nashriyot xursand bo‘lsin 📇

interface Magazine {
  id: number;
  title: string;
  issue: number;
  publisher: string;
}

const magazine: Magazine = {
  id: 101,
  title: "Ilm va Fan",
  issue: 45,
  publisher: "O‘zbekiston nashriyoti",
};

// ==============================
// 26-masala sharti
// ==============================
// Dilbar fitnes dasturiga yangi mashq qo‘shdi. Quyida obyekt berilgan, unga mos `Exercise` interfeysini yozing. Sog‘lom turmush tarzi targ‘ib qilinsin 💪

interface Exercise {
  id: number;
  name: string;
  reps: number;
  equipment?: string;
}

const exercise: Exercise = {
  id: 4,
  name: "Push-ups",
  reps: 20,
  equipment: "Hech narsa",
};

// ==============================
// 27-masala sharti
// ==============================
// Sherzod kino portaliga yangi film qo‘shdi. Quyida obyekt berilgan, unga mos `Film` interfeysini yozing. Kinosevarlar xursand bo‘lsin 🎥

interface Film {
  id: number;
  title: string;
  genre: string;
  duration: number;
}

const movie: Film = {
  id: 25,
  title: "Yulduzli osmon",
  genre: "Drama",
  duration: 120,
};

// ==============================
// 28-masala sharti
// ==============================
// Nilufar onlayn do‘konga yangi kiyim qo‘shdi. Quyida obyekt berilgan, unga mos `Clothing` interfeysini yozing. Moda olami porlasin 🌟

interface Clothing {
  id: number;
  name: string;
  price: number;
  size: string;
}

const clothing: Clothing = {
  id: 305,
  name: "Klassik ko‘ylak",
  price: 150000,
  size: "M",
};

// ==============================
// 29-masala sharti
// ==============================
// Oybek musiqa festivallariga yangi konsert qo‘shdi. Quyida obyekt berilgan, unga mos `Concert` interfeysini yozing. Musiqa oqimi to‘xtamasin 🎸

interface Concert {
  id: number;
  name: string;
  date: string;
  venue: string;
}

const concert: Concert = {
  id: 9,
  name: "Rock Fest",
  date: "2025-07-15",
  venue: "Toshkent Stadioni",
};

// ==============================
// 30-masala sharti
// ==============================
// Gulchehra ta’lim markaziga yangi guruh qo‘shdi. Quyida obyekt berilgan, unga mos `Class` interfeysini yozing. Ta’lim sifati oshirila! 🎓

interface Class {
  id: number;
  name: string;
  capacity: number;
}

const classObj: Class = {
  id: 3,
  name: "Python dasturlash",
  capacity: 20,
};

// ==============================
// 31-masala sharti
// ==============================
// Miraziz sayohat blogiga yangi maqola yozdi. Quyida obyekt berilgan, unga mos `TravelPost` interfeysini yozing. Sarguzashtlar o‘quvchilarga yetib borsin! 🌍

interface TravelPost {
  id: number;
  title: string;
  destination: string;
  author?: string;
}

const travelPost: TravelPost = {
  id: 17,
  title: "Samarqandda bir hafta",
  destination: "Samarqand",
  author: "Miraziz",
};

// ==============================
// 32-masala sharti
// ==============================
// Xadicha onlayn kutubxonaga yangi audiokitob qo‘shdi. Quyida obyekt berilgan, unga mos `Audiobook` interfeysini yozing. Tinglovchilar xursand bo‘lsin 🎧

interface Audiobook {
  title: string;
  author: string;
  duration: number;
  narrator?: string;
}

const audiobook: Audiobook = {
  title: "Xamsa",
  author: "Alisher Navoiy",
  duration: 10,
  narrator: "Zokir aka",
};

// ==============================
// 33-masala sharti
// ==============================
// Rustam restoran menyusiga yangi ichimlik qo‘shdi. Quyida obyekt berilgan, unga mos `Beverage` interfeysini yozing. Chanqoqlar quvonsin 🍹

interface Beverage {
  id: number;
  name: string;
  price: number;
  isCarbonated?: boolean;
}

const beverage: Beverage = {
  id: 7,
  name: "Mojito",
  price: 15000,
  isCarbonated: true,
};

// ==============================
// 34-masala sharti
// ==============================
// Mohira onlayn o‘yin platformasiga yangi o‘yin qo‘shdi. Quyida obyekt berilgan, unga mos `OnlineGame` interfeysini yozing. O‘yinchilar xursand bo‘lsin 🕹️

interface OnlineGame {
  id: number;
  title: string;
  genre: string;
  playersOnline?: number;
}

const onlineGame: OnlineGame = {
  id: 50,
  title: "Battle Arena",
  genre: "Multiplayer",
  playersOnline: 1000,
};

// ==============================
// 35-masala sharti
// ==============================
// Anvar kino festivaliga yangi film qo‘shdi. Quyida obyekt berilgan, unga mos `FilmEntry` interfeysini yozing. Kinosevarlar xursand bo‘lsin 🎞

interface FilmEntry {
  id: number;
  title: string;
  director: string;
  category: string;
}

const filmEntry: FilmEntry = {
  id: 33,
  title: "Hayot yo‘li",
  director: "Zoir Xolmatov",
  category: "Drama",
};

// ==============================
// 36-masala sharti
// ==============================
// Zuhra onlayn jurnalga yangi maqola qo‘shdi. Quyida obyekt berilgan, unga mos `Feature` interfeysini yozing. O‘quvchilar xursand bo‘lsin ✍️

interface Feature {
  id: number;
  title: string;
  author: string;
  topic?: string;
}

const feature: Feature = {
  id: 22,
  title: "Yangi texnologiyalar",
  author: "Zuhra",
  topic: "Innovatsiyalar",
};

// ==============================
// 37-masala sharti
// ==============================
// Tohir sport musobaqalariga yangi musobaqa qo‘shdi. Quyida obyekt berilgan, unga mos `Competition` interfeysini yozing. Sportchilar xursand bo‘lsin 🏆

interface Competition {
  id: number;
  name: string;
  date: string;
  prizePool: number;
}

const competition: Competition = {
  id: 12,
  name: "Toshkent Marathon",
  date: "2025-09-10",
  prizePool: 5000000,
};

// ==============================
// 38-masala sharti
// ==============================
// Mavluda moda katalogiga yangi kiyim qo‘shdi. Quyida obyekt berilgan, unga mos `FashionItem` interfeysini yozing. Moda olami porlasin 🌟

interface FashionItem {
  id: number;
  name: string;
  brand: string;
  price: number;
}

const fashionItem: FashionItem = {
  id: 108,
  name: "Yozgi libos",
  brand: "Local Brand",
  price: 200000,
};

// ==============================
// 39-masala sharti
// ==============================
// Shavkat kutubxonaga yangi kitob sharhi qo‘shdi. Quyida obyekt berilgan, unga mos `BookReview` interfeysini yozing. O‘quvchilar xursand bo‘lsin 📝

interface BookReview {
  id: number;
  bookTitle: string;
  rating: number;
  comment?: string;
}

const bookReview: BookReview = {
  id: 9,
  bookTitle: "Boburnoma",
  rating: 9,
  comment: "Ajoyib tarixiy asar",
};

// ==============================
// 40-masala sharti
// ==============================
// Dilrabo sayohat rejalariga yangi reja qo‘shdi. Quyida obyekt berilgan, unga mos `Itinerary` interfeysini yozing. Sarguzashtlar boshlansin ✈️

interface Itinerary {
  id: number;
  destination: string;
  days: number;
  activities?: string;
}

const itinerary: Itinerary = {
  id: 6,
  destination: "Buxoro",
  days: 3,
  activities: "Tarixiy joylarni ziyorat",
};

// ==============================
// 41-masala sharti
// ==============================
// Kamola onlayn do‘konga yangi aksessuar qo‘shdi. Quyida obyekt berilgan, unga mos `Accessory` interfeysini yozing. Do‘kon porlasin 🛍️

interface Accessory {
  id: number;
  name: string;
  price: number;
  material?: string;
}

const accessory: Accessory = {
  id: 45,
  name: "Soat",
  price: 300000,
  material: "Zanglamas po‘lat",
};

// ==============================
// 42-masala sharti
// ==============================
// Shohzod o‘yin turnirlariga yangi turnir qo‘shdi. Quyida obyekt berilgan, unga mos `Tournament` interfeysini yozing. O‘yinchilar xursand bo‘lsin 🏆

interface Tournament {
  id: number;
  name: string;
  game: string;
  prize?: number;
}

const tournament: Tournament = {
  id: 14,
  name: "eSports League",
  game: "Dota 2",
  prize: 1000000,
};

// ==============================
// 43-masala sharti
// ==============================
// Gulbahor ta’lim dasturiga yangi imtihon qo‘shdi. Quyida obyekt berilgan, unga mos `Test` interfeysini yozing. Ta’lim sifati oshirila!

interface Test {
  id: number;
  subject: string;
  maxScore: number;
  date: string;
}

const test: Test = {
  id: 8,
  subject: "Matematika",
  maxScore: 100,
  date: "2025-07-01",
};

// ==============================
// 44-masala sharti
// ==============================
// Xurshida onlayn galereyaga yangi video qo‘shdi. Quyida obyekt berilgan, unga mos `VideoClip` interfeysini yozing. Tomoshabinlar xursand bo‘lsin 📹

interface VideoClip {
  id: number;
  title: string;
  duration: number;
  resolution?: string;
}

const videoClip: VideoClip = {
  id: 19,
  title: "Toshkent kechasi",
  duration: 300,
  resolution: "4K",
};

// ==============================
// 45-masala sharti
// ==============================
// O‘tkir sport jurnaliga yangi musobaqa natijasini qo‘shdi. Quyida obyekt berilgan, unga mos `Scoreboard` interfeysini yozing. Sport muxlislari xursand bo‘lsin 📊

interface Scoreboard {
  id: number;
  match: string;
  score: string;
  winner: string;
}

const scoreboard: Scoreboard = {
  id: 5,
  match: "Toshkent vs Samarqand",
  score: "3:2",
  winner: "Toshkent",
};

// ==============================
// 46-masala sharti
// ==============================
// Ma’suma moda blogiga yangi kiyim to‘plami qo‘shdi. Quyida obyekt berilgan, unga mos `Outfit` interfeysini yozing. Moda olami yorqinlashsin! 🌟

interface Outfit {
  id: number;
  name: string;
  price: number;
}

const outfit: Outfit = {
  id: 11,
  name: "Casual Look",
  price: 250000,
};

// ==============================
// 47-masala sharti
// ==============================
// Farhod kutubxonaga yangi kitob kategoriyasi qo‘shdi. Quyida obyekt berilgan, unga mos `Genre` interfeysini yozing. O‘quvchilar xursand bo‘lsin! 📖

interface Genre {
  id: number;
  name: string;
  description: string;
  popularity?: number;
}

const genre: Genre = {
  id: 3,
  name: "Fantastika",
  description: "Ilmiy fantastika asarlari",
  popularity: 85,
};

// ==============================
// 48-masala sharti
// ==============================
// Nargiza sayohat agentligiga yangi ekskursiya qo‘shdi. Quyida obyekt berilgan, unga mos `Excursion` interfeysini yozing. Sayyohlar xursand bo‘lsin! 🌍

interface Excursion {
  id: number;
  name: string;
  price: number;
  durationHours: number;
}

const excursion: Excursion = {
  id: 22,
  name: "Xiva ziyorati",
  price: 500000,
  durationHours: 8,
};

// ==============================
// 49-masala sharti
// ==============================
// Zafar kino saytiga yangi serial qo‘shdi. Quyida obyekt berilgan, unga mos `TVShow` interfeysini yozing. Tomoshabinlar xursand bo‘lsin! 🎬

interface TVShow {
  id: number;
  title: string;
  episodes: number;
  genre?: string;
}

const tvShow: TVShow = {
  id: 7,
  title: "Yangi asr",
  episodes: 24,
  genre: "Drama",
};

// ==============================
// 50-masala sharti
// ==============================
// Dilshoda onlayn do‘konga yangi mebel qo‘shdi. Quyida obyekt berilgan, unga mos `Furniture` interfeysini yozing. Do‘kon porlasin! 🏠

interface Furniture {
  id: number;
  name: string;
  price: number;
  material?: string;
}

const furniture = {
  id: 99,
  name: "Divan",
  price: 1500000,
  material: "Mato",
};
