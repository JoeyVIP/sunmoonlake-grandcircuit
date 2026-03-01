import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '賽道介紹 | 2028 日月潭環潭大賽車',
  description: '33 公里日月潭環湖賽道，18 個命名彎道，海拔變化 120 公尺，4 個經典賽道彎角',
};

export default function CircuitPage() {
  const trackStats = [
    { label: '賽道全長', value: '33 公里' },
    { label: '海拔變化', value: '120 公尺' },
    { label: '彎道總數', value: '18 個' },
    { label: 'DRS 區段', value: '2 段' },
  ];

  const corners = [
    {
      number: 3,
      name: '文武廟之壁',
      nameEn: 'The Temple Wall',
      description: '緊貼文武廟石壁的高速右彎，車手需要極高的精準度與勇氣，一邊是堅硬的石壁，另一邊是深不見底的湖水。這個彎道是全賽道最考驗膽識的路段之一。',
      type: '高速右彎',
      difficulty: '極高',
    },
    {
      number: 9,
      name: '邵族傳說彎',
      nameEn: 'Legend of Thao',
      description: '經過伊達邵部落的連續 S 彎，彎道設計靈感來自邵族傳說中的白鹿足跡。車手需要在快速的節奏變換中保持車身平衡，這裡也是最容易發生多車事故的區域。',
      type: '連續 S 彎',
      difficulty: '高',
    },
    {
      number: 14,
      name: '拉魯島之眼',
      nameEn: 'Eye of Lalu',
      description: '正對拉魯島的中速左彎，觀眾席經典攝影點。這個彎道的出彎速度直接影響後續長直線的表現，是超車的絕佳位置。夕陽時分，賽車與拉魯島的剪影構成最美的畫面。',
      type: '中速左彎',
      difficulty: '中',
    },
    {
      number: 17,
      name: '向山懸崖',
      nameEn: 'Xiangshan Cliff',
      description: '向山遊客中心前的高速複合彎，全賽道最危險也最壯觀的路段。入彎時速可達 200 公里，需要在極短時間內完成減速、入彎、加速三個動作。這裡誕生過無數經典超車，也見證過許多驚險瞬間。',
      type: '高速複合彎',
      difficulty: '極高',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-lake to-bg pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-6">
            賽道介紹
          </h1>
          <p className="text-xl sm:text-2xl text-mist max-w-3xl mx-auto">
            33 公里環湖賽道，當台灣最美的湖泊化身為亞洲最具挑戰性的賽道
          </p>
        </div>
      </section>

      {/* Track Stats */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trackStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-6xl font-mono font-bold text-racing mb-2">
                  {stat.value}
                </div>
                <div className="text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Famous Corners */}
      <section className="py-16 lg:py-24 bg-lake/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
              四大命名彎道
            </h2>
            <p className="text-xl text-text-muted">
              每個彎道都有自己的故事與挑戰
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {corners.map((corner) => (
              <div
                key={corner.number}
                className="bg-gradient-to-br from-lake/50 to-bg border border-mist/20 rounded-xl p-8 hover:border-mist/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-5xl font-mono font-bold text-mist/30 mb-2">
                      Turn {corner.number}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {corner.name}
                    </h3>
                    <p className="text-mist mb-2">{corner.nameEn}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-muted mb-1">{corner.type}</div>
                    <div className={`text-xs font-bold px-3 py-1 rounded-full ${
                      corner.difficulty === '極高' ? 'bg-racing/20 text-racing' : 'bg-mist/20 text-mist'
                    }`}>
                      {corner.difficulty}難度
                    </div>
                  </div>
                </div>
                <p className="text-text-muted leading-relaxed">{corner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circuit Features */}
      <section className="py-16 lg:py-24 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
              賽道特色
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-lake/30 border border-lake rounded-xl p-8">
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className="text-xl font-bold mb-3">海拔變化</h3>
              <p className="text-text-muted">
                120 公尺的海拔變化讓車手需要不斷調整煞車點與油門控制，增加了賽道的技術挑戰性。
              </p>
            </div>

            <div className="bg-lake/30 border border-lake rounded-xl p-8">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold mb-3">環湖公路</h3>
              <p className="text-text-muted">
                利用日月潭環湖公路改造而成，保留原有的自然地貌，讓賽道與環境完美融合。
              </p>
            </div>

            <div className="bg-lake/30 border border-lake rounded-xl p-8">
              <div className="text-4xl mb-4">🏁</div>
              <h3 className="text-xl font-bold mb-3">FIA 認證</h3>
              <p className="text-text-muted">
                通過 FIA（國際汽車聯盟）安全認證，符合國際賽事標準，可舉辦 GT3 級距賽事。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
