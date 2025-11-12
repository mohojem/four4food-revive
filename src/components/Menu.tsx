const dishes = [
  {
    title: "Deserts",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/food1.jpg",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    title: "Pan Cakes",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/food2.jpg",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    title: "Sizzler",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/food3.jpg",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    title: "Poached Egg with Salad",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/food4.jpg",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    title: "Pancake with fruits",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/food5.jpg",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    title: "Meat Balls",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/food6.jpg",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold text-lg font-semibold mb-2">We are good at</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Best <span className="text-gold">Signature Dishes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular signature dishes, crafted with passion by our professional chefs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden hover-lift group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={dish.image}
                  alt={`${dish.title} - signature dish at Four4Food Bloemfontein`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">
                  {dish.title}
                </h3>
                <p className="text-muted-foreground text-sm">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
