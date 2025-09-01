
const Button = ({ children, variant = "default", className, ...props }) => {
  const baseStyles = "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors";
  const variantStyles =
    variant === "default"
      ? ""
      : "text-pink-400 hover:text-pink-300 hover:bg-pink-500/10";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className ?? ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
