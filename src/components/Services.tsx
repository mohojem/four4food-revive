import { Coffee, Cake, Home, UtensilsCrossed, Sparkles, PartyPopper } from "lucide-react";

const services = [
  {
    icon: Coffee,
    title: "Morning Breakfast",
    description: "Magnam, consequatur quas ratione eaque praesentium eligendi voluptatum at harum mollitia rem veritatis accusantium pariatur."
  },
  {
    icon: UtensilsCrossed,
    title: "Gourmet Food",
    description: "Magnam, consequatur quas ratione eaque praesentium eligendi voluptatum at harum mollitia rem veritatis accusantium pariatur."
  },
  {
    icon: Sparkles,
    title: "Hospitality",
    description: "Magnam, consequatur quas ratione eaque praesentium eligendi voluptatum at harum mollitia rem veritatis accusantium pariatur."
  },
  {
    icon: Cake,
    title: "Cakes Available",
    description: "Magnam, consequatur quas ratione eaque praesentium eligendi voluptatum at harum mollitia rem veritatis accusantium pariatur."
  },
  {
    icon: Home,
    title: "Home Delivery",
    description: "Magnam, consequatur quas ratione eaque praesentium eligendi voluptatum at harum mollitia rem veritatis accusantium pariatur."
  },
  {
    icon: PartyPopper,
    title: "Parties",
    description: "Magnam, consequatur quas ratione eaque praesentium eligendi voluptatum at harum mollitia rem veritatis accusantium pariatur."
  }
];

const stats = [
  { number: "1K+", label: "Tasty Dishes" },
  { number: "5K+", label: "Dishes Served" },
  { number: "15+", label: "Awards Won" },
  { number: "2K+", label: "Ice Cream Servings" }
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 text-center hover-lift"
            >
              <p className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.number}</p>
              <p className="text-muted-foreground font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="text-center mb-16">
          <p className="text-gold text-lg font-semibold mb-2">Always Available</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gold">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-8 hover-lift group"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <Icon className="w-8 h-8 text-gold group-hover:text-charcoal transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
