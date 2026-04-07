import { useState } from "react";
import logo from "@/assets/logo.png";

const MarketingForm = () => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const fullName = form.name;
    const phone = form.phone;

    try {
      const response = await fetch(
        "https://services.leadconnectorhq.com/hooks/6V45N8I3W9GiHwA5iEDb/webhook-trigger/fb49ad74-c80c-4570-8cd7-93891a000c9a",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: fullName, phone: phone }),
        }
      );
      console.log("Webhook response status:", response.status);
      alert("Thank you! Your information has been submitted.");
      setForm({ name: "", phone: "" });
    } catch (err) {
      console.error("Webhook error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-lg mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="BH Tree Service" className="h-20 w-auto" />
        </div>

        {/* Info Card */}
        <div className="bg-[#2a2a2a] border border-primary/30 rounded-lg p-6 mb-8 text-white space-y-4">
          <p>
            <span className="text-primary">1. ⭐</span> This will send out your{" "}
            <strong>5 star review request funnel</strong> (gate keeping negative reviews)
          </p>
          <p className="text-sm text-muted-foreground pl-4">
            - Customer will be reminded to leave you a 5 star review 4 times over a 4 week period
            (<em>*automation will stop if they leave a review*</em>)
          </p>
          <p className="mt-2">
            <span className="text-primary">2. 📱</span> Customer will be put into your{" "}
            <strong>1 year follow up sequence</strong>
          </p>
          <p className="text-sm text-muted-foreground pl-4">
            - Customer will be texted every 2-3 months reminding them of your return customer
            discount + requesting referrals for the same discount
          </p>
          <p className="font-bold mt-4">Fill in the information below 👇👇👇</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-foreground mb-2">
              Customer First Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Customers First name (For example: John)"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-white text-foreground text-sm border border-primary/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-white mb-2">
              Phone (INCLUDE AREA CODE) - You will not be able to submit if # is typed wrong
              <span className="text-destructive"> *</span>
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10,}"
              title="Please enter a valid phone number with area code (e.g. 8085551234)"
              placeholder="Phone (For example: 8085551234)"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-white text-foreground text-sm border border-primary/40 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-primary text-primary-foreground font-heading text-2xl font-bold py-4 rounded-md hover:opacity-90 transition-opacity uppercase tracking-wider disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit!"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default MarketingForm;
