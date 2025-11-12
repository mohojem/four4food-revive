import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Visit us in Bloemfontein or book your table today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Four4Food Bar & Restaurant<br />
                  Bloemfontein, South Africa
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  +27 (0) XXX XXXX<br />
                  Available for reservations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info@four4food.co.za<br />
                  We'll respond within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Sunday<br />
                  11:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Book a Table</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-foreground"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-foreground"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-foreground"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-foreground"
                />
                <input
                  type="time"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-foreground"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-foreground">
                  <option>Number of Guests</option>
                  <option>1-2 People</option>
                  <option>3-4 People</option>
                  <option>5-6 People</option>
                  <option>7+ People</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Special Requirements (Optional)"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-foreground resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-charcoal font-semibold py-6"
              >
                Book Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
