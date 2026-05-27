import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import "./RealPeopleSection.css";

import Default from "../../../assets/Defaultprofilepic.png";
import SyedBaset from "../../../assets/syed-baset.png";
import TerilyanAndres from "../../../assets/Terilyn-Andres.png";
import Bhavna from "../../../assets/bhavna.png";
import HeroldCarreon from "../../../assets/HeroldCarreon.png";
import vinod from "../../../assets/vinod.png";
import Sunny from "../../../assets/SunnyD'Silva.png";
import ShellyEustace from "../../../assets/ShelleyEustace.png";

interface Testimonial {
  id: number;
  stars: number;
  heading: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface Props {
  showHeader?: boolean;
  variant?: "orange" | "white";
}

export const RealPeopleSection: React.FC<Props> = ({
  showHeader = true,
  variant = "white",
}) => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      stars: 5,
      heading: "Walking Became A Habit",
      quote:
        "Before fitze, walking was something I often struggled to stay consistent with. The challenges, rewards and leaderboards added just enough excitement to keep me motivated daily. Now it feels like a natural and enjoyable part of my routine.",
      name: "Anthony Bare",
      role: "",
      avatar: Default,
    },
    {
      id: 2,
      stars: 5,
      heading: "Won A Car Just By Walking",
      quote:
        "I downloaded Fitze after a friend recommended the AWR x Chery challenge to me. I completed the 300,000-step target in 30 days and honestly forgot about it after that. A month later, I received the call saying I had won a Chery Tiggo 4 Pro car. It still feels unreal that walking every day led to something this big.",
      name: "Syed Baset",
      role: "Fitness Enthusiast",
      avatar: SyedBaset,
    },
    {
      id: 3,
      stars: 5,
      heading: "More Than Just Step Tracking",
      quote:
        "I downloaded Fitze out of curiosity, but it quickly became part of my daily routine. The app is easy to use, tracks accurately and keeps me motivated with rewards and simple challenges. Getting rewarded for walking definitely makes staying active more enjoyable.",
      name: "Yassin Amir",
      role: "",
      avatar: Default,
    },
    {
      id: 4,
      stars: 5,
      heading: "Rewards That Kept Surprising Me",
      quote:
        "Over the years, Fitze has added a lot of excitement to my fitness journey. After winning AED 10,000 in the GEMS challenge last year, I recently won a Joyalukkas gold necklace and diamond pendant too. The app somehow keeps making consistency feel exciting in unexpected ways.",
      name: "Terilyn Andres",
      role: "",
      avatar: TerilyanAndres,
    },
    {
      id: 5,
      stars: 5,
      heading: "Daily Movement, Better Rewarded",
      quote:
        "Fitze takes everyday walking and turns it into something far more engaging. The challenges are fun, the rewards feel meaningful and the app gives you that extra motivation to stay moving consistently. It’s a simple concept that genuinely works.",
      name: "Ivy Angela",
      role: "",
      avatar: Default,
    },
  ];

  const displayTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  /*
   -----------------------------------
   TYPEWRITER EFFECT
   -----------------------------------
  */

  const words = ["People", "Rewards", "Progress"];

  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (!showHeader) return;

    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const currentWord = words[wordIndex];

    const tick = () => {
      let current = "";

      if (!isDeleting) {
        current = currentWord.substring(0, charIndex + 1);
        charIndex++;

        setTypedText(current);

        if (current === currentWord) {
          isDeleting = true;
          timeout = setTimeout(tick, 2000);
        } else {
          timeout = setTimeout(tick, 120);
        }
      } else {
        current = currentWord.substring(0, charIndex - 1);
        charIndex--;

        setTypedText(current);

        if (current === "") {
          isDeleting = false;

          setWordIndex((prev) => (prev + 1) % words.length);

          timeout = setTimeout(tick, 500);
        } else {
          timeout = setTimeout(tick, 60);
        }
      }
    };

    timeout = setTimeout(tick, 150);

    return () => clearTimeout(timeout);
  }, [showHeader, wordIndex]);

  const variantClass =
    variant === "orange"
      ? "rp-variant-orange"
      : "rp-variant-white";

  return (
    <section
      className={`real-people-section-wrapper ${variantClass}`}
      id="testimonials"
    >
      {/* HEADER */}
      {showHeader && (
        <div className="real-people-inner-container">
          <div className="real-people-top-row">
            <div className="real-people-left-col">
              <div className="real-people-badge-pill">
                <span>MOVEMENT IN MOTION</span>
              </div>

              <h2 className="real-people-main-heading">
                <span className="real-static-text">Real&nbsp; </span>
                <span className="typewritten-holder">
                  {typedText}
                  <span className="typewriter-cursor-blink">|</span>
                </span>
              </h2>
            </div>

            <div className="real-people-right-col">
              <p className="real-people-description-text">
                From everyday walks to life-changing Streaks, users are turning
                movement into consistency, rewards and momentum.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MARQUEE */}
      <div className="real-people-marquee-track-frame">
        <div className="real-people-loop-marquee-line">
          {displayTestimonials.map((item, idx) => (
            <div className="rp-marquee-card-cell" key={`${item.id}-${idx}`}>
              <div className="rp-testimonial-white-card">
                <div className="rp-card-star-rating-row">
                  {Array.from({ length: item.stars }).map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      size={20}
                      className="rp-star-coral-icon"
                      fill="var(--color-primary, #ff5e3a)"
                      stroke="none"
                    />
                  ))}
                </div>

                <h5 className="rp-card-quote-heading">
                  {item.heading}
                </h5>

                <p className="rp-card-quote-paragraph">
                  "{item.quote}"
                </p>

                <div className="rp-card-divider" />

                <div className="rp-card-author-profile">
                  <div className="rp-card-author-avatar-wrapper">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="rp-card-author-avatar-img"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="rp-card-author-metadata">
                    <span className="rp-card-author-name">
                      {item.name}
                    </span>

                    <span className="rp-card-author-role">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealPeopleSection;