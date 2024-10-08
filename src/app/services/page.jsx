import VirtualTourPromo from '@/components/AboutUs/VirtualTourPromo'
import AirbnbHostsSection from '@/components/HomePage/Airbnb'
import PageHeader from '@/components/PageHeader/PageHeader'
import React from 'react'

export default function page() {
  return (
    <div>
         <PageHeader heading="services" />
         <AirbnbHostsSection/>
         <VirtualTourPromo/>
    </div>
  )
}
