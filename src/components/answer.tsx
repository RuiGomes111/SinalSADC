'use client';
type Props = {
  options: string[];
  onSelect: (option: string) => void;
};

export default function Answers({ options, onSelect }: Props) {
  return (
    <div className="grid gap-4 mt-4 text-black">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className="bg-gray-200 hover:bg-gray-300 text-black py-2 px-4 rounded shadow-md transition duration-200"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
