import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CardSection from "./components/CardSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
