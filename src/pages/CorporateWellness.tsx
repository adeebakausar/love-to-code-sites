import { CheckCircle, ArrowRight, Users, Shield, TrendingUp, Heart, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import corporateImg from "@/assets/corporate-wellness.jpg";

const packages = [
  {
    name: "Basic",
    desc: "Essential screening for employee peace of mind",
    features: ["Abdominal Ultrasound", "Written Report", "Same-Day Results", "Up to 10 employees"],
    price: "From £XXX per employee",
  },
  {
    name: "Standard",
    desc: "Comprehensive wellness check for your team",
    features: ["Abdominal Ultrasound", "Renal & Bladder Scan", "Written Report", "GP Letter if Required", "Up to 25 employees"],
    price: "From £XXX per employee",
    popular: true,
  },
  {
    name: "Comprehensive",
    desc: "Full wellness screening programme",
    features: ["Full Abdominal Scan", "Pelvic / Testicular Scan", "Renal & Bladder Scan", "Thyroid Assessment", "Written Report & GP Letter", "Unlimited employees"],
    price: "From £XXX per employee",
  },
];

const benefits = [
  { icon: <TrendingUp className="w-8 h-8" />, title: "Reduce Staff Absence", desc: "Early detection means faster treatment and fewer sick days. Proactive health screening helps identify issues before they become serious." },
  { icon: <Heart className="w-8 h-8" />, title: "Duty of Care", desc: "Demonstrate genuine commitment to employee wellbeing. Show your team their health matters to the organisation." },
  { icon: <Users className="w-8 h-8" />, title: "Boost Retention", desc: "Health benefits are a top factor in employee satisfaction. Stand out as an employer that truly invests in its people." },
  { icon: <Shield className="w-8 h-8" />, title: "Improve Productivity", desc: "Healthy, reassured employees perform better. Remove health anxieties so your team can focus on what they do best." },
];

const CorporateWellness = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center wave-divider">
        <div className="absolute inset-0">
          <img src={corporateImg} alt="Corporate Wellness" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 container-wide px-4 lg:px-8 py-32">
          <div className="max-w-2xl">
            <span className="inline-block bg-accent text-accent-foreground font-heading text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">New Service</span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Corporate Ultrasound Wellness Programs
            </h1>
            <p className="text-lg text-primary-foreground/90 mt-4">
              Employee Health Screening in Hampshire. Reduce staff absence, boost productivity and show your team you care with professional ultrasound wellness packages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/contact" className="inline-flex items-center justify-center bg-accent text-accent-foreground font-heading text-lg font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity">
                Request Corporate Proposal
              </Link>
              <a href="https://wa.me/447725489074" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-heading text-lg font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Phone className="w-5 h-5" /> Book a 15-min Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-heading text-sm uppercase tracking-widest text-accent mb-2 font-semibold">Why Corporate Wellness</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Invest in Your Team's Health</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">{b.icon}</div>
                <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-heading text-sm uppercase tracking-widest text-accent mb-2 font-semibold">Our Packages</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Corporate Wellness Packages</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Group booking available at your office or our clinic locations. Flexible scheduling to suit your business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`bg-background rounded-xl p-6 border ${pkg.popular ? 'border-accent shadow-lg ring-2 ring-accent/20' : 'border-border shadow-sm'} relative`}>
                {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>}
                <h3 className="font-heading text-xl font-bold text-foreground">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{pkg.desc}</p>
                <p className="font-heading text-lg font-bold text-primary mt-4">{pkg.price}</p>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-6 text-center bg-primary text-primary-foreground font-heading text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  Get Corporate Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Discovery Call", desc: "We discuss your team's needs and recommend the right package." },
              { num: "2", title: "Schedule", desc: "Choose clinic-based or on-site screening. We handle all logistics." },
              { num: "3", title: "Screen & Report", desc: "Each employee receives their scan and a secure written report." },
            ].map((s) => (
              <div key={s.num}>
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl font-bold mx-auto mb-3">{s.num}</div>
                <h3 className="font-heading font-bold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container-wide text-center px-4">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground">Ready to Invest in Your Team's Health?</h2>
          <p className="text-primary-foreground/80 mt-3 text-lg">Get in touch for a tailored corporate wellness proposal</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/contact" className="inline-flex items-center justify-center bg-accent text-accent-foreground font-heading text-sm font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity">
              Request Corporate Proposal
            </Link>
            <a href="tel:02381684646" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground font-heading text-sm font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/10 transition-colors">
              <Phone className="w-4 h-4" /> 023 8168 4646
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateWellness;
