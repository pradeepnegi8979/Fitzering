





import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Container, Row, Col, Card, Accordion, Form, Button } from 'react-bootstrap';
import { 
  Shield, 
  Search, 
  Heart, 
  Building, 
  Trash2, 
  PhoneCall, 
  Briefcase, 
  FileCheck, 
  MapPin, 
  Activity, 
  Mail, 
  Send
} from 'lucide-react';

import '../styles/PrivacyPolicy.css';

import Header from '../components/common/Header/Header';

import Footer from '../components/common/Footer/Footer';
interface PolicySection {
  id: string;
  category: 'account' | 'health' | 'corporate' | 'general' | 'rights';
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

export const PrivacyPolicy: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSection, setActiveSection] = useState('introduction');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Request Data Export', message: '' });

  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Reference details of standard UAE terms
  const sections: PolicySection[] = [
    {
      id: 'introduction',
      category: 'general',
      icon: <Shield size={20} color="#fe5226" />,
      title: '1. Introduction & Scope',
      content: (
        <>
          <p>
            Welcome to <strong>FITZE</strong>. FITZE encompasses our mobile application, our corporate web portals, the FITZE wearable smartwatch sync integration, and our official website registered under <strong>fitze.ae</strong> (hereinafter collectively referred to as the <strong>"Service"</strong> or <strong>"App"</strong>).
          </p>
          <p>
            We are operated and administered by <strong>FITZE App Solutions</strong>, a licensed DMCC legal entity located in Dubai, United Arab Emirates (<strong>"FITZE"</strong>, <strong>"we"</strong>, <strong>"us"</strong>, or <strong>"our"</strong>). FITZE is deeply committed to protecting the privacy, confidentiality, and integrity of your personal information.
          </p>
          <p>
            This Privacy Policy describes how we collect, store, share, process, and protect your data when you sign up, download, sync your wearables (including the <strong>Fitze Ring</strong>), or participate in our corporate step challenges and rewards store. 
          </p>
          <div className="policy-callout-box info">
            <strong>Legal Frame of Compliance:</strong> This policy is built and governed in accordance with <strong>UAE Federal Decree-Law No. 45/2021 on Personal Data Protection (PDPL)</strong>, executive regulations set forth by the UAE Telecommunications and Digital Government Regulatory Authority (TDRA), and general principles of global data safety.
          </div>
        </>
      )
    },
    {
      id: 'information-collect',
      category: 'account',
      icon: <Activity size={20} color="#8b5cf6" />,
      title: '2. Information We Collect',
      content: (
        <>
          <p>
            We require specific items of information from you to accurately sync your steps, compile your daily consistency metrics, track your streaks, and let you redeem cash vouchers or wellness products.
          </p>
          
          <h5 className="sub-section-title">A. Information You Direct Provide</h5>
          <ul>
            <li><strong>Account Identity:</strong> Legal first and last name, verified email address, phone number (UAE mobile connection for SMS verification), gender, and profile avatar.</li>
            <li><strong>Biographical Criteria:</strong> Gender, age, weight, and stride profile variables which are crucial to calculate estimated calorie burns and physical distance.</li>
            <li><strong>Corporate Identifiers:</strong> Your professional corporate email address, employee ID, and department branch (only if you register via a Corporate Wellness Challenge program).</li>
          </ul>

          <h5 className="sub-section-title">B. Automatically Logged Metrics</h5>
          <ul>
            <li><strong>Physical Activity & Fitness Data:</strong> Daily step count figures, running milestones, active minutes, estimated calorie expenditure, sleep duration segments, and physical speed metrics.</li>
            <li><strong>Fitze Ring Telemetry Data:</strong> Heart rate (HR) readings, Heart Rate Variability (HRV) metrics, restful duration indexes, and biological skin temperature deviations. This telemetry is combined to compute your official <strong>Fitze Score</strong>.</li>
            <li><strong>Precise Location Data:</strong> Foreground and background GPS coordinates. We access location details only with your explicit permission to authenticate real-life walking patterns, enable geo-fenced mall runs, and detect fraudulent step simulators.</li>
            <li><strong>Device Operations & Performance Metadata:</strong> Mobile hardware name, operating system (iOS or Android version), system language, unique device identifier (UDID), IP address, network carrier, crash analytics, and API server logs.</li>
          </ul>
        </>
      )
    },
    {
      id: 'health-integrations',
      category: 'health',
      icon: <Heart size={20} color="#ef4444" />,
      title: '3. Health Platfrom Integrations (Apple Health & Google Fit)',
      content: (
        <>
          <p>
            In order to seamlessly reward your healthy habits, FITZE integrates directly with official native system trackers, namely:
          </p>
          <div className="health-apps-badge-grid">
            <div className="health-app-badge apple">
              <span className="app-dot"></span> Apple HealthKit (iOS)
            </div>
            <div className="health-app-badge google">
              <span className="app-dot"></span> Google Fit & Android Health Connect
            </div>
          </div>
          <p className="mt-3">
            Please review the following rigorous conditions and guarantees governing our sync APIs:
          </p>
          <ul>
            <li><strong>Direct Consent Required:</strong> FITZE will only begin reading steps, activities, and heart telemetry after you explicitly toggle "Allow All" inside the standard iOS Apple Health or Google Fit popup prompts. You can revoke this permission anytime in your system Settings.</li>
            <li><strong>Limited Use Protections:</strong> Our use of health information received from Google Fit and Apple HealthKit APIs adheres strictly to the official API agreements. We do <strong>NOT</strong> write or modify any health records back into your native system databases.</li>
            <li><strong>No Ad Brokers:</strong> We strictly forbid the transfer or sale of your raw physical health indices or activity records to third-party data brokers, advertising networks, or user-profiling aggregators. Your steps are valued solely to distribute FITZE coins and rewards.</li>
          </ul>
        </>
      )
    },
    {
      id: 'data-usages',
      category: 'general',
      icon: <FileCheck size={20} color="#2dd4bf" />,
      title: '4. How We Use Covered Data',
      content: (
        <>
          <p>We process your data strictly to fulfill your expectations of the Service, specifically:</p>
          <ol>
            <li><strong>Core Fitness Tracking & Scoring:</strong> To calculate your FITZE streaks, aggregate your biological circles, calibrate steps into FITZE coins, and update your personal dashboard statistics in real time.</li>
            <li><strong>Voucher & Marketplace Redemptions:</strong> To process rewards claims, issue voucher codes, and notify brand merchants of your redemption parameters.</li>
            <li><strong>Anti-Abuse & Fraud Engineering:</strong> To detect, audit, and prevent step spoofing. This includes tracking background acceleration patterns to suppress automated shaking rigs, simulated GPS trails, and duplicate devices.</li>
            <li><strong>Corporate Program Leaderboards:</strong> If registered under a corporate program, to compare your steps and active minutes against the leaderboards of your business peers, establishing high-spirit community competition.</li>
            <li><strong>System Communications:</strong> To send critical transaction emails, push alerts on your current streak status, and send monthly wellness summaries or new partner promotional offers.</li>
          </ol>
        </>
      )
    },
    {
      id: 'corporate-wellness',
      category: 'corporate',
      icon: <Briefcase size={20} color="#f59e0b" />,
      title: '5. Corporate Wellness Challenges',
      content: (
        <>
          <p>
            Many users join FITZE through their professional employer challenges. Under the <strong>FITZE Corporate Wellness</strong> model:
          </p>
          <ul>
            <li><strong>Company Visibility Constraints:</strong> Your employer and your co-workers will have access to a shared workspace dashboard. This dashboard ONLY exposes names, team assignments, total step counts, active minutes, and overall leaderboard standing.</li>
            <li><strong>No Sensitive Detail Sharing:</strong> FITZE will <strong>NEVER</strong> share individual sleep graphs, heart rate variations, skin temperature stats, GPS locations, or biographical weight/stride indices with your employer or HR personnel.</li>
            <li><strong>Voluntary Program:</strong> Joining a corporate community challenge is entirely voluntary. You may request to be detached from your corporate wellness challenge group and revert to a personal consumer account by contacting our data protection officer.</li>
          </ul>
        </>
      )
    },
    {
      id: 'sharing-policy',
      category: 'rights',
      icon: <Building size={20} color="#3b82f6" />,
      title: '6. Data Sharing & Third-Party Disclosure',
      content: (
        <>
          <p>
            We do not sell your personal files. We only share information under strict contractual guardrails in the following isolated circumstances:
          </p>
          <ul>
            <li><strong>Brand Partners & Merchants:</strong> When you purchase or claim a voucher (such as discount coupons, restaurant rewards, or gym access passes), we share your unique redemption identification code, name, and contact details with the merchant so they can validate your discount upon dynamic physical scanning.</li>
            <li><strong>Cloud Service Infrastructure & Subprocessors:</strong> We use securely partitioned servers and database infrastructure hosted on premium data centers (such as AWS and Google Cloud Platform) with nodes operating within regional zones to power the FITZE App.</li>
            <li><strong>Regulatory & Legislative Actions:</strong> We disclose personal indices when compelled under UAE laws, court mandates, or regulations of Dubai Police, telecom agencies, or the UAE Data Office to assist in national cyber investigations or stop clear illegal activities.</li>
          </ul>
        </>
      )
    },
    {
      id: 'retention-delete',
      category: 'account',
      icon: <Trash2 size={20} color="#f43f5e" />,
      title: '7. Data Security, Retention & Account Deletion',
      content: (
        <>
          <p>
            Your information is locked behind robust digital gates. We implement <strong>AES-256 state-of-the-art encryption</strong> for stored databases and utilize forced <strong>Secure Sockets Layer / Transport Layer Security (TLS 1.3)</strong> protocols during all client-to-server data transmissions.
          </p>
          <p>
            We retain your steps, biometrics, and activity records as long as your registered account is kept active in our system. You have full sovereignty over your record duration:
          </p>
          
          <div className="account-delete-box card p-4 border-danger-subtle bg-danger-subtle bg-opacity-10 mt-3 mb-3">
            <h6 className="d-flex align-items-center gap-2 text-danger mb-2">
              <Trash2 size={18} /> How to Delete Your FITZE Account Permanently
            </h6>
            <p className="small mb-2 text-muted">
              We provide an effortless, instantaneous self-service mechanism to scrub all your data from our servers. 
            </p>
            <ol className="small mb-3 ps-3 text-muted">
              <li>Open the <strong>FITZE Mobile App</strong>.</li>
              <li>Go to <strong>Settings</strong> (gear icon) in your main Profile.</li>
              <li>Select <strong>Account Management</strong>, then click on <strong>Delete My Account</strong>.</li>
              <li>Confirm your request via the in-app prompts.</li>
            </ol>
            <p className="small mb-0 text-muted">
              Alternatively, you can send an explicit electronic request to our support desk at <a href="mailto:support@fitze.ae"><strong>support@fitze.ae</strong></a>. Upon confirmation, your profile is permanently locked, and all personal details, wearable logs, location trails, and rewards histories are fully scrubbed from our active servers within <strong>30 days</strong>.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'legal-rights',
      category: 'rights',
      icon: <FileCheck size={20} color="#10b981" />,
      title: '8. Your Rights Under UAE PDPL Legislation',
      content: (
        <>
          <p>
            Consistent with the UAE Data Protection Decree-Law No. 45/2021, FITZE ensures you possess executive oversight over your private assets:
          </p>
          <ul>
            <li><strong>Right to be Informed:</strong> To understand how, when, and why your data is being processed, which is detailed completely in this transparency document.</li>
            <li><strong>Right to Access & Rectify:</strong> To inspect your metrics inside the App and immediately correct incorrect phone parameters, gender profiles, or email addresses.</li>
            <li><strong>Right to Data Portability:</strong> To export a structured JSON/CSV sheet of your historical step records, streaks, and activity progress.</li>
            <li><strong>Right to Restriction & Erasure:</strong> To request us to restrict processing, or fully erase obsolete telemetry logs without requiring account deletion.</li>
          </ul>
        </>
      )
    },
    {
      id: 'contact-officer',
      category: 'general',
      icon: <PhoneCall size={20} color="#6366f1" />,
      title: '9. Future Revisions & Data Protection Officer',
      content: (
        <>
          <p>
            We may periodically revise this Privacy Policy to ensure perfect alignment with new wear integration releases (like Fitze Ring updates), emerging UAE technologies, or revised telecom standards. Any update will be marked with a new <strong>"Last Updated"</strong> date at the absolute top of this content frame.
          </p>
          <p>
            If we make significant changes (e.g., sharing steps with new merchant nodes), we will notify you through in-app alerts, email banners, or force-requesting consent updates.
          </p>
          <p>
            For all questions, export complaints, or legal compliance inputs, feel free to coordinate with our designated Data Protection Officer (DPO):
          </p>
          <div className="dpo-contact-card card p-3 mt-2 bg-light">
            <h6 className="mb-2 text-dark font-weight-bold">FITZE App Solutions Support & Compliance</h6>
            <p className="small mb-1 text-muted d-flex align-items-center gap-2">
              <MapPin size={14} /> DMCC Corporate Headquarters, Jumeirah Lakes Towers, Dubai, UAE
            </p>
            <p className="small mb-1 text-muted d-flex align-items-center gap-2">
              <Mail size={14} /> Electronic Mail: <a href="mailto:support@fitze.ae">support@fitze.ae</a> or <a href="mailto:info@fitze.ae">info@fitze.ae</a>
            </p>
            <p className="small mb-0 text-muted">
              Response Time: We aim to respond to all official privacy questions within <strong>48 hours</strong>.
            </p>
          </div>
        </>
      )
    }
  ];

  // Category filtering & Search query calculations
  const filteredSections = sections.filter(section => {
    const matchesCategory = selectedCategory === 'all' || section.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      section.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      JSON.stringify(section.content).toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle scrolling of right content column & update active navigation bubble on click
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  // Monitor screen scrolling to update active sidebar link (ScrollSpy replacement)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      
      // Find which section is currently at viewport level
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setContactSubmitted(true);
    // Simulate real database submissions gracefully
    setTimeout(() => {
      setContactSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Request Data Export', message: '' });
      alert('Your inquiry was successfully compiled and dispatched to legal@fitze.ae! We will contact you back shortly.');
    }, 1500);
  };

  return (
    <Fragment>
    <Header/>
    <div className="privacy-policy-view-root" id="privacy-policy">
      {/* 1. Header Hero Segment */}
      <div className="privacy-hero-bg">
        <div className="grain-overlay"></div>
        <Container className="text-center privacy-hero-content">
          <span className="privacy-badge">FITZE SECURITY TRUST CENTERS</span>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">
            Discover FITZE\'s commitment to ultimate data sovereignty. Learn how we securely process, analyze, and protect your fitness activities with complete transparency.
          </p>
          <div className="privacy-meta-row d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <span className="meta-tag"><FileCheck size={14} /> Last Updated: May 29, 2026</span>
            <span className="meta-tag"><Shield size={14} /> UAE PDPL Law Compliant</span>
            <span className="meta-tag"><Heart size={14} /> Apple HealthKit & Google Fit Confirmed</span>
          </div>
        </Container>
      </div>

      

      {/* 3. Document Core Workspace Setup: Left navigation & Right interactive text content */}
      <Container className="privacy-workspace-container">
        <Row className="g-5">
          
          {/* LEFT COLUMN: Sidebar controllers */}
          

          {/* RIGHT COLUMN: Actual legally bound content sections */}
          <Col lg={12} className="privacy-content-col" ref={rightColumnRef}>
            
            

            {filteredSections.length === 0 ? (
              <div className="empty-policy-search card p-5 text-center mt-4">
                <Search size={36} color="#a0aec0" className="mx-auto mb-3" />
                <h5>No Policy Sections Found</h5>
                <p className="text-muted small">We couldn\'t find any paragraphs matching your search terms or filter. Try clearing query filters.</p>
                <Button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }} 
                  variant="outline-primary" 
                  size="sm" 
                  className="mx-auto mt-2"
                  style={{ borderColor: '#fe5226', color: '#fe5226' }}
                >
                  Reset Active Filters
                </Button>
              </div>
            ) : (
              <div className="policy-articles-grid d-flex flex-column gap-5">
                {filteredSections.map(section => (
                  <article 
                    key={section.id} 
                    id={section.id} 
                    className={`policy-card-block ${activeSection === section.id ? 'is-highlighted-focus' : ''}`}
                  >
                    <div className="policy-block-header d-flex align-items-center gap-3">
                      <div className="section-category-icon-bubble">
                        {section.icon}
                      </div>
                      <h4 className="policy-block-title">{section.title}</h4>
                    </div>
                    
                    <div className="policy-block-body-text">
                      {section.content}
                    </div>
                  </article>
                ))}
              </div>
            )}



          </Col>

        </Row>
      </Container>
    </div>
     <Footer/>
    </Fragment>
  );
};

export default PrivacyPolicy;
