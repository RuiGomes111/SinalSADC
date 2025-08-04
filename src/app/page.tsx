'use client';

import { useState } from 'react';
import Image from 'next/image';
import Question from '../components/questions';
import Answers from '../components/answer';
import Finish from '../components/finish';
import { motion } from 'framer-motion';
import { option } from 'framer-motion/client';

export default function Home() {
  const [stage, setStage] = useState<'intro' | 'quiz' | 'finish'>('intro');
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const questions = [
    {
      text: 'Que sinal é este?',
      options: [`Sinal de obrigação, obrigação de utilizar as luzes maxímas acesas`, `Sinal de obrigação, obrigação de utilizar as luzes minímas acesas`, `Sinal de obrigação, obrigação de utilizar as luzes médias ou luzes de cruzamentos acesas`],
      answer: `Sinal de obrigação, obrigação de utilizar as luzes médias ou luzes de cruzamentos acesas`,
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
    {
      text: 'Que sinal é este?',
      options:[`Sinal de obrigação,trânsito obrigatório giratório`, `Sinal de informação, existência de uma rotunda`, `Sinal de perigo, aproximação de uma Rotunda ou praça onde o trânsito é processado no setido giratório`],
      answer: `Sinal de obrigação,trânsito obrigatório giratório`,
      image: '/img/sinal3.png',
    },
    {
      text: 'Que sinal é este?',
      options:[`Sinal de perigo, aproximação de uma via com depressão.`, `Sinal de informação, existência de uma via com lomba e depressão`, `Sinal de perigo, aproximação de uma via com lomba`],
      answer: `Sinal de perigo, aproximação de uma via com lomba`,
      image: '/img/sinal4.png',
    },
     {
      text: 'Que sinal é este?',
      options:[`Sinal de proibição fim da proibição de ultrapassar para todos
automóveis pesados`, `Sinal de proibição fim da proibição de ultrapassar para todos
veículos automóveis`, `Sinal de proibição fim da proibição de ultrapassar para motociclos
simples
`],
      answer: `Sinal de proibição fim da proibição de ultrapassar para todos
veículos automóveis`,
      image: '/img/sinal5.png',
    },
    {
      text: 'Que sinal é este?',
      options:[`Sinal de proibição fim da proibição de ultrapassar para todos
automóveis pesados`, `Sinal de proibição fim da proibição de ultrapassar para todos
veículos automóveis`, `Sinal de proibição fim da proibição de ultrapassar para motociclos
simples
`],
      answer: `Sinal de proibição fim da proibição de ultrapassar para todos
automóveis pesados`,
      image: '/img/sinal6.png',
    },
    {
      text: 'Que sinal é este?',
      options:[`Sinal de obrigação pista obrigatória para peões e velocípedes com
separador`, `Sinal de obrigação pista obrigatória para peões e velocípedes sem
separador`, `Sinal de obrigação, fim da pista obrigatória para peões
`],
      answer: `Sinal de obrigação pista obrigatória para peões e velocípedes sem
separador`,
      image: '/img/sinal7.png',
    },
     {
      text: 'Que sinal é este?',
      options:[`Sinal de obrigação pista obrigatória para peões e velocípedes com
separador`, `Sinal de obrigação pista obrigatória para peões e velocípedes sem
separador`, `Sinal de obrigação, fim da pista obrigatória para peões
`],
      answer: `Sinal de obrigação pista obrigatória para peões e velocípedes com
separador`,
      image: '/img/sinal8.png',
    },
     {
      text: 'Que sinal é este?',
      options:[`Sinal de proibição transito proibido a veículos que transportam
meradorias perigosas`, `Sinal de proibição transito proibido a veículos que transportam
produtos capazes de poluirem as águas`, `Sinal de proibição transito proibido a veículos que transportam
produtos imflamaveis ou facilmente explosivos
`],
      answer: `Sinal de proibição transito proibido a veículos que transportam
meradorias perigosas`,
      image: '/img/sinal9.png',
    },

    {
      text: 'Que sinal é este?',
      options:[`Sinal de proibição estacionamento proibido`, `Sinal de proibição paragem proibida`, `Sinal de proibição, trÂnsito proibido
`],
      answer: `Sinal de proibição paragem proibida`,
      image: '/img/sinal10.png',
    },

    {
      text: 'Que sinal é este?',
      options:[`Sinal de obrigação pista obrigatória para veículos de tração animal`, `Sinal de obrigação pista obrigatória para gados em manada`, `Sinal de obrigação pista obrigatória para cavaleiros`],
      answer: `Sinal de obrigação pista obrigatória para veículos de tração animal`,
      image: '/img/sinal11.png',
    },

    {
      text: 'Que sinal é este?',
      options:[`Sinal de proibição, proibição de ultrapassar para todos os automóveis`, `Sinal de proibição, proibição de ultrapassar para automóveis pesados`, `Sinal de proibição, proibição de ultrapassar para motociclos e ciclomotores`],
      answer: `Sinal de proibição, proibição de ultrapassar para automóveis pesados`,
      image: '/img/sinal12.png',
    },

     {
      text: 'Que sinal é este?',
      options:[`Sinal de proibição transito proibido( Proibe o trânsito nos dois
sentidos)`, `Sinal de proibição sentido proibido( só proibe o transito de veículos
num único sentido e transita-se também num outro sentido que é em sentido
contrário)`, `Sinal de proibição, Sinal de proibição estacionamento proibido`],
      answer: `Sinal de proibição sentido proibido( só proibe o transito de veículos
num único sentido e transita-se também num outro sentido que é em sentido
contrário)`,
      image: '/img/sinal13.png',
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
