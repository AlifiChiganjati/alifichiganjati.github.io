import ChevronIcon from "../atoms/ChevronIcon";

type Props = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function AccordionHeader({ title, isOpen, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 lg:w-auto lg:justify-start"
    >
      <h2 className="text-lg font-semibold capitalize md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        {title}
      </h2>
      <ChevronIcon isOpen={isOpen} />
    </button>
  );
}
