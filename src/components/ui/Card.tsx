type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-light-sage shadow-sm ${
        hover ? "hover:shadow-md hover:border-light-sage transition-all duration-300" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}