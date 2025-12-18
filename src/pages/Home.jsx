import { useState } from 'react'
import '../App.css'

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h2>Obinta Sacco</h2>
          </div>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#membership" onClick={() => setIsMenuOpen(false)}>Membership</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            <li><a href="/admin" onClick={() => setIsMenuOpen(false)}>Admin</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Welcome to Obinta Sacco</h1>
          <p className="hero-subtitle">Your Trusted Partner for Financial Growth and Security</p>
          <p className="hero-description">
            Empowering members through accessible savings, affordable credit, and sustainable financial solutions
          </p>
          <div className="hero-buttons">
            <a href="#membership" className="btn btn-primary">Join Us Today</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Obinta Sacco</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Obinta Sacco is a member-owned financial cooperative dedicated to providing 
                accessible financial services to our community. We believe in empowering 
                individuals and families through savings, credit, and financial education.
              </p>
              <p>
                Our mission is to promote financial inclusion and help our members achieve 
                their financial goals through cooperative principles of self-help, self-responsibility, 
                democracy, equality, equity, and solidarity.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <h3>10,000+</h3>
                  <p>Active Members</p>
                </div>
                <div className="stat-item">
                  <h3>KES 500M+</h3>
                  <p>Assets Under Management</p>
                </div>
                <div className="stat-item">
                  <h3>25+</h3>
                  <p>Years of Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Savings Accounts</h3>
              <p>
                Secure your future with our flexible savings accounts. Earn competitive 
                interest rates while building your financial foundation.
              </p>
              <ul>
                <li>Regular Savings</li>
                <li>Fixed Deposit Accounts</li>
                <li>Emergency Fund Accounts</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">💳</div>
              <h3>Credit Facilities</h3>
              <p>
                Access affordable loans tailored to your needs. From personal loans to 
                business financing, we've got you covered.
              </p>
              <ul>
                <li>Personal Loans</li>
                <li>Business Loans</li>
                <li>Asset Financing</li>
                <li>Emergency Loans</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Digital Banking</h3>
              <p>
                Manage your finances on the go with our mobile and online banking platforms. 
                Convenient, secure, and accessible 24/7.
              </p>
              <ul>
                <li>Mobile Banking</li>
                <li>Online Banking</li>
                <li>USSD Banking</li>
                <li>Mobile Money Integration</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🎓</div>
              <h3>Financial Education</h3>
              <p>
                Build your financial literacy through our workshops, seminars, and 
                one-on-one financial counseling services.
              </p>
              <ul>
                <li>Financial Literacy Workshops</li>
                <li>Investment Seminars</li>
                <li>Budgeting Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="membership">
        <div className="container">
          <h2>Become a Member</h2>
          <div className="membership-content">
            <div className="membership-benefits">
              <h3>Why Join Obinta Sacco?</h3>
              <ul className="benefits-list">
                <li>✓ Competitive interest rates on savings</li>
                <li>✓ Access to affordable credit facilities</li>
                <li>✓ Annual dividends on share capital</li>
                <li>✓ Financial education and support</li>
                <li>✓ Democratic participation in governance</li>
                <li>✓ Community support and networking</li>
              </ul>
            </div>
            <div className="membership-requirements">
              <h3>Membership Requirements</h3>
              <ul className="requirements-list">
                <li>• Minimum age: 18 years</li>
                <li>• Minimum share capital: KES 1,000</li>
                <li>• Valid identification document</li>
                <li>• Passport-size photograph</li>
                <li>• Completed membership application form</li>
              </ul>
              <a href="#contact" className="btn btn-primary">Apply Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>📍 Location</h3>
                <p>123 Financial Street<br />Nairobi, Kenya</p>
              </div>
              <div className="contact-item">
                <h3>📞 Phone</h3>
                <p>+254 700 000 000<br />+254 711 000 000</p>
              </div>
              <div className="contact-item">
                <h3>✉️ Email</h3>
                <p>info@obintasacco.co.ke<br />support@obintasacco.co.ke</p>
              </div>
              <div className="contact-item">
                <h3>🕒 Working Hours</h3>
                <p>Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Obinta Sacco</h3>
              <p>Empowering members through financial growth and security.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#membership">Membership</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Savings</a></li>
                <li><a href="#services">Loans</a></li>
                <li><a href="#services">Digital Banking</a></li>
                <li><a href="#services">Financial Education</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Obinta Sacco. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

