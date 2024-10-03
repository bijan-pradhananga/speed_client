import { services,ServiceType } from "./ServiceInfo";

const Service = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] mx-2 md:mx-0">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-pink-600">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
        {services.map((service,index) => (
          <ServiceCard key={index} service={service} />
        ))}
        </div>
      </div>
    </section>
  );
};


const ServiceCard:React.FC<{ service: ServiceType }> = ({ service }) => {
  return (
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-customBlue text-white">
            {service.icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {service.title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{service.details}</p>
        </div>
      </div>
  );
};


export default Service;
