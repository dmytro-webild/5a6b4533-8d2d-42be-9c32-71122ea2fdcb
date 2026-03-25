"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Award, Linkedin, Mail, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Solutions",
          id: "features",
        },
        {
          name: "Case Studies",
          id: "case-studies",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
      ]}
      brandName="AERRATRIC TECHNOLOGY INC"
      button={{
        text: "Start Your Project",
        href: "#contact",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="home" data-section="home">
      <HeroCentered
      background={{
        variant: "radial-gradient",
      }}
      title="Intelligent Software Built for Sustainable Growth"
      description="AERRATRIC TECHNOLOGY INC designs modern SaaS platforms that streamline operations, enhance user experiences, and support long-term business scalability."
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-diverse-tech--1774468581530-51095d9e.png",
          alt: "Executive",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-female-tech-p-1774468582351-83858fad.png",
          alt: "Professional",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-male-data-sci-1774468580544-fa5e3e5b.png",
          alt: "Data Scientist",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-female-produc-1774468581243-3885ba8a.png",
          alt: "Product Manager",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-male-software-1774468580487-e6b1a146.png",
          alt: "Software Architect",
        },
      ]}
      avatarText="Trusted by forward-thinking leaders"
      buttons={[
        {
          text: "Start Your Project",
          href: "#contact",
        },
        {
          text: "Explore Solutions",
          href: "#features",
        },
      ]}
      buttonAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "Scalable Systems",
        },
        {
          type: "text",
          text: "Intelligent Automation",
        },
        {
          type: "text",
          text: "Seamless Integration",
        },
        {
          type: "text",
          text: "Enterprise Performance",
        },
      ]}
      showMarqueeCard={true}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNineteen
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          tag: "Strategy",
          title: "Digital Strategy & Consulting",
          subtitle: "Guiding your digital journey",
          description: "Develop a robust roadmap for innovation, leveraging our expertise in market analysis and technological foresight.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/minimalist-illustration-depicting-strate-1774468582452-d07584d3.png",
        },
        {
          id: 2,
          tag: "Design",
          title: "Intuitive Product Design",
          subtitle: "Experiences that captivate",
          description: "Craft exceptional user experiences and interfaces that are both beautiful and highly functional, ensuring engagement and retention.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/minimal-ui-dashboard-mockup-with-rounded-1774468581117-0b10cabb.png",
        },
        {
          id: 3,
          tag: "Engineering",
          title: "Advanced Software Engineering",
          subtitle: "Building robust foundations",
          description: "Utilize cutting-edge technologies to build scalable, secure, and high-performance software solutions tailored to your needs.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/abstract-illustration-representing-compl-1774468581351-cdd06e83.png",
        },
        {
          id: 4,
          tag: "Operations",
          title: "Cloud & DevOps Excellence",
          subtitle: "Optimized deployment & scaling",
          description: "Implement seamless cloud architectures and DevOps practices for efficient development, deployment, and operational resilience.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/illustration-of-cloud-computing-infrastr-1774468580930-153f478c.png",
        },
        {
          id: 5,
          tag: "AI",
          title: "AI & Automation Integrations",
          subtitle: "Intelligent, streamlined workflows",
          description: "Integrate advanced artificial intelligence and automation to enhance decision-making, optimize processes, and unlock new efficiencies.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/abstract-representation-of-ai-and-automa-1774468581075-4163d327.png",
        },
      ]}
      title="Our Intelligent Solutions"
      description="We craft bespoke SaaS platforms, workflow automation, and AI integrations that drive digital transformation and sustainable growth."
      tag="Services"
      buttonAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Technology",
        "Healthcare",
        "Logistics",
        "Finance",
        "Construction",
        "Education",
        "Retail",
        "Manufacturing",
        "Automotive",
      ]}
      title="Trusted by Industry Leaders"
      description="Our intelligent solutions drive innovation and efficiency across a diverse range of key industries."
      tag="Industries"
      speed={30}
      showCard={true}
    />
  </div>

  <div id="case-studies" data-section="case-studies">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "ai-analytics",
          name: "AI Analytics Platform",
          price: "Case Study",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/minimalist-ui-screenshot-of-an-ai-analyt-1774468582185-8724953e.png",
          imageAlt: "AI Analytics Platform Dashboard",
        },
        {
          id: "enterprise-automation",
          name: "Enterprise Automation System",
          price: "Case Study",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/ui-screenshot-of-an-enterprise-workflow--1774468583343-e8509088.png",
          imageAlt: "Enterprise Automation System UI",
        },
        {
          id: "saas-dashboard",
          name: "SaaS Dashboard Solution",
          price: "Case Study",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/saas-dashboard-solution-ui-screenshot-sh-1774468581261-531a91ed.png",
          imageAlt: "SaaS Dashboard Solution KPI Overview",
        },
      ]}
      title="Impactful Case Studies"
      description="Explore how AERRATRIC TECHNOLOGY INC empowers businesses with cutting-edge digital platforms and AI solutions, delivering measurable results."
      tag="Our Work"
      buttonAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Pioneering Sustainable Digital Transformation"
      description="AERRATRIC TECHNOLOGY INC is your strategic partner in building scalable platforms that seamlessly blend technology, intelligence, and organic growth. We are dedicated to long-term partnerships, ensuring clarity and execution in every project, having delivered over 100+ end-to-end solutions with robust, future-proof infrastructure."
      subdescription="Our mission is to empower businesses with intelligent software, streamlining operations, enhancing user experiences, and supporting long-term scalability across all industries we serve."
      icon={Award}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/abstract-image-combining-flowing-lines-s-1774468581107-691a73d3.png"
      imageAlt="Abstract representation of technology and growth"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      carouselMode="buttons"
      testimonials={[
        {
          id: "1",
          name: "Eleanor Vance",
          role: "CEO",
          company: "Nexus Innovations",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/professional-headshot-of-a-smiling-ceo-w-1774468581952-9daccaae.png",
        },
        {
          id: "2",
          name: "Marcus Thorne",
          role: "CTO",
          company: "Vanguard Systems",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/headshot-of-a-cto-looking-insightful-and-1774468581312-cad11c11.png",
        },
        {
          id: "3",
          name: "Sophia Clarke",
          role: "Marketing Director",
          company: "GrowthForge Inc.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/headshot-of-a-marketing-director-friendl-1774468580741-51d8ad12.png",
        },
        {
          id: "4",
          name: "Daniel Kim",
          role: "Product Manager",
          company: "Elevate Solutions",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/headshot-of-a-product-manager-thoughtful-1774468583127-fcf577e0.png",
        },
        {
          id: "5",
          name: "Olivia Reed",
          role: "Head of Operations",
          company: "Streamline Corp.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRQDoIB9NyK61wKPrMx774LuGA/headshot-of-a-head-of-operations-calm-an-1774468583292-3a5dd749.png",
        },
      ]}
      title="What Our Partners Say"
      description="Trusted voices on the impact and value of our intelligent software solutions and strategic partnership."
      tag="Testimonials"
      buttonAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Start Your Digital Transformation Today"
      description="Reach out to AERRATRIC TECHNOLOGY INC for a consultation and discover how we can build intelligent software for your sustainable growth. Address: 3404 North Cascade Avenue, Colorado Springs, CO 80907. Phone: (866) 319-3883. Email: hello@aerrartictechnology.com"
      inputPlaceholder="Your Name"
      buttonText="Send Message"
      termsText="By clicking Send Message, you're confirming that you agree with our Privacy Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="AERRATRIC TECHNOLOGY INC"
      copyrightText="© 2024 AERRATRIC TECHNOLOGY INC. All rights reserved."
      socialLinks={[
        {
          icon: Linkedin,
          href: "https://linkedin.com",
          ariaLabel: "LinkedIn",
        },
        {
          icon: Twitter,
          href: "https://twitter.com",
          ariaLabel: "Twitter",
        },
        {
          icon: Mail,
          href: "mailto:hello@aerrartictechnology.com",
          ariaLabel: "Email",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
