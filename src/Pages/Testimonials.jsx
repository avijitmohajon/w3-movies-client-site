const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Manager",
    quote:
      "This platform exceeded our expectations. The user experience is clean and intuitive!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "David Kim",
    role: "Full Stack Developer",
    quote: "Seamless integration and great performance. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Product Designer",
    quote: "A beautiful layout and responsive support. I’m very impressed!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-base-300 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-base-content text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-blue-600">
          What Our Users Say
        </h2>
        <div className="relative border-l border-base-content pl-8 space-y-12">
          {testimonials.map(({ id, name, role, quote, image }, index) => (
            <div key={id} className="relative group">
              <div className="absolute -left-4 top-1 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
              <div
                className={`ml-4 p-6 rounded-lg bg-gray-100 text-gray-800 shadow-sm
                  ${index % 2 === 0 ? "md:ml-12" : "md:ml-4 md:mr-20"}
                `}
              >
                <p className="text-lg italic mb-4">“{quote}”</p>
                <div className="flex items-center space-x-4 mt-4">
                  <img
                    src={image}
                    alt={name}
                    className="w-10 h-10 rounded-full border-2 border-blue-500"
                  />
                  <div>
                    <h4 className="font-semibold">{name}</h4>
                    <p className="text-sm text-gray-500">{role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
