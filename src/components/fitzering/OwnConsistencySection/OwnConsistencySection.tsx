import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OwnConsistencySection.css';
import ownyour from '../../../assets/own-your.png';
export const OwnConsistencySection: React.FC = () => {
  return (
    <section className="own-consistency-section" id="own-consistency">
      <Container className="own-consistency-container">
        {/* Dynamic Interactive Layout */}
        <Row className="align-items-start gy-5 gx-md-5 own-consistency-content-row">
          {/* Left Block: Heading and Landscape High-Fidelity Cover Photo */}
          <Col lg={6} md={12} className="own-consistency-left-pane">
            <h2 className="own-consistency-main-title">Own your consistency</h2>
            
            <div className="travel-photo-container">
              <img 
                src={ownyour}
                alt="Own your consistency with Fitze Ring" 
                className="roadtrip-ring-photo"
                referrerPolicy="no-referrer"
              />
              <div className="photo-inner-shadow"></div>
            </div>
          </Col>

          {/* Right Block: Offer, Pricing & Bullet Perks */}
          <Col lg={6} md={12} className="own-consistency-right-pane">
            <div className="offer-premium-box">
              {/* Badge 1: Purchase Details */}
              <div className="one-time-badge-wrapper">
                <span className="one-time-badge">ONE TIME PURCHASE. NO SUBSCRIPTION</span>
              </div>

              {/* Price block */}
              <div className="price-display-block">
                <span className="fitze-currency-symbol">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="31" viewBox="0 0 35 31" fill="none">
<path d="M3.09038 0.0356486C3.10438 0.0570377 3.18138 0.153289 3.25488 0.245975C3.79036 0.894779 4.19284 1.94998 4.40983 3.27967C4.55333 4.15306 4.56033 4.42755 4.56033 7.75713V10.8586H3.09738C1.76043 10.8586 1.60644 10.8514 1.34395 10.798C0.930965 10.7088 0.503981 10.47 0.216992 10.1634C-0.0104996 9.91743 -0.00349987 9.90317 0.0104996 10.6482C0.027999 11.2649 0.0349987 11.3327 0.122495 11.6678C0.26249 12.1989 0.454983 12.5946 0.745472 12.9476C1.14096 13.4324 1.54344 13.7033 2.11742 13.8851C2.23992 13.9208 2.49891 13.935 3.41587 13.9422L4.56033 13.96V17.0507L1.32645 17.0293L1.04646 16.9152C0.713973 16.7798 0.563479 16.68 0.237991 16.3841L0 16.1666L0.0139995 16.8475C0.0314988 17.4785 0.0349987 17.5498 0.122495 17.8706C0.426984 19.0043 1.16196 19.8135 2.13142 20.0773C2.37291 20.145 2.46741 20.1486 3.47887 20.1628L4.56033 20.1771V23.3712C4.56033 25.2998 4.54983 26.7222 4.53233 26.9646C4.51483 27.1856 4.45883 27.5991 4.40983 27.8879C4.18234 29.2176 3.77286 30.2193 3.18488 30.8681L3.06589 31H8.98416C12.5225 31 15.1684 30.9857 15.5569 30.9679C16.2394 30.9323 17.7618 30.779 18.1048 30.7041C18.2133 30.6827 18.4163 30.6506 18.5493 30.6293C18.8328 30.5865 19.3018 30.4867 19.9773 30.312C20.9292 30.0696 21.7972 29.7666 22.6477 29.3816C22.9136 29.2604 23.6766 28.8647 23.8796 28.7399C23.9881 28.6757 24.1176 28.5973 24.1666 28.5723C24.3031 28.4975 24.5306 28.3477 24.8631 28.1053C25.0276 27.9841 25.1921 27.8665 25.2271 27.8415C25.3741 27.7417 25.8815 27.3104 26.1125 27.0929C26.991 26.2694 27.726 25.3533 28.2964 24.3729C28.3769 24.2303 28.4819 24.0521 28.5274 23.9772C28.6429 23.7776 29.1189 22.7794 29.1644 22.6297C29.1854 22.562 29.2134 22.4907 29.2274 22.4764C29.3184 22.3552 29.8434 20.6726 29.9064 20.3054C29.9274 20.1878 29.9379 20.17 30.0254 20.1521C30.0814 20.1414 30.8968 20.1414 31.8383 20.1486C33.7212 20.1628 33.7212 20.1628 34.1377 20.3589C34.3722 20.4694 34.4422 20.5193 34.7012 20.7582C35.0407 21.0683 35.0092 21.1182 34.9882 20.3411C34.9742 19.8848 34.9567 19.6032 34.9252 19.4891C34.8062 19.0506 34.7782 18.9579 34.6732 18.7369C34.3302 17.974 33.7562 17.4286 33.0213 17.1684L32.7343 17.0614L31.5653 17.0471L30.3999 17.0293L30.4139 16.6122C30.4279 16.0632 30.4279 14.976 30.4104 14.4163L30.3964 13.9671L31.9573 13.96C33.2943 13.9529 33.5427 13.96 33.6897 13.9992C34.1307 14.124 34.4282 14.2951 34.7922 14.6337L34.9952 14.8262V14.2986C34.9952 13.6712 34.9637 13.3932 34.8377 12.9796C34.5892 12.1419 34.0992 11.5181 33.3993 11.133C32.9443 10.8835 32.9163 10.8764 31.3518 10.8657C30.4349 10.8586 29.9554 10.8443 29.9309 10.8229C29.9099 10.8015 29.8924 10.7659 29.8924 10.7374C29.8924 10.7088 29.8399 10.4842 29.7699 10.2418C28.9509 7.2937 27.4215 4.95159 25.1851 3.2155C24.8806 2.97666 24.1351 2.47401 23.8341 2.3029C23.7186 2.23517 23.5926 2.16387 23.5611 2.14248C23.4141 2.06049 22.5707 1.63983 22.3607 1.55071C22.2347 1.49368 22.0702 1.42238 21.9967 1.39386C20.7612 0.848436 18.6893 0.331532 17.1074 0.171113C16.8484 0.146159 16.5054 0.106946 16.3479 0.0926863C15.6339 0.0106946 14.6435 0 9.01916 0C4.26634 0 3.07289 0.0106946 3.09038 0.0356486ZM14.6645 1.57923C15.8474 1.65053 16.5754 1.74322 17.4258 1.95354C20.0228 2.58096 21.8497 3.90708 23.1761 6.12443C23.2986 6.33119 23.8166 7.40777 23.8936 7.62523C24.2611 8.63408 24.4396 9.23298 24.5971 10.0244C24.6356 10.2169 24.6881 10.4736 24.7126 10.5948C24.7371 10.7124 24.7476 10.8229 24.7371 10.8336C24.7196 10.8479 21.2057 10.855 16.9219 10.8514L9.13466 10.8443L9.12416 6.26345C9.12066 3.74667 9.12416 1.65409 9.13466 1.61488L9.14866 1.54715H11.6371C13.002 1.54715 14.367 1.56141 14.6645 1.57923ZM25.0766 14.0669C25.1011 14.2202 25.1011 16.8226 25.0766 16.9509L25.0556 17.0471L9.13466 17.0293L9.12766 15.5178C9.12066 14.6872 9.12766 13.9956 9.13466 13.9814C9.14516 13.9635 12.5365 13.9529 17.1039 13.9529H25.0556L25.0766 14.0669ZM24.7196 20.1878C24.7371 20.2413 24.6531 20.6797 24.4816 21.3927C24.2856 22.1948 24.0196 23.004 23.7501 23.6029C23.6171 23.9095 23.2846 24.5726 23.2041 24.6973C23.1656 24.7544 23.0536 24.9362 22.9556 25.0966C22.3257 26.1019 21.4262 27.0181 20.4007 27.6954C20.0263 27.9378 19.2563 28.3513 19.0498 28.4155C19.0078 28.4262 18.9623 28.4476 18.9448 28.4618C18.9203 28.4832 18.6018 28.6044 18.2308 28.7399C17.5483 28.9859 16.2499 29.2532 15.2069 29.3637C14.5315 29.4315 14.423 29.435 11.8226 29.435H9.13116V20.1842L16.8624 20.17C21.1147 20.1628 24.6181 20.1521 24.6461 20.145C24.6776 20.1414 24.7091 20.1628 24.7196 20.1878Z" fill="white"/>
</svg>
                </span>
                <span className="price-amount">699</span>
              </div>

              {/* Badge 2: Limited Offer Details */}
              <div className="limited-badge-wrapper">
                <span className="limited-badge">Limited time offer!</span>
              </div>

              {/* Offer Header with Pro branding styled box */}
              <h3 className="pro-promo-heading">
                Unlock 1 year of <span className="fitze-text">fitze</span> <span className="pro-badge-pill">pro</span> free*
              </h3>

              {/* Checklist details */}
              <div className="perks-checklist-group">
                {/* Perk 1 */}
                <div className="perk-checklist-item">
                  <div className="checklist-bullet-container">
                    <svg className="check-svg-bullet" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#718096" strokeWidth="2" />
                      <path d="M8 12L11 15L16 9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="perk-text-wrap">
                    <h4 className="perk-title">Get paid to walk</h4>
                    <p className="perk-description">Join 15 Streaks and earn guaranteed payouts for your consistency.</p>
                  </div>
                </div>

                {/* Perk 2 */}
                <div className="perk-checklist-item">
                  <div className="checklist-bullet-container">
                    <svg className="check-svg-bullet" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#718096" strokeWidth="2" />
                      <path d="M8 12L11 15L16 9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="perk-text-wrap">
                    <h4 className="perk-title">Unlock better rewards</h4>
                    <p className="perk-description">Earn more daily points and redeem offers across 150+ brands.</p>
                  </div>
                </div>

                {/* Perk 3 */}
                <div className="perk-checklist-item">
                  <div className="checklist-bullet-container">
                    <svg className="check-svg-bullet" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="#718096" strokeWidth="2" />
                      <path d="M8 12L11 15L16 9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="perk-text-wrap">
                    <h4 className="perk-title">Increase winning chances</h4>
                    <p className="perk-description">Join unlimited Challenges and get double entries in reward draws.</p>
                  </div>
                </div>
              </div>

              {/* Conditions Apply Label */}
              <p className="conditions-label-text">*Conditions apply</p>
            </div>
          </Col>
        </Row>

        {/* Bottom Booking Area */}
        <div className="own-consistency-booking-area text-center">
          <a href="#fitze-booking" className="own-consistency-shop-btn">
            Shop fitze Ring
          </a>
          <p className="own-consistency-guarantees">
            Complimentary returns &nbsp;|&nbsp; Secure checkout
          </p>
        </div>
      </Container>
    </section>
  );
};

export default OwnConsistencySection;
