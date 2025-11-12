import { useState } from "react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Breakfast", "Lunch", "Drink", "Dinner", "Desert"];

const galleryItems = [
  {
    title: "Bread With Sunny Side-up Egg",
    category: "Breakfast",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/breakfast.jpg"
  },
  {
    title: "Croissant on Top",
    category: "Breakfast",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/breakfast1.jpg"
  },
  {
    title: "Rice with Sunny Vegetables",
    category: "Lunch",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/lunch.jpg"
  },
  {
    title: "Costal Tales with Dip Souce",
    category: "Lunch",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/lunch1.jpg"
  },
  {
    title: "Takila Shots",
    category: "Drink",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/drink1.jpg"
  },
  {
    title: "Fruit Juice",
    category: "Drink",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/drink2.jpg"
  },
  {
    title: "Moktails",
    category: "Drink",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/drink3.jpg"
  },
  {
    title: "Momos",
    category: "Dinner",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/dinner.jpg"
  },
  {
    title: "Icecream Lava",
    category: "Desert",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/dinner1.jpg"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gold text-lg font-semibold mb-2">Recent Meals</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Food <span className="text-gold">Gallery</span>
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-gold hover:bg-gold-dark text-charcoal font-semibold"
                    : "border-gold text-gold hover:bg-gold hover:text-charcoal"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg hover-lift cursor-pointer"
            >
              <img
                src={item.image}
                alt={`${item.title} - ${item.category} at Four4Food Bar Bloemfontein`}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-gold text-sm font-semibold">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
