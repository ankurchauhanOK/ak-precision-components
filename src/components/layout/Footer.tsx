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
    { label: "AI Inspection", href: "/software/ai-inspection" },
    { label: "Machine Monitoring", href: "/software/machine-monitoring" },
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
    <footer className="bg-navy text-white">
      <div className="w-full py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              AK<span className="text-accent-blue">.</span>
              <span className="hidden sm:inline text-xs text-gray-400 font-normal ml-2">
                Precision Components
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-normal">
              Precision component manufacturing and practical Industry 4.0
              software for CNC &amp; VMC machine shops.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-medium text-gray-300 uppercase tracking-wider mb-3">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-navy-light flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AK Precision Components.</p>
          <p>Precision Manufacturing. Practical Industry 4.0.</p>
        </div>
      </div>
    </footer>
  );
}