import { DoodleArrow } from '@/components/ui/doodles';
import { EnvelopeSimple } from '@phosphor-icons/react/dist/ssr/EnvelopeSimple';
import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr/LinkedinLogo';
import { analyticsAttributes } from '@/lib/analytics';

export function ContactLinks() {
  return (
    <div className="contact-tabs" aria-label="Ways to connect">
      <a
        className="contact-tab contact-x"
        href="https://x.com/0x0btoo"
        {...analyticsAttributes('contact_clicked', {
          location: 'contact',
          platform: 'x',
          destination: 'https://x.com/0x0btoo',
        })}
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>X</strong>
        <span aria-hidden="true">
          <DoodleArrow />
        </span>
      </a>
      <a
        className="contact-tab contact-email"
        href="mailto:hey@pradeept.dev"
        {...analyticsAttributes('contact_clicked', {
          location: 'contact',
          platform: 'email',
        })}
      >
        <EnvelopeSimple size={29} weight="duotone" aria-hidden="true" />
        <strong>Email</strong>
        <span aria-hidden="true">
          <DoodleArrow />
        </span>
      </a>
      <a
        className="contact-tab contact-linkedin"
        href="https://linkedin.com/in/pradeep-tarakar"
        {...analyticsAttributes('contact_clicked', {
          location: 'contact',
          platform: 'linkedin',
          destination: 'https://linkedin.com/in/pradeep-tarakar',
        })}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinLogo size={28} weight="duotone" aria-hidden="true" />
        <strong>LinkedIn</strong>
        <span aria-hidden="true">
          <DoodleArrow />
        </span>
      </a>
    </div>
  );
}
