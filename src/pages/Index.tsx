import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Four4Food Bar & Restaurant | Signature Dishes in Bloemfontein</title>
        <meta
          name="description"
          content="Experience signature dishes, premium drinks, and exceptional hospitality at Four4Food Bar & Restaurant in Bloemfontein. Book your table for breakfast, lunch, dinner, or special events."
        />
        <meta
          name="keywords"
          content="Four4Food, Bloemfontein restaurant, bar and grill, signature dishes, pancakes, sizzler, gourmet food, breakfast Bloemfontein, dinner Bloemfontein, cocktails, South Africa dining"
        />
        <meta property="og:title" content="Four4Food Bar & Restaurant | Signature Dishes in Bloemfontein" />
        <meta
          property="og:description"
          content="Discover signature dishes and premium drinks at Bloemfontein's premier bar and restaurant. Professional chefs, comfortable ambiance, and exceptional service."
        />
        <meta property="og:type" content="restaurant" />
        <meta property="og:image" content="https://www.four4food.co.za/sitepad-data/uploads/2021/08/about.jpg" />
        <link rel="canonical" href="https://www.four4food.co.za/" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Specialties />
          <Menu />
          <Gallery />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
