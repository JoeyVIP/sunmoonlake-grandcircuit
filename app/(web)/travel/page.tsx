import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '交通住宿 | 2028 日月潭環潭大賽車',
};

export default function TravelPage() {
  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-bg pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-6 text-center">
            交通住宿
          </h1>
          <p className="text-xl text-text-muted text-center mb-12 max-w-2xl mx-auto">
            完善的交通接駁與住宿選擇，讓您輕鬆抵達賽事現場
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-lake/30 border border-lake rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-racing">交通方式</h2>
              <div className="space-y-4 text-text-muted">
                <p><strong className="text-white">從台北：</strong>高鐵至台中站（約 50 分鐘）→ 官方接駁車至日月潭（約 90 分鐘）</p>
                <p><strong className="text-white">從台中：</strong>官方接駁車直達（約 90 分鐘）</p>
                <p><strong className="text-white">從高雄：</strong>高鐵至台中站（約 35 分鐘）→ 官方接駁車</p>
                <p className="pt-4 border-t border-lake"><strong className="text-racing">官方接駁車：</strong>台中高鐵站 ↔ 日月潭，賽事期間每 30 分鐘一班，憑入場券免費搭乘</p>
              </div>
            </div>

            <div className="bg-lake/30 border border-lake rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-mist">合作飯店</h2>
              <ul className="space-y-3 text-text-muted">
                <li>• 日月潭雲品溫泉酒店 — 五星，步行至觀眾席 10 分鐘</li>
                <li>• 涵碧樓 — 頂級，湖景套房可遠眺賽道</li>
                <li>• 日月潭晶澤會館 — 精品，靠近水社碼頭</li>
                <li>• 經典大飯店 — 商務，賽事優惠價</li>
                <li>• 力麗儷山林會館 — 度假型，家庭友善</li>
                <li>• 向山露營場 — 賽事期間特別開放，限量 200 帳</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
