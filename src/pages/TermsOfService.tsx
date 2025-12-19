import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Four4Food Bar & Restaurant</title>
        <meta
          name="description"
          content="Terms of Service for Four4Food Bar & Restaurant in Bloemfontein. Read our terms and conditions."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg">
              <strong>Last updated:</strong> December 2024
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the Four4Food Bar & Restaurant website and
                services, you accept and agree to be bound by these Terms of
                Service. If you do not agree to these terms, please do not use
                our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                2. Reservations
              </h2>
              <p>
                Reservations are subject to availability and confirmation. We
                reserve the right to cancel or modify reservations in accordance
                with our policies. Please arrive on time for your reservation; we
                may release your table after 15 minutes without notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                3. Restaurant Policies
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We reserve the right to refuse service to anyone at our
                  discretion
                </li>
                <li>Dress code: Smart casual attire is recommended</li>
                <li>
                  Children are welcome and must be supervised at all times
                </li>
                <li>
                  We are not responsible for lost or stolen personal belongings
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                4. Food and Beverages
              </h2>
              <p>
                Menu items and prices are subject to change without notice.
                Please inform our staff of any food allergies or dietary
                restrictions before ordering. We take all reasonable precautions,
                but cannot guarantee that our food is free from allergens.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                5. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, images, logos, and
                designs, is the property of Four4Food Bar & Restaurant and is
                protected by copyright laws. You may not reproduce, distribute,
                or use any content without our written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                6. Limitation of Liability
              </h2>
              <p>
                Four4Food Bar & Restaurant shall not be liable for any indirect,
                incidental, or consequential damages arising from the use of our
                services or website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                7. Contact Information
              </h2>
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <p>
                <strong>Four4Food Bar & Restaurant</strong>
                <br />
                Bloemfontein, South Africa
                <br />
                Phone: +27 51 123 4567
                <br />
                Email: info@four4food.co.za
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
