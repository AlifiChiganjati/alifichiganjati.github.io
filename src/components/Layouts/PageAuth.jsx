import Navbar from "../Fragments/Navbar";

const PageAuth = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PageAuth;
