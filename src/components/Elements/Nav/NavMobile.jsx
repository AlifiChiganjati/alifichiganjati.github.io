import { AiOutlineMenu } from "react-icons/ai";

const NavMobile = ({ onClick }) => {
  return (
    <ul className="flex lg:hidden">
      <li>
        <AiOutlineMenu
          size={30}
          onClick={onClick}
          className="cursor-pointer text-text-primary dark:text-dark-text-primary"
        />
      </li>
    </ul>
  );
};

export default NavMobile;
