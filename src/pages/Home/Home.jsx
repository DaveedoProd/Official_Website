import React from 'react'
import About from "../../components/About";
import Hero from "../../components/Hero";
import NavBar from "../../components/Navbar";
import Works from "../../components/Works";
import Clients from "../../components/Clients";
import Contact from "../../components/Contact";
import Team from "../../components/Team";

const Home = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
          <NavBar />
          <Hero />
          <About />
          <Works />
          {/* <ShowReel/> */}
          <Clients />
          <Team />
          <Contact />
          {/* <Footer /> */}
        </main>
      );
}

export default Home