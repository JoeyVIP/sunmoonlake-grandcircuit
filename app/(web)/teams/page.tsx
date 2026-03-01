import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: '車隊車手 | 2028 日月潭環潭大賽車',
  description: '20+ 支國際車隊，來自台日韓港星泰馬菲等國，GT3 Pro & Am 級距頂尖車手',
};

export default function TeamsPage() {
  const gt3ProTeams = [
    { name: '寶島競速', nameEn: 'Formosa Racing', country: '台灣', car: 'Porsche 911 GT3 R' },
    { name: '福爾摩沙車隊', nameEn: 'Team Formosa', country: '台灣', car: 'Mercedes-AMG GT3' },
    { name: 'NEXUS Racing', nameEn: 'NEXUS Racing', country: '日本', car: 'Nissan Z GT3' },
    { name: 'Sakura Speed', nameEn: 'Sakura Speed', country: '日本', car: 'Toyota GR Supra GT3' },
    { name: 'Jade Dragon Motorsport', nameEn: 'Jade Dragon Motorsport', country: '香港', car: 'Ferrari 296 GT3' },
    { name: 'Seoul Velocity', nameEn: 'Seoul Velocity', country: '韓國', car: 'Hyundai GT3' },
    { name: 'Alpine Storm Racing', nameEn: 'Alpine Storm Racing', country: '法國', car: 'Alpine A110 GT3' },
    { name: 'Deutschland Motorsport', nameEn: 'Deutschland Motorsport', country: '德國', car: 'BMW M4 GT3' },
    { name: 'Monza Racing Team', nameEn: 'Monza Racing Team', country: '義大利', car: 'Lamborghini Huracán GT3' },
    { name: 'Thunder Down Under', nameEn: 'Thunder Down Under', country: '澳洲', car: 'Audi R8 LMS GT3' },
    { name: 'Bangkok Speed Demons', nameEn: 'Bangkok Speed Demons', country: '泰國', car: 'McLaren 720S GT3' },
    { name: 'Petronas Racing Malaysia', nameEn: 'Petronas Racing Malaysia', country: '馬來西亞', car: 'Mercedes-AMG GT3' },
  ];

  const gt3AmTeams = [
    { name: '台灣精銳車隊', nameEn: 'Taiwan Elite Racing', country: '台灣' },
    { name: '高雄賽車會', nameEn: 'Kaohsiung Racing Club', country: '台灣' },
    { name: '日本業餘車手聯盟', nameEn: 'Japan Gentleman Drivers', country: '日本' },
    { name: '香港賽車俱樂部', nameEn: 'Hong Kong Racing Club', country: '香港' },
    { name: '新加坡超跑聯盟', nameEn: 'Singapore Supercar League', country: '新加坡' },
    { name: '曼谷週末車手', nameEn: 'Bangkok Weekend Warriors', country: '泰國' },
    { name: '首爾賽道會', nameEn: 'Seoul Track Club', country: '韓國' },
    { name: '馬尼拉速度狂熱', nameEn: 'Manila Speed Fanatics', country: '菲律賓' },
  ];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-lake to-bg pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading mb-6">
            車隊車手
          </h1>
          <p className="text-xl sm:text-2xl text-mist max-w-3xl mx-auto">
            20+ 支國際車隊，來自亞洲與歐洲的頂尖賽車手
          </p>
        </div>
      </section>

      {/* GT3 Pro Teams */}
      <section className="py-16 lg:py-24 bg-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
              GT3 Pro
            </h2>
            <p className="text-xl text-text-muted">
              12 支職業車隊，代表亞歐頂尖實力
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gt3ProTeams.map((team, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-lake/50 to-bg border border-racing/20 rounded-xl p-6 hover:border-racing/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{team.name}</h3>
                    <p className="text-sm text-mist">{team.nameEn}</p>
                  </div>
                  <div className="text-2xl">🏁</div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-text-muted">
                    <span className="w-4 h-4 mr-2">🌍</span>
                    {team.country}
                  </div>
                  <div className="flex items-center text-text-muted">
                    <span className="w-4 h-4 mr-2">🏎️</span>
                    {team.car}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GT3 Am Teams */}
      <section className="py-16 lg:py-24 bg-lake/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading mb-4">
              GT3 Am
            </h2>
            <p className="text-xl text-text-muted">
              8 支業餘車隊，熱情與夢想的追逐
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gt3AmTeams.map((team, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-bg to-lake/30 border border-mist/20 rounded-xl p-6 hover:border-mist/50 transition-all"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-1">{team.name}</h3>
                  <p className="text-xs text-mist">{team.nameEn}</p>
                </div>
                <div className="text-sm text-text-muted flex items-center">
                  <span className="w-4 h-4 mr-2">🌍</span>
                  {team.country}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
