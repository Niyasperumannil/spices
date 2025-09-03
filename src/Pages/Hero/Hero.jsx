import React from 'react'
import Header from '../../Components/Header/Header'
import App from '../../Components/App/App'
import ProductSection from '../../Components/ProductSection/ProductSection'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'
import BenefitsSection from '../../Components/BenefitsSection/BenefitsSection'
import WatchBenefitsSection from '../../Components/WatchBenefitsSection/WatchBenefitsSection'
import CollectionSection from '../../Components/CollectionSection/CollectionSection'
import OrderSection from '../../Components/OrderSection/OrderSection'
import Reviews from '../../Components/Reviews/Reviews'
import FaqSection from '../../Components/FaqSection/FaqSection'
import MobileAppSection from '../../Components/MobileAppSection/MobileAppSection'
import ContactSection from '../../Components/ContactSection/ContactSection'
import Footer from '../../Components/Footer/Footer'

function Hero() {
  return (
    <>
      <Header />
      <App />
      <ProductSection />
      <HowItWorks />
      <BenefitsSection />
      <WatchBenefitsSection  />
      <CollectionSection />
      <OrderSection />
      <Reviews />
      <FaqSection />
      <MobileAppSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Hero
