import React, { useState, useEffect } from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import './CorporateLeadModal.css';

interface CorporateLeadModalProps {
  show: boolean;
  onHide: () => void;
}

export const CorporateLeadModal: React.FC<CorporateLeadModalProps> = ({ show, onHide }) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    emirates: 'Abu Dhabi',
    companyName: '',
    contactNumber: '',
    emailId: '',
    website: '',
    numberOfEmployees: '',
    comments: '',
  });

  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  // Reset states on opening modal
  useEffect(() => {
    if (show) {
      setFormData({
        name: '',
        emirates: 'Abu Dhabi',
        companyName: '',
        contactNumber: '',
        emailId: '',
        website: '',
        numberOfEmployees: '',
        comments: '',
      });
      // setRecaptchaChecked(false);
      setIsSubmitted(false);
      setErrMessage('');
      
      // Stop background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable background scrolling
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && show) {
        onHide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [show, onHide]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleRecaptcha = () => {
    setRecaptchaChecked(!recaptchaChecked);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mandated validations (Your Name*, Company Name*, Email ID*)
    if (!formData.name.trim()) {
      setErrMessage('Your Name is a required field.');
      return;
    }
    if (!formData.companyName.trim()) {
      setErrMessage('Company Name is a required field.');
      return;
    }
    if (!formData.emailId.trim() || !formData.emailId.includes('@')) {
      setErrMessage('Please enter a valid Email ID.');
      return;
    }

    // reCAPTCHA validation
    if (!recaptchaChecked) {
      setErrMessage("Please confirm you are not a robot.");
      return;
    }

    setErrMessage('');
    setIsSubmitted(true);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      className="corp-lead-modal-root"
      dialogClassName="corp-lead-modal-dialog-wrapper"
    >
      {/* Click overlay to close */}
      <div className="corp-lead-modal-overlay" onClick={onHide}></div>

      <div className="corp-lead-modal-content-container" onClick={(e) => e.stopPropagation()}>
        <button className="corp-lead-modal-close-btn" onClick={onHide} aria-label="Close modal">
          &times;
        </button>

        {!isSubmitted ? (
          <>
            {/* Modal Heading & Description */}
            <h2 className="corp-lead-modal-title">Boost your team's morale</h2>
            <p className="corp-lead-modal-description">
              Give employees a reason to connect on something fun other than work. Bring employees together across
              departments and locations through a Fitze challenge.
            </p>

            {errMessage && <div className="corp-lead-modal-alert-message">{errMessage}</div>}

            {/* Custom Lead Generation Form */}
            <Form onSubmit={handleFormSubmit} className="corp-lead-modal-form">
              <Row className="g-3 mb-3">
                <Col md={6} xs={12}>
                  <Form.Group controlId="formName">
                    <Form.Label className="corp-select-label-text">Your Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      className="corp-lead-input-element"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6} xs={12}>
                  <Form.Group controlId="formEmirates">
                    <Form.Label className="corp-select-label-text">Emirates</Form.Label>
                    <div className="corp-custom-select-wrapper">
                      <Form.Select
                        name="emirates"
                        className="corp-lead-select-element"
                        value={formData.emirates}
                        onChange={handleInputChange}
                      >
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Umm Al Quwain">Umm Al Quwain</option>
                        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                        <option value="Fujairah">Fujairah</option>
                      </Form.Select>
                      <span className="corp-custom-select-arrow">&#x25BC;</span>
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="g-3 mb-3">
                <Col md={6} xs={12}>
                  <Form.Group controlId="formCompany">
                    <Form.Label className="corp-select-label-text">Company Name*</Form.Label>
                    <Form.Control
                      type="text"
                      name="companyName"
                      className="corp-lead-input-element"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6} xs={12}>
                  <Form.Group controlId="formContact">
                    <Form.Label className="corp-select-label-text">Contact Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="contactNumber"
                      className="corp-lead-input-element"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="corp-select-label-text">Email ID*</Form.Label>
                <Form.Control
                  type="email"
                  name="emailId"
                  className="corp-lead-input-element full-width-input"
                  value={formData.emailId}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Row className="g-3 mb-3">
                <Col md={6} xs={12}>
                  <Form.Group controlId="formWebsite">
                    <Form.Label className="corp-select-label-text">Website</Form.Label>
                    <Form.Control
                      type="text"
                      name="website"
                      className="corp-lead-input-element"
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={6} xs={12}>
                  <Form.Group controlId="formEmployees">
                    <Form.Label className="corp-select-label-text">Number of Employees</Form.Label>
                    <Form.Control
                      type="text"
                      name="numberOfEmployees"
                      className="corp-lead-input-element"
                      value={formData.numberOfEmployees}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4" controlId="formComments">
                <Form.Label className="corp-select-label-text">Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  name="comments"
                  className="corp-lead-textarea-element"
                  rows={4}
                  value={formData.comments}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* Pixel Perfect reCAPTCHA Google Mockup */}
              {/* <div className="recaptcha-mockup-wrapper" onClick={toggleRecaptcha}>
                <div className="recaptcha-left-side">
                  <div className={`recaptcha-custom-checkbox-box ${recaptchaChecked ? 'recaptcha-is-checked' : ''}`}>
                    {recaptchaChecked && (
                      <svg className="recaptcha-checkmark-svg" viewBox="0 0 24 24">
                        <path
                          fill="none"
                          stroke="#009688"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          d="M4.5 12.5l5.5 5.5L20 6"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="recaptcha-not-a-robot-text">I'm not a robot</span>
                </div>

                <div className="recaptcha-right-side">
                  <div className="recaptcha-logo-visual">
                    <svg className="recaptcha-spinner-arrows" width="30" height="30" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10H12V2z"
                        opacity="0.15"
                      />
                      <path
                        fill="#4285F4"
                        d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6s-2.69 6-6 6c-1.66 0-3.16-.67-4.24-1.76l-1.42 1.42C8.26 19.58 10.02 20 12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8z"
                      />
                      <path
                        fill="#0F9D58"
                        d="M6.35 7.76l1.42 1.42C6.67 10.26 6 11.76 6 13.42c0 3.31 2.69 6 6 6v3c-4.42 0-8-3.58-8-8 0-2.42.98-4.62 2.58-6.22z"
                        opacity="0.7"
                      />
                    </svg>
                  </div>
                  <span className="recaptcha-title-brand">reCAPTCHA</span>
                  <div className="recaptcha-sub-terms-row">
                    <span className="recaptcha-anchor-link">Privacy</span>
                    <span className="recaptcha-divider-dot">-</span>
                    <span className="recaptcha-anchor-link">Terms</span>
                  </div>
                </div>
              </div> */}

              <Button type="submit" className="corp-lead-submit-btn-pill">
                Submit
              </Button>
            </Form>
          </>
        ) : (
          /* Thank You / Success visual state matching pixel perfect guidelines */
          <div className="corp-lead-success-screen text-center py-5">
            <div className="success-circle-checkmark-box mb-4">
              <svg className="success-checkmark-draw-svg" viewBox="0 0 52 52">
                <circle className="success-checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
            <h3 className="corp-lead-success-header font-sans">Thank you!</h3>
            <p className="corp-lead-success-subtext mb-4">
              Our corporate fitness consultants have successfully received your inquiry and will contact you shortly to elevate your team's morale.
            </p>
            <Button className="corp-lead-success-dismiss-btn" onClick={onHide}>
              Close Window
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CorporateLeadModal;
