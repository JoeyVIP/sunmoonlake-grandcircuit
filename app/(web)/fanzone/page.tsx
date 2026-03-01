import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Fan Zone | 2028 日月潭環潭大賽車',
};

export default function FanzonePage() {
  const activities = [
    { name: '日月潭美食市集', desc: '南投在地特色小吃與精釀啤酒', icon: '🍜' },
    { name: '賽車模擬器體驗', desc: 'VR 跑一圈日月潭賽道', icon: '🎮' },
    { name: '車廠展示區', desc: 'Porsche、Ferrari、Mercedes-AMG 原廠展車', icon: '🏎️' },
    { name: '兒童賽車學院', desc: '6-12 歲兒童電動卡丁車體驗', icon: '👶' },
    { name: '夜間湖畔光雕秀', desc: '結合賽事主題的日月潭水幕投影', icon: '✨' },
    { name: '邵族文化展演', desc: '原住民傳統歌舞與工藝體驗', icon: '🎭' },
  ];

  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-bg pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-6 text-center">
            Fan Zone
          </h1>
          <p className="text-xl text-text-muted text-center mb-12 max-w-2xl mx-auto">
            不只是賽車，更是一場文化與美食的盛宴
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-lake/50 to-bg border border-mist/20 rounded-xl p-8 hover:border-mist/50 transition-all"
              >
                <div className="text-5xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold mb-3">{activity.name}</h3>
                <p className="text-text-muted">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
