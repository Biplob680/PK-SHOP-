export type Category = { slug: string; bn: string; en: string; icon: string };
export type Product = {
  id: string; nameBn: string; nameEn: string; category: string;
  price: number; oldPrice?: number; stock: number; sold: number;
  rating: number; reviews: number; emoji: string; descriptionBn: string; descriptionEn: string;
};

export const categories: Category[] = [
  { slug: "mobile-electronics", bn: "মোবাইল ও ইলেকট্রনিক্স", en: "Mobiles & Electronics", icon: "📱" },
  { slug: "computers", bn: "কম্পিউটার ও ল্যাপটপ", en: "Computers & Laptops", icon: "💻" },
  { slug: "tv-appliances", bn: "টিভি ও হোম অ্যাপ্লায়েন্স", en: "TV & Home Appliances", icon: "📺" },
  { slug: "kitchen", bn: "রান্নাঘর ও ডাইনিং", en: "Kitchen & Dining", icon: "🍳" },
  { slug: "mens-fashion", bn: "পুরুষদের পোশাক ও জুতা", en: "Men's Fashion & Shoes", icon: "👔" },
  { slug: "womens-fashion", bn: "নারীদের পোশাক ও জুতা", en: "Women's Fashion & Shoes", icon: "👗" },
  { slug: "kids-baby", bn: "শিশু ও বেবি কেয়ার", en: "Kids & Baby Care", icon: "🧸" },
  { slug: "pets", bn: "পোষা প্রাণী ও বিড়ালের পণ্য", en: "Pets & Cat Supplies", icon: "🐈" },
  { slug: "bathroom", bn: "বাথরুম ও ব্যক্তিগত পরিচর্যা", en: "Bathroom & Personal Care", icon: "🧴" },
  { slug: "fans-lights", bn: "ফ্যান, লাইট ও ইলেকট্রিক", en: "Fans, Lights & Electrical", icon: "💡" },
  { slug: "home-furniture", bn: "ঘর, আসবাব ও ডেকোরেশন", en: "Home, Furniture & Decor", icon: "🛋️" },
  { slug: "grocery", bn: "মুদি ও নিত্যপ্রয়োজনীয়", en: "Grocery & Essentials", icon: "🛒" },
  { slug: "fresh-frozen", bn: "ফ্রেশ ও ফ্রোজেন খাবার", en: "Fresh & Frozen Food", icon: "🥦" },
  { slug: "beauty", bn: "বিউটি ও স্কিনকেয়ার", en: "Beauty & Skincare", icon: "✨" },
  { slug: "sports", bn: "খেলাধুলা ও ফিটনেস", en: "Sports & Fitness", icon: "⚽" },
  { slug: "automotive", bn: "গাড়ি, মোটরসাইকেল ও যন্ত্রাংশ", en: "Automotive & Parts", icon: "🏍️" },
  { slug: "tools-hardware", bn: "হার্ডওয়্যার ও টুলস", en: "Hardware & Tools", icon: "🛠️" },
  { slug: "construction", bn: "নির্মাণ ও স্যানিটারি", en: "Construction & Sanitary", icon: "🚿" },
  { slug: "books-office", bn: "বই, স্টেশনারি ও অফিস", en: "Books, Stationery & Office", icon: "📚" },
  { slug: "toys", bn: "খেলনা ও শিশুদের বিনোদন", en: "Toys & Kids' Entertainment", icon: "🚂" },
  { slug: "watches-accessories", bn: "ঘড়ি, গয়না ও ফ্যাশন অ্যাক্সেসরিজ", en: "Watches, Jewelry & Accessories", icon: "⌚" },
  { slug: "music", bn: "মিউজিক ও বাদ্যযন্ত্র", en: "Music & Instruments", icon: "🎸" },
  { slug: "gaming", bn: "গেমিং", en: "Gaming", icon: "🎮" },
  { slug: "bags-travel", bn: "ব্যাগ, লাগেজ ও ট্রাভেল", en: "Bags, Luggage & Travel", icon: "🎒" },
  { slug: "garden-agri", bn: "বাগান, কৃষি ও গাছপালা", en: "Garden, Agriculture & Plants", icon: "🌱" },
  { slug: "other-pets", bn: "পাখি, মাছ ও অন্যান্য পোষা প্রাণী", en: "Birds, Fish & Other Pets", icon: "🐠" },
  { slug: "health-devices", bn: "স্বাস্থ্য ও মেডিকেল ডিভাইস", en: "Health & Medical Devices", icon: "🩺" },
  { slug: "cleaning-laundry", bn: "পরিষ্কার-পরিচ্ছন্নতা ও লন্ড্রি", en: "Cleaning & Laundry", icon: "🧹" },
  { slug: "religious-gifts", bn: "ধর্মীয় পণ্য ও উপহার", en: "Religious Items & Gifts", icon: "🎁" },
  { slug: "party-events", bn: "পার্টি ও ইভেন্ট সামগ্রী", en: "Party & Event Supplies", icon: "🎉" },
  { slug: "power-energy", bn: "পাওয়ার, IPS, UPS ও সোলার", en: "Power, UPS & Solar", icon: "🔋" },
  { slug: "mother-care", bn: "মাতৃত্ব ও মায়ের যত্ন", en: "Maternity & Mother Care", icon: "🤱" },
  { slug: "handmade-eco", bn: "হ্যান্ডমেড ও পরিবেশবান্ধব", en: "Handmade & Eco-friendly", icon: "♻️" },
  { slug: "fabric-sewing", bn: "কাপড়, সেলাই ও ক্রাফট", en: "Fabric, Sewing & Crafts", icon: "🧵" },
  { slug: "industrial-safety", bn: "ইন্ডাস্ট্রিয়াল ও সেফটি পণ্য", en: "Industrial & Safety Supplies", icon: "🦺" },
  { slug: "digital-gifts", bn: "ডিজিটাল পণ্য ও গিফট কার্ড", en: "Digital Products & Gift Cards", icon: "💳" }
];

