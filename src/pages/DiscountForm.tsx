import { useState } from "react";
import logo from "@/assets/logo.png";

const DiscountForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "", agreed: false });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const fullName = form.name;
    const phone = form.phone;
    const message = form.message;

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/6V45N8I3W9GiHwA5iEDb/webhook-trigger/fb49ad74-c80c-4570-8cd7-93891a000c9a",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: fullName, phone: phone, message: message }),
        }
      );
      console.log("Webhook response status:", response.status);
      alert("Thank you! We'll get back to you soon.");
      setForm({ name: "", phone: "", message: "", agreed: false });
    } catch (err) {
      console.error("Webhook error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Logo / Company Name */}
        <div className="flex justify-center mb-2">
          <img src={logo} alt="BH Tree Service" className="h-16 w-auto" />
        </div>
        <h2 className="text-center text-primary font-heading font-bold text-lg mb-8 uppercase tracking-wide">
          GET Your Return Customer Discount!
        </h2>

        {/* Form Card */}
        <div className="bg-[#1a1d2e] rounded-xl p-6 md:p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-white mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="John Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white text-foreground text-sm border-2 border-white focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="(808) 555-1234"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-white text-foreground text-sm border-2 border-white focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-2">
                Short summary of the work you need! <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-md bg-white text-foreground text-sm border-2 border-white focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                checked={form.agreed}
                onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                className="mt-1 accent-primary"
              />
              <p className="text-xs text-white/70">
                I agree to <span className="text-primary font-semibold underline">terms & conditions</span> provided by the company. By providing my phone number, I agree to receive text messages from the business.
              </p>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-red-600 text-white font-heading text-xl font-bold py-4 rounded-md hover:bg-red-700 transition-colors uppercase tracking-wider disabled:opacity-60 flex items-center justify-center gap-2"
            >
              💬 {submitting ? "Sending..." : "GET MY DISCOUNT"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DiscountForm;
