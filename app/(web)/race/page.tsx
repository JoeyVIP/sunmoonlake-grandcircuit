import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '賽事資訊 | 2028 日月潭環潭大賽車',
  description: '2028 年 10 月 20-22 日，日月潭環湖賽道，GT3 Pro & Am 級距 + SML-E 電動方程式',
};

export default function RacePage() {
  const schedule = [
    {
      day: 'Day 1',
      date: '10/20 週五',
      events: [
        { time: '09:00-10:30', name: 'GT3 Pro 自由練習賽 1' },
        { time: '11:00-12:00', name: 'GT3 Am 自由練習賽 1' },
        { time: '14:00-15:30', name: 'GT3 Pro 自由練習賽 2' },
        { time: '16:00-17:00', name: 'GT3 Am 自由練習賽 2' },
        { time: '18:00-19:00', name: 'GT3 Pro 資格排位賽' },
        { time: '19:30-20:15', name: 'GT3 Am 資格排位賽' },
      ],
    },
    {
      day: 'Day 2',
      date: '10/21 週六',
      events: [
        { time: '10:00-11:30', name: 'GT3 衝刺賽' },
        { time: '13:00-14:00', name: 'SML-E 電動方程式表演賽' },
        { time: '15:00-16:00', name: '車迷互動時段 (Pit Lane Walk)' },
        { time: '18:30-19:30', name: '日月潭夜間點燈儀式 + 光雕秀' },
      ],
    },
    {
      day: 'Day 3',
      date: '10/22 週日',
      events: [
        { time: '08:00-08:30', name: '暖胎圈' },
        { time: '09:00-15:00', name: '主賽事：6 小時耐力賽' },
        { time: '15:30', name: '頒獎典禮' },
        { time: '16:00-17:00', name: '賽後車迷見面會' },
      ],
    },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-lake to-bg pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-6">
            賽事資訊
          </h1>
          <p className="text-xl sm:text-2xl text-mist max-w-3xl mx-auto mb-6">
            2028 年 10 月 20-22 日
          </p>
          <p className="text-lg text-text-muted">
            亞洲首場環湖公路賽車 · GT3 級距 + 電動方程式
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 lg:py-24 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
              賽事時程
            </h2>
            <p className="text-xl text-text-muted">
              三天精彩賽事，從練習賽到 6 小時耐力決戰
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {schedule.map((day, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-lake/50 to-bg border border-lake rounded-xl p-8"
              >
                <div className="mb-6">
                  <div className="text-racing font-mono font-bold text-lg mb-1">
                    {day.day}
                  </div>
                  <h3 className="text-2xl font-bold">{day.date}</h3>
                </div>

                <div className="space-y-4">
                  {day.events.map((event, idx) => (
                    <div
                      key={idx}
                      className="flex items-start border-l-2 border-mist/30 pl-4 py-2 hover:border-mist transition-colors"
                    >
                      <div className="flex-shrink-0 font-mono text-sm text-mist w-32">
                        {event.time}
                      </div>
                      <div className="text-sm text-text-muted">{event.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Race Format */}
      <section className="py-16 lg:py-24 bg-lake/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
              賽事規則
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-bg/50 border border-lake rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-racing">GT3 Pro</h3>
              <ul className="space-y-3 text-text-muted">
                <li>• 12 支車隊參賽</li>
                <li>• 每隊 2-3 位車手</li>
                <li>• 主賽事 6 小時耐力賽</li>
                <li>• 強制進站換胎至少 2 次</li>
                <li>• 車手輪替至少 2 次</li>
              </ul>
            </div>

            <div className="bg-bg/50 border border-lake rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-mist">GT3 Am</h3>
              <ul className="space-y-3 text-text-muted">
                <li>• 8 支車隊參賽</li>
                <li>• 業餘車手組別</li>
                <li>• 週六衝刺賽 (90 分鐘)</li>
                <li>• 週日與 GT3 Pro 同場競技</li>
                <li>• 獨立組別計分</li>
              </ul>
            </div>

            <div className="bg-bg/50 border border-lake rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-racing">SML-E 電動方程式</h3>
              <ul className="space-y-3 text-text-muted">
                <li>• 8 位邀請車手</li>
                <li>• 統一車種：AURATEK E-Racer Mk.1</li>
                <li>• 週六表演賽 (60 分鐘)</li>
                <li>• 展示電動賽車未來</li>
              </ul>
            </div>

            <div className="bg-bg/50 border border-lake rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-mist">計分方式</h3>
              <ul className="space-y-3 text-text-muted">
                <li>• 週六衝刺賽：前 8 名計分</li>
                <li>• 週日耐力賽：前 10 名計分</li>
                <li>• 冠軍：總積分最高者</li>
                <li>• Pole Position 獎勵 1 分</li>
                <li>• Fastest Lap 獎勵 1 分</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
