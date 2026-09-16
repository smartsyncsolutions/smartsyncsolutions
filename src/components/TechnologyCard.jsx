function TechnologyCard({ icon, title, description }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 px-5 py-4 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#C9A227] transition-all duration-300">
      {/* Gold Line */}
      <div className="w-10 h-[3px] bg-[#C9A227] rounded-full mb-3"></div>

      {/* Icon */}
      <div className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-[#111827] mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-5">{description}</p>
    </div>
  );
}

export default TechnologyCard;
