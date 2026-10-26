import Link from "next/link";
import { categories, demoProducts } from "@/lib/catalog";
export function generateStaticParams() { return categories.map(c => ({ slug: c.slug })); }
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const category = categories.find(c => c.slug === slug);
  if (!category) return <div className="simplePage wrap simpleContent"><h1>ক্যাটাগরি পাওয়া যায়নি</h1><Link href="/categories">সব ক্যাটাগরি</Link></div>;
  const products = demoProducts.filter(p => p.category === slug);
  return <main className="simplePage"><header className="simpleHeader"><Link className="brand" href="/"><span className="brandMark">E</span><span>Eco <b>Marks</b></span></Link><Link href="/categories">← সব ক্যাটাগরি</Link></header><div className="wrap simpleContent"><span className="categoryIcon bigIcon">{category.icon}</span><h1>{category.bn}</h1><p>{category.en}</p>{products.length ? <div className="productGrid">{products.map(p=><article className="productCard" key={p.id}><div className="productVisual"><span className="productEmoji">{p.emoji}</span></div><div className="productInfo"><h3>{p.nameBn}</h3><strong>৳{p.price}</strong><p>{p.descriptionBn}</p><Link className="addButton" href={`/products/${p.id}`}>বিস্তারিত</Link></div></article>)}</div> : <div className="emptyState"><span>🛍️</span><h2>এই ক্যাটাগরিতে এখনো পণ্য যোগ করা হয়নি</h2><p>এটি প্রাথমিক সংস্করণ। পণ্য তালিকা ডাটাবেজ ও Admin Panel-এর সঙ্গে সংযুক্ত করা হবে।</p><Link className="btn primary" href="/products">ডেমো পণ্য দেখুন</Link></div>}</div></main>;
}
