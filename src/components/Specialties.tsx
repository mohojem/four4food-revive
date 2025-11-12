const specialties = [
  {
    title: "Food",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/food.jpg",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    title: "Drink",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/drink.jpg",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    title: "Delight",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/delight.jpg",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    title: "Coffee",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/coffee.jpg",
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
];

const Specialties = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gold">Specialties</span>
          </h2>
          <p className="text-muted-foreground text-lg">What we offer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg hover-lift cursor-pointer"
            >
              <img
                src={specialty.image}
                alt={`${specialty.title} - Four4Food signature ${specialty.title.toLowerCase()}`}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{specialty.title}</h3>
                <p className="text-sm text-foreground/80">{specialty.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
