import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import BookingButtons from "@/components/BookingButtons";
import heroBg from "@/assets/medhealth-hero.jpg";

const locationData: Record<string, { name: string; bookingUrl: string; description: string }> = {
  portsmouth: {
    name: "Portsmouth",
    bookingUrl: "https://www.phorest.com/salon/changesclinicltd/book/service-selection?showSpecialOffers=false",
    description: "Our Portsmouth clinic is conveniently located for patients across Portsmouth, Southsea, Fareham, Gosport and surrounding areas. We offer the full range of MedHealth ultrasound services including endometriosis scans, women's and men's health scans, and wellness health checks.",
  },
  southampton: {
    name: "Southampton",
    bookingUrl: "https://online-booking.semble.io/?token=776ba6c2349bd34908aa804f02bd163d3e00a325",
    description: "Our Southampton clinic provides easy access for patients across Southampton, Eastleigh, Chandlers Ford, Romsey and the wider Hampshire area. All of our private ultrasound services are available, carried out by experienced NHS-trained sonographers.",
  },
  chichester: {
    name: "Chichester",
    bookingUrl: "https://online-booking.semble.io/?token=c3a3601daa9cb78bb4dccc6798ec2d7d2af0b700",
    description: "Our Chichester clinic serves patients across Chichester, Bognor Regis, Havant, Emsworth and the surrounding West Sussex and Hampshire areas. Book directly for fast access to private ultrasound with no GP referral needed.",
  },
};

const LocationPage = () => {
  const { location } = useParams<{ location: string }>();
  const loc = locationData[location || ""];

  if (!loc) {
    return (
      <div className="section-padding text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground">Location not found</h1>
        <Link to="/" className="text-primary mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center wave-divider">
        <div className="absolute inset-0">
          <img src={heroBg} alt={`MedHealth Ultrasound ${loc.name}`} className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-4 py-24 w-full">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
            Private Ultrasound in {loc.name}
          </h1>
          <p className="text-lg text-primary-foreground/90 mt-4 max-w-2xl mx-auto">
            Fast, expert ultrasound scans with no GP referral needed
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-primary" />
            <h2 className="font-heading text-2xl font-bold text-foreground">MedHealth Ultrasound — {loc.name}</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">{loc.description}</p>

          <h3 className="font-heading text-xl font-bold text-foreground mb-4">Services Available</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { label: "Endometriosis Scan", link: "/services/endometriosis-scan" },
              { label: "Women's Health Scans", link: "/services/womens-health" },
              { label: "Men's Health Scans", link: "/services/mens-health" },
              { label: "Wellness Health Checks", link: "/services/health-checks" },
            ].map((s) => (
              <Link key={s.link} to={s.link} className="flex items-center gap-2 bg-secondary p-4 rounded-lg text-foreground font-medium text-sm hover:bg-primary/5 transition-colors">
                <MapPin className="w-4 h-4 text-accent" /> {s.label}
              </Link>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="font-heading font-bold text-foreground mb-4">Book at {loc.name}</h3>
            <a href={loc.bookingUrl} target="_blank" rel="noopener noreferrer" className="block bg-primary text-primary-foreground text-center font-heading text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity mb-3">
              Book {loc.name} Online
            </a>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:02381684646" className="flex-1 flex items-center justify-center gap-2 border border-border text-foreground font-semibold text-sm px-4 py-3 rounded-lg hover:bg-secondary transition-colors">
                <Phone className="w-4 h-4" /> 023 8168 4646
              </a>
              <a href="https://wa.me/447725489074" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold text-sm px-4 py-3 rounded-lg hover:opacity-90 transition-opacity">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
