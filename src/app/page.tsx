import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function page() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <WhyChooseUs></WhyChooseUs>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default page;
