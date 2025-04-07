import {React, useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Picture from './Picture';

import arrowLeft from '../assets/desktop/icon-arrow-previous.svg';
import arrowRight from '../assets/desktop/icon-arrow-next.svg';

import s1Mobile from '../assets/mobile/image-slide-1.jpg';
import s1Tablet from '../assets/tablet/image-slide-1.jpg';
import s1Desktop from '../assets/desktop/image-slide-1.jpg';
import s2Mobile from '../assets/mobile/image-slide-2.jpg';
import s2Tablet from '../assets/tablet/image-slide-2.jpg';
import s2Desktop from '../assets/desktop/image-slide-2.jpg';
import s3Mobile from '../assets/mobile/image-slide-3.jpg';
import s3Tablet from '../assets/tablet/image-slide-3.jpg';
import s3Desktop from '../assets/desktop/image-slide-3.jpg';

import wave from '../assets/desktop/bg-pattern-wavy-white.svg';
const details = [
  {
    mobile: s1Mobile,
    tablet: s1Tablet,
    desktop: s1Desktop,
    title: 'Brand naming & guidelines',
    subtitle: 'Lean Product Roadmap',
    year: '2019 Project',

  },
  {
    mobile: s2Mobile,
    tablet: s2Tablet,
    desktop: s2Desktop,
    title: 'Brand identity & merchandise',
    subtitle: 'New Majestic Hotel',
    year: '2018 Project',
  },
  {
    mobile: s3Mobile,
    tablet: s3Tablet,
    desktop: s3Desktop,
    title: 'Brand identity & web design',
    subtitle: 'Crypto Dashboard',
    year: '2016 Project',
  }
];
const Section4 = ({padding}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDireciton] = useState(0);

  const currentDetail = details[currentIndex]

  function handlePreviousClick() {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0
        ? details.length - 1
        : prevIndex - 1
    );
  }

  function handleNextClick() {
    setCurrentIndex((prevIndex) => 
      prevIndex === details.length - 1
        ? 0 
        : prevIndex + 1
    );
  }

  const slideVariants= {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      position: 'relative',
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      position: 'absolute',
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  }
  return (
    <section className="relative flex flex-col md:flex-row-reverse">
      {/* Image Slider Container */}
      <div className="relative md:w-[60%] h-[300px] md:h-[400px] 1440:h-[500px] overflow-hidden">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full"
          >
            <div className="relative w-full h-full">
              <Picture 
                mobileImg={currentDetail.mobile} 
                tabletImg={currentDetail.tablet} 
                desktopImg={currentDetail.desktop} 
                className="w-full h-full object-cover"
              />
              <div className={`grid text-right ml-auto ${padding} pb-[35px] md:pb-[45px] 1440:pb-[68px] absolute bottom-0 right-0 z-10`}>
                <p className="text-[15px] 1440:text-[20px] font-extrabold 1440:leading-[32px] text-White">
                  {currentDetail.subtitle}
                </p>
                <span className="text-[15px] 1440:text-[18px] font-normal 1440:leading-[32px] text-White">
                  {currentDetail.year}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Section */}
      <div className={`md:absolute left-0 md:w-[50%] grid gap-6 ${padding} py-[64px] md:py-[100px] 1440:py-[152px] bg-BlackBg`}>
        <img 
          src={wave} 
          alt="" 
          className="absolute top-[6rem] 1440:top-[12rem] right-[-1.5rem] 1440:right-[-4.5rem] hidden md:block w-[3rem] 1440:w-[9rem]"
        />
        <AnimatePresence mode="wait">
          <motion.h2
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="designText text-White max-w-[11ch]"
          >
            {currentDetail.title}
          </motion.h2>
        </AnimatePresence>
        <div className="flex items-center gap-6">
          <button onClick={handlePreviousClick}>
            <img src={arrowLeft} alt="" className="hover:brightness-150" />
          </button>
          <button onClick={handleNextClick}>
            <img src={arrowRight} alt="" className="hover:brightness-150" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section4