import { useState, useRef, useCallback, React } from 'react'
import QuestionTimer from './QuestionTimer';
import correctIcon from '../assets/images/icon-correct.svg';
import wrongIcon from '../assets/images/icon-incorrect.svg';
import errorIcon from '../assets/images/icon-error.svg';

// need to handle timer nex time
const Quiz = ({currentQuiz, resetQuiz, colors}) => {
  const [submitError, setSubmitError] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answer, setAnswer] = useState({
    isCorrect: null,
    showFeedback: false,
  })
  const activeQuestionIndex = userAnswers.length;
  const selectedAnswer = useRef(null);
  const isQuizComplete = activeQuestionIndex === currentQuiz.questions.length;

  const currentQuestionData = !isQuizComplete ? currentQuiz.questions[activeQuestionIndex] : null;
  const correctAnswer = currentQuestionData?.answer;
  const currentQuestion = currentQuestionData?.question;
  const currentOptions = currentQuestionData?.options;

  const timer = 10000;

  const onSkipAnswer = useCallback(function onSkipAnswer() {
    selectedAnswer.current = null;

    setAnswer({
      isCorrect: false,
      showFeedback: true,
    })

    const timer = setTimeout(() => {
      setUserAnswers(prev => [...prev, null]);

      setAnswer({ isCorrect: null, showFeedback: false });
    }, 1500);

    return () => clearTimeout(timer);
  },[])

  function handleOption(option) {
    selectedAnswer.current = option
  }

  function onSelectAnswer() {

      if (!answer.showFeedback && selectedAnswer.current === null) {
        setSubmitError(true);
        return;
      }

      setSubmitError(false);
      setAnswer(prev => {
        if (prev.showFeedback) {
          setUserAnswers(prev => [...prev, selectedAnswer.current]);
          selectedAnswer.current = null;
          return { isCorrect: null, showFeedback: false}
        } else {
          return {
            isCorrect: selectedAnswer.current === correctAnswer,
            showFeedback: true
          }
        }
      })
  }
  function calculateScore() {
    return userAnswers.reduce((score, userAnswer, index) => {
      const correctAnswer = currentQuiz.questions[index].answer;
      return userAnswer === correctAnswer ? score + 1 : score;
    }, 0)
  };

  let answerState = "";
  let score;
  if (!isQuizComplete) {

      if (answer.isCorrect !== null) {
          answerState = answer.isCorrect ? "correct" : "wrong"
          console.log("it went here")
      }
  } else if (isQuizComplete) {
    score = calculateScore();
  }
    
  return (
    <> 
            
          {!isQuizComplete && (
            <section className="flex flex-col 1440:flex-row gap-[40px] 1440:gap-[128px]">
              <div className='1440:w-[40%] flex flex-col gap-4'>
                <p className='text-preset5-light text-Grey500 dark:text-Blue300'>Question <span>{activeQuestionIndex + 1}</span> of 10</p>
                <h3 className='text-preset3 text-Blue900 dark:text-white'>{currentQuestion}</h3>
                <QuestionTimer
                    key={activeQuestionIndex}
                    timeout={timer}
                    onTimeout={onSkipAnswer}
                    mode={answerState}  
                />
              </div>

              <div className="1440:w-[50%] grid  gap-4 md:gap-6 1440:gap-4">
                  {currentOptions.map((option, index) => (
                    <button key={index} disabled={answer.showFeedback} className={`group  bg-white dark:bg-[#3c4d65] rounded-xl p-4 flex items-center gap-2 md:gap-8 w-full border-2 border-transparent focus:border-Purple600 ${answer.showFeedback && "cursor-not-allowed"} ${answerState && selectedAnswer.current === option ? answerState : ''}`} onClick={(e) => handleOption(option, e)}>
                      <div className={`flex-shrink-0 group-focus:bg-Purple600  grid place-content-center rounded-lg bg-Grey50 w-[2.5rem] h-[2.5rem] ${answerState && selectedAnswer.current === option ? answerState : ''}`}>
                        <span className="text-preset4 text-Grey500 group-focus:text-white">{String.fromCharCode(65 + index)}</span>
                      </div>
                      <span className="text-preset4 text-Blue900 dark:text-white text-left text-preset4 flex-1 min-w-0 break-words">{option}</span>
                      {answerState && correctAnswer === option && (<img src={correctIcon} alt="" className="ml-auto" />) }
                      {answerState === "wrong" && selectedAnswer.current === option && (<img src={wrongIcon} alt="" className="ml-auto" />) }
                    </button>
                  ))}
                  <button className="active:opacity-50 rounded-xl p-4 bg-Purple600 text-white" onClick={onSelectAnswer}>{answer.showFeedback ? "Next Question" : "Submit Answer"}</button>
                  {submitError &&  <span className="flex gap-2 items-center justify-center text-preset5 text-Red dark:text-Grey50"> <img src={errorIcon} alt="" /> Please select an answer</span> }
              </div>
          </section>
          )}

          {isQuizComplete && (
            <section className="flex flex-col 1440:flex-row gap-[40px] 1440:gap-[128px]">
                <div className='grid gap-4 md:gap-6'>
                  <h2 className='text-preset2-light text-Blue900 dark:text-white'>Quiz completed <br /><strong className="text-preset2-medium">You scored...</strong></h2>
                </div>

                <div className="1440:w-[50%] grid gap-4 md:gap-4 1440:gap-8">
                    <div className="p-[32px] md:p-[48px] bg-white dark:bg-Blue850 rounded-xl grid place-content-center gap-4 md:gap-10">
                      <div className="flex items-center gap-3">
                        <div className={`${colors[currentQuiz.title]} p-1.5 rounded-lg`}>
                            <img src={currentQuiz.icon} alt="" className="w-[40px] h-[40px]"/>
                        </div>
                        <h4 className="text-preset4 text-Blue900 dark:text-white">{currentQuiz.title}</h4>
                      </div>
                      <h1 className="text-preset1 text-Blue900 text-center dark:text-white">{score}</h1>
                      <h4 className="text-preset4 text-Grey500 text-center dark:text-blue-300">out of 10</h4>
                    </div>
                    <button className="text-preset4 rounded-xl p-4 bg-Purple600 text-white" onClick={resetQuiz}>Play Again</button>
                </div>
            </section>
          )}
    </>
  )
}

export default Quiz