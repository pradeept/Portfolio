import { MobileNavigation } from "@/components/interactive/mobile-navigation";
import { Diya } from "@/components/ui/diya";
import { DoodleArrow } from "@/components/ui/doodles";
import { navItems } from "@/lib/navigation";

export function Navbar() {
  return (
    <header className="shell top">
      <a className="brand" href="#top" aria-label="Pradeep Tarakar — home"><Diya /></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}{"arrow" in item ? <> <DoodleArrow /></> : null}
          </a>
        ))}
      </nav>
      <MobileNavigation />
    </header>
  );
}
