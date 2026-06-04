import { Helmet } from "react-helmet-async";
import ogImg from '../../assets/fitzering-og-image.jpg';
import ogLogo from '../../assets/logo-orange.svg';
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Fitze",
    applicationCategory: "HealthApplication",
    operatingSystem: "Android, iOS",
    url: "https://fitzering.vercel.app/",
    description:
      "Get rewarded for every step with Fitze. Track your walks, join fitness challenges, achieve goals, and earn exciting rewards across the UAE.",
    image:ogImg,
    publisher: {
      "@type": "Organization",
      name: "Fitze"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fitze",
    url: "https://fitzering.vercel.app/",
    logo:ogLogo
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fitze",
    url: "https://fitzering.vercel.app/"
  }
];

export const HomePageHelmet = () => {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>
        Fitness Rewards App in UAE - Get Rewards For Walking | Fitze
      </title>

      <meta
        name="description"
        content="Get rewarded for every step with Fitze. Track your walks, join fitness challenges, achieve goals, and earn exciting rewards across the UAE."
      />

      <meta
        name="keywords"
        content="fitness rewards app, walking rewards, step tracker, UAE fitness app, health rewards, walking challenges, Fitze"
      />

      <meta name="author" content="Fitze" />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large"
      />

      <meta
        name="googlebot"
        content="index, follow, max-image-preview:large"
      />

      {/* Canonical */}
      <link
        rel="canonical"
        href="https://fitzering.vercel.app/"
      />

      {/* Theme */}
      <meta name="theme-color" content="#fe572a" />
      <meta name="application-name" content="Fitze" />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Fitze" />
      <meta property="og:title" content="Fitness Rewards App in UAE - Get Rewards For Walking | Fitze"/>
      <meta property="og:description" content="Turn your daily steps into rewards. Join challenges, stay active, and earn exciting benefits with Fitze."
      />
      <meta property="og:url" content="https://fitzering.vercel.app/" />
      <meta property="og:image" content={ogImg}/>
      <meta property="og:image:url" content={ogImg} />
      <meta property="og:image:secure_url" content={ogImg} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Fitze Fitness Rewards App - Get rewarded for walking"/>
      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Fitness Rewards App in UAE - Get Rewards For Walking | Fitze" />
      <meta name="twitter:description" content="Track your steps, complete challenges, and earn rewards with Fitze." />
      <meta name="twitter:image" content={ogImg} />
      <meta name="twitter:image:alt" content="Fitze Fitness Rewards App" />
      {/* Replace with your real X handle */}
      <meta name="twitter:site" content="@fitze" />
      <meta name="twitter:creator" content="@fitze" />
      {/* Apple */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta  name="apple-mobile-web-app-title" content="Fitze"  />
      <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
      {/* Microsoft */}
      <meta name="msapplication-TileColor" content="#fe572a" />
      {/* Icons */}
      <link rel="icon" href="https://www.fitze.ae/wp-content/uploads/2024/08/favicon-icon-144x144-1.png" />
      <link rel="apple-touch-icon"  href="https://www.fitze.ae/wp-content/uploads/2024/08/favicon-icon-144x144-1.png"/>
      {/* Structured Data */}
      <script  type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}/>
    </Helmet>
  );
};

export default HomePageHelmet;