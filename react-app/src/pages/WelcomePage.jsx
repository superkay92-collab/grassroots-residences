import { useEffect, useRef } from "react";

const services = [
  ["Networking", "Build trusted professional relationships across Ghana and the diaspora."],
  ["Real Estate", "Local guidance for property searches, due diligence, and investment decisions."],
  ["Loan Service", "Understand your financing options and connect with the right next step."],
  ["Consulting Agency", "Practical strategy and operational support for businesses entering Ghana."],
  ["Community Initiatives", "Events and partnerships that turn shared connections into opportunity."],
];

export default function WelcomePage() {
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) {
      return;
    }

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        video.setAttribute("controls", "true");
      }
    };

    tryPlay();
  }, []);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="wrap nav-wrap">
          <div className="brand">
            <img src="/logo.png" alt="Grassroot Networking logo" className="brand-logo" />
            <span>GRASSROOT NETWORKING</span>
          </div>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">ABOUT</a>
            <a href="#departments">OUR SERVICES</a>
            <a href="#gallery">GALLERY</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-block">
          <video ref={heroVideoRef} className="hero-media" autoPlay muted defaultMuted loop playsInline preload="auto" poster="/diaspora-summit.jpg" aria-label="Grassroots Networking event video">
            <source src="/hero-background.MP4" type="video/mp4" />
            Your browser does not support the hero video.
          </video>
          <img className="hero-photo" src="/diaspora-summit.jpg" alt="Grassroots Networking members at a diaspora summit" />
          <div className="hero-shade" />
          <div className="wrap hero-copy">
            <p className="eyebrow">GHANA + THE DIASPORA</p>
            <h1>Your bridge to business in Ghana.</h1>
            <p>Trusted local connections for diaspora members exploring property, financing, and opportunity.</p>
            <a className="hero-button" href="#contact">START A CONVERSATION <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section id="about" className="about-block">
          <div className="wrap">
            <h2>ABOUT</h2>
            <p>
              Grassroots Networking helps Ghanaians abroad and international partners move from interest to informed action in Ghana.
            </p>
            <p>
              We bring people, local knowledge, and practical support together across networking, real estate, loans, consulting, and community initiatives.
            </p>
          </div>
        </section>

        <section className="stats-block">
          <div className="wrap stats-grid">
            <article><h3>5</h3><p>Service areas</p></article>
            <article><h3>1:1</h3><p>Local guidance</p></article>
            <article><h3>GHA</h3><p>Grounded in Ghana</p></article>
            <article><h3>∞</h3><p>Room to grow</p></article>
          </div>
        </section>

        <section id="departments" className="dept-block">
          <div className="wrap">
            <h2>OUR SERVICES</h2>
            <div className="dept-grid">
              {services.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p><a href="#contact">ENQUIRE <span aria-hidden="true">→</span></a></article>)}
            </div>
            <div className="services-cta"><p>Have a goal in Ghana? Tell us what you are exploring.</p><a className="dark-button" href="#contact">TALK TO OUR TEAM <span aria-hidden="true">→</span></a></div>
          </div>
        </section>

        <section id="contact" className="contact-block">
          <div className="wrap contact-grid">
            <div><p className="eyebrow">MAKE THE FIRST MOVE</p><h2>Let’s find the right path for you.</h2><p>Share a few details and our team will follow up about your property, loan, business, or networking question.</p><p className="contact-detail">Accra, Ghana<br /><a href="mailto:info@grassrootnetworking.com">info@grassrootnetworking.com</a></p></div>
            <form className="inquiry-form" action="mailto:info@grassrootnetworking.com" method="post" encType="text/plain">
              <label>Name<input name="name" required /></label>
              <label>Email<input name="email" type="email" required /></label>
              <label>What can we help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(([title]) => <option key={title}>{title}</option>)}</select></label>
              <label>Message<textarea name="message" rows="4" required /></label>
              <button className="dark-button" type="submit">SEND INQUIRY <span aria-hidden="true">→</span></button>
            </form>
          </div>
        </section>

        <section id="gallery" className="gallery-block">
          <div className="wrap">
            <p className="eyebrow">FROM THE COMMUNITY</p>
            <h2>Real people. Shared opportunity.</h2>
            <div className="gallery-grid">
              <figure><img src="/diaspora-summit.jpg" alt="Members celebrating at a Grassroots Networking diaspora summit" /><figcaption>Diaspora Summit 2026</figcaption></figure>
              <figure><img src="/community-event.jpg" alt="Guests connecting at a Grassroots Networking community event" /><figcaption>Community connections in action</figcaption></figure>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer-block">
        <div className="wrap">
          <p>Accra, Ghana · info@grassrootnetworking.com</p>
          <p className="footer-note">Business registration details available on request.</p>
          <p>© 2026 Grassroot Networking. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
