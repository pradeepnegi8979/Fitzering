import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import './ContactFormSection.css';

export const ContactFormSection: React.FC = () => {
  const [topic, setTopic] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static UI only, as requested. Do not connect API.
  };

  return (
    <div className="contact-form-card" id="contact-form-card-pane">
      
      {/* Small Badge / Header */}
      <span className="contact-form-badge">SEND A MESSAGE</span>
      <h3 className="contact-form-title">Tell us what you need</h3>
      <p className="contact-form-subtitle">Fill in the form and our team will get back to you shortly.</p>

      {/* Form Area */}
      <Form onSubmit={handleSubmit} className="mt-4">
        
        {/* Name Fields (First & Last side-by-side) */}
        <Row className="mb-4">
          <Col xs={12} sm={6} className="mb-3 mb-sm-0">
            <Form.Group controlId="con-first-name">
              <Form.Label className="contact-lbl">FIRST NAME</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="John" 
                className="contact-inp"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="con-last-name">
              <Form.Label className="contact-lbl">LAST NAME</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Doe" 
                className="contact-inp"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Email Field */}
        <Form.Group controlId="con-email" className="mb-4">
          <Form.Label className="contact-lbl">EMAIL ADDRESS</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="you@example.com" 
            className="contact-inp"
            required
          />
        </Form.Group>

        {/* Phone Field */}
        <Form.Group controlId="con-phone" className="mb-4">
          <Form.Label className="contact-lbl">PHONE NUMBER</Form.Label>
          <Form.Control 
            type="tel" 
            placeholder="+971 50 000 0000" 
            className="contact-inp"
          />
        </Form.Group>

        {/* Topic dropdown */}
        <Form.Group controlId="con-topic" className="mb-4">
          <Form.Label className="contact-lbl">I'M INTERESTED IN</Form.Label>
          <Form.Select 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="contact-inp custom-select-style"
            required
          >
            <option value="" disabled hidden>Select a topic</option>
            <option value="partnership">Partnership Opportunities</option>
            <option value="corporate">Corporate Challenges</option>
            <option value="support">Fitze Ring Tech Support</option>
            <option value="general">General Feedback</option>
            <option value="other">Other Queries</option>
          </Form.Select>
        </Form.Group>

        {/* Message Input */}
        <Form.Group controlId="con-message" className="mb-4">
          <Form.Label className="contact-lbl">MESSAGE</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            placeholder="Tell us about your fitness goals or any questions you have..." 
            className="contact-inp textarea-inp"
            required
          />
        </Form.Group>

        {/* Submit Action Block */}
        <button type="submit" className="contact-action-btn">
          SEND MESSAGE <ArrowRight size={16} className="button-arrow" />
        </button>

      </Form>

    </div>
  );
};

export default ContactFormSection;
