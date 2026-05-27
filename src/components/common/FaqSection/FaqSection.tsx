import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './FaqSection.css';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqData: FaqItem[] = [
    {
      id: 1,
      question: "Lorem ipsum is simply dummy text of the printing and typesetting industry?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
      id: 2,
      question: "Lorem ipsum is simply dummy text of the printing and typesetting industry?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. This is another answers text block. Consistency pays you back with real Careem wallet payout, so you are always rewarded for your steps."
    },
    {
      id: 3,
      question: "Lorem ipsum is simply dummy text of the printing and typesetting industry?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Our personalized goals are adjusted specifically to your activity record, ensuring goals are challenging but fair and accessible."
    },
    {
      id: 4,
      question: "Lorem ipsum is simply dummy text of the printing and typesetting industry?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Real time steps synced smoothly via our wearable integration (Fitze Ring or mobile app trackers)."
    },
    {
      id: 5,
      question: "Lorem ipsum is simply dummy text of the printing and typesetting industry?",
      answer: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Yes! Payouts are guaranteed. Finish strong and earn rewards into your wallet automatically."
    }
  ];

  return (
    <section className="faq-section" id="fitze-faqs">
      <Container className="faq-container">
        {/* Title */}
        <h2 className="faq-main-heading text-center">
          Frequently asked questions
        </h2>

        {/* Custom Scoped Accordion list */}
        <div className="faq-accordion-list col-md-8 offset-md-2">
          {faqData.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={item.id} 
                className={`faq-accordion-item ${isExpanded ? 'expanded-item-state' : ''}`}
              >
                {/* Accordion Trigger Header */}
                <div 
                  className="faq-accordion-trigger d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="faq-question-text">
                    {item.question}
                  </span>
                  
                  {/* Circular Status Icon Badge */}
                  <div className={`faq-status-icon ${isExpanded ? 'icon-minus' : 'icon-plus'}`}>
                    {isExpanded ? '−' : '+'}
                  </div>
                </div>

                {/* Accordion Answer Content */}
                <div className={`faq-accordion-content-wrap ${isExpanded ? 'show-height' : ''}`}>
                  <div className="faq-answer-inner-padding">
                    <p className="faq-answer-paragraph">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
