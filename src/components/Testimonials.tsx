import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Jason Smith",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/testimonial1.jpg",
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: "Lina Besus",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/testimonial2.jpg",
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: "Jenna Haze",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/testimonial3.jpg",
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  },
  {
    name: "John Bibber",
    image: "https://www.four4food.co.za/sitepad-data/uploads/2021/08/testimonial4.jpg",
    text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-gold text-lg font-semibold mb-2">What Client Says</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gold">Testimonials</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 md:p-12 relative">
            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gold hover:text-gold-light hover:bg-gold/10"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gold hover:text-gold-light hover:bg-gold/10"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Testimonial Content */}
            <div className="flex flex-col items-center text-center animate-fade-in">
              <img
                src={testimonials[currentIndex].image}
                alt={`${testimonials[currentIndex].name} - Four4Food customer testimonial`}
                className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-gold"
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                "{testimonials[currentIndex].text}"
              </p>
              <h3 className="text-xl font-bold text-gold">
                {testimonials[currentIndex].name}
              </h3>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-gold w-8" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
