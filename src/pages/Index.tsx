import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import UseCasesSection from '@/components/UseCasesSection';
import PartnershipsSection from '../components/PartnershipsSection';
import RoadmapSection from '../components/RoadmapSection';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
    <div className=" justify-center">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <PartnershipsSection />
        <RoadmapSection />
        <Footer />
      </div>
     
    </div>
  );
};


export default Index;
