'use client';

import Image from 'next/image';

type Props = {
  score: number;
  total: number;
  questions: {
    text: string;
    options: string[];
    answer: string;
    image?: string; // ✅ campo opcional para a imagem
  }[];
  userAnswers: string[];
};

export default function Finish({ score, total, questions, userAnswers }: Props) {
  const incorrect = total - score;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-600">Quiz Finalizado!</h2>

      <div className="text-left">
        <div className="finish text-center text-xl font-semibold text-green-700">
          <p className="mb-2">✅ Você acertou {score} de {total} perguntas!</p>

          {incorrect > 0 && (
            <p className="text-red-600">❌ Você errou {incorrect} pergunta(s).</p>
          )}
        </div>

        <ul className="space-y-4 text-black mt-6">
          {questions.map((q, index) => {
            const userAnswer = userAnswers[index];
            if (userAnswer === q.answer) return null;

            return (
              <li key={index} className="bg-red-100 p-4 rounded shadow space-y-2">
                {q.image && (
                  <Image
                    src={q.image}
                    alt={`Imagem da pergunta ${index + 1}`}
                    width={300}
                    height={200}
                    className="rounded-lg mx-auto border-4 border-red-300"
                  />
                )}
                <p><strong>Pergunta:</strong> {q.text}</p>
                <p><strong>Sua resposta:</strong> {userAnswer}</p>
                <p><strong>Correta:</strong> {q.answer}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
