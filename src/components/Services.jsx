import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service from "../assets/service.jpg";
const services = [
  {
    title: "House Repairing",
    image: service1,
  },
  {
    title: "Painting House",
    image: service2,
  },
  {
    title: "Flooring installation",
    image: service3,
  },
  {
    title: "Electrical and plumbing",
    image: service4,
  },
];

const Services = () => {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 py-4 md:py-6">
      <div className="text-center mb-12">
        <p className="text-[#003084] text-2xl mb-2 font-bold">Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Top Construction Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <div className="relative mb-4 overflow-hidden rounded-2xl">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
      <div className=" py-16 md:px-4">
        <div className="max-w-6xl mx-auto">
          <div className=" rounded-2xl  overflow-hidden">
            <div className="grid md:grid-cols-2 gap-3 md:gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={service}
                  alt="Construction workers in safety "
                  className="h-full w-full"
                />
              </div>

              {/* Content Section */}
              <div className="px-3 md:px-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-[#003084] text-2xl mb-2 font-bold">
                      Services
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      Our Top Construction Services
                    </h1>
                  </div>

                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      We specialize in delivering high-quality construction
                      services tailored to your needs, ensuring excellence from
                      start to finish. Our experienced team works with precision
                      and dedication, guaranteeing that every project is
                      completed on time, within budget, and to the highest
                      standards.
                    </p>

                    <p>
                      We prioritize delivering exceptional results on time and
                      within budget, ensuring every detail is handled with
                      precision and care. Our unwavering commitment to quality
                      means your project doesn't just meet expectations it
                      exceeds them, providing lasting value and satisfaction for
                      years to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
