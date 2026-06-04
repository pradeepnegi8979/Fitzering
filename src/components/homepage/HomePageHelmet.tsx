import { Helmet } from "react-helmet-async";

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
    image:
      "https://fitzering.vercel.app/assets/fitzering-og-image.jpg",
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
    logo: "https://fitzering.vercel.app/logo.png"
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
      <meta name="theme-color" content="#22C55E" />
      <meta name="application-name" content="Fitze" />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Fitze" />

      <meta
        property="og:title"
        content="Fitness Rewards App in UAE - Get Rewards For Walking | Fitze"
      />

      <meta
        property="og:description"
        content="Turn your daily steps into rewards. Join challenges, stay active, and earn exciting benefits with Fitze."
      />

      <meta
        property="og:url"
        content="https://fitzering.vercel.app/"
      />

      <meta
        property="og:image"
        content="https://fitzering.vercel.app/assets/fitzering-og-image.jpg"
      />

      <meta
        property="og:image:url"
        content="https://fitzering.vercel.app/assets/fitzering-og-image.jpg"
      />

      <meta
        property="og:image:secure_url"
        content="https://fitzering.vercel.app/assets/fitzering-og-image.jpg"
      />

      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta
        property="og:image:alt"
        content="Fitze Fitness Rewards App - Get rewarded for walking"
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content="Fitness Rewards App in UAE - Get Rewards For Walking | Fitze"
      />

      <meta
        name="twitter:description"
        content="Track your steps, complete challenges, and earn rewards with Fitze."
      />

      <meta
        name="twitter:image"
        content="https://fitzering.vercel.app/assets/fitzering-og-image.jpg"
      />

      <meta
        name="twitter:image:alt"
        content="Fitze Fitness Rewards App"
      />

      {/* Replace with your real X handle */}
      <meta name="twitter:site" content="@fitze" />
      <meta name="twitter:creator" content="@fitze" />

      {/* Apple */}
      <meta
        name="apple-mobile-web-app-capable"
        content="yes"
      />

      <meta
        name="apple-mobile-web-app-title"
        content="Fitze"
      />

      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="default"
      />

      {/* Microsoft */}
      <meta
        name="msapplication-TileColor"
        content="#22C55E"
      />

      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
      />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </Helmet>
  );
};

export default HomePageHelmet;