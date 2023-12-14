import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaGithub } from "react-icons/fa6";
import Footer from "../components/Fragments/Footter";
const ContactPage = () => {
  return (
    <section
      id="contact"
      className="flex flex-col bg-text-primary justify-center items-center  w-full px-2"
    >
      <h3 className="text-2xl md:text-4xl mb-5 mt-10 lg:text-5xl text-primary uppercase text-shadow font-bold">
        Contact Me
      </h3>
      <div className="w-full flex flex-col items-center md:items-start justify-center md:flex-row">
        <div className="md:w-1/2 md:mr-2 p-2">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-full lg:mx-auto lg:w-2/3">
              <label
                htmlFor="name"
                className="text-base capitalize font-bold text-primary"
              >
                nama
              </label>
              <input
                id="name"
                type="text"
                placeholder="Joe Doe"
                className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="w-full lg:mx-auto lg:w-2/3">
              <label
                htmlFor="email"
                className="text-base capitalize font-bold text-primary"
              >
                email
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@email"
                className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="w-full lg:mx-auto lg:w-2/3">
              <label
                htmlFor="pesan"
                className="text-base capitalize font-bold text-primary"
              >
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="30"
                rows="10"
                className="w-full rounded-md bg-slate-200 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              ></textarea>
            </div>
            <div className="w-full md:w-3/4 flex justify-center items-center px-4">
              <button className="w-full rounded-full shadow bg-primary py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg">
                Kirim
              </button>
            </div>
          </form>
        </div>
        <div className="md:w-1/2 md:ml-2">
          <h4 className="text-center text-shadow font-semibold text-2xl md:text-3xl lg:text-4xl  text-primary">
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
