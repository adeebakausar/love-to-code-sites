import { CheckCircle, Star } from "lucide-react";
import BookingButtons from "@/components/BookingButtons";
import serviceImg from "@/assets/service-wellness.jpg";

const HealthChecks = () => {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center wave-divider">
        <div className="absolute inset-0">
          <img src={serviceImg} alt="Health Check Scans" className="w-full h-full object-cover" width={800} height={600} />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-4 py-24 w-full">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground max-w-4xl mx-auto leading-tight">
            Private Ultrasound Health Checks in Portsmouth, Southampton and Chichester
          </h1>
          <p className="font-body text-lg text-primary-foreground/90 mt-4 max-w-3xl mx-auto">
            Proactive reassurance scans for the abdomen, pelvis, kidneys and bladder, with expert ultrasound, clear written reports and no GP referral needed for most appointments.
          </p>
          <div className="mt-6 flex justify-center"><BookingButtons /></div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Ultrasound Health Checks for Reassurance and Clarity</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our health check scans are designed for people who want reassurance, clearer answers, or a proactive check of common areas such as the abdomen, pelvis, kidneys and bladder. Appointments are carried out by experienced sonographers in a calm clinical setting, with clear reporting and a supportive patient experience throughout.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Health Check Options Tailored to You</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We offer well woman, well man and couples health check scans, tailored to the areas most relevant to your symptoms, concerns or reassurance goals. Scans are performed in professional clinic settings, with prompt written reports to help you decide on any next steps.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Why Choose MedHealth Ultrasound for Health Checks?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our health checks are designed to provide fast access to trusted ultrasound in a calm and professional clinic environment. With experienced sonographers, convenient local locations and clear written reports, we make it easier to seek reassurance or investigate concerns without unnecessary delay.
              </p>

              <ul className="space-y-2 mb-6">
                {["Well Woman Health Check", "Well Man Health Check", "Couples Health Check", "Abdominal Health Screen", "Renal & Bladder Check"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></li>
                ))}
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <p className="text-sm text-primary font-semibold">Prices start at £XXX</p>
                <p className="text-xs text-muted-foreground mt-1">Payment is taken at the time of booking or on arrival.</p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <h3 className="font-heading font-bold text-foreground mb-4">Book This Scan</h3>
                  <BookingButtons variant="compact" />
                </div>
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}</div>
                  <p className="text-sm text-muted-foreground italic">"I had a women's wellness ultrasound with Andrea while waiting on a long NHS waitlist. Andrea was incredibly warm and kind, immediately putting me at ease."</p>
                  <p className="font-heading font-bold text-foreground mt-3 text-sm">— Amelia Crew</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container-wide text-center px-4">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground">Look After Your Health Today</h2>
          <p className="text-primary-foreground/80 mt-3">Choose your preferred clinic and book online today</p>
          <div className="mt-8 flex justify-center"><BookingButtons /></div>
        </div>
      </section>
    </div>
  );
};

export default HealthChecks;
