import Link from 'next/link';

export default function Footer() {
  const quickLinks = [
    { name: '賽事資訊', href: '/race' },
    { name: '賽道介紹', href: '/circuit' },
    { name: '車隊車手', href: '/teams' },
    { name: '購票', href: '/tickets' },
  ];

  const support = [
    { name: '交通住宿', href: '/travel' },
    { name: 'Fan Zone', href: '/fanzone' },
    { name: '新聞中心', href: '/news' },
    { name: '關於我們', href: '/about' },
  ];

  const social = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'YouTube', href: '#' },
    { name: 'X', href: '#' },
  ];

  return (
    <footer className="bg-lake text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="text-racing text-3xl font-heading mb-4">SML</div>
            <h3 className="text-xl font-bold mb-2">2028 日月潭環潭大賽車</h3>
            <p className="text-text-muted text-sm mb-4">
              Sun Moon Lake Grand Circuit
            </p>
            <p className="text-sm text-text-muted">
              When Speed Meets Serenity
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">快速連結</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">活動資訊</h4>
            <ul className="space-y-2">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">追蹤我們</h4>
            <div className="flex space-x-4 mb-6">
              {social.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  className="text-text-muted hover:text-racing transition-colors"
                  aria-label={platform.name}
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-racing/20">
                    {platform.name[0]}
                  </div>
                </a>
              ))}
            </div>
            <p className="text-sm text-text-muted">
              主辦單位：台灣國際賽車運動協會 (TIMSA)
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-text-muted">
              © 2028 Sun Moon Lake Grand Circuit. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-text-muted">
              <Link href="#" className="hover:text-white transition-colors">
                隱私權政策
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                使用條款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
