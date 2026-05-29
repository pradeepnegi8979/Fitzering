import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { MapPin, Flame } from 'lucide-react';
import './SevenSignalsSection.css';
import sevenSignals1 from '../../../assets/oneRingimg1.png';
import sevenSignals2 from '../../../assets/oneRingimg2.png';
import sevenSignals3 from '../../../assets/oneRingimg3.png';
import sevenSignals4 from '../../../assets/oneRingimg4.png';
import sevenSignals5 from '../../../assets/oneRingimg5.png';
import sevenSignals6 from '../../../assets/oneRingimg6.png';
import sevenSignals7 from '../../../assets/oneRingimg7.png';
import VideoPage from '../../../assets/fitze-ring-move.mp4';
interface BentoCard {
  id: number;
  badge: string;
  badgeClass: string;
  title: string;
  description: string;
  bgImage: string;
  key: string;
}

export const SevenSignalsSection: React.FC = () => {
  // Activity state or interactivity values
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [scoreVal, setScoreVal] = useState(0);

  // Smooth numeric count up overlay for Fitze Score card
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hoveredCard === 8) {
      setScoreVal(0);
      let count = 0;
      interval = setInterval(() => {
        if (count < 88) {
          count += 2;
          setScoreVal(count);
        } else {
          setScoreVal(88);
          clearInterval(interval);
        }
      }, 15);
    } else {
      setScoreVal(0);
    }
    return () => clearInterval(interval);
  }, [hoveredCard]);

  const cards: BentoCard[] = [
    {
      id: 1,
      badge: 'Activity Tracking',
      badgeClass: 'badge-activity',
      title: 'Move More, Live Better.',
      description: 'Understand how much you move each day and how your activity shapes your health.',
      bgImage: sevenSignals1,
      key: 'activity',
    },
    {
      id: 2,
      badge: 'Sleep Analysis',
      badgeClass: 'badge-sleep',
      title: 'Better Nights. Better Days.',
      description: 'See how long you sleep, how deeply you rest, and how your nights shape your days, and how your activity shapes your health.',
      bgImage: sevenSignals2,
      key: 'sleep',
    },
    {
      id: 3,
      badge: 'Stress Insights',
      badgeClass: 'badge-stress',
      title: 'Know When to Slow Down.',
      description: 'Understand how your body responds to pressure and when it needs recovery.',
      bgImage:sevenSignals3,
      key: 'stress',
    },
    {
      id: 4,
      badge: 'Heart Rate',
      badgeClass: 'badge-heart',
      title: 'Understand Your Effort.',
      description: 'See how your heart responds to activity, rest and recovery. Two powerful signals that reveal how ready your body is for the day ahead.',
      bgImage: sevenSignals4,
      key: 'heart',
    },
    {
      id: 5,
      badge: 'HRV',
      badgeClass: 'badge-hrv',
      title: 'Your Readiness, Revealed.',
      description: 'See how your heart responds to activity, rest and recovery. Two powerful signals that reveal how ready your body is for the day ahead.',
      bgImage:sevenSignals5,
      key: 'hrv',
    },
    {
      id: 6,
      badge: 'Blood Oxygen',
      badgeClass: 'badge-oxygen',
      title: 'Know When Energy Drops.',
      description: 'Track your blood oxygen levels and understand how your body supports energy and recovery.',
      bgImage:sevenSignals6,
      key: 'oxygen',
    },
    {
      id: 7,
      badge: 'Skin Temperature',
      badgeClass: 'badge-temp',
      title: "Your Body's Subtle Signals.",
      description: 'Small temperature changes can reflect shifts in recovery, strain or rest. Your body often signals before you feel it.',
      bgImage: sevenSignals7,
      key: 'temp',
    },
  ];

  return (
    <section className="seven-signals-section" id="seven-signals">
      <Container className="seven-signals-container">
        {/* Elegant Section Header */}
        <header className="seven-signals-header text-center mb-5">
          <span className="track-matters-badge">TRACK WHAT MATTERS</span>
          <h2 className="seven-signals-title">
            Seven Signals. <span className="highlight-orange">One Ring.</span>
          </h2>
          <p className="seven-signals-sub">
            Your body speaks, fitze Ring helps you listen.
          </p>
        </header>

        {/* Bento Staggered Master Container */}
        <div className="bento-staggered-grid">
          
          {/* Row 1: Activity (Left: 58%) & Sleep (Right: 42%) */}
          <div className="bento-row row-ratio-58-42">
            
            {/* Card 1: Activity Tracking */}
            <div 
              className={`bento-card card-activity ${hoveredCard === 1 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[0].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              {/* Default Content */}
              <div className="card-top-bar">
                <span className={`bento-badge ${cards[0].badgeClass}`}>{cards[0].badge}</span>
              </div>
              
              <div className="card-content-wrap">
                <h3 className="bento-card-title">{cards[0].title}</h3>
                <p className="bento-card-desc desc-activity">{cards[0].description}</p>
              </div>

              {/* Hover Overlay: Circular Steps Progress Arch with Stats */}
              <div className="hover-overlay-container overlay-activity">
                <div className="steps-arch-widget">
                  {/* Step Goal label positioned exactly on top of the circle curve */}
                  <div className="steps-goal-label text-center" style={{ fontSize: '0.58rem', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.8px', marginBottom: '-4px' }}>
                    STEP GOAL: 10,975
                  </div>
                  <div className="steps-svg-box">
                    <svg viewBox="0 0 200 120" className="radial-arch-svg">
                      <line x1="10" y1="110" x2="190" y2="110" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
                      {/* Background Arch Track */}
                      <path 
                        d="M 30,110 A 70,70 0 0,1 170,110" 
                        fill="none" 
                        stroke="rgba(255, 255, 255, 0.12)" 
                        strokeWidth="12" 
                        strokeLinecap="round" 
                      />
                      {/* Colored Active Arch Fill */}
                      <path 
                        d="M 30,110 A 70,70 0 0,1 170,110" 
                        fill="none" 
                        stroke="url(#orange-grad)" 
                        strokeWidth="12" 
                        strokeLinecap="round" 
                        strokeDasharray="219.9" 
                        strokeDashoffset="22" /* 90% progress */
                        className="arch-svg-fill"
                      />
                      <defs>
                        <linearGradient id="orange-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FE5226" />
                          <stop offset="100%" stopColor="#FF8F3D" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    <div className="arch-text-content">
                      <span className="arch-main">10,328</span>
                      <span className="arch-small">Total Steps</span>
                    </div>
                  </div>

                  {/* Below Arch Metric Row */}
                  <div className="arch-metrics-footer">
                    <div className="metric-col">
                      <span className="metric-icon-wrap"><MapPin size={15} color="#FE5226" /></span>
                      <div className="metric-info">
                        <span className="metric-val">6.2 kms</span>
                        <span className="metric-lbl">Distance</span>
                      </div>
                    </div>
                    <div className="metric-col">
                      <span className="metric-icon-wrap"><Flame size={15} color="#FF8F3D" /></span>
                      <div className="metric-info">
                        <span className="metric-val">1,200</span>
                        <span className="metric-lbl">Calories</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Sleep Analysis */}
            <div 
              className={`bento-card card-sleep ${hoveredCard === 2 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[1].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              <div className="card-top-bar" style={{ minHeight: '1px' }}>
                {/* Empty to allocate space to top right diagram */}
              </div>

              <div className="card-content-wrap">
                <span className={`bento-badge ${cards[1].badgeClass}`} style={{ width: 'fit-content', marginBottom: '8px' }}>{cards[1].badge}</span>
                <h3 className="bento-card-title">{cards[1].title}</h3>
                <p className="bento-card-desc desc-sleep">{cards[1].description}</p>
              </div>

              {/* Hover Overlay: Sleep Hypnogram visual stage bars */}
              <div className="hover-overlay-container overlay-sleep">
                <div className="sleep-hypnogram">
                  <div className="hypnogram-bars">
                    {/* Simulated Sleep stages blocks (Deep, light, REM, Awake) */}
                    <div className="hypno-col awake" style={{ height: '70%', animationDelay: '0.05s' }}></div>
                    <div className="hypno-col rem" style={{ height: '45%', animationDelay: '0.1s' }}></div>
                    <div className="hypno-col light" style={{ height: '30%', animationDelay: '0.15s' }}></div>
                    <div className="hypno-col deep" style={{ height: '15%', animationDelay: '0.2s' }}></div>
                    <div className="hypno-col light" style={{ height: '35%', animationDelay: '0.25s' }}></div>
                    <div className="hypno-col deep" style={{ height: '18%', animationDelay: '0.3s' }}></div>
                    <div className="hypno-col rem" style={{ height: '50%', animationDelay: '0.35s' }}></div>
                    <div className="hypno-col light" style={{ height: '32%', animationDelay: '0.4s' }}></div>
                    <div className="hypno-col awake" style={{ height: '75%', animationDelay: '0.45s' }}></div>
                    <div className="hypno-col light" style={{ height: '28%', animationDelay: '0.5s' }}></div>
                    <div className="hypno-col deep" style={{ height: '12%', animationDelay: '0.55s' }}></div>
                    <div className="hypno-col rem" style={{ height: '48%', animationDelay: '0.6s' }}></div>
                    <div className="hypno-col awake" style={{ height: '65%', animationDelay: '0.65s' }}></div>
                  </div>
                  
                  {/* Overlaid line trend graph inside sleep blocks */}
                  <svg className="sleep-trend-svg" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <path 
                      d="M10,80 Q 40,55 70,75 T 130,85 T 190,60 T 250,70 T 290,40" 
                      fill="none" 
                      stroke="#A78BFA" 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                    />
                    <circle cx="190" cy="60" r="4.5" fill="#ffffff" stroke="#8B5CF6" strokeWidth="2.5" className="pulsing-hypno-dot" />
                  </svg>

                  <div className="hypno-timeline">
                    <span className="timeline-stamp">22:32</span>
                    <span className="timeline-stamp text-center" style={{ flex: 1, color: '#A78BFA', fontWeight: 500 }}>RESTORATIVE FLOW</span>
                    <span className="timeline-stamp text-end">07:01</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Row 2: Stress (Left: 40%) & Heart Rate (Right: 60%) */}
          <div className="bento-row row-ratio-40-60">
            
            {/* Card 3: Stress Insights */}
            <div 
              className={`bento-card card-stress ${hoveredCard === 3 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[2].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              <div className="card-top-bar">
                <span className={`bento-badge ${cards[2].badgeClass}`}>{cards[2].badge}</span>
              </div>

              <div className="card-content-wrap">
                <h3 className="bento-card-title">{cards[2].title}</h3>
                <p className="bento-card-desc desc-stress">{cards[2].description}</p>
              </div>

              {/* Hover Overlay: Stress Timeline Equalizer representation */}
              <div className="hover-overlay-container overlay-stress">
                <div className="equalizer-stress-widget">
                  <div className="equalizer-bars-group">
                    {/* Series of bars with colored hints based on diurnal cycle in image.png */}
                    <div className="eq-bar state-calm" style={{ height: '42%' }}></div>
                    <div className="eq-bar state-calm" style={{ height: '35%' }}></div>
                    <div className="eq-bar state-calm" style={{ height: '48%' }}></div>
                    <div className="eq-bar state-calm" style={{ height: '22%' }}></div>
                    <div className="eq-bar state-normal" style={{ height: '55%' }}></div>
                    <div className="eq-bar state-normal" style={{ height: '62%' }}></div>
                    <div className="eq-bar state-stress" style={{ height: '78%' }}></div>
                    <div className="eq-bar state-stress" style={{ height: '85%' }}></div>
                    <div className="eq-bar state-stress" style={{ height: '70%' }}></div>
                    <div className="eq-bar state-normal" style={{ height: '45%' }}></div>
                    <div className="eq-bar state-calm" style={{ height: '28%' }}></div>
                    <div className="eq-bar state-calm" style={{ height: '18%' }}></div>
                  </div>
                  
                  <div className="equalizer-axis">
                    <span className="axis-point">00:00</span>
                    <span className="axis-point">12:00</span>
                    <span className="axis-point">18:00</span>
                    <span className="axis-point text-end">23:59</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Heart Rate */}
            <div 
              className={`bento-card card-heart ${hoveredCard === 4 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[3].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              <div className="card-top-bar">
                <span className={`bento-badge ${cards[3].badgeClass}`}>{cards[3].badge}</span>
              </div>

              <div className="card-content-wrap card-content-heart">
                <h3 className="bento-card-title">{cards[3].title}</h3>
                <p className="bento-card-desc desc-heart">{cards[3].description}</p>
              </div>

              {/* Hover Overlay: Heart Rate magenta pulse wave line graph */}
              <div className="hover-overlay-container overlay-heart">
                <div className="cardiac-wave-widget">
                  <div className="cardiac-viewport">
                    <svg className="cardiac-curve-svg" viewBox="0 0 450 140" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="magenta-fade" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(236, 72, 153, 0.45)" />
                          <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
                        </linearGradient>
                      </defs>
                      
                      {/* Grid guideline reference */}
                      <line x1="0" y1="35" x2="450" y2="35" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="5,5" />
                      <line x1="0" y1="70" x2="450" y2="70" stroke="rgba(255, 255, 255, 0.08)" />
                      <line x1="0" y1="105" x2="450" y2="105" stroke="rgba(255, 255, 255, 0.05)" strokeDasharray="5,5" />
                      
                      {/* Gradient Fill under path */}
                      <path 
                        d="M 0,110 L 0,100 Q 30,95 50,110 T 100,60 T 140,115 T 180,95 T 210,105 T 250,55 T 280,120 T 320,75 T 380,100 T 430,90 L 450,90 L 450,140 L 0,140 Z" 
                        fill="url(#magenta-fade)" 
                      />
                      
                      {/* Glowing stroke path representing HRV pulse line */}
                      <path 
                        d="M 0,100 Q 30,95 50,110 T 100,60 T 140,115 T 180,95 T 210,105 T 250,55 T 280,120 T 320,75 T 380,100 T 430,90 L 450,90" 
                        fill="none" 
                        stroke="#EC4899" 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                        className="cardiac-live-path"
                      />
                      <circle cx="250" cy="55" r="5" fill="#ffffff" stroke="#EC4899" strokeWidth="3" className="cardiac-pulse-node" />
                    </svg>
                    
                    {/* Ticks on the right */}
                    <div className="cardiac-ticks">
                      <span className="tick-node">140</span>
                      <span className="tick-node">70</span>
                      <span className="tick-node">0</span>
                    </div>
                  </div>

                  <div className="cardiac-timeline">
                    <span className="timeline-point">00:00</span>
                    <span className="timeline-point">06:00</span>
                    <span className="timeline-point font-bold text-pink-400">NORMAL FLOW</span>
                    <span className="timeline-point">12:00</span>
                    <span className="timeline-point">18:00</span>
                    <span className="timeline-point text-end">23:59</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Row 3: HRV (Left: 58%) & Blood Oxygen (Right: 42%) */}
          <div className="bento-row row-ratio-58-42">
            
            {/* Card 5: HRV */}
            <div 
              className={`bento-card card-hrv ${hoveredCard === 5 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[4].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              <div className="card-top-bar">
                <span className={`bento-badge ${cards[4].badgeClass}`}>{cards[4].badge}</span>
              </div>

              <div className="card-content-wrap">
                <h3 className="bento-card-title">{cards[4].title}</h3>
                <p className="bento-card-desc desc-hrv">{cards[4].description}</p>
              </div>

              {/* Hover Overlay: Cyan vertical bars for Heart Rate Variability */}
              <div className="hover-overlay-container overlay-hrv">
                <div className="hrv-chart-widget">
                  <div className="hrv-viewport">
                    <div className="hrv-bars-grid">
                      <div className="hrv-column" style={{ height: '45%' }}></div>
                      <div className="hrv-column" style={{ height: '52%' }}></div>
                      <div className="hrv-column" style={{ height: '38%' }}></div>
                      <div className="hrv-column" style={{ height: '60%' }}></div>
                      <div className="hrv-column active-pulse" style={{ height: '75%' }}></div>
                      <div className="hrv-column" style={{ height: '65%' }}></div>
                      <div className="hrv-column" style={{ height: '82%' }}></div>
                      <div className="hrv-column" style={{ height: '70%' }}></div>
                      <div className="hrv-column" style={{ height: '58%' }}></div>
                      <div className="hrv-column" style={{ height: '48%' }}></div>
                      <div className="hrv-column" style={{ height: '66%' }}></div>
                      <div className="hrv-column" style={{ height: '78%' }}></div>
                      <div className="hrv-column" style={{ height: '90%' }}></div>
                      <div className="hrv-column" style={{ height: '80%' }}></div>
                      <div className="hrv-column" style={{ height: '55%' }}></div>
                      <div className="hrv-column" style={{ height: '42%' }}></div>
                    </div>

                    <div className="hrv-ticks-legend">
                      <span className="legend-val">100</span>
                      <span className="legend-val">95</span>
                      <span className="legend-val">90</span>
                    </div>
                  </div>

                  <div className="hrv-timeline">
                    <span className="timeline-point">00:00</span>
                    <span className="timeline-point">06:00</span>
                    <span className="timeline-point text-center" style={{ flex: 1, color: '#2DD4BF' }}>92ms AVG VARIABILITY</span>
                    <span className="timeline-point">12:00</span>
                    <span className="timeline-point">18:00</span>
                    <span className="timeline-point text-end">23:59</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Blood Oxygen */}
            <div 
              className={`bento-card card-oxygen ${hoveredCard === 6 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(6)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[5].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              <div className="card-top-bar col-direction">
                <span className={`bento-badge ${cards[5].badgeClass}`}>{cards[5].badge}</span>
                <h3 className="bento-card-title mt-2">{cards[5].title}</h3>
              </div>

              <div className="card-content-wrap">
                <p className="bento-card-desc desc-oxygen">{cards[5].description}</p>
              </div>

              {/* Hover Overlay: Green rounded columns illustrating blood oxygen */}
              <div className="hover-overlay-container overlay-oxygen">
                <div className="oxygen-chart-widget">
                  <div className="oxygen-viewport">
                    <div className="oxygen-bars-grid">
                      <div className="oxy-col" style={{ height: '88%' }}></div>
                      <div className="oxy-col" style={{ height: '92%' }}></div>
                      <div className="oxy-col" style={{ height: '90%' }}></div>
                      <div className="oxy-col" style={{ height: '95%' }}></div>
                      <div className="oxy-col peak" style={{ height: '99%' }}></div>
                      <div className="oxy-col" style={{ height: '97%' }}></div>
                      <div className="oxy-col" style={{ height: '94%' }}></div>
                      <div className="oxy-col" style={{ height: '91%' }}></div>
                      <div className="oxy-col" style={{ height: '89%' }}></div>
                      <div className="oxy-col" style={{ height: '93%' }}></div>
                      <div className="oxy-col" style={{ height: '96%' }}></div>
                    </div>

                    <div className="oxygen-ticks">
                      <span className="tick">100</span>
                      <span className="tick">95</span>
                      <span className="tick">90</span>
                    </div>
                  </div>

                  <div className="oxygen-timeline">
                    <span className="timeline-col">00:00</span>
                    <span className="timeline-col">06:00</span>
                    <span className="timeline-col">12:00</span>
                    <span className="timeline-col">18:00</span>
                    <span className="timeline-col text-end">23:59</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Row 4: Skin Temperature (Left: 50%) & Fitze Score White (Right: 50%) */}
          <div className="bento-row row-ratio-50-50">
            
            {/* Card 7: Skin Temperature */}
            <div 
              className={`bento-card card-temp ${hoveredCard === 7 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(7)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-bg" style={{ backgroundImage: `url(${cards[6].bgImage})` }}></div>
              <div className="card-darkener"></div>
              
              <div className="card-top-bar col-direction">
                <span className={`bento-badge ${cards[6].badgeClass}`}>{cards[6].badge}</span>
                <h3 className="bento-card-title mt-2">{cards[6].title}</h3>
              </div>

              <div className="card-content-wrap">
                <p className="bento-card-desc desc-temp">{cards[6].description}</p>
              </div>

              {/* Hover Overlay: Temperature cool wave chart */}
              <div className="hover-overlay-container overlay-temp">
                <div className="temp-chart-widget">
                  <div className="temp-viewport">
                    <div className="temp-bars-trend">
                      <div className="temp-bar cool" style={{ height: '40%' }}></div>
                      <div className="temp-bar cool" style={{ height: '48%' }}></div>
                      <div className="temp-bar neutral" style={{ height: '50%' }}></div>
                      <div className="temp-bar warm" style={{ height: '62%' }}></div>
                      <div className="temp-bar neutral" style={{ height: '51%' }}></div>
                      <div className="temp-bar cool" style={{ height: '35%' }}></div>
                      <div className="temp-bar cool" style={{ height: '28%' }}></div>
                      <div className="temp-bar warm" style={{ height: '58%' }}></div>
                      <div className="temp-bar warm" style={{ height: '65%' }}></div>
                      <div className="temp-bar neutral" style={{ height: '50%' }}></div>
                      <div className="temp-bar cool" style={{ height: '44%' }}></div>
                    </div>

                    <div className="temp-ticks">
                      <span className="tick">+0.5°</span>
                      <span className="tick">0.0°</span>
                      <span className="tick">-0.5°</span>
                    </div>
                  </div>

                  <div className="temp-timeline">
                    <span className="timeline-col">00:00</span>
                    <span className="timeline-col">08:00</span>
                    <span className="timeline-col">12:00</span>
                    <span className="timeline-col">18:00</span>
                    <span className="timeline-col text-end">23:59</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 8: Fitze Score (Clean White Card Layout) */}
            <div 
              className={`bento-card card-fitze-score ${hoveredCard === 8 ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(8)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="fitze-card-content">
                <div className="fitze-left-text">
                  <span className="fitze-badge">FITZE SCORE</span>
                  
                  <div className="fitze-text-body">
                    <h3 className="fitze-main-heading">Your day,</h3>
                    <h2 className="fitze-main-heading bold-sub">Simplified.</h2>
                    <p className="fitze-description">
                      Your daily snapshot of how balanced, active, and in control your body is.
                    </p>
                  </div>
                </div>
                 
                {/* Concentric Signal Rings with exact Red, Purple, Teal Color dots representing sleep, activity, readiness */}
                <div className="fitze-rings-container">
<video
  src={VideoPage}
  autoPlay
  muted
  loop
  playsInline
  style={{ maxWidth: "100%" }}
>
</video>                  {/* <div className="concentric-radar-widget">
                    
                    <div className="radar-ring rim-outer">
                      <span className="indicator-dot dot-red"></span>
                    </div>

                    <div className="radar-ring rim-middle">
                      <span className="indicator-dot dot-purple"></span>
                    </div>

                    <div className="radar-ring rim-inner">
                      <span className="indicator-dot dot-teal"></span>
                    </div>

                    <div className="radar-center-bubble">
                      <span className="score-number-lbl">
                        {hoveredCard === 8 ? scoreVal : 88}
                      </span>
                    </div>

                  </div> */}
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default SevenSignalsSection;
