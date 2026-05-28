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
      question: 'What are Streaks?',
      answer: (
        <>
          <p>Streaks are consistency-based walking programs where you commit to a personalised daily step goal over a pre-defined period of time.</p>
          <p>Complete your goals to qualify for a payout from the reward pool. All finishers equally split the reward pool, and payouts are credited directly into your Careem wallet.</p>
          <p>Unlike regular fitness challenges, Streaks are designed around consistency and commitment. Showing up every day matters.</p>
        </>
      )
    },

    {
      id: 2,
      question: 'How do I earn?',
      answer: (
        <>
          <p>To earn through a Streak:</p>
          <ul className="faq-bullet-list">
            <li>join an active Streak using a Streak Credit</li>
            <li>complete your personalised daily goals</li>
            <li>finish the Streak without being eliminated</li>
          </ul>
          <p>At the end of the Streak, the reward pool is equally split amongst all finishers, and your payout is credited directly to your Careem wallet.</p>
        </>
      )
    },

    {
      id: 3,
      question: 'Is there any luck involved?',
      answer: (
        <>
        <p>No. Streaks are entirely performance-based.</p>
        <p>There are:</p>
        <ul className="faq-bullet-list">
            <li>no random winners</li>
            <li>no lucky draws</li>
            <li>no chance-based outcomes</li>
          </ul>
          <p>Your result depends entirely on whether you successfully complete your goals and remain in the Streak until the end.</p>
        </>
      )
    },

    {
      id: 4,
      question: 'What happens if I miss a goal?',
      answer: (
        <>
        <p>Missing a required goal results in automatic elimination from the Streak.</p>
        <p>Once eliminated:</p>
        <ul className="faq-bullet-list">
          <li>your Streak ends immediately</li>
          <li>your Streak Credit is consumed</li>
          <li>you become ineligible for payouts associated with that Streak</li>
        </ul>
        <p>There are no retries or recovery once eliminated.</p>
        </>
      )
    },

    {
      id: 5,
      question: 'How are payouts made?',
      answer: (
        <>
        <p>Each Streak has a pre-funded reward pool.</p>
        <p>At the end of the Streak:</p>
        <ul>
          <li>users who successfully complete all requirements qualify for payouts</li>
          <li>the total pool is split equally among all finishers</li>
        </ul>
        <p>The fewer the number of finishers, the larger the payout per user.</p>
        <p>Payouts are processed through Careem and may take up to 5 business days after final activity validation.</p>
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