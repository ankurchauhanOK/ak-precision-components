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
    "inline-flex items-center justify-center gap-2 px-5 py-[15px] rounded-[50px] text-base font-medium bg-[#F0F2F5] text-[#315C4A] border border-white/40 shadow-btn transition-all duration-200 hover:bg-white";

  const variants = {
    primary: "",
    secondary: "",
    outline: "",
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