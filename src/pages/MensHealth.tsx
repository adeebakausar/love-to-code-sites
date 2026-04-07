import { CheckCircle, Star } from "lucide-react";
import BookingButtons from "@/components/BookingButtons";
import serviceImg from "@/assets/service-mens.jpg";

const MensHealth = () => {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center wave-divider">
        <div className="absolute inset-0">
          <img src={serviceImg} alt="Men's Health Scans" className="w-full h-full object-cover" width={800} height={600} />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-4 py-24 w-full">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground max-w-4xl mx-auto leading-tight">
            Private Men's Ultrasound Scans in Portsmouth, Southampton and Chichester
          </h1>
          <p className="font-body text-lg text-primary-foreground/90 mt-4 max-w-3xl mx-auto">
            Expert ultrasound for abdominal pain, urinary symptoms, kidney and bladder concerns, testicular lumps or pain, and reassurance when you need answers quickly.
          </p>
          <div className="mt-6 flex justify-center"><BookingButtons /></div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Men's Ultrasound Tailored to Common Symptoms and Concerns</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We offer a range of private ultrasound scans for men, designed to investigate abdominal pain, urinary symptoms, kidney and bladder concerns, testicular symptoms, and selected screening needs. Our appointments are carried out by experienced sonographers, with clear reporting and a professional, reassuring approach throughout.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Why Go To MedHealth Ultrasound For Men's Scans?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our men's ultrasound appointments are designed to provide fast access to trusted imaging in a calm clinical setting. With experienced sonographers, convenient local clinics and straightforward booking, we make it easier to get clear answers without unnecessary delay.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Specialist Ultrasound for Men's Health</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our men's scan services include upper abdomen ultrasound, renal and bladder ultrasound, testes and scrotal ultrasound, aortic screening, and selected wellness scans. Whether you are investigating symptoms or seeking reassurance, we provide clear imaging and prompt reporting to support the next step in your care.
              </p>

              <ul className="space-y-2 mb-6">
                {["Upper Abdomen Ultrasound Scan", "Renal and Bladder Ultrasound Scan", "Aorta (AAA) Screening Ultrasound", "Testes/Scrotal Ultrasound Scan", "Full Wellness Scans"].map((item, i) => (
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
                  <p className="text-sm text-muted-foreground italic">"Exceptional service, thank you MedHealth! My results were promptly given same day after the scan so I didn't have to go home anxious, they were clearly explained, detailed and accurate."</p>
                  <p className="font-heading font-bold text-foreground mt-3 text-sm">— Anna Codlin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container-wide text-center px-4">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground">Book Your Private Ultrasound Appointment</h2>
          <p className="text-primary-foreground/80 mt-3">Choose your preferred clinic and book online today</p>
          <div className="mt-8 flex justify-center"><BookingButtons /></div>
        </div>
      </section>
    </div>
  );
};

export default MensHealth;
