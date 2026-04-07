import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/medhealth-logo.png";

const services = [
  { label: "Endometriosis Scan", path: "/services/endometriosis-scan" },
  { label: "Women's Health Scans", path: "/services/womens-health" },
  { label: "Men's Health Scans", path: "/services/mens-health" },
  { label: "Wellness / Health Checks", path: "/services/health-checks" },
  { label: "Corporate Wellness", path: "/corporate-wellness" },
];

const locations = [
  { label: "Portsmouth", path: "/locations/portsmouth" },
  { label: "Southampton", path: "/locations/southampton" },
  { label: "Chichester", path: "/locations/chichester" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm shadow-lg">
      <div className="container-wide flex items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="MedHealth Ultrasound" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="font-body text-sm font-semibold text-primary-foreground hover:text-accent transition-colors">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="font-body text-sm font-semibold text-primary-foreground hover:text-accent transition-colors flex items-center gap-1">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "services" && (
              <div className="absolute top-full left-0 bg-background rounded-lg shadow-xl py-2 min-w-[240px] border border-border">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div className="relative group"
            onMouseEnter={() => setOpenDropdown("locations")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="font-body text-sm font-semibold text-primary-foreground hover:text-accent transition-colors flex items-center gap-1">
              Locations <ChevronDown className="w-4 h-4" />
            </button>
            {openDropdown === "locations" && (
              <div className="absolute top-full left-0 bg-background rounded-lg shadow-xl py-2 min-w-[200px] border border-border">
                {locations.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/corporate-wellness" className="font-body text-sm font-semibold text-primary-foreground hover:text-accent transition-colors">
            Corporate
          </Link>

          <Link to="/contact" className="font-body text-sm font-semibold text-primary-foreground hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="https://wa.me/447725489074" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent text-accent-foreground font-heading text-sm font-semibold px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <Link to="/contact" className="bg-primary-foreground text-primary font-heading text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
            Book Your Scan
          </Link>
          <a href="tel:02381684646" className="flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground font-body text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-primary-foreground/10 transition-colors">
            <Phone className="w-4 h-4" /> 023 8168 4646
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-primary-foreground font-semibold py-2">Home</Link>
          <p className="text-primary-foreground/60 text-xs uppercase tracking-wider font-semibold pt-2">Services</p>
          {services.map((s) => (
            <Link key={s.path} to={s.path} onClick={() => setMobileOpen(false)} className="block text-primary-foreground/80 text-sm pl-2 py-1.5">{s.label}</Link>
          ))}
          <p className="text-primary-foreground/60 text-xs uppercase tracking-wider font-semibold pt-2">Locations</p>
          {locations.map((l) => (
            <Link key={l.path} to={l.path} onClick={() => setMobileOpen(false)} className="block text-primary-foreground/80 text-sm pl-2 py-1.5">{l.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-primary-foreground font-semibold py-2">Contact</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block bg-primary-foreground text-primary text-center font-heading font-semibold px-5 py-3 rounded-lg">
            Book Your Scan
          </Link>
          <a href="https://wa.me/447725489074" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold py-3 rounded-lg">
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
          <a href="tel:02381684646" className="flex items-center justify-center gap-2 text-primary-foreground font-semibold py-2">
            <Phone className="w-4 h-4" /> 023 8168 4646
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
