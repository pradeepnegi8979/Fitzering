import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './FaqSection.css';

interface FaqItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

export const FaqSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Show only 5 initially
  const [showAll, setShowAll] = useState(false);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqData: FaqItem[] = [
    {
      id: 1,
      question: 'What is fitze PRO?',
      answer: (
        <>
          <p>fitze PRO is a premium subscription that unlocks more from the fitze experience including Streak entries, unlimited Challenges, enhanced rewards, bonus entries in challenge draws and priority support.</p>
        </>
      )
    },
    {
      id: 2,
      question: 'Do I need PRO to use fitze?',
      answer: (
        <>
          <p>
            No. fitze is free to use. PRO simply unlocks additional features, benefits and earning opportunities across the app.
          </p>
        </>
      )
    },
    {
      id: 3,
      question: 'Can I cancel anytime?',
      answer: (
        <p>
          Yes. You can cancel your subscription anytime from your account settings. Your PRO benefits will remain active until the end of your billing cycle.
        </p>
      )
    },
    {
      id: 4,
      question: 'Does PRO include Streak entries?',
      answer: (
        <p>
          Yes. All fitze PRO plans include pre-defined number of complimentary Streak entries as part of the subscription benefits.
        </p>
      )
    },
    {
      id: 5,
      question: 'Is fitze Ring included?',
      answer: (
        <p>
          No. fitze Ring is sold separately and is not included with fitze PRO subscriptions.
        </p>
      )
    },
    {
      id: 6,
      question: 'Do fitze Ring owners get PRO?',
      answer: (
        <>
          <p>Yes. fitze Ring users may receive complimentary fitze PRO access as part of limited-time launch offers or bundled promotions.</p>
        </>
      )
    },
    {
      id: 7,
      question: 'How do payouts work?',
      answer: (
        <>
          <p>Eligible Streak payouts are processed through fitze’s official payout partner, Careem. Complete your Streak successfully to qualify for your share of the reward pool.</p>
        </>
      )
    },
    {
      id: 8,
      question: 'How can I upgrade to fitze PRO?',
      answer: (
        <>
          <p>You can upgrade to fitze PRO anytime directly from the app.</p>
        </>
      )
    },
  ];
  // Show first 5 initially
  const visibleFaqs = showAll
    ? faqData
    : faqData.slice(0, 5);

  return (
    <section className="faq-section" id="fitze-faqs">
      <Container className="faq-container">

        {/* Heading */}
        <h2 className="faq-main-heading text-center">
          Frequently asked questions
        </h2>

        {/* FAQ List */}
        <div className="faq-accordion-list col-md-8 offset-md-2">
          {visibleFaqs.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={item.id}
                className={`faq-accordion-item ${
                  isExpanded ? 'expanded-item-state' : ''
                }`}
              >
                {/* Accordion Header */}
                <div
                  className="faq-accordion-trigger d-flex justify-content-between align-items-center"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="faq-question-text">
                    {item.question}
                  </span>

                  {/* Plus Minus Icon */}
                  <div
                    className={`faq-status-icon ${
                      isExpanded ? 'icon-minus' : 'icon-plus'
                    }`}
                  >
                    {isExpanded ? '−' : '+'}
                  </div>
                </div>

                {/* Accordion Content */}
                <div
                  className={`faq-accordion-content-wrap ${
                    isExpanded ? 'show-height' : ''
                  }`}
                >
                  <div className="faq-answer-inner-padding">
                    <div className="faq-answer-paragraph">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Load More Button */}
          {!showAll && faqData.length > 5 && (
            <div className="text-center mt-4">
              <button
                className="faq-load-more-btn"
                onClick={() => setShowAll(true)}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;