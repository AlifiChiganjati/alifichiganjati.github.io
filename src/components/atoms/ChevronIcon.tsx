import { IoIosArrowForward } from "react-icons/io";

type Props = {
  isOpen: boolean;
};

export default function ChevronIcon({ isOpen }: Props) {
  return (
    <span
      className={`transition-transform duration-300 ${
        isOpen ? "rotate-90" : ""
      }`}
    >
      <IoIosArrowForward />
      {/* <IoIosArrowDown /> */}
    </span>
  );
}
