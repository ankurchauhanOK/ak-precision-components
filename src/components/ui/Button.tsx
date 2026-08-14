import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  arrow = false,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200";

  const variants = {
    primary: "bg-navy text-white hover:bg-navy-light shadow-sm",
    secondary: "bg-accent-blue text-white hover:bg-accent-blue-light shadow-sm",
    outline:
      "border border-gray-300 text-navy hover:border-navy hover:bg-gray-50",
  };

  const content = (
    <>
      {children}
      {arrow && <span aria-hidden>→</span>}
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
}