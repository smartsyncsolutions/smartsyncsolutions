function Button({ text, variant = "primary" }) {
  const base =
    "px-6 sm:px-7 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base";

  const variants = {
    primary:
      "bg-[#D4AF37] text-black hover:bg-[#E6C35A] shadow-xl shadow-yellow-700/30",

    secondary:
      "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black",
  };

  return <button className={`${base} ${variants[variant]}`}>{text}</button>;
}

export default Button;
