import React from 'react'
import Header from '../../Components/Header/Header'
import App from '../../Components/App/App'
import ProductSection from '../../Components/ProductSection/ProductSection'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'
import BenefitsSection from '../../Components/BenefitsSection/BenefitsSection'
import WatchBenefitsSection from '../../Components/WatchBenefitsSection/WatchBenefitsSection'
// import CollectionSection from '../../Components/CollectionSection/CollectionSection'
import OrderSection from '../../Components/OrderSection/OrderSection'
import Reviews from '../../Components/Reviews/Reviews'
import FaqSection from '../../Components/FaqSection/FaqSection'
import MobileAppSection from '../../Components/MobileAppSection/MobileAppSection'
import ContactSection from '../../Components/ContactSection/ContactSection'
import Footer from '../../Components/Footer/Footer'
import MakingProcess from '../../Components/MakingProcess/MakingProcess'
import AboutCompany from '../../Components/AboutCompany/AboutCompany'
import DeliveryBanner from '../../Components/DeliveryBanner/DeliveryBanner'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import TeaSlider from '../../Components/TeaSlider/TeaSlider'
import AvailableOn from '../../Components/AvailableOn/AvailableOn'

function Hero() {
  return (
    <>
                                     {/* <OfferBanner /> */}

      <Header />
       {/* <TeaSlider /> */}
      <App />
       {/* <DeliveryBanner /> */}
      <ProductSection />


      <HowItWorks />
      {/* <BenefitsSection /> */}
      <WatchBenefitsSection  />
            <AvailableOn />

      <AboutCompany />
      <MakingProcess />
      {/* <CollectionSection /> */}
      <OrderSection />
      <Reviews />
      <FaqSection />
      {/* <MobileAppSection /> */}
      {/* <ContactSection /> */}
      <Footer />
    </>
  )
}

export default Hero
