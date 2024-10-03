import React from 'react';
import AboutUs from "@/components/About/AboutUs"
import Contact from "@/components/Contact/Contact"
import Home from "@/components/Home/Home"
import Service from "@/components/Service/Service"

const Page = () => {
  return (
    <>
      <Home/>
      <div id="about"  className="h-24 -mt-24 md:-mt-52 xl:-mt-24 xl:h-24"></div>
      <AboutUs />
      <div id="service" className="h-16 md:h-4"></div>
      <Service/>
      <div id="contact"></div>
      <Contact/>
    </>
  )
}

export default Page
