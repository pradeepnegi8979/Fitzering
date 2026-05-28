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
      question: '1. What does fitze Ring track?',
      answer: (
        <>
          <p>fitze Ring tracks:</p>

          <ul className="faq-bullet-list">
            <li>Activity</li>
            <li>Sleep</li>
            <li>Stress Balance</li>
            <li>Heart Rate</li>
            <li>HRV</li>
            <li>Blood Oxygen</li>
            <li>Skin Temperature Trends</li>
          </ul>

          <p>
            All insights sync seamlessly with the fitze app.
          </p>
        </>
      )
    },

    {
      id: 2,
      question: '2. How does fitze Ring work with the fitze app?',
      answer: (
        <>
          <p>
            fitze Ring connects directly to the fitze app,
            allowing you to:
          </p>

          <ul className="faq-bullet-list">
            <li>Track wellness insights</li>
            <li>Join Challenges</li>
            <li>Participate in Streaks</li>
            <li>Unlock rewards</li>
          </ul>

          <p>
            All through one connected experience.
          </p>
        </>
      )
    },

    {
      id: 3,
      question: '3. Do I need a fitze Ring to use the fitze app?',
      answer: (
        <p>
          No. You can use fitze without a Ring. fitze Ring
          enhances the experience by unlocking deeper wellness
          insights and more accurate tracking.
        </p>
      )
    },

    {
      id: 4,
      question: '4. How long does the battery last?',
      answer: (
        <p>
          fitze Ring typically lasts 4–6 days on a single
          charge, depending on usage and settings.
        </p>
      )
    },

    {
      id: 5,
      question: '5. How long does charging take?',
      answer: (
        <p>
          A full charge typically takes around 2 hours.
        </p>
      )
    },

    {
      id: 6,
      question: '6. Is fitze compatible with iPhone and Android?',
      answer: (
        <>
          <p>Yes. fitze app works with:</p>

          <ul className="faq-bullet-list">
            <li>iOS 15 and above</li>
            <li>Android 6 and above</li>
          </ul>
        </>
      )
    },

    {
      id: 7,
      question: '7. Is fitze Ring waterproof?',
      answer: (
        <>
          <p>
            Yes. fitze Ring is water resistant up to 5ATM,
            making it suitable for:
          </p>

          <ul className="faq-bullet-list">
            <li>Handwashing</li>
            <li>Showers</li>
            <li>Workouts</li>
            <li>Swimming</li>
          </ul>

          <p>
            We recommend avoiding prolonged exposure to hot
            water, steam rooms, saunas, and high-pressure
            water.
          </p>
        </>
      )
    },

    {
      id: 8,
      question: '8. Which finger should I wear it on?',
      answer: (
        <>
          <p>
            fitze Ring can be worn on any finger. Most users
            prefer:
          </p>

          <ul className="faq-bullet-list">
            <li>Index finger</li>
            <li>Middle finger</li>
          </ul>

          <p>
            The best fit is one that feels secure and
            comfortable throughout the day and night.
          </p>
        </>
      )
    },

    {
      id: 9,
      question: '9. How do I choose the right size?',
      answer: (
        <>
          <p>
            Every fitze Ring includes a complimentary Sizing
            Kit.
          </p>

          <ul className="faq-bullet-list">
            <li>Place your order</li>
            <li>Receive the sizing kit first</li>
            <li>Wear the sample ring for 24–48 hours</li>
            <li>Confirm your preferred size</li>
          </ul>

          <p>
            Your fitze Ring will then be prepared and shipped
            to you.
          </p>
        </>
      )
    },

    {
      id: 10,
      question:
        '10. Can I exchange my Ring if the size is wrong?',
      answer: (
        <>
          <p>
            Yes. One complimentary size exchange is permitted
            per order.
          </p>

          <ul className="faq-bullet-list">
            <li>Return must be in unused condition</li>
            <li>Original packaging is required</li>
            <li>Accessories must be included</li>
          </ul>
        </>
      )
    },

    {
      id: 11,
      question: "11. What's included in the box?",
      answer: (
        <>
          <p>Every fitze Ring includes:</p>

          <ul className="faq-bullet-list">
            <li>fitze Ring</li>
            <li>Charging Dock</li>
            <li>USB Type-C Charging Cable</li>
            <li>Quick Start Guide</li>
          </ul>
        </>
      )
    },

    {
      id: 12,
      question: '12. Is fitze Ring a medical device?',
      answer: (
        <p>
          No. fitze Ring is designed for wellness and fitness
          purposes only and is not intended for medical
          diagnosis, treatment, or emergency monitoring.
        </p>
      )
    },

    {
      id: 13,
      question:
        '13. Can I wear fitze Ring while sleeping?',
      answer: (
        <p>
          Yes. In fact, overnight wear is recommended to
          unlock sleep and recovery insights.
        </p>
      )
    },

    {
      id: 14,
      question:
        '14. How does fitze Ring help me stay consistent?',
      answer: (
        <>
          <p>
            fitze Ring combines wellness tracking with the
            fitze ecosystem to help you:
          </p>

          <ul className="faq-bullet-list">
            <li>Stay aware of your body</li>
            <li>Build healthier habits</li>
            <li>Stay motivated through rewards</li>
            <li>Join Challenges and Streaks</li>
          </ul>
        </>
      )
    },

    {
      id: 15,
      question:
        '15. What materials is fitze Ring made from?',
      answer: (
        <p>
          fitze Ring features a titanium exterior and a
          lightweight design built for comfortable everyday
          wear.
        </p>
      )
    }
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