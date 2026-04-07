import { CheckCircle, Star, AlertCircle } from "lucide-react";
import BookingButtons from "@/components/BookingButtons";
import serviceImg from "@/assets/service-endometriosis.jpg";

const EndometriosisScan = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center wave-divider">
        <div className="absolute inset-0">
          <img src={serviceImg} alt="Endometriosis Ultrasound Scan" className="w-full h-full object-cover" width={800} height={600} />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-4 py-24 w-full">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground max-w-4xl mx-auto leading-tight">
            Specialist Endometriosis Ultrasound in Portsmouth, Southampton and Chichester
          </h1>
          <p className="font-body text-lg text-primary-foreground/90 mt-4 max-w-3xl mx-auto">
            Expert pelvic ultrasound for symptoms such as painful periods, pelvic pain, pain during sex and suspected adenomyosis or endometriosis. Self-referral welcome. Secure digital reports provided.
          </p>
          <div className="mt-6 flex justify-center">
            <BookingButtons />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Endometriosis-Focused Pelvic Ultrasound</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pelvic pain, painful periods, or discomfort during sex can be more than just an inconvenience. MedHealth Ultrasound in Portsmouth, Southampton & Chichester offers endometriosis-focused pelvic ultrasounds, designed to provide clarity and guidance for those experiencing these symptoms. Our scans are performed by a specialist sonographer with 17 years of experience, ensuring a thorough and compassionate approach. Whether you're seeking answers or support alongside NHS care, our service is here to help.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3">What Makes Our Endometriosis Scans Different?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our appointments are designed for patients with symptoms suggestive of endometriosis or adenomyosis. We assess for ovarian endometriomas, features of adenomyosis and other pelvic pathology, while also looking for ultrasound signs that may support suspicion of deep disease where visible. Throughout the appointment, we explain what we are assessing and provide a secure digital report with clear next-step guidance where appropriate.
              </p>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3">This Scan Is Beneficial If You Experience:</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Severe period pain or discomfort between cycles",
                  "Pelvic pain or pain during intercourse",
                  "Cyclical bowel symptoms or pain when opening the bowels",
                  "Bladder pain, increased frequency, or urgency",
                  "A known diagnosis of endometriosis requires reassessment",
                  "Suspected adenomyosis",
                  "Fertility concerns alongside pelvic symptoms",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-secondary rounded-xl p-6 mb-6">
                <h4 className="font-heading font-bold text-foreground mb-3">Ultrasound Can Assist In Identifying:</h4>
                <ul className="space-y-2 mb-4">
                  {[
                    "Ovarian endometriomas (where present)",
                    "Structural features consistent with adenomyosis",
                    "Fibroids, cysts, and other pelvic pathology",
                    "Ultrasound features that support suspicion of deep disease (where visible)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />{item}</li>
                  ))}
                </ul>
                <h4 className="font-heading font-bold text-foreground mb-3 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-muted-foreground" /> Ultrasound May Not Show:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Small or superficial endometriosis</li>
                  <li>• Every site of disease in every individual</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">Our team ensures that your report will reflect these details clearly, outlining specific findings, limitations, and recommended next steps where appropriate.</p>
              </div>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3">Your Scan Appointment</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most appointments last around 45 minutes, depending on complexity. Depending on your symptoms and with your consent, the scan may include a transabdominal scan over the lower tummy and a transvaginal scan for higher-resolution detail. You are always in control, and the scan can be paused or declined at any stage.
              </p>

              <h4 className="font-heading font-bold text-foreground mb-2">Preparation</h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may be asked to attend with a comfortably full bladder for the first part of the scan. If an internal scan is performed, you may then be asked to empty your bladder. Full preparation details will be included in your booking confirmation.
              </p>

              <h4 className="font-heading font-bold text-foreground mb-2">Your Report and Next Steps</h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You will receive a secure digital report, a clear explanation of the findings, and guidance on next steps if further assessment is recommended.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
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
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                  </div>
                  <p className="text-sm text-muted-foreground italic">"I had an amazing experience — very friendly and welcoming from the moment I arrived. She was super helpful, incredibly knowledgeable, and truly professional throughout."</p>
                  <p className="font-heading font-bold text-foreground mt-3 text-sm">— Charlie Jane Yetman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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

export default EndometriosisScan;
