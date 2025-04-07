import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';

const pxStyling = "px-[24px] md:px-[39px] 1440:px-[165px]";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function AnimatedSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <>
      <AnimatedSection>
        <Header padding={pxStyling} />
      </AnimatedSection>
      
      <main>
        <AnimatedSection>
          <Section1 padding={pxStyling} />
        </AnimatedSection>
        
        <AnimatedSection>
          <Section2 padding={pxStyling} />
        </AnimatedSection>
        
        <AnimatedSection>
          <Section3 padding={pxStyling} />
        </AnimatedSection>
        
        <AnimatedSection>
          <Section4 padding={pxStyling} />
        </AnimatedSection>
      </main>
      
      <AnimatedSection>
        <Footer padding={pxStyling}/>
      </AnimatedSection>
    </>
  );
}

export default App;