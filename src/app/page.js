import Banner from '@/components/Banner/Banner'
import Featured from '@/components/Featured/Featured'
import Subscribe from '@/components/Subscribe/Subscribe'
import Testimonials from '@/components/Testimonials/Testimonials'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Banner />
      <Featured />
      <Testimonials />
      <Subscribe />
    </div>
  )
}
