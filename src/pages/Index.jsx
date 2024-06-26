import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const questions = [
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "H2O2"],
    answer: "H2O",
  },
  {
    question: "What is the atomic number of carbon?",
    options: ["6", "12", "14", "16"],
    answer: "6",
  },
  {
    question: "What is the pH level of pure water?",
    options: ["7", "1", "14", "5"],
    answer: "7",
  },
];

const Index = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Year 9 Chemistry Revision Game</CardTitle>
        </CardHeader>
        <CardContent>
          {showScore ? (
            <div className="text-center">
              <p className="text-2xl">You scored {score} out of {questions.length}</p>
              <Button onClick={handleRestart} className="mt-4">Restart</Button>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <p className="text-xl">{questions[currentQuestionIndex].question}</p>
              </div>
              <div className="space-y-2">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <Button key={index} onClick={() => handleAnswerOptionClick(option)} className="w-full">
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;