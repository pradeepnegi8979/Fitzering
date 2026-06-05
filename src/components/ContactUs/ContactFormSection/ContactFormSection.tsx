import React, { useEffect, useRef } from 'react';
import './ContactFormSection.css';

declare global {
  interface Window {
    hbspt: any;
  }
}

export const ContactFormSection: React.FC = () => {
  const formLoaded = useRef(false);

  useEffect(() => {
    if (formLoaded.current) return;

    const createForm = () => {
      if (formLoaded.current) return;

      const container = document.getElementById('hubspot-form');

      if (!container) return;

      formLoaded.current = true;

      window.hbspt.forms.create({
        region: 'eu1',
        portalId: '148620512',
        formId: '35307c60-339d-46bd-885f-784cbf542746',
        target: '#hubspot-form',
      });
    };

    if (window.hbspt) {
      createForm();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = createForm;

    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="contact-form-card"
      id="contact-form-card-pane"
    >
      <span className="contact-form-badge">
        SEND A MESSAGE
      </span>

      <h3 className="contact-form-title">
        Tell us what you need
      </h3>

      <p className="contact-form-subtitle">
        Fill in the form and our team will get back to you shortly.
      </p>

      <div id="hubspot-form"></div>
    </div>
  );
};

export default ContactFormSection;