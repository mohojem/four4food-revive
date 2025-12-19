import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.four4food.co.za/sitepad-data/uploads/2021/08/about.jpg"
          alt="Four4Food Bar & Restaurant Interior - Modern dining atmosphere in Bloemfontein"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          ENJOY YOUR
          <br />
          <span className="text-gold">DELICIOUS FOOD</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto mb-8 animate-fade-in">
          Experience signature dishes and premium drinks at Bloemfontein's premier bar and restaurant. 
          Where exceptional cuisine meets vibrant atmosphere.
        </p>
        <div className="flex justify-center animate-fade-in">
          <Button
            onClick={() => scrollToSection("menu")}
            className="bg-gold hover:bg-gold-dark text-charcoal font-semibold text-lg px-8 py-6"
          >
            View Menu
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
