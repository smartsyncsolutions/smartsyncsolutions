function ServicesCard({ icon: Icon, title, description }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 px-5 py-4 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#C9A227] transition-all duration-300">
      <div className="w-10 h-[3px] bg-[#C9A227] rounded-full mb-3"></div>

      <div className="w-12 h-12 rounded-xl bg-[#F8F7F4] flex items-center justify-center mb-4 group-hover:bg-[#C9A227] transition">
        <Icon
          size={22}
          className="text-[#111827] group-hover:text-white transition"
        />
      </div>

      <h3 className="text-base font-semibold text-[#111827] mb-2">{title}</h3>

      <p className="text-sm text-gray-600 leading-5">{description}</p>
    </div>
  );
}

export default ServicesCard;
