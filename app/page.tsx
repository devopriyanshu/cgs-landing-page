import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import WhoWeServe from '@/components/WhoWeServe';
import OurSolutions from '@/components/OurSolutions';
import HowItWorks from '@/components/HowItWorks';
import SectorsWeServe from '@/components/SectorsWeServe';
import Marketplace from '@/components/Marketplace';
import WhyChooseCGS from '@/components/WhyChooseCGS';
import ImpactNumbers from '@/components/ImpactNumbers';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <StatsBar />
        <WhoWeServe />
        <OurSolutions />
        <HowItWorks />
        <SectorsWeServe />
        <Marketplace />
        <WhyChooseCGS />
        <ImpactNumbers />
        <Testimonials />
        <BlogPreview />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
