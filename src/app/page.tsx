'use client';

import { useState } from 'react';
import Image from 'next/image';
import Question from '../components/questions';
import Answers from '../components/answer';
import Finish from '../components/finish';
import { motion } from 'framer-motion';

export default function Home() {
  const [stage, setStage] = useState<'intro' | 'quiz' | 'finish'>('intro');
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const questions = [
    {
      text: 'Que sinal é este?',
      options: [`Sinal de obrigação, obrigação de utilizar as luzes maxímas acesas`, `Sinal de obrigação, obrigação de utilizar as luzes minímas acesas`, `Sinal de obrigação, obrigação de utilizar as luzes médias ou luzes de
cruzamentos acesas`],
      answer: `Sinal de obrigação, obrigação de utilizar as luzes médias ou luzes de
cruzamentos acesas`,
      image: '/img/luzes_cruzamento.png',
    },
    {
      text: 'Que sinal é este?',
      options: [`Sinal de perigo aproximação de um cruzamento, entroncamento
praça ou rotunda onde o transito é regulado por sinalização luminosa, onde
a luz vermelha significa paragem obrigatória, amarela, atenção e pudencia e
a luz verde passagem livre
`, 'sinal de perigo aproximação de um troço de via em obras', 'Sinal de proibição estacionamento proibido'],
      answer: `Sinal de perigo aproximação de um cruzamento, entroncamento
praça ou rotunda onde o transito é regulado por sinalização luminosa, onde
a luz vermelha significa paragem obrigatória, amarela, atenção e pudencia e
a luz verde passagem livre
`,
      image: '/img/luminoso.png',
    },
  ];

  const handleAnswer = (option: string) => {
    setUserAnswers((prev) => [...prev, option]);

    if (option === questions[step].answer) {
      setScore((prev) => prev + 1);
    }

    const next = step + 1;
    if (next < questions.length) {
      setStep(next);
    } else {
      setStage('finish');
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setStep(0);
    setUserAnswers([]);
    setStage('intro');
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-blue-100 to-white px-4">
      <main className="max-w-xl w-full  text-center space-y-6">
        {stage === 'intro' && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-10 shadow-xl "
          >
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
              🎉 Bem-vindo ao Quiz!
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Testa os teus conhecimentos com perguntas desafiadoras e diverte-te!
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setStage('quiz')}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              🚀 Começar Agora
            </motion.button>
          </motion.div>
        )}

        {stage === 'quiz' && (
          <>
            {questions[step].image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={questions[step].image}
                  alt={`Imagem da pergunta ${step + 1}`}
                  width={100}
                  height={100}
                  className="mx-auto mb-4 rounded-lg shadow"
                />
              </motion.div>
            )}

            <Question 
              questionText={questions[step].text}
              current={step + 1}
              total={questions.length}
            />
            <Answers options={questions[step].options} onSelect={handleAnswer} />
          </>
        )}

        {stage === 'finish' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <Finish
              score={score}
              total={questions.length}
              questions={questions}
              userAnswers={userAnswers}
            />
            <button
              onClick={restartQuiz}
              className="mt-6 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
            >
              🔄 Reiniciar Quiz
            </button>
          </motion.div>
        )}
      </main>
    </div>
  );
}
