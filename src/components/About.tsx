const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://www.four4food.co.za/sitepad-data/uploads/2021/08/about.jpg"
              alt="Four4Food restaurant interior with modern design and comfortable seating"
              className="rounded-lg shadow-2xl hover-lift"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold text-charcoal p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm font-semibold">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gold">Four4Food</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Eu non diam phasellus vestibulum lorem. Excepteur sint occaecat cupidatat non proident, 
                suntin culpa qui officia deserunt mollit animid est laborum. Phasellus imperdiet lacinia 
                nulla, malesuada semper nibh sodales quis, Duis viverra ipsum dictum. It is a long 
                established fact that a reader will be distracted by the readable content of a page when 
                looking at its layout.
              </p>
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
                letters, as opposed to using 'Content here, content here', making it look like readable 
                English. Magnam, consequatur quas ratione eaque praesentium eligendi voluptatum at harum 
                mollitia rem veritatis accusantium pariatur.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-card rounded-lg hover-lift">
                <p className="text-3xl font-bold text-gold mb-2">🍽️</p>
                <p className="text-sm font-semibold">Unique Meals</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg hover-lift">
                <p className="text-3xl font-bold text-gold mb-2">🪑</p>
                <p className="text-sm font-semibold">Comfortable Seats</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg hover-lift">
                <p className="text-3xl font-bold text-gold mb-2">👨‍🍳</p>
                <p className="text-sm font-semibold">Professional Chefs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
