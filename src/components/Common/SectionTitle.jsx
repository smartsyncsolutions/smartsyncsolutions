function SectionTitle({ title, subtitle, center = false }) {
  return (
    <div className={center ? "text-center mb-14" : "mb-14"}>
      <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">{title}</h2>

      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mt-5 rounded-full"></div>

      <p
        className={`mt-5 text-gray-600 leading-7 max-w-2xl ${
          center ? "mx-auto" : ""
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;
