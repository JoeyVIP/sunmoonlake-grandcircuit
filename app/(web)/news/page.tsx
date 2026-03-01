import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: '新聞中心 | 2028 日月潭環潭大賽車',
};

export default function NewsPage() {
  const news = [
    {
      title: '亞洲首場環湖公路賽車正式宣布',
      date: '2026-03-01',
      category: '賽事公告',
      excerpt: 'TIMSA 正式宣布 2028 年 10 月 20-22 日於日月潭舉辦首屆環潭大賽車，預計吸引 20+ 支國際車隊參賽...',
      slug: 'first-announcement',
    },
    {
      title: 'AURATEK 光鏈科技簽約冠名贊助',
      date: '2026-02-28',
      category: '賽事公告',
      excerpt: '台灣科技領導品牌 AURATEK 光鏈科技正式簽約成為冠名贊助商，展現對台灣賽車運動的支持...',
      slug: 'auratek-sponsorship',
    },
    {
      title: '首批 12 支 GT3 Pro 車隊名單公布',
      date: '2026-02-25',
      category: '車隊消息',
      excerpt: '包括寶島競速、福爾摩沙車隊等台灣本土車隊，以及來自日韓港的國際勁旅確認參賽...',
      slug: 'gt3-teams-announced',
    },
  ];

  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-bg pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-12 text-center">
            新聞中心
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="bg-lake/30 border border-lake rounded-xl p-6 hover:border-racing/50 transition-all"
              >
                <div className="mb-3">
                  <span className="text-xs font-bold text-racing bg-racing/20 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-text-muted ml-3">{item.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-3">{item.title}</h2>
                <p className="text-text-muted text-sm">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
