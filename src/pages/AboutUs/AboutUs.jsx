import banner from "../../assets/images/banners/aboutus.png";
import img1 from "../../assets/images/our-story.png";
import img2 from "../../assets/images/client-engagement-and-support.png";
import img3 from "../../assets/images/ongoing-support.png";
import img4 from "../../assets/images/Partnership Beyond Projects.png";
import { circleImg, futureGoals } from "../../content/constant";
import Testimonials from "../../components/common/Testimonials";
import ContactForm2 from "../../components/common/ContactForm2";

const AboutUs = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/20 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-16 items-end">
          <h1 data-aos="fade-right" className="text_xl">
            About Us
          </h1>
        </div>
      </section>
      <section className="py-14 bg-white text-black relative z-0">
        <div
          data-aos="fade-up"
          className="bg-primary absolute z-[-1] right-0 top-14 w-[6rem] h-[20rem]"
        ></div>
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center">
            The Codexa Journey
          </h2>
          <div className="grid md:grid-cols-[40%_1fr] gap-8 pt-5">
            <div className="rounded-xl overflow-hidden">
              <img
                data-aos="fade-right"
                loading="lazy"
                src={img1}
                className="w-full h-full aspect-square object-cover"
                alt=""
              />
            </div>
            <div data-aos="fade-up">
              <p className="desc">
                Codexa was born from a simple yet powerful vision: to bridge the gap between innovative ideas and technological reality. We believe that every business challenge is an opportunity for digital transformation, and every client relationship is a partnership for success. Our journey began with a team of passionate technologists who understood that great software isn't just about code—it's about understanding human needs, business objectives, and market dynamics. Today, Codexa stands as a testament to our commitment to excellence, innovation, and client success, delivering cutting-edge solutions that drive real business impact across industries worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 relative bg-white text-black overflow-hidden z-0">
        <div className="absolute z-[-1] top-[-3rem] left-[-3rem] h-[18rem] w-[12rem] bg-primary rounded-ee-full"></div>
        <div
          data-aos="fade-up"
          className="wrapper flex flex-col items-center gap-3"
        >
          <h2 className="text1 max-w-3xl text-center">
            Your Success is Our Mission: Codexa's Collaborative Approach
          </h2>
          <div className="h-2 w-[18rem] bg-white"></div>
        </div>
        <div className="wrapper pt-12 grid md:grid-cols-2 lg:grid-cols-[40%_1fr] items-center gap-8">
          <div className="">
            <img
              data-aos="fade-right"
              loading="lazy"
              src={img2}
              className="object-contain w-full aspect-square max-h-[30rem]"
              alt="Client Engagement & Support"
            />
          </div>
          <div data-aos="fade-up" className="space-y-5">
            <h4 className="text2">Partnership from Day One</h4>
            <p className="desc">
              At Codexa, we believe that successful projects are built on strong partnerships. We don't just deliver solutions—we become an extension of your team, working collaboratively to achieve your vision. Here's how we ensure your success:
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4">Strategic Discovery Sessions: </span>
                Deep-dive workshops to align on vision, goals, and success metrics.
              </li>
              <li>
                <span className="text4">Transparent Communication: </span>
                Regular progress updates and milestone celebrations throughout the journey.
              </li>
              <li>
                <span className="text4">Iterative Development: </span>
                Your feedback drives every iteration, ensuring the final product exceeds expectations.
              </li>
              <li>
                <span className="text4">Dedicated Success Manager: </span>
                A single point of contact for all your questions, concerns, and strategic guidance.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-14 relative">
        <img
          data-aos="fade-down-right"
          loading="lazy"
          src={circleImg}
          className="z-[-1] absolute top-[-4rem] left-[-3rem] w-[18rem] h-[18rem] object-contain aspect-square"
          alt=""
        />
        <img
          data-aos="fade-up-right"
          loading="lazy"
          src={circleImg}
          className="absolute bottom-0 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
          alt=""
        />
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-7">
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">Beyond Projects: Your Digital Transformation Partner</h3>
            <p className="desc">
              At Codexa, we're not just a service provider—we're your strategic partner in digital transformation. Our commitment extends far beyond project completion, ensuring your long-term success in an ever-evolving digital landscape.
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">Strategic Roadmapping: </span>
                Long-term technology planning aligned with your business growth objectives.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Quarterly Business Reviews:{" "}
                </span>{" "}
                Regular strategic sessions to assess performance and identify new opportunities.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Technology Evolution:{" "}
                </span>{" "}
                Proactive updates and modernization as new technologies emerge.
              </li>
              <li>
                <span className="text4 text-primary2">Priority Response Team: </span>{" "}
                Dedicated support for urgent business needs and critical system issues.
              </li>
              <li>
                <span className="text4 text-primary2">Market Intelligence: </span>{" "}
                Industry insights and competitive analysis to inform your strategic decisions.
              </li>
              <li>
                <span className="text4 text-primary2">Growth Acceleration: </span>{" "}
                Scalable solutions and infrastructure to support your business expansion.
              </li>
            </ul>
          </div>
          <div data-aos="fade-right">
            <img
              loading="lazy"
              src={img3}
              alt="Ongoing Support"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="z-[-2] bg-white text-black py-14 relative overflow-hidden">
        <div
          data-aos="fade-down-right"
          className="z-[-1] w-[8rem] h-[8rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-[-1.5rem] left-[-1.5rem] drop-shadow-2xl"
        ></div>
        <div
          data-aos="fade-up-right"
          className="z-[-1] w-[15rem] h-[20rem] rounded-t-[6rem] bg-gradient-to-b from-primary to-transparent absolute bottom-[-2rem] right-[-2rem] drop-shadow-2xl"
        ></div>
        <div className="wrapper grid md:grid-cols-[40%_1fr] items-center gap-7">
          <div data-aos="fade-right" className="">
            <img
              loading="lazy"
              src={img4}
              alt="Partnership Beyond Projects"
              className="object-contain w-full"
            />
          </div>
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">Partnership Beyond Projects</h3>
            <p className="desc">
              At Codexa, we’re committed to your growth, even after
              project completion: Future
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">Planning: </span>
                Insights for growth and adaptation.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Consistent Check-Ins:{" "}
                </span>{" "}
                Regular touchpoints to stay aligned.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Solution Enhancements:{" "}
                </span>{" "}
                Updates as your business evolves.
              </li>
              <li>
                <span className="text4 text-primary2"> Priority Support: </span>{" "}
                Fast assistance for ongoing needs.
              </li>
              <li>
                <span className="text4 text-primary2">Industry Insights: </span>{" "}
                Guidance to keep you competitive.
              </li>
              <li>
                <span className="text4 text-primary2">Flexible Scaling: </span>{" "}
                Adjustments as your demands grow.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />
      <section className="py-14 bg-white text-black relative overflow-hidden z-0">
        <div
          data-aos="fade-down"
          className="absolute z-[-1] top-[-3rem] lef-[-3rem] h-[18rem] w-[8rem] bg-primary rounded-ee-[8rem]"
        />
        <div className="wrapper relative text-center space-y-3">
          <div
            data-aos="fade-up-right"
            className="z-[-1] w-[6rem] h-[6rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#FFFF82)] absolute top-full right-[15%] drop-shadow-2xl"
          ></div>
          <h2 data-aos="fade-up" className="text1 text-primary2">
            Codexa's Vision for Tomorrow
          </h2>
          <p data-aos="fade-up" className="desc max-w-4xl mx-auto">
            Codexa envisions a future where technology seamlessly bridges the gap between human potential and digital innovation. We strive to be the catalyst that transforms complex business challenges into elegant, AI-powered solutions that drive measurable impact. Our vision extends beyond traditional software development—we're building the foundation for a world where businesses thrive through intelligent automation, data-driven insights, and collaborative innovation. We're committed to empowering organizations to not just adapt to change, but to lead it, creating sustainable growth and meaningful connections in an increasingly digital world.
          </p>
        </div>
        <div className="wrapper py-16 text-center">
          <h2 data-aos="fade-up" className="text1 text-primary2">
            Codexa's Strategic Roadmap
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 pt-7">
            {futureGoals.map((item) => (
              <div key={item.title} data-aos="fade-up">
                <div className="bg-black group hover:bg-primary hover:text-black text-start text-white rounded-xl p-7 space-y-3 transition-all duration-300 h-full">
                  <div className="pb-7 text-primary group-hover:text-black">
                    {item.icon}
                  </div>
                  <h6 className="text3">{item.title}</h6>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm2 isDark={true} />
    </>
  );
};

export default AboutUs;
