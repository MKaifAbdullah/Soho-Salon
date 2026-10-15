import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container header__container">
          <div className="header__logo">
            <img src="/soho-logo.webp" alt="SOHO Salon" />
            <span className="header__logo-text">SOHO SALON</span>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header__cta">
            <a href="tel:+923001697646" className="btn btn--primary">Book Now</a>
          </div>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero__overlay"></div>
        <div className="container hero__container">
          <div className="hero__content">
            <p className="hero__tagline">Luxury Beauty Experience</p>
            <h1 className="hero__title">SOHO SALON</h1>
            <p className="hero__subtitle">Where beauty meets elegance in the heart of DHA Phase 8, Karachi</p>
            <div className="hero__actions">
              <a href="tel:+923001697646" className="btn btn--primary btn--large">Book Appointment</a>
              <a href="#services" className="btn btn--outline btn--large">Explore Services</a>
            </div>
            <div className="hero__rating">
              <span className="stars">★★★★★</span>
              <span className="rating-text">4.8 · 1,237 Google Reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container features__container">
          <div className="feature">
            <div className="feature__icon">✦</div>
            <h3>Premium Services</h3>
            <p>Expert stylists delivering exceptional results with world-class products</p>
          </div>
          <div className="feature">
            <div className="feature__icon">✧</div>
            <h3>Luxury Experience</h3>
            <p>Relaxing ambiance, hygiene-first approach and personalized care</p>
          </div>
          <div className="feature">
            <div className="feature__icon">◈</div>
            <h3>Prime Location</h3>
            <p>Conveniently located in DHA Phase 8, Zulfiqar & Al Murtaza Commercial Area</p>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our Expertise</p>
            <h2 className="section-title">Signature Services</h2>
            <div className="section-line"></div>
          </div>
          <div className="services__grid">
            <div className="service-card">
              <div className="service-card__img">
                <img src="/images/hair.webp" alt="Hair styling at SOHO Salon" loading="lazy" />
              </div>
              <div className="service-card__body">
                <h3>Hair Styling</h3>
                <p>Precision cuts, global color, highlights, keratin, rebonding, treatments & blow-dry styling by our senior stylists.</p>
                <a href="tel:+923001697646" className="learn-more">Learn more →</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card__img">
                <img src="/images/nails.webp" alt="Nail studio at SOHO Salon" loading="lazy" />
              </div>
              <div className="service-card__body">
                <h3>Nail Studio</h3>
                <p>Gel extensions, acrylics, chrome & nail art, classic and luxury manicure & pedicure — fall sets welcome.</p>
                <a href="tel:+923001697646" className="learn-more">Learn more →</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card__img">
                <img src="/images/skin.webp" alt="Skin and facials at SOHO Salon" loading="lazy" />
              </div>
              <div className="service-card__body">
                <h3>Skin & Facials</h3>
                <p>Hydrating, brightening and anti-ageing facials, cleanups and advanced skincare treatments.</p>
                <a href="tel:+923001697646" className="learn-more">Learn more →</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card__img">
                <img src="/images/makeup.webp" alt="Makeup services at SOHO Salon" loading="lazy" />
              </div>
              <div className="service-card__body">
                <h3>Makeup</h3>
                <p>Party makeup, soft glam, editorial looks and HD makeup for every special occasion.</p>
                <a href="tel:+923001697646" className="learn-more">Learn more →</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card__img">
                <img src="/images/wax.webp" alt="Waxing services at SOHO Salon" loading="lazy" />
              </div>
              <div className="service-card__body">
                <h3>Waxing & Threading</h3>
                <p>Gentle, hygienic waxing with premium waxes plus precise eyebrow shaping and threading.</p>
                <a href="tel:+923001697646" className="learn-more">Learn more →</a>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card__img">
                <img src="/images/bridal.webp" alt="Bridal services at SOHO Salon" loading="lazy" />
              </div>
              <div className="service-card__body">
                <h3>Bridal</h3>
                <p>Complete bridal packages — engagement, nikah and walima looks with hair, makeup and draping.</p>
                <a href="tel:+923001697646" className="learn-more">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="promo">
        <div className="container promo__container">
          <p className="promo__tag">Limited Time Offer</p>
          <h2>Fall in SOHO</h2>
          <p>Enjoy <strong>20% off</strong> on Gel Extensions &amp; Acrylics every Wednesday. All prices exclusive of tax.</p>
          <a href="tel:+923001697646" className="btn btn--primary btn--large">Claim Offer</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container about__container">
          <div className="about__content">
            <p className="section-subtitle">About Us</p>
            <h2 className="section-title">Welcome to SOHO Salon</h2>
            <div className="section-line section-line--left"></div>
            <p>SOHO Salon is a premium ladies-only salon in DHA Phase 8, Karachi. We specialise in hair, nails, skincare, makeup, waxing and bridal services in a luxurious, welcoming environment.</p>
            <p>Our team of skilled professionals uses high-quality products to ensure you leave feeling refreshed, confident and beautiful. Rated <strong>4.8 stars</strong> by over <strong>1,200 happy clients</strong> on Google.</p>
            <div className="about__info">
              <div className="about__info-item">
                <h4>Hours</h4>
                <p>Monday – Sunday<br />11:00 AM – 8:00 PM</p>
              </div>
              <div className="about__info-item">
                <h4>Location</h4>
                <p>50C Lane 2, DHA Phase 8,<br />Karachi, 75500</p>
              </div>
              <div className="about__info-item">
                <h4>Phone</h4>
                <p><a href="tel:+923001697646" className="link">0300 1697646</a></p>
              </div>
            </div>
          </div>
          <div className="about__visual">
            <div className="about__logo-card">
              <img src="/soho-logo.webp" alt="SOHO Salon Logo" />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Our Work</p>
            <h2 className="section-title">Gallery</h2>
            <div className="section-line"></div>
          </div>
          <div className="gallery__grid">
            <div className="gallery__item gallery__item--tall"><img src="/images/interior.webp" alt="SOHO Salon interior" loading="lazy" /><span>Salon Interior</span></div>
            <div className="gallery__item"><img src="/images/nails.webp" alt="Gel extensions" loading="lazy" /><span>Gel Extensions</span></div>
            <div className="gallery__item"><img src="/images/bridal.webp" alt="Bridal look" loading="lazy" /><span>Bridal Look</span></div>
            <div className="gallery__item"><img src="/images/gallery1.webp" alt="Hair transformation" loading="lazy" /><span>Hair Transformation</span></div>
            <div className="gallery__item gallery__item--wide"><img src="/images/gallery2.webp" alt="Salon styling" loading="lazy" /><span>Expert Styling</span></div>
            <div className="gallery__item"><img src="/images/makeup.webp" alt="Party makeup" loading="lazy" /><span>Party Makeup</span></div>
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Testimonials</p>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="section-line"></div>
          </div>
          <div className="reviews__summary">
            <div className="reviews__score">
              <span className="score">4.8</span>
              <span className="stars stars--lg">★★★★★</span>
              <span className="count">Based on 1,237 Google Reviews</span>
            </div>
          </div>
          <div className="reviews__grid">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>"Amazing service and very professional staff. Absolutely love my nails every single time I visit. The fall gel set was stunning!"</p>
              <span className="review-card__author">— Google Review</span>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>"Clean environment, extremely skilled stylists and wonderful customer service. Best ladies salon in DHA without a doubt."</p>
              <span className="review-card__author">— Google Review</span>
            </div>
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <p>"My go-to salon in Karachi. Always satisfied with their hair treatments and facials. Highly recommended!"</p>
              <span className="review-card__author">— Google Review</span>
            </div>
          </div>
          <div className="reviews__cta">
            <a href="https://www.google.com/search?q=SOHO+Salon+Karachi+reviews" target="_blank" rel="noopener noreferrer" className="btn btn--primary">Read More on Google</a>
          </div>
        </div>
      </section>

      <section className="instagram">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Social Media</p>
            <h2 className="section-title">Follow @sohobeautyartclub</h2>
            <div className="section-line"></div>
          </div>
          <div className="instagram__grid">
            <a href="https://www.instagram.com/sohobeautyartclub" target="_blank" rel="noopener noreferrer" className="instagram__post">🍂 Fall Nails Reveal</a>
            <a href="https://www.instagram.com/sohobeautyartclub" target="_blank" rel="noopener noreferrer" className="instagram__post">🍁 Fall in Soho — 20% Off</a>
            <a href="https://www.instagram.com/sohobeautyartclub" target="_blank" rel="noopener noreferrer" className="instagram__post">💅 Fall Nail Inspo</a>
            <a href="https://www.instagram.com/sohobeautyartclub" target="_blank" rel="noopener noreferrer" className="instagram__post">✨ Your Next Fall Set</a>
          </div>
          <div className="instagram__cta">
            <a href="https://www.instagram.com/sohobeautyartclub" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--large">View Instagram</a>
          </div>
        </div>
      </section>

      <section id="contact" className="cta">
        <div className="container cta__container">
          <h2>Ready To Book Your Visit?</h2>
          <p>Experience luxury beauty care at SOHO Salon — ladies only, kids under 8 not allowed.</p>
          <div className="cta__actions">
            <a href="tel:+923001697646" className="btn btn--primary btn--large">Call 0300 1697646</a>
            <a href="https://www.google.com/maps/place/SOHO+Salon/@24.8028,67.0578" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--large">Get Directions</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/soho-logo.webp" alt="SOHO Salon" />
              <span>SOHO SALON</span>
            </div>
            <p>Premium ladies salon in DHA Phase 8, Karachi. Hair, nails, skincare, makeup, waxing & bridal services.</p>
            <div className="footer__social">
              <a href="https://www.instagram.com/sohobeautyartclub" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/SohoSalonandSpa" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
          <div className="footer__links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#reviews">Reviews</a>
          </div>
          <div className="footer__contact">
            <h3>Contact Info</h3>
            <p><a href="tel:+923001697646" className="link">0300 1697646</a></p>
            <p>50C Lane 2, DHA Phase 8,<br />Karachi, 75500</p>
            <p>Mon – Sun: 11 AM – 8 PM</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2025 SOHO Salon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
