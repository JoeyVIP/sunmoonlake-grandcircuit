import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '關於我們 | 2028 日月潭環潭大賽車',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-bg pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-12 text-center">
            關於 TIMSA
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-lake/30 border border-lake rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-racing">台灣國際賽車運動協會</h2>
              <p className="text-text-muted mb-4">
                台灣國際賽車運動協會（TIMSA, Taiwan International Motorsport Association）成立於 2024 年，由前 FIA 亞洲區委員陳泰安與台灣企業界人士共同創立。
              </p>
              <p className="text-text-muted">
                我們的使命是推動台灣賽車運動發展，將台灣的美麗風景與賽車熱情結合，打造世界級的賽車賽事。
              </p>
            </div>

            <div className="bg-lake/30 border border-lake rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-mist">願景宣言</h2>
              <ul className="space-y-3 text-text-muted list-none">
                <li className="flex items-start">
                  <span className="text-racing mr-3">•</span>
                  <span>讓世界看見台灣的速度</span>
                </li>
                <li className="flex items-start">
                  <span className="text-racing mr-3">•</span>
                  <span>讓速度看見台灣的美</span>
                </li>
                <li className="flex items-start">
                  <span className="text-racing mr-3">•</span>
                  <span>讓美成為台灣的新名片</span>
                </li>
              </ul>
            </div>

            <div className="bg-lake/30 border border-lake rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-racing">永續承諾</h2>
              <ul className="space-y-3 text-text-muted list-none">
                <li className="flex items-start">
                  <span className="text-racing mr-3">✓</span>
                  <span>2028 年賽事達成碳中和認證</span>
                </li>
                <li className="flex items-start">
                  <span className="text-racing mr-3">✓</span>
                  <span>賽道工程零永久地貌改變</span>
                </li>
                <li className="flex items-start">
                  <span className="text-racing mr-3">✓</span>
                  <span>所有臨時設施使用可回收材料</span>
                </li>
                <li className="flex items-start">
                  <span className="text-racing mr-3">✓</span>
                  <span>賽事收益 5% 捐贈日月潭生態保育基金</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
