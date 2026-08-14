type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm ${
        hover ? "hover:shadow-md hover:border-gray-200 transition-all duration-300" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}