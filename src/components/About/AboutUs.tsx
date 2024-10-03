import { cardInfoType, cardInfo ,aboutUsParagraph} from './AboutInfo';

const AboutUs = () => {
  return (
    <section className="relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <AboutUsImage />
          <AboutUsInfo />
        </div>
      </div>
    </section>
  )
}

export default AboutUs;

const AboutUsImage = () => {
  return (
    <div className="w-full -mt-16 md:-mt-0 justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
      <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
        <img
          className="rounded-xl object-cover"
          src="/about1.jpg"
          alt="about Us image1"
        />
      </div>
      <img
        className="sm:ml-0 ml-auto rounded-xl object-cover"
        src="/about2.jpg"
        alt="about Us image2"
      />
    </div>
  )
}

const AboutUsInfo = () => {
  return (
    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
      <div className="w-full flex-col justify-center items-start gap-8 flex">
        <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
          <h2 className="text-customBlue text-3xl md:text-4xl font-bold font-manrope uppercase leading-normal lg:text-start text-center">
            About Us
          </h2>
          <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
            {aboutUsParagraph}
          </p>
        </div>
        <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
          {cardInfo.map((card, index) => (
            <AboutUsCard key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  )
}

const AboutUsCard = ({ card }: { card: cardInfoType }) => {
  return (
    <div className="flex-col justify-start items-start inline-flex">
      <h3 className="text-gray-900 dark:text-gray-200 text-4xl font-bold font-manrope leading-normal">
        {card.number}+
      </h3>
      <h6 className="text-gray-500 text-base font-normal leading-relaxed">
        {card.info}
      </h6>
    </div>
  );
};


