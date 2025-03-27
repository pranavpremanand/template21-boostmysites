import { Link, Navigate, useParams } from "react-router-dom";
import ContactForm2 from "../../components/common/ContactForm2";
import { circleImg } from "../../content/constant";
import DevelopmentProcess from "../../components/common/DevelopmentProcess";
import OurExpertise from "./components/OurExpertise";
import SolutionUseCases from "./components/SolutionUseCases";
import { ourServices } from "../../content/ourServices";
import { createUrlParam } from "../../utils/helper";

const ServiceDetails = () => {
  const { param } = useParams();

  const data = ourServices.find((item) => createUrlParam(item.title) === param);

  if (!data) {
    return <Navigate to="/services" />;
  }

  const {
    serviceDetails: { whyChooseContent, ...serviceDetails },
    title,
  } = data;

  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/30 z-[-1]"></div>
        <img
          src={serviceDetails.banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt={title}
        />
        <div
          data-aos="fade-right"
          className="wrapper flex flex-col gap-3 h-full py-16 justify-center translate-y-[2rem]"
        >
          <div className="flex gap-4 items-center text4 !font-normal">
            <Link to="/services">Services</Link> <span>|</span>
            <p>{title}</p>
          </div>
          <h1 className="text_xl">{title}</h1>
        </div>
        <div className="wrapper flex justify-end -translate-y-1/2">
          <img
            data-aos="fade-up-right"
            src={serviceDetails.img1}
            className="hidden lg:block object-cover aspect-[3/4] h-fit overflow-hidden rounded-xl max-w-[17rem] -rotate-[4deg]"
            alt=""
          />
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          data-aos="fade-up"
          src={circleImg}
          width={150}
          height={150}
          className="object-contain absolute w-[17rem] h-[17rem] top-[-1rem] left-[-2rem] -z-[1]"
          alt=""
        />
        <div className="wrapper">
          <div className="lg:max-w-[calc(100%-17rem)]">
            <div className="py-14">
              <h2 data-aos="fade-up" className="text2 text-primary">
                {whyChooseContent.heading}
              </h2>
              <ul className="space-y-4 pt-4 lg:max-w-[calc(100%-5rem)] desc">
                {whyChooseContent.list.map((item) => (
                  <li data-aos="fade-up" key={item.title}>
                    <span className="text-primary">✅ {item.title} :</span>
                    {item.desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" className="flex justify-end">
            <img
              src={serviceDetails.img2}
              className="object-cover aspect-[4/2] lg:aspect-[3/4] rounded-xl lg:max-w-[17rem] lg:-translate-y-[50%]"
              alt=""
            />
          </div>
        </div>
      </section>
      <OurExpertise content={serviceDetails.ourExpertiseContent || null} />
      <DevelopmentProcess content={serviceDetails.developmentProcess || null} />
      <SolutionUseCases content={serviceDetails.solutionUseCases || null} />
      <ContactForm2 isDark={Boolean(!serviceDetails.solutionUseCases)} />
    </>
  );
};

export default ServiceDetails;
