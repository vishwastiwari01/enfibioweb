'use client';

import Image from 'next/image';

const LinkedInIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const TwitterIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const NAV_LINKS = [
  { label: 'Home',       href: '#hero'       },
  { label: 'About',      href: '#about'      },
  { label: 'Products',   href: '#product'    },
  { label: 'Research',   href: '#technology' },
  { label: 'Milestones', href: '#milestones' },
  { label: 'Contact',    href: '#contact'    },
];

const SOCIAL = [
  { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: TwitterIcon,  href: 'https://twitter.com',  label: 'Twitter'  },
  { icon: YoutubeIcon,  href: 'https://youtube.com',  label: 'YouTube'  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#FAFCFB',
        borderTop: '1px solid #DDE8E5',
        paddingTop: '40px',
        paddingBottom: '32px',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8"
          style={{ borderBottom: '1px solid #DDE8E5' }}>

          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <Image
              src="/logo.jpeg"
              alt="Enfibio Technologies"
              width={120}
              height={36}
              className="object-contain"
              style={{ height: '36px', width: 'auto' }}
            />
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#647781',
              maxWidth: '280px',
              lineHeight: 1.6,
            }}>
              Engineering intelligent systems for a more resilient future.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map(link => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#647781',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#075E5A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#647781')}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center rounded-lg transition-all duration-200"
                style={{
                  width: '36px',
                  height: '36px',
                  background: '#F0F6F4',
                  border: '1px solid #DDE8E5',
                  color: '#647781',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = '#075E5A';
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                  (e.currentTarget as HTMLElement).style.borderColor = '#075E5A';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = '#F0F6F4';
                  (e.currentTarget as HTMLElement).style.color = '#647781';
                  (e.currentTarget as HTMLElement).style.borderColor = '#DDE8E5';
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9AAFBA' }}>
            © {new Date().getFullYear()} Enfibio Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#9AAFBA' }}>
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
