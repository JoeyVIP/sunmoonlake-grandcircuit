import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '購票資訊 | 2028 日月潭環潭大賽車',
  description: '2028 日月潭環潭大賽車購票資訊，一般入場券、VIP 觀賽席、湖景貴賓包廂',
};

export default function TicketsPage() {
  const ticketTiers = [
    {
      name: '一般入場券',
      price: {
        threeDay: 'NT$ 3,600',
        singleDay: 'NT$ 1,500',
      },
      features: [
        '一般觀眾席',
        'Fan Zone 進場',
        '賽事手冊',
        '官方紀念徽章',
      ],
      popular: false,
    },
    {
      name: 'VIP 觀賽席',
      price: {
        threeDay: 'NT$ 12,000',
        singleDay: null,
      },
      features: [
        '指定觀賽席位',
        'VIP 休息區',
        '全日餐飲服務',
        'Pit Lane Walk 優先通道',
        '賽事紀念品套裝',
        '專屬停車位',
      ],
      popular: true,
    },
    {
      name: '湖景貴賓包廂',
      nameEn: 'Sun Moon Lake Premium Box',
      price: {
        threeDay: 'NT$ 38,000',
        singleDay: null,
      },
      features: [
        '湖景包廂座位（正對 Turn 14 拉魯島之眼）',
        '全程餐飲酒水無限供應',
        '專屬接駁服務',
        '車手見面會邀請',
        '限量簽名紀念品',
        'Pit Lane Walk VIP 導覽',
      ],
      popular: false,
    },
  ];

  const earlyBird = {
    deadline: '2028 年 6 月 30 日',
    discount: '8 折',
  };

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-lake to-bg pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-6">
            購票資訊
          </h1>
          <p className="text-xl sm:text-2xl text-mist max-w-3xl mx-auto">
            立即購票，成為亞洲首場環湖賽車的見證者
          </p>
          <div className="mt-6 inline-block px-6 py-3 bg-racing/20 border border-racing/50 rounded-full text-racing font-bold">
            🎉 早鳥優惠：{earlyBird.deadline} 前購票享 {earlyBird.discount}
          </div>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section className="py-16 lg:py-24 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ticketTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-lake/50 to-bg border rounded-xl p-8 ${
                  tier.popular
                    ? 'border-racing shadow-xl shadow-racing/20 scale-105'
                    : 'border-lake/50'
                } hover:border-racing/50 transition-all`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-1 bg-racing text-white text-sm font-bold rounded-full">
                    最受歡迎
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  {tier.nameEn && (
                    <p className="text-sm text-mist">{tier.nameEn}</p>
                  )}
                </div>

                <div className="mb-8">
                  <div className="mb-4">
                    <div className="text-4xl font-mono font-bold text-racing mb-1">
                      {tier.price.threeDay}
                    </div>
                    <div className="text-sm text-text-muted">三日通票</div>
                  </div>
                  {tier.price.singleDay && (
                    <div>
                      <div className="text-2xl font-mono font-bold text-mist">
                        {tier.price.singleDay}
                      </div>
                      <div className="text-sm text-text-muted">單日票</div>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-racing mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                  tier.popular
                    ? 'bg-racing hover:bg-racing/80 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                }`}>
                  立即購買
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16 bg-lake/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
              購票須知
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-bg/50 border border-lake rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🎫</span>
                票券說明
              </h3>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>• 三日通票可進場 10/20-10/22 三天</li>
                <li>• 單日票需於購買時選擇日期</li>
                <li>• 12 歲以下兒童免費（需成人陪同）</li>
                <li>• 票券一經售出，恕不退換</li>
              </ul>
            </div>

            <div className="bg-bg/50 border border-lake rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">📍</span>
                入場方式
              </h3>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>• 購票後將收到電子票券 QR Code</li>
                <li>• 入場時出示 QR Code 掃描即可</li>
                <li>• 建議提前 30 分鐘抵達會場</li>
                <li>• VIP 票券另有專屬入口</li>
              </ul>
            </div>

            <div className="bg-bg/50 border border-lake rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">⚠️</span>
                注意事項
              </h3>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>• 禁止攜帶危險物品與寵物</li>
                <li>• 場內禁止吸菸（設有吸菸區）</li>
                <li>• 建議攜帶防曬用品與飲用水</li>
                <li>• 遇天災等不可抗力因素將另行通知</li>
              </ul>
            </div>

            <div className="bg-bg/50 border border-lake rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">🎁</span>
                周邊優惠
              </h3>
              <ul className="space-y-2 text-text-muted text-sm">
                <li>• 憑票根享合作飯店住宿優惠</li>
                <li>• Fan Zone 消費滿額送紀念品</li>
                <li>• 官方商品區購物 9 折</li>
                <li>• 官方接駁車免費搭乘</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
