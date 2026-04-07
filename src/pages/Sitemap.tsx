import { Link } from "react-router-dom";

const SITE_URL = "https://love-to-code-sites.lovable.app";

const sitemapData = [
  {
    category: "Main Pages",
    links: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" },
      { label: "Gallery", path: "/gallery" },
      { label: "Review Us", path: "/review-us" },
    ],
  },
  {
    category: "Tree Services",
    links: [
      { label: "Tree Service", path: "/tree-service" },
      { label: "Tree Removal", path: "/tree-service/tree-removal" },
      { label: "Logging", path: "/tree-service/logging" },
      { label: "Tree Pruning", path: "/tree-service/tree-pruning" },
      { label: "Stump Grinding", path: "/tree-service/stump-grinding" },
      { label: "Emergency Tree Services", path: "/tree-service/emergency" },
    ],
  },
  {
    category: "Land Clearing",
    links: [
      { label: "Land Clearing", path: "/land-clearing" },
      { label: "Land Clearing Service", path: "/land-clearing/land-clearing" },
      { label: "Grading", path: "/land-clearing/grading" },
    ],
  },
  {
    category: "Drainage",
    links: [
      { label: "Drainage", path: "/drainage" },
      { label: "Drainage Service", path: "/drainage/drainage" },
      { label: "Erosion & Sediment Control", path: "/drainage/erosion-control" },
      { label: "Basin Remediation", path: "/drainage/basin-remediation" },
    ],
  },
  {
    category: "Service Areas",
    links: [
      { label: "All Service Areas", path: "/service-areas" },
      { label: "Berks County", path: "/service-areas/berks-county" },
      { label: "Bucks County", path: "/service-areas/bucks-county" },
      { label: "Carbon County", path: "/service-areas/carbon-county" },
      { label: "Chester County", path: "/service-areas/chester-county" },
      { label: "Delaware County", path: "/service-areas/delaware-county" },
      { label: "Lancaster County", path: "/service-areas/lancaster-county" },
      { label: "Lebanon County", path: "/service-areas/lebanon-county" },
      { label: "Lehigh County", path: "/service-areas/lehigh-county" },
      { label: "Monroe County", path: "/service-areas/monroe-county" },
      { label: "Montgomery County", path: "/service-areas/montgomery-county" },
      { label: "Northampton County", path: "/service-areas/northampton-county" },
      { label: "Schuylkill County", path: "/service-areas/schuylkill-county" },
    ],
  },
  {
    category: "Forms & Legal",
    links: [
      { label: "Marketing Form", path: "/marketing-form" },
      { label: "Discount Form", path: "/discount-form" },
      { label: "Terms & Conditions", path: "/terms-and-conditions" },
      { label: "Privacy Policy", path: "/privacy-policy" },
    ],
  },
];

const Sitemap = () => {
  return (
    <section className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Sitemap</h1>
        <p className="text-muted-foreground mb-8">Complete list of all pages on our website.</p>

        <div className="space-y-8">
          {sitemapData.map((group) => (
            <div key={group.category}>
              <h2 className="text-lg font-bold text-foreground mb-3 border-b border-border pb-2">
                {group.category}
              </h2>
              <ul className="space-y-2 pl-4">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-primary hover:underline text-sm"
                    >
                      {link.label}
                    </Link>
                    <span className="text-muted-foreground text-xs ml-2">{SITE_URL}{link.path}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sitemap;
