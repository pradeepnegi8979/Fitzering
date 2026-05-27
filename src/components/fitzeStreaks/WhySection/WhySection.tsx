import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './WhySection.module.css';

interface WhyCard {
  id: string;
  title: string;
  description: string;
}

export const WhySection: React.FC = () => {
  const cards: WhyCard[] = [
    {
      id: '01',
      title: 'Guaranteed payout — not a lottery',
      description:
        "Finish your streak and you earn. It's not a draw. It's not luck. Your consistency is the only thing that matters.",
    },
    {
      id: '02',
      title: 'The fewer who finish, the more you earn',
      description:
        'The reward pool is split among finishers only. Drop-outs increase your share automatically.',
    },
    {
      id: '03',
      title: 'Personalised step targets',
      description:
        'Your daily goal is calibrated to your fitness level — not a one-size-fits-all number. Fair for everyone in the pool.',
    },
    {
      id: '04',
      title: 'Rest days protect your streak',
      description:
        "Life happens. Every streak includes automatic rest days so missing one day doesn't cost you your reward.",
    },
  ];

  return (
    <section
      className={styles['fitze-why-section']}
      id="why-fitze-streaks"
    >
      <Container className={styles['why-section-container']}>

        {/* Header */}
        <div
          className={`${styles['why-header-block']} text-start`}
        >
          <span className={styles['why-eyebrow']}>
            WHY FITZE STREAKS
          </span>

          <h2 className={styles['why-main-title']}>
            Built different.
            <span className={styles['why-highlight-orange']}>
              By design.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <Row
          className={`g-4 ${styles['why-cards-row']}`}
        >
          {cards.map((card) => (
            <Col
              lg={3}
              md={6}
              sm={12}
              className={styles['why-card-col']}
              key={card.id}
            >
              <div
                className={styles['why-card-box-premium']}
              >
                <div className={styles['why-card-index']}>
                  {card.id}
                </div>

                <h4 className={styles['why-card-title']}>
                  {card.title}
                </h4>

                <p className={styles['why-card-desc']}>
                  {card.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default WhySection;