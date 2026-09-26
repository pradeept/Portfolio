import { DoodleArrow, DoodleSpark } from "@/components/ui/doodles";
import { ContactLinks } from "@/components/portfolio/contact-links";

export function ContactSection() {
  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="shell">
        <div className="postcard connect-card reveal">
          <span className="mono">06 / Connect</span>
          <div className="postage" aria-hidden="true">
            <span><DoodleSpark /></span>ONE GOOD HELLO
          </div>
          <div className="postmark" aria-hidden="true" />
          <h2 id="contact-title">
            Let&apos;s <em>connect.</em>
          </h2>
          <p className="connect-note">One hello can open a new tab. <DoodleArrow /></p>
          <ContactLinks />
        </div>
        <footer className="footer mono">
          <span>© 2026 Pradeep Tarakar / still collecting tabs</span>
          <div>
            <a
              href="https://github.com/pradeept"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <DoodleArrow />
            </a>
            <a href="#top">Back to top <DoodleArrow direction="up" /></a>
          </div>
        </footer>
      </div>
    </section>
  );
}
