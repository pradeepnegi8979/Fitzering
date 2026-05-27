import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import "./RealPeopleSection.css";
import Default from "../../../assets/Defaultprofilepic.png"
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
      avatar:Default,
    },
    {
      id: 2,
      stars: 5,
      heading: "Won A Car Just By Walking",
      quote:"I downloaded Fitze after a friend recommended the AWR x Chery challenge to me. I completed the 300,000-step target in 30 days and honestly forgot about it after that. A month later, I received the call saying I had won a Chery Tiggo 4 Pro car. It still feels unreal that walking every day led to something this big.",
      name: "Syed Baset",
      role: "Fitness Enthusiast",
      avatar:SyedBaset,
    },
    {
      id: 3,
      stars: 5,
      heading: "More Than Just Step Tracking",
      quote:
        "I downloaded Fitze out of curiosity, but it quickly became part of my daily routine. The app is easy to use, tracks accurately and keeps me motivated with rewards and simple challenges. Getting rewarded for walking definitely makes staying active more enjoyable.",
      name: "Yassin Amir",
      role: "",
      avatar:Default,
    },
    {
      id: 4,
      stars: 5,
      heading: "Rewards That Kept Surprising Me",
      quote:
        "Over the years, Fitze has added a lot of excitement to my fitness journey. After winning AED 10,000 in the GEMS challenge last year, I recently won a Joyalukkas gold necklace and diamond pendant too. The app somehow keeps making consistency feel exciting in unexpected ways.",
      name: "Terilyn Andres",
      role: "",
      avatar:TerilyanAndres,
    },
    {
      id: 5,
      stars: 5,
      heading: "Daily Movement, Better Rewarded",
      quote:
        "Fitze takes everyday walking and turns it into something far more engaging. The challenges are fun, the rewards feel meaningful and the app gives you that extra motivation to stay moving consistently. It’s a simple concept that genuinely works.",
      name: "Ivy Angela",
      role: "",
      avatar:Default,
    },
    {
      id: 6,
      stars: 5,
      heading: "Community Makes The Difference",
      quote:
        "What makes Fitze different for me is the sense of community around it. Between the fun runs, challenges and rewards, staying active feels social, energetic and genuinely exciting. It goes beyond fitness tracking and creates experiences people actually enjoy being part of.",
      name: "Snithu Haridas",
      role: "",
      avatar:Default,
    },
    {
      id: 7,
      stars: 5,
      heading: "Consistency Finally Clicked",
      quote:
        "I had started and stopped my walking routine several times before using Fitze. The gamified experience made daily movement feel engaging instead of repetitive, and features like Streaks gave me an extra reason to stay disciplined. It’s now become part of my everyday routine.",
      name: "Hemant Jain",
      role: "",
      avatar:Default,
    },
    {
      id: 8,
      stars: 5,
      heading: "A More Rewarding Ramadan",
      quote:
        "The Ramadan Step-a-thon gave me an extra push to stay active throughout the holy month. Completing the challenge and winning a Bioderma skincare hamper made the experience feel even more special. It’s the kind of motivation that keeps you coming back for the next challenge.",
      name: "Bhavna",
      role: "",
      avatar:Bhavna,
    },
    {
      id: 9,
      stars: 5,
      heading: "Fitness Is Fun With Fitze",
      quote:
        "What I enjoy most about Fitze is how naturally it encourages movement without making fitness feel stressful. The challenges, rewards and overall experience make staying active genuinely enjoyable. Since joining, I’ve become more energetic, more consistent and much more motivated overall.",
      name: "Ajmal Shahz",
      role: "",
      avatar:Default,
    },
    {
      id: 10,
      stars: 5,
      heading: "Motivation Beyond Marathon Training",
      quote:
        "Fitness has always been part of my lifestyle, but Fitze gave me another reason to stay consistent every day. Winning the Samsung X7 phone through the Lulu challenge came as a complete surprise and made the whole experience even more rewarding. It’s motivation that genuinely stays with you.",
      name: "Herold Carreon",
      role: "",
      avatar:HeroldCarreon,
    },
    {
      id: 11,
      stars: 5,
      heading: "Smooth, Simple And Motivating",
      quote:
        "Fitze stands out because of how simple and easy the entire experience feels. The app tracks activity accurately, the interface is smooth, and the challenges keep me motivated daily. It’s one of the few fitness apps that actually managed to keep me consistent long-term.",
      name: "Farooq Khan M.",
      role: "",
      avatar:Default,
    },
    {
      id: 12,
      stars: 5,
      heading: "Challenges Worth Showing Up For",
      quote:
        "I’ve been part of the Fitze community since the early days, and the challenges still keep me engaged every week. Winning the Garmin Fenix 7 was definitely exciting, but what stands out most is how the app keeps fitness fun, competitive and rewarding without ever feeling repetitive.",
      name: "Vinod",
      role: "",
      avatar:vinod,
    },
    {
      id: 13,
      stars: 5,
      heading: "More Than Just A Run",
      quote:
        "The FITZE x SKECHERS Run was such a fun and well-organised experience. The energy throughout the event, combined with the community vibe, made the whole day feel exciting from beginning to end. I also loved how the app kept everything interactive and motivating throughout.",
      name: "KayeDG",
      role: "",
      avatar:Default,
    },
    {
      id: 14,
      stars: 5,
      heading: "Small Habits Added Up",
      quote:
        "Since I started using Fitze, I’ve become much more consistent with my daily activity and movement goals. The rewards and challenges add just enough motivation without feeling overwhelming, and the app itself feels smooth and easy to use every day.",
      name: "Luth Latin",
      role: "",
      avatar:Default,
    },
    {
      id: 15,
      stars: 5,
      heading: "Walking Finally Felt Rewarding",
      quote:
        "I’ve been using Fitze for over a year now, and it genuinely made staying active more exciting for me. Winning a year of free Chipotle vouchers through the challenge was such a fun surprise. I love that something as simple as walking can lead to rewards you actually enjoy.",
      name: "Sunny D'Silva",
      role: "",
      avatar:Sunny,
    },
    {
      id: 16,
      stars: 5,
      heading: "Motivation Built Into Everyday Life",
      quote:
        "Fitze keeps me engaged in a way most fitness apps never really could. The community challenges, rewards and activity tracking work together to create a routine that actually feels enjoyable. It’s become a consistent part of my day without feeling like a chore.",
      name: "Vinmad",
      role: "",
      avatar:Default,
    },
    {
      id: 17,
      stars: 5,
      heading: "Unexpected Wins Hit Different",
      quote:
        "I joined Fitze during the Dubai Fitness Challenge and quickly got hooked on the step challenges inside the app. Winning art gallery vouchers was completely unexpected and made the experience even more enjoyable. Now I’m always looking forward to the next challenge and reward.",
      name: "Shelley Eustace",
      role: "",
      avatar:ShellyEustace,
    },
    {
      id: 18,
      stars: 5,
      heading: "Fitness That Stays Engaging",
      quote:
        "What I like most about Fitze is how interactive it makes daily fitness feel. The challenges keep things exciting, the rewards system adds extra motivation, and the app makes tracking progress effortless. It’s made building healthier habits much easier for me.",
      name: "Rashid",
      role: "",
      avatar:Default,
    },
  ];

  const displayTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const [typedText, setTypedText] = useState("");
  const fullText = "Real People";

  useEffect(() => {
    if (!showHeader) return;

    let index = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const tick = () => {
      let current = "";

      if (!isDeleting) {
        current = fullText.substring(0, index + 1);
        index++;
        setTypedText(current);

        if (current === fullText) {
          isDeleting = true;
          timeout = setTimeout(tick, 2500);
        } else {
          timeout = setTimeout(tick, 120);
        }
      } else {
        current = fullText.substring(0, index - 1);
        index--;
        setTypedText(current);

        if (current === "") {
          isDeleting = false;
          timeout = setTimeout(tick, 800);
        } else {
          timeout = setTimeout(tick, 60);
        }
      }
    };

    timeout = setTimeout(tick, 150);

    return () => clearTimeout(timeout);
  }, [showHeader]);

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