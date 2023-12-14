import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import Footer from "../components/Fragments/Footter";
const ContactPage = () => {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center justify-center  bg-text-primary px-2"
    >
      <h3 className="text-shadow mb-5 mt-10 text-2xl font-bold uppercase text-primary md:text-4xl lg:text-5xl">
        Contact Me
      </h3>
      <div className="flex w-full flex-col items-center justify-center md:flex-row md:items-start">
        <div className="p-2 md:mr-2 md:w-1/2">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-full lg:mx-auto lg:w-2/3">
              <label
                htmlFor="name"
                className="text-base font-bold capitalize text-primary"
              >
                nama
              </label>
              <input
                id="name"
                type="text"
                placeholder="Joe Doe"
                className="text-dark w-full rounded-md bg-slate-200 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="w-full lg:mx-auto lg:w-2/3">
              <label
                htmlFor="email"
                className="text-base font-bold capitalize text-primary"
              >
                email
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@email"
                className="text-dark w-full rounded-md bg-slate-200 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="w-full lg:mx-auto lg:w-2/3">
              <label
                htmlFor="pesan"
                className="text-base font-bold capitalize text-primary"
              >
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="30"
                rows="10"
                className="text-dark w-full rounded-md bg-slate-200 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              ></textarea>
            </div>
            <div className="flex w-full items-center justify-center px-4 md:w-3/4">
              <button className="w-full rounded-full bg-primary px-8 py-3 text-base font-semibold text-white shadow transition duration-500 hover:opacity-80 hover:shadow-lg">
                Kirim
              </button>
            </div>
          </form>
        </div>
        <div className="md:ml-2 md:w-1/2">
          <h4 className="text-shadow text-center text-2xl font-semibold text-primary md:text-3xl  lg:text-4xl">
            Touch Me If You Can
          </h4>
          <ul className="flex flex-col">
            <li className="my-2">
              <a className="flex items-center gap-2">
                <MdOutlineEmail size={30} className="text-primary" />
                <span>alifichiganjati@gmail.com</span>
              </a>
            </li>
            <li className="my-2">
              <a
                href="https://www.linkedin.com/in/alifi-chiganjati-5141bb24b/"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <FaLinkedin size={30} className="text-primary " />
                <span>Alifi Chiganjati</span>
              </a>
            </li>
            <li className="my-2">
              <a
                href="https://github.com/AlifiChiganjati"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <FaGithub size={30} className="text-primary " />
                <span>AlifiChiganjati</span>
              </a>
            </li>

            <li className="my-2">
              <a
                href="https://www.instagram.com/alifi_chiganjati/"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <BsInstagram size={30} className="text-primary " />
                <span>@alifi_chiganjati</span>
              </a>
            </li>
            <li className="my-2">
              <a
                href="https://twitter.com/AlifiChiganjati"
                target="_blank"
                className="flex items-center gap-2"
                rel="noreferrer"
              >
                <FaSquareXTwitter size={30} className="text-primary " />
                <span>@AlifiChiganjati</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactPage;
