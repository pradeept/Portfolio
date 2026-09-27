import { DoodleArrow, DoodleSpark } from '@/components/ui/doodles';
import { HeroBoard } from '@/components/interactive/hero-board';
import { analyticsAttributes } from '@/lib/analytics';

export function HeroSection() {
  return (
    <>
      <section className="shell hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="mono mini-label">Pradeep Tarakar / software engineer</span>
          <h1 id="hero-title">
            A little
            <br />
            of{' '}
            <em>
              everything.
              <svg
                className="title-swoop"
                viewBox="0 0 520 25"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M4 14Q254 0 512 12M39 23Q256 8 480 19" />
              </svg>
            </em>
          </h1>
          <p>
            I make things for the web. Then I get curious about the systems underneath, the AI in
            between, and{' '}
            <a
              href="#security"
              {...analyticsAttributes('hero_cta_clicked', {
                location: 'hero_intro',
                section: 'security',
                destination: '#security',
              })}
            >
              what happens when something breaks.
            </a>
          </p>
          <div className="hero-links">
            <a
              href="#work"
              {...analyticsAttributes('hero_cta_clicked', {
                location: 'hero',
                section: 'work',
                destination: '#work',
              })}
            >
              Follow the curiosity <DoodleArrow direction="down" />
            </a>
            <a
              href="#contact"
              {...analyticsAttributes('hero_cta_clicked', {
                location: 'hero',
                section: 'contact',
                destination: '#contact',
              })}
            >
              Start a conversation <DoodleArrow />
            </a>
          </div>
          <div className="handnote">
            Jack of many trades? Guilty. <DoodleArrow />
          </div>
        </div>
        <HeroBoard />
      </section>
      <div className="tape-wrap">
        <div className="tape-strip" aria-label="plan, build, break, fix, repeat">
          <div aria-hidden="true">
            <span>plan</span>
            <b>
              <DoodleSpark />
            </b>
            <span>build</span>
            <b>
              <DoodleSpark />
            </b>
            <span>break</span>
            <b>
              <DoodleSpark />
            </b>
            <span>fix</span>
            <b>
              <DoodleSpark />
            </b>
            <span>repeat</span>
          </div>
        </div>
      </div>
    </>
  );
}
