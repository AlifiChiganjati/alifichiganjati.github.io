import { AiOutlineMenu } from "react-icons/ai";

const NavMobile = ({ onClick }) => {
  return (
    <ul className="flex lg:hidden">
      <li>
        <AiOutlineMenu size={30} onClick={onClick} className="cursor-pointer" />
      </li>
    </ul>
  );
};

export default NavMobile;
