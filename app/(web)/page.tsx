import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import Link from 'next/link';

export default function HomePage() {
  const raceDate = '2028-10-20T09:00:00';

  const highlights = [
    {
      title: '33 公里',
      subtitle: '環湖賽道',
      description: '亞洲首場環湖公路賽車，18 個命名彎道，海拔變化 120 公尺',
      icon: '🏁',
    },
    {
      title: '20+',
      subtitle: '國際車隊',
      description: 'GT3 Pro & Am 級距，來自台日韓港星泰馬菲等國頂尖車隊',
      icon: '🏎️',
    },
    {
      title: '6 小時',
      subtitle: '耐力決戰',
      description: '2028 年 10 月 20-22 日，速度與寧靜的極致碰撞',
      icon: '⏱️',
    },
  ];

  const featuredCorners = [
    {
      number: 3,
      name: '文武廟之壁',
      nameEn: 'The Temple Wall',
      description: '緊貼文武廟石壁的高速右彎',
    },
    {
      number: 9,
      name: '邵族傳說彎',
      nameEn: 'Legend of Thao',
      description: '經過伊達邵部落的連續 S 彎',
    },
    {
      number: 14,
      name: '拉魯島之眼',
      nameEn: 'Eye of Lalu',
      description: '正對拉魯島的中速左彎',
    },
    {
      number: 17,
      name: '向山懸崖',
      nameEn: 'Xiangshan Cliff',
      description: '全賽道最危險也最壯觀',
    },
  ];

  const latestNews = [
    {
      title: '亞洲首場環湖公路賽車正式宣布',
      date: '2026-03-01',
      category: '賽事公告',
      excerpt: 'TIMSA 正式宣布 2028 年 10 月 20-22 日於日月潭舉辦首屆環潭大賽車...',
      slug: 'first-announcement',
    },
    {
      title: 'AURATEK 光鏈科技簽約冠名贊助',
      date: '2026-02-28',
      category: '賽事公告',
      excerpt: '台灣科技領導品牌 AURATEK 光鏈科技正式簽約成為冠名贊助商...',
      slug: 'auratek-sponsorship',
    },
    {
      title: '首批 12 支 GT3 Pro 車隊名單公布',
      date: '2026-02-25',
      category: '車隊消息',
      excerpt: '包括寶島競速、福爾摩沙車隊等台灣本土車隊，以及來自日韓港的國際勁旅...',
      slug: 'gt3-teams-announced',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-bg via-lake/20 to-bg">
        {/* Background Pattern */}
        <div className="absolute inset-0 hero-pattern opacity-20"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-racing/20 border border-racing/50 rounded-full text-racing text-sm font-bold mb-6">
              2028 年 10 月 20-22 日
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading mb-6 leading-tight">
            <span className="block text-white">2028 日月潭</span>
            <span className="block text-gradient">環潭大賽車</span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-mist font-bold mb-4">
            Sun Moon Lake Grand Circuit
          </p>

          <p className="text-lg sm:text-xl text-text-muted mb-12 max-w-2xl mx-auto">
            When Speed Meets Serenity
          </p>

          {/* Countdown */}
          <div className="mb-12">
            <CountdownTimer targetDate={raceDate} />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/tickets"
              className="px-8 py-4 bg-racing hover:bg-racing/80 text-white rounded-lg font-bold text-lg transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              立即購票
            </Link>
            <Link
              href="/circuit"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-bold text-lg transition-all w-full sm:w-auto"
            >
              探索賽道
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
            <div className="flex flex-col items-center text-text-muted">
              <div className="text-sm mb-2">向下探索</div>
              <div className="w-6 h-10 border-2 border-text-muted rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-text-muted rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-bg to-lake/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-lake/30 backdrop-blur-sm border border-racing/20 rounded-xl p-8 text-center hover:border-racing/50 transition-all transform hover:scale-105"
              >
                <div className="text-6xl mb-4">{highlight.icon}</div>
                <div className="text-4xl lg:text-5xl font-mono font-bold text-racing mb-2">
                  {highlight.title}
                </div>
                <div className="text-xl font-bold text-white mb-4">
                  {highlight.subtitle}
                </div>
                <p className="text-text-muted">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circuit Preview Section */}
      <section className="py-16 lg:py-24 bg-lake/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
              賽道亮點
            </h2>
            <p className="text-xl text-text-muted">
              33 公里環湖賽道 × 4 個命名彎道
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCorners.map((corner) => (
              <div
                key={corner.number}
                className="bg-gradient-to-br from-lake/50 to-bg border border-mist/20 rounded-xl p-6 hover:border-mist/50 transition-all"
              >
                <div className="text-6xl font-mono font-bold text-mist/30 mb-2">
                  T{corner.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {corner.name}
                </h3>
                <p className="text-sm text-mist mb-3">{corner.nameEn}</p>
                <p className="text-sm text-text-muted">{corner.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/circuit"
              className="inline-block px-8 py-4 bg-mist hover:bg-mist/80 text-bg rounded-lg font-bold text-lg transition-all"
            >
              查看完整賽道
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-lake/10 to-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading">
              最新消息
            </h2>
            <Link
              href="/news"
              className="text-racing hover:text-racing/80 font-bold transition-colors"
            >
              查看全部 →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <Link
                key={index}
                href={`/news/${news.slug}`}
                className="bg-lake/30 border border-lake rounded-xl overflow-hidden hover:border-racing/50 transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-racing bg-racing/20 px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                    <span className="text-xs text-text-muted">{news.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-racing transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-text-muted text-sm">{news.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 lg:py-24 bg-lake/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
              官方合作夥伴
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['AURATEK', 'Porsche', 'Ferrari', 'Mercedes-AMG', 'Nissan', 'Toyota', 'BMW', 'McLaren'].map(
              (sponsor, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 flex items-center justify-center hover:border-racing/50 transition-all"
                >
                  <div className="text-2xl font-bold text-text-muted">
                    {sponsor}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
