import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import './ContactFormSection.css';

export const ContactFormSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    interestedIn: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/148620512/35307c60-339d-46bd-885f-784cbf542746',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
  fields: [
    {
      name: 'firstname',
      value: formData.firstname,
    },
    {
      name: 'lastname',
      value: formData.lastname,
    },
    {
      name: 'email',
      value: formData.email,
    },
    {
      name: 'phone',
      value: formData.phone,
    },
    {
      name: 'i_m_intrested_in',
      value: formData.interestedIn,
    },
    {
      name: 'message',
      value: formData.message,
    },
  ],
  context: {
    pageUri: window.location.href,
    pageName: document.title,
  },
}),
        }
      );

      if (!response.ok) {
  const errorData = await response.json();

  console.log('HubSpot Error:', errorData);

  throw new Error(JSON.stringify(errorData));
}

      setSuccess(true);

      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        interestedIn: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
        setError('Something went wrong. Please try again.');

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-card" id="contact-form-card-pane">
      <span className="contact-form-badge">
        SEND A MESSAGE
      </span>

      <h3 className="contact-form-title">
        Tell us what you need
      </h3>

      <p className="contact-form-subtitle">
        Fill in the form and our team will get back to you shortly.
      </p>

      {success && (
        <div className="alert alert-success mt-3">
          Thank you! We'll be in touch soon.
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}

      <Form onSubmit={handleSubmit} className="mt-4">

        <Row className="mb-4">
          <Col xs={12} sm={6} className="mb-3 mb-sm-0">
            <Form.Group controlId="con-first-name">
              <Form.Label className="contact-lbl">
                FIRST NAME
              </Form.Label>

              <Form.Control
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="John"
                className="contact-inp"
                required
              />
            </Form.Group>
          </Col>

          <Col xs={12} sm={6}>
            <Form.Group controlId="con-last-name">
              <Form.Label className="contact-lbl">
                LAST NAME
              </Form.Label>

              <Form.Control
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Doe"
                className="contact-inp"
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="con-email" className="mb-4">
          <Form.Label className="contact-lbl">
            EMAIL ADDRESS
          </Form.Label>

          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="contact-inp"
            required
          />
        </Form.Group>

        <Form.Group controlId="con-phone" className="mb-4">
          <Form.Label className="contact-lbl">
            PHONE NUMBER
          </Form.Label>

          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+971 50 000 0000"
            className="contact-inp"
          />
        </Form.Group>

        <Form.Group controlId="con-topic" className="mb-4">
          <Form.Label className="contact-lbl">
            I'M INTERESTED IN
          </Form.Label>

          <Form.Select
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
            className="contact-inp custom-select-style"
            required
          >
            <option value="" disabled>
              Select a topic
            </option>

            <option value="Inquiry">
              Inquiry
            </option>

            <option value="Complaint">
              Complaint
            </option>

            <option value="Corporate Programs">
              Corporate Programs
            </option>

            <option value="List your Brand">
              List your Brand
            </option>

            <option value="Other Queries">
              Other Queries
            </option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="con-message" className="mb-4">
          <Form.Label className="contact-lbl">
            MESSAGE
          </Form.Label>

          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your fitness goals or any questions you have..."
            className="contact-inp textarea-inp"
            required
          />
        </Form.Group>

        <button
          type="submit"
          className="contact-action-btn"
          disabled={loading}
        >
          {loading ? 'SENDING...' : 'SEND MESSAGE'}
          <ArrowRight
            size={16}
            className="button-arrow"
          />
        </button>

      </Form>
    </div>
  );
};

export default ContactFormSection;