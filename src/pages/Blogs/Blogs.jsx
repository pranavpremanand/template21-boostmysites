import React from "react";
import banner from "../../assets/images/banners/aboutus.png";
import { blogs } from "../../content/blogs";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/30 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-[6rem] md:pt-[8rem] pb-16 items-end">
          <h1 data-aos="fade-right" className="text_xl text-white">
            Codexa Insights & Innovation
          </h1>
        </div>
      </section>
      <section className="py-14">
        <div className="wrapper space-y-[4rem]">
          {/* Healthcare Blogs */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text1">Healthcare Technology</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            <p className="desc max-w-3xl mb-8">
              Explore how Codexa is revolutionizing healthcare through innovative AI solutions, 
              machine learning applications, and data-driven approaches that improve patient care and operational efficiency.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {blogs.HEALTHCARE.map((blog) => (
                <div key={blog.id} className="p-4 border border-primary2 rounded-xl flex flex-col gap-4 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-3">
                    <Link
                      to={blog.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="overflow-hidden aspect-video rounded-xl">
                        <img
                          src={blog.image}
                          alt="Blog"
                          className="object-cover w-full h-full group-hover:brightness-90 group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    </Link>
                    <h3 className="text3 font-semibold">{blog.title}</h3>
                    <p className="desc text-sm text-gray-600">{blog.excerpt}</p>
                  </div>
                  <Link
                    to={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-primary text-black hover:bg-black hover:text-white border border-primary h-fit mt-auto"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* AI & Machine Learning Blogs */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text1">AI & Machine Learning</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            <p className="desc max-w-3xl mb-8">
              Discover how Codexa is leveraging artificial intelligence and machine learning 
              to transform businesses, automate processes, and create intelligent solutions that drive growth.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {blogs.AI_ML.map((blog) => (
                <div key={blog.id} className="p-4 border border-primary2 rounded-xl flex flex-col gap-4 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-3">
                    <Link
                      to={blog.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="overflow-hidden aspect-video rounded-xl">
                        <img
                          src={blog.image}
                          alt="Blog"
                          className="object-cover w-full h-full group-hover:brightness-90 group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    </Link>
                    <h3 className="text3 font-semibold">{blog.title}</h3>
                    <p className="desc text-sm text-gray-600">{blog.excerpt}</p>
                  </div>
                  <Link
                    to={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-primary text-black hover:bg-black hover:text-white border border-primary h-fit mt-auto"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Web & Mobile Development Blogs */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text1">Web & Mobile Development</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            <p className="desc max-w-3xl mb-8">
              Learn about Codexa's innovative approaches to web and mobile development, 
              from modern frameworks to user experience optimization and cross-platform solutions.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {blogs.WEB_MOBILE.map((blog) => (
                <div key={blog.id} className="p-4 border border-primary2 rounded-xl flex flex-col gap-4 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-3">
                    <Link
                      to={blog.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="overflow-hidden aspect-video rounded-xl">
                        <img
                          src={blog.image}
                          alt="Blog"
                          className="object-cover w-full h-full group-hover:brightness-90 group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    </Link>
                    <h3 className="text3 font-semibold">{blog.title}</h3>
                    <p className="desc text-sm text-gray-600">{blog.excerpt}</p>
                  </div>
                  <Link
                    to={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-primary text-black hover:bg-black hover:text-white border border-primary h-fit mt-auto"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Innovation Blogs */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text1">Technology & Innovation</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            <p className="desc max-w-3xl mb-8">
              Explore cutting-edge technology trends and innovative solutions that Codexa is developing 
              to address complex business challenges and drive digital transformation.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {blogs.TECHNOLOGY.map((blog) => (
                <div key={blog.id} className="p-4 border border-primary2 rounded-xl flex flex-col gap-4 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-3">
                    <Link
                      to={blog.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="overflow-hidden aspect-video rounded-xl">
                        <img
                          src={blog.image}
                          alt="Blog"
                          className="object-cover w-full h-full group-hover:brightness-90 group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    </Link>
                    <h3 className="text3 font-semibold">{blog.title}</h3>
                    <p className="desc text-sm text-gray-600">{blog.excerpt}</p>
                  </div>
                  <Link
                    to={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-primary text-black hover:bg-black hover:text-white border border-primary h-fit mt-auto"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Innovation & Future Trends */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text1">Innovation & Future Trends</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>
            <p className="desc max-w-3xl mb-8">
              Stay ahead of the curve with insights into emerging technology trends, 
              sustainable practices, and Codexa's vision for the future of digital innovation.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {blogs.INNOVATION.map((blog) => (
                <div key={blog.id} className="p-4 border border-primary2 rounded-xl flex flex-col gap-4 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-3">
                    <Link
                      to={blog.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <div className="overflow-hidden aspect-video rounded-xl">
                        <img
                          src={blog.image}
                          alt="Blog"
                          className="object-cover w-full h-full group-hover:brightness-90 group-hover:scale-105 transition-all duration-300"
                        />
                      </div>
                    </Link>
                    <h3 className="text3 font-semibold">{blog.title}</h3>
                    <p className="desc text-sm text-gray-600">{blog.excerpt}</p>
                  </div>
                  <Link
                    to={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn bg-primary text-black hover:bg-black hover:text-white border border-primary h-fit mt-auto"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
