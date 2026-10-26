import Link from "next/link";
import { categories, demoProducts } from "@/lib/catalog";
export function generateStaticParams() { return demoProducts.map(p => ({ id: p.id })); }
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
 const { id } = await params; const p = demoProducts.find(item => item.id === id);
 if (!p) return <main className="simplePage wrap simpleContent"><h1>পণ্য পাওয়া যায়নি</h1><Link href="/products">সব পণ্য</Link></main>;
 return <main className="simplePage"><header className="simpleHeader"><Link className="brand" href="/"><span className="brandMark">E</span><span>Eco <b>Marks</b></span></Link><Link href="/products">← সব পণ্য</Link></header><div className="wrap detailGrid"><div className="detailVisual">{p.emoji}</div><div className="detailInfo"><small className="eyebrow">{categories.find(c=>c.slug===p.category)?.bn}</small><h1>{p.nameBn}</h1><div className="rating">★ {p.rating} <span>({p.reviews}টি রিভিউ)</span></div><div className="detailPrice">৳{p.price.toLocaleString("en-US")} {p.oldPrice&&<del>৳{p.oldPrice.toLocaleString("en-US")}</del>}</div><p>{p.descriptionBn}</p><div className="metricRow"><div><small>স্টক</small><b>{p.stock}</b></div><div><small>বিক্রি হয়েছে</small><b>{p.sold}</b></div><div><small>ক্রেতার রেটিং</small><b>{p.rating}/5</b></div></div><div className="notice">ডেমো সংস্করণ: এই মুহূর্তে অর্ডার জমা বা পেমেন্ট সম্পন্ন হয় না। Checkout ও অর্ডার ডাটাবেজ সংযোগ পরের ধাপে যুক্ত হবে।</div><Link className="btn primary" href="/cart">কার্ট ও চেকআউট (ডেমো)</Link></div></div></main>;
}
