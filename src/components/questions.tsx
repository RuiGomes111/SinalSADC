'use client';

type Props = {
  questionText: string;
  current: number;
  total: number;
};

export default function Question({ questionText, current, total }: Props) {
  return (
    <div className="mb-6 text-black">
      <span className="text-gray-500 text-sm">{`${current}/${total}`}</span>
      <h2 className="text-xl font-semibold mt-2">{questionText}</h2>
    </div>
  );
}
