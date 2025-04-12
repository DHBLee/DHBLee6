import { useState, useCallback } from 'react';
import quizData from './data.json';
import Header from './Components/Header';
import Quiz from './Components/Quiz';

const colorMap = {
  JavaScript: "bg-[#EBF0FF]",
  HTML: "bg-[#FFF5ED]",
  CSS: "bg-[#E0FDEF]",
  Accessibility: "bg-[#F6E7FF]",
}

function App() {
  const [currentQuiz, setCurrentQuiz] = useState(null);

  console.log(currentQuiz);
  const quizSubjects = quizData.quizzes.map(quiz => ({
    title: quiz.title,
    icon: quiz.icon,
  }));


  function selectQuiz(index) {
    setCurrentQuiz(quizData.quizzes[index]);
  }
  const resetQuiz = useCallback(function resetQuiz() {
    setCurrentQuiz(null);
  },[])

  return (
    <>
      <Header 
        currentTitle={currentQuiz ? currentQuiz.title : ""} 
        currentIcon={currentQuiz && currentQuiz.icon}
        colors={colorMap}
      />
      {!currentQuiz && (
          <div className='flex flex-col 1440:flex-row gap-[40px] md:gap-[64px] 1440:gap-[128px]'>
              <div className='flex flex-col gap-4 1440:gap-12'>
                <h2 className='text-preset2-light text-Blue900 dark:text-white'>Welcome to the <br /><strong className='text-preset2-medium'>Frontend Quiz!</strong></h2>
                <p className='text-preset6 text-Grey500 dark:text-Blue300'>Pick a subject to get started.</p>
              </div>
              <div className='flex-1  grid gap-4 md:gap-6 1440:gap-4'>
                {quizSubjects.map((subject, index) => (
                  <button key={index} onClick={() => selectQuiz(index)} className='bg-white dark:bg-Blue850 border-3 border-transparent ease-in-out duration-300 hover:border-Purple600 rounded-xl flex items-center gap-3 md:gap-8 p-4'>
                    <div className={`${colorMap[subject.title]} w-max p-1.5 rounded-lg`}>
                      <img src={subject.icon} alt="" className='w-5 h-5 md:w-[55px] md:h-[55px]'/>
                    </div>
                    <span className='text-preset4 text-Blue900 dark:text-white'>{subject.title}</span>
                  </button>
                ))}
              </div>
          </div>
      )
      }    

      {currentQuiz && (
        <Quiz currentQuiz={currentQuiz} resetQuiz={resetQuiz} colors={colorMap}/>
      )}
    </>
  )
}

export default App
