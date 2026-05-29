import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Linkedin,
  Music 
} from 'lucide-react';
import './ContactInfoSection.css';

export const ContactInfoSection: React.FC = () => {
  return (
    <div className="contact-info-column" id="contact-info-pane">
      
      {/* Sub-label and Heading */}
      <span className="contact-info-subtext">CONTACT INFORMATION</span>
      <h2 className="contact-info-title">We're always here for you</h2>
      <p className="contact-info-desc">
        Whether you're just starting out or a seasoned athlete, our team is ready to help you level up. Reach out through any channel — we respond within 24 hours.
      </p>

      {/* 4 Custom Layout Info Cards */}
      <div className="contact-info-cards-stack">
        
        {/* Card 1: PHONES */}
        <div className="contact-info-card">
          <div className="contact-card-icon-wrapper">
            <Phone size={18} className="contact-card-icon" />
          </div>
          <div className="contact-card-text">
            <span className="card-lbl">PHONE</span>
            <div className="card-val">+971 4 884 5990</div>
            <div className="card-sub">Mon-Sat, 8am – 9pm GST</div>
          </div>
        </div>

        {/* Card 2: EMAIL */}
        <div className="contact-info-card">
          <div className="contact-card-icon-wrapper">
            <Mail size={18} className="contact-card-icon" />
          </div>
          <div className="contact-card-text">
            <span className="card-lbl">EMAIL</span>
            <div className="card-val">
              <a href="mailto:info@fitze.ae" className="contact-link">info@fitze.ae</a>
            </div>
            <div className="card-sub">We reply within 24 hours</div>
          </div>
        </div>

        {/* Card 3: LOCATION */}
        <div className="contact-info-card">
          <div className="contact-card-icon-wrapper">
            <MapPin size={18} className="contact-card-icon" />
          </div>
          <div className="contact-card-text">
            <span className="card-lbl">LOCATION</span>
            <div className="card-val">Dubai, UAE</div>
            <div className="card-sub">Visit us at our flagship studio</div>
          </div>
        </div>

        {/* Card 4: WORKING HOURS */}
        <div className="contact-info-card">
          <div className="contact-card-icon-wrapper">
            <Clock size={18} className="contact-card-icon" />
          </div>
          <div className="contact-card-text">
            <span className="card-lbl">WORKING HOURS</span>
            <div className="card-val">Mon – Fri: 6am – 10pm</div>
            <div className="card-sub">Sat – Sun: 8am – 8pm GST</div>
          </div>
        </div>

      </div>

      {/* Social Links Panel */}
      <div className="contact-social-section mt-5">
        <span className="social-subtext">FOLLOW OUR JOURNEY</span>
        <div className="social-icon-row mt-3 d-flex align-items-center gap-3">
          
          <a href="https://www.instagram.com/fitzeuae/" target="_blank" rel="noreferrer" className="social-circle-btn">
            <Instagram size={16} />
          </a>
          
          <a href="https://www.facebook.com/FitzeUAE/" target="_blank" rel="noreferrer" className="social-circle-btn">
            <Facebook size={16} />
          </a>
          
          <a href="https://www.linkedin.com/company/fitzeuae/" target="_blank" rel="noreferrer" className="social-circle-btn">
            <Linkedin size={16} />
          </a>
{/*           
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-circle-btn">
            <Youtube size={16} />
          </a>
          
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-circle-btn">
            <Music size={16} />
          </a> */}

        </div>
      </div>

    </div>
  );
};

export default ContactInfoSection;
