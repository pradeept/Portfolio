import { MobileNavigation } from '@/components/interactive/mobile-navigation';
import { Diya } from '@/components/ui/diya';
import { DoodleArrow } from '@/components/ui/doodles';
import { navItems } from '@/lib/navigation';
import { analyticsAttributes } from '@/lib/analytics';

export function Navbar() {
  return (
    <header className="shell top">
      <a
        className="brand"
        href="#top"
        aria-label="Pradeep Tarakar — home"
        {...analyticsAttributes('navigation_clicked', {
          location: 'header_brand',
          section: 'top',
          destination: '#top',
        })}
      >
        <Diya />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            {...analyticsAttributes('navigation_clicked', {
              location: 'desktop_navigation',
              section: item.href.slice(1),
              destination: item.href,
            })}
          >
            {item.label}
            {'arrow' in item ? (
              <>
                {' '}
                <DoodleArrow />
              </>
            ) : null}
          </a>
        ))}
      </nav>
      <MobileNavigation />
    </header>
  );
}