export const demoProducts: Product[] = [
  { id: "p-1001", nameBn: "স্মার্টফোন (ডেমো পণ্য)", nameEn: "Smartphone (Demo Product)", category: "mobile-electronics", price: 12990, oldPrice: 14990, stock: 18, sold: 42, rating: 4.7, reviews: 12, emoji: "📱", descriptionBn: "এটি ডেমো পণ্য। আসল পণ্য যোগ করতে Admin Panel ব্যবহার করুন।", descriptionEn: "This is a demo item. Add real products through the admin panel." },
  { id: "p-1002", nameBn: "নন-স্টিক ফ্রাইপ্যান", nameEn: "Non-stick Frying Pan", category: "kitchen", price: 850, oldPrice: 990, stock: 32, sold: 26, rating: 4.5, reviews: 8, emoji: "🍳", descriptionBn: "দৈনন্দিন রান্নার জন্য ব্যবহারিক ফ্রাইপ্যান।", descriptionEn: "A practical frying pan for everyday cooking." },
  { id: "p-1003", nameBn: "বিড়ালের খেলনা সেট", nameEn: "Cat Toy Set", category: "pets", price: 320, stock: 24, sold: 17, rating: 4.8, reviews: 6, emoji: "🐈", descriptionBn: "পোষা বিড়ালের খেলার জন্য খেলনা সেট।", descriptionEn: "A toy set for your pet cat." },
  { id: "p-1004", nameBn: "LED ডেস্ক লাইট", nameEn: "LED Desk Light", category: "fans-lights", price: 590, oldPrice: 690, stock: 41, sold: 35, rating: 4.4, reviews: 10, emoji: "💡", descriptionBn: "পড়াশোনা ও কাজের জন্য LED ডেস্ক লাইট।", descriptionEn: "An LED desk light for studying and work." },
  { id: "p-1005", nameBn: "পুরুষদের ক্যাজুয়াল টি-শার্ট", nameEn: "Men's Casual T-shirt", category: "mens-fashion", price: 450, stock: 50, sold: 31, rating: 4.3, reviews: 9, emoji: "👕", descriptionBn: "আরামদায়ক দৈনন্দিন ক্যাজুয়াল টি-শার্ট।", descriptionEn: "A comfortable everyday casual T-shirt." },
  { id: "p-1006", nameBn: "বেবি সফট টয়", nameEn: "Baby Soft Toy", category: "kids-baby", price: 390, stock: 14, sold: 12, rating: 4.6, reviews: 5, emoji: "🧸", descriptionBn: "শিশুদের জন্য নরম খেলনা। কেনার আগে বয়স-উপযোগিতা যাচাই করুন।", descriptionEn: "A soft toy for children. Check age suitability before purchase." }
];
