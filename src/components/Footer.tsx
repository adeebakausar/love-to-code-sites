import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaGoogle } from "react-icons/fa";
import logo from "@/assets/medhealth-logo.png";

const Footer = () => {
  return (
    <footer className="bg-section-dark text-section-dark-foreground">
      <div className="container-wide px-4 py-14 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <img src={logo} alt="MedHealth Ultrasound" className="h-14 w-auto mb-4" />
            <p className="text-sm text-section-dark-foreground/70 leading-relaxed mb-4">
              Private ultrasound scans in Portsmouth, Southampton & Chichester. Fast, expert care with no GP referral needed.
            </p>
            <div className="flex gap-3">
              <a href="https://maps.app.goo.gl/aE2G81invnkYPtDa7" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-section-dark-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <FaGoogle className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-section-dark-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-section-dark-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-section-dark-foreground/70">
              <li><Link to="/services/endometriosis-scan" className="hover:text-accent transition-colors">Endometriosis Scan</Link></li>
              <li><Link to="/services/womens-health" className="hover:text-accent transition-colors">Women's Health Scans</Link></li>
              <li><Link to="/services/mens-health" className="hover:text-accent transition-colors">Men's Health Scans</Link></li>
              <li><Link to="/services/health-checks" className="hover:text-accent transition-colors">Wellness Health Checks</Link></li>
              <li><Link to="/corporate-wellness" className="hover:text-accent transition-colors">Corporate Wellness</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">Locations</h4>
            <ul className="space-y-2 text-sm text-section-dark-foreground/70">
              <li><Link to="/locations/portsmouth" className="hover:text-accent transition-colors">Portsmouth</Link></li>
              <li><Link to="/locations/southampton" className="hover:text-accent transition-colors">Southampton</Link></li>
              <li><Link to="/locations/chichester" className="hover:text-accent transition-colors">Chichester</Link></li>
            </ul>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mt-6 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-section-dark-foreground/70">
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-section-dark-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:02381684646" className="hover:text-accent transition-colors">023 8168 4646</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:contact@medhealthultrasound.co.uk" className="hover:text-accent transition-colors text-xs">contact@medhealthultrasound.co.uk</a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-accent" />
                <a href="https://wa.me/447725489074" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp Us</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>112 Milton Road, Portsmouth, PO3 6AR</span>
              </li>
            </ul>
            <p className="text-xs text-section-dark-foreground/50 mt-4">Mon–Sun: 09:00–17:00</p>
          </div>
        </div>
      </div>

      <div className="border-t border-section-dark-foreground/10">
        <div className="container-wide px-4 py-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-section-dark-foreground/50">
            © {new Date().getFullYear()} MEDHEALTH ULTRASOUND LTD. Company number 16783001. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-section-dark-foreground/50">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
