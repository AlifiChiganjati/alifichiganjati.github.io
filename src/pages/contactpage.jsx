import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import Footer from "../components/Fragments/Footter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import InputForm from "../components/Fragments/InputForm";

const ContactPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center justify-center  bg-text-primary px-2 duration-150 dark:bg-dark-secondary dark:text-dark-text-primary"
    >
      <h3
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="text-shadow mb-5 mt-10 text-2xl font-bold uppercase text-primary dark:text-dark-light md:text-4xl lg:text-5xl"
      >
        Contact Me
      </h3>
      <div
        data-aos="fade-left"
        data-aos-delay="500"
        data-aos-offset="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        className="flex w-full flex-col items-center justify-center md:flex-row md:items-start"
      >
        <InputForm />
        <div className="md:ml-2 md:w-1/2">
          <div>
            <h4 className="text-shadow text-center text-2xl font-semibold text-primary dark:text-dark-light  md:text-3xl lg:text-4xl">
              Touch Me If You Can
            </h4>
            <ul className="inline-block">
              <li className="my-4">
                <a className="flex items-center gap-2">
                  <MdOutlineEmail
                    size={30}
                    className="text-primary dark:text-dark-light"
                  />
                  <span>alifichiganjati@gmail.com</span>
                </a>
              </li>
              <li className="my-4">
                <a
                  href="https://www.linkedin.com/in/alifi-chiganjati-5141bb24b/"
                  target="_blank"
                  className="flex items-center gap-2"
                  rel="noreferrer"
                >
                  <FaLinkedin
                    size={30}
                    className="text-primary dark:text-dark-light"
                  />
                  <span>Alifi Chiganjati</span>
                </a>
              </li>
              <li className="my-4">
                <a
                  href="https://github.com/AlifiChiganjati"
                  target="_blank"
                  className="flex items-center gap-2"
                  rel="noreferrer"
                >
                  <FaGithub
                    size={30}
                    className="text-primary dark:text-dark-light"
                  />
                  <span>AlifiChiganjati</span>
                </a>
              </li>

              <li className="my-4">
                <a
                  href="https://www.instagram.com/alifi_chiganjati/"
                  target="_blank"
                  className="flex items-center gap-2"
                  rel="noreferrer"
                >
                  <BsInstagram
                    size={30}
                    className="text-primary dark:text-dark-light"
                  />
                  <span>@alifi_chiganjati</span>
                </a>
              </li>
              <li className="my-4">
                <a
                  href="https://twitter.com/AlifiChiganjati"
                  target="_blank"
                  className="flex items-center gap-2"
                  rel="noreferrer"
                >
                  <FaSquareXTwitter
                    size={30}
                    className="text-primary dark:text-dark-light"
                  />
                  <span>@AlifiChiganjati</span>
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-5  inline-block px-2 text-justify text-base font-light text-dark-primary dark:text-dark-light md:pr-4 md:text-xl">
            Don't be Shy, to get in touch with me if you have any projects or
            opportunities. I'm open to collaboration and eager to discuss how my
            skills and experience can contribute to your success. Whether it's a
            one-time project or an ongoing partnership, I'm here to explore and
            create value together. you can contact me via email or social media,
            and I'll reply ASAP.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactPage;
