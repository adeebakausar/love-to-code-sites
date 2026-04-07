import { Shield, Clock, Users, Award, ArrowRight, Star, Phone, MessageCircle, Gift, CheckCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import BookingButtons from "@/components/BookingButtons";
import heroBg from "@/assets/medhealth-hero.jpg";
import serviceEndo from "@/assets/service-endometriosis.jpg";
import serviceWomens from "@/assets/service-womens.jpg";
import serviceMens from "@/assets/service-mens.jpg";
import serviceWellness from "@/assets/service-wellness.jpg";
import corporateImg from "@/assets/corporate-wellness.jpg";
import teamAndrea from "@/assets/team-andrea.jpg";
import teamRoma from "@/assets/team-roma.jpg";
import giftCard from "@/assets/gift-card.jpg";

const stats = [
  { icon: <Clock className="w-6 h-6" />, label: "17+ Years Ultrasound Expertise" },
  { icon: <Users className="w-6 h-6" />, label: "NHS-Trained Sonographers" },
  { icon: <Shield className="w-6 h-6" />, label: "No GP Referral Needed" },
  { icon: <MapPin className="w-6 h-6" />, label: "3 Convenient Locations" },
];

const services = [
  { title: "Endometriosis Scan", desc: "Targeted pelvic ultrasounds for endometriosis and adenomyosis, with clear reports and expert guidance.", image: serviceEndo, link: "/services/endometriosis-scan", price: "From £XXX" },
  { title: "Women's Health Scans", desc: "Comprehensive ultrasound for pelvic, ovarian and uterine concerns, delivered with sensitivity and expertise.", image: serviceWomens, link: "/services/womens-health", price: "From £XXX" },
  { title: "Men's Health Scans", desc: "Specialist scans for abdominal, kidney, bladder and testicular concerns, with clear imaging and reassurance.", image: serviceMens, link: "/services/mens-health", price: "From £XXX" },
  { title: "Wellness Scans", desc: "Focused ultrasound health checks designed to provide reassurance, clarity and appropriate next steps.", image: serviceWellness, link: "/services/health-checks", price: "From £XXX" },
];

const whyChoose = [
  "Experienced sonographers — scans performed by highly experienced clinicians with strong NHS backgrounds and specialist expertise",
  "Fast access, no long waits — book promptly through our partner clinics in Portsmouth, Southampton and Chichester",
  "Clear answers and written reports — understand your results and next steps without confusion",
  "Calm, supportive appointments — time to ask questions in a professional, reassuring setting",
];

const testimonials = [
  { text: "I had an ultrasound at Medhealth and was honestly so impressed from start to finish. The booking process was quick and easy, and Andrea made me feel completely at ease—especially since I was a bit nervous. The scan was thorough, she was not only professional but also warm and reassuring, explaining everything step by step. The report was sent to me promptly, and the clarity of the images and detail in the results were excellent. I left feeling informed and cared for. Highly recommend", author: "L Murphy" },
  { text: "I had an amazing experience — very friendly and welcoming from the moment I arrived. She was super helpful, incredibly knowledgeable, and truly professional throughout. She made me feel completely at ease. Such a down-to-earth lady that you can feel genuinely comfortable with. Her prices are so reasonable and very affordable too. I highly recommend Andrea", author: "Charlie Jane Yetman" },
  { text: "Exceptional service, thank you MedHealth! My results were promptly given same day after the scan so I didn't have to go home anxious, they were clearly explained, detailed and accurate. Andrea was amazing at reassuring me, patient/friendly and giving an outstanding scan and was very detailed. So happy I went to her!", author: "Anna Codlin" },
  { text: "I had a women's wellness ultrasound with Andrea while waiting on a long NHS waitlist. As someone with longstanding endometriosis, I wanted clarity and reassurance while awaiting further care. Andrea was incredibly warm and kind from the moment I arrived, immediately putting me at ease. She is highly knowledgeable and has specialist training in detecting and reporting suspected endometriosis, which was identified in my case. That validation meant so much to me. I couldn't recommend Andrea more, especially if you're waiting for NHS care but would like answers and reassurance sooner. Thank you so much!!", author: "Amelia Crew" },
];

const faqs = [
  { q: "What Is An Ultrasound Scan?", a: "An ultrasound scan uses sound waves to create images of the inside of your body. It is safe, painless and does not involve radiation." },
  { q: "Do I Need A Referral From My GP?", a: "No. You can book directly with MedHealth. If you would like your results shared with your GP, we can arrange that securely." },
  { q: "Who Performs The Scan?", a: "All scans are carried out by NHS-trained, HCPC-registered / qualified sonographers with extensive clinical experience." },
  { q: "How Long Will The Appointment Take?", a: "Most appointments take 10–25 minutes, depending on the scan type." },
  { q: "Will I Receive My Results Immediately?", a: "Yes. You will receive a verbal explanation straight after your scan. A written report will then be sent securely to you (and your GP/clinic if requested)." },
  { q: "Do I Need To Prepare For My Scan?", a: "Some scans require preparation. Abdominal scans: avoid eating for 6 hours before. Pelvic or bladder scans: arrive with a comfortably full bladder. Transvaginal scans: no full bladder needed. Your appointment confirmation will include preparation instructions." },
  { q: "Is The Scan Painful?", a: "No. Ultrasound scans are non-invasive and painless. Transvaginal and testicular scans are handled with sensitivity, privacy and explanation throughout." },
  { q: "Can I Bring Someone With Me?", a: "Yes, you are welcome to bring a partner, friend or relative for support." },
  { q: "What If Something Abnormal Is Found?", a: "Your sonographer will explain the findings clearly and provide a written report. If further tests or medical assessments are recommended, we will guide you on the next steps." },
  { q: "Are Ultrasound Scans Safe?", a: "Yes. Ultrasound is widely used in healthcare and is considered very safe. It does not use radiation." },
  { q: "How Do I Pay For My Scan?", a: "Payment is taken at the time of booking or on arrival. Prices are transparent, with no hidden fees." },
];

const steps = [
  { num: "1", title: "Choose Your Clinic & Book Online", desc: "Book with your preferred partner clinic in Portsmouth, Southampton or Chichester." },
  { num: "2", title: "Your Appointment", desc: "Your scan will be carried out in clinic by an experienced MedHealth sonographer working within the clinic team." },
  { num: "3", title: "Results & Follow Up", desc: "A written report is produced under the clinic's clinical pathway and can be shared with your GP if needed." },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="MedHealth Ultrasound" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 container-wide px-4 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
              <span className="text-primary-foreground/80 text-sm font-medium ml-1">Google Reviews</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
              Private Ultrasound Scans in Portsmouth, Southampton & Chichester
            </h1>
            <p className="font-body text-lg text-primary-foreground/90 mt-6 max-w-xl">
              Fast, expert ultrasound with no GP referral needed. Calm, reassuring appointments with specialist sonographers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/contact" className="inline-flex items-center justify-center bg-accent text-accent-foreground font-heading text-lg font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity">
                Book Your Scan
              </Link>
              <a href="https://wa.me/447725489074" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground font-heading text-lg font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <MessageCircle className="w-5 h-5" /> Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-6">
        <div className="container-wide px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 text-primary-foreground justify-center text-center sm:text-left">
              {stat.icon}
              <span className="font-heading text-sm font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-heading text-sm uppercase tracking-widest text-accent mb-2 font-semibold">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Our Private Ultrasound Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link key={s.link} to={s.link} className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-accent">{s.price}</span>
                  <h3 className="font-heading text-lg font-bold text-card-foreground mt-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-3 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Corporate Banner */}
          <div className="mt-12 rounded-xl overflow-hidden relative">
            <img src={corporateImg} alt="Corporate Wellness" loading="lazy" width={1920} height={1080} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-primary/80 flex items-center">
              <div className="px-8 lg:px-16">
                <span className="text-accent font-heading text-sm font-semibold uppercase tracking-wider">New</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mt-2">Corporate Ultrasound Wellness Programs</h3>
                <p className="text-primary-foreground/80 mt-2 max-w-lg">Employee health screening in Hampshire. Reduce staff absence, boost productivity and show your team you care.</p>
                <Link to="/corporate-wellness" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading text-sm font-semibold px-6 py-3 rounded-lg mt-4 hover:opacity-90 transition-opacity">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-heading text-sm uppercase tracking-widest text-accent mb-2 font-semibold">Why Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Why Patients Choose MedHealth Ultrasound</h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Fast access to high-quality private ultrasound across the South Coast, delivered by experienced sonographers with strong NHS backgrounds. We focus on accurate imaging, clear communication, and a calm clinical experience from booking to report.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex gap-4 bg-background p-6 rounded-xl shadow-sm border border-border">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-heading text-sm uppercase tracking-widest text-accent mb-2 font-semibold">Simple Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What To Expect From Your Scan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-2xl font-bold mx-auto mb-4">{step.num}</div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <BookingButtons />
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="font-heading text-sm uppercase tracking-widest text-accent mb-2 font-semibold">Our Experts</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Meet The Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-background rounded-xl overflow-hidden shadow-md border border-border">
              <img src={teamAndrea} alt="Andrea - Specialist Sonographer" loading="lazy" width={512} height={512} className="w-full h-64 object-cover object-top" />
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">Meet Andrea</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Andrea is an advanced gynaecological sonographer with extensive NHS experience, specialising in pelvic ultrasound and the assessment of complex gynaecological conditions including endometriosis and adenomyosis. She holds an MSc in Medical Ultrasound from King's College London and is known for providing thorough, compassionate care in a calm and reassuring environment.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-xl overflow-hidden shadow-md border border-border">
              <img src={teamRoma} alt="Roma - Specialist Sonographer" loading="lazy" width={512} height={512} className="w-full h-64 object-cover object-top" />
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">Meet Roma</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Roma Dave is a specialist diagnostic sonographer with over ten years of NHS experience in head and neck ultrasound and ultrasound-guided FNA cytology. She currently works within rapid access and one-stop clinic pathways, with particular expertise in thyroid, lymph node, salivary gland and neck lump assessment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-accent text-accent" />)}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What Our Patients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                <p className="font-heading font-bold text-foreground mt-4">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Gift className="w-6 h-6 text-accent" />
                <p className="font-heading text-sm uppercase tracking-widest text-accent font-semibold">Gift Cards</p>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">The Gift Of Reassurance</h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Treat someone you love to a private ultrasound scan with MedHealth Ultrasound. Our gift cards are a thoughtful way to support women's health and wellbeing—ideal for birthdays, anniversaries, Valentine's Day, or "just because".
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> A private scan appointment at one of our partner clinics</li>
                <li className="flex items-start gap-2 text-sm text-foreground"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> A clear explanation on the day</li>
                <li className="flex items-start gap-2 text-sm text-foreground"><CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /> A digital ultrasound report (sent securely after the appointment)</li>
              </ul>
              <a href="https://wa.me/447725489074" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading text-sm font-semibold px-6 py-3 rounded-lg mt-6 hover:opacity-90 transition-opacity">
                <MessageCircle className="w-4 h-4" /> Enquire About Gift Cards
              </a>
            </div>
            <div className="flex-1">
              <img src={giftCard} alt="MedHealth Ultrasound Gift Card" loading="lazy" width={800} height={600} className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl">
          <div className="text-center mb-12">
            <p className="font-heading text-sm uppercase tracking-widest text-accent mb-2 font-semibold">Support</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-card border border-border rounded-xl group">
                <summary className="font-heading font-bold text-card-foreground px-6 py-4 cursor-pointer hover:text-primary transition-colors list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-accent text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-muted-foreground px-6 pb-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16">
        <div className="container-wide text-center px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Book Your Private Ultrasound Appointment</h2>
          <p className="text-primary-foreground/80 mt-3 text-lg">Choose your preferred clinic and book online today</p>
          <div className="mt-8 flex justify-center">
            <BookingButtons />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
