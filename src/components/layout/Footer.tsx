import Link from "next/link";

const footerLinks = {
  Manufacturing: [
    { label: "CNC Turning", href: "/manufacturing/cnc-turning" },
    { label: "VMC Machining", href: "/manufacturing/vmc" },
    { label: "Materials", href: "/manufacturing/materials" },
    { label: "Quality", href: "/manufacturing/quality" },
    { label: "Gallery", href: "/manufacturing/gallery" },
  ],
  Software: [
    { label: "Smart Factory Lite", href: "/smart-factory" },
    { label: "Factory ERP", href: "/software/factory-erp" },
    { label: "Production Management", href: "/software/production-management" },
    { label: "Inventory", href: "/software/inventory" },
    { label: "Quality Control", href: "/software/quality-control" },
    { label: "Machine Monitoring", href: "/software/machine-monitoring" },
  ],
  "Industrial Partner Network": [
    { label: "Industrial Service", href: "/partner-network" },
    { label: "Automation & Integration", href: "/partner-network" },
    { label: "Gauging & Inspection", href: "/partner-network" },
    { label: "Installation & Commissioning", href: "/partner-network" },
    { label: "Become a Partner", href: "/contact" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-white">
      <div className="w-full py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              AK<span className="text-forest">.</span>
              <span className="hidden sm:inline text-xs text-sage font-normal ml-2">
                Precision Components
              </span>
            </Link>
            <p className="mt-3 text-sm text-sage leading-normal">
              Precision component manufacturing, factory software and an
              expanding industrial partner network.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-medium text-light-sage uppercase tracking-wider mb-3">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-sage hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-forest flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-sage">
          <p>&copy; {new Date().getFullYear()} AK Precision Components.</p>
          <p>Manufacturing. Software. Industrial Expertise.</p>
        </div>
      </div>
    </footer>
  );
}
