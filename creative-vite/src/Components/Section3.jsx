import React from 'react'

const Section3 = ({padding}) => {
  return (
    <section className="md:flex">
        <h2 className={`z-20 ${padding} md:absolute  mt-[126px] 1440:mt-[200px] !pr-0 hidden md:block designText w-[50%] text-BlackText`}>Our approach for<br /> creating a winning<br/> brand</h2>
        <div className={`relative z-10 ${padding} md:ml-auto 1440:pl-[285px] 1440:pr-[70px] md:mt-[-7rem] 1440:mt-[-12rem] md:w-[57%] 1440:w-[65%] py-[96px] md:py-[120px] 1440:py-[200px] grid gap-10 bg-Red`}>
          <h2 className="md:hidden designText">Our approach for<br /> creating a winning<br/> brand</h2>

          <ul className="flex flex-col gap-8">
            <li>
              <h6 className="relative w-full">
                <span className="text-[80px] leading-[88px] text-White opacity-30 font-extrabold">01</span>
                <span className="body absolute font-extrabold text-White left-[1.3rem] 1440:left-[4rem] top-[65%] translate-y-[-50%]">
                  Brand Strategy
                </span>
              </h6>
              <p className="body pl-[1.3rem] 1440:pl-[4rem] text-White">Brand strategy is critical for long-term success. Outshining competitors and capturing 
              the target audience are key.</p>
            </li>
            <li>
              <h6 className="relative w-full">
                <span className="text-[80px] leading-[88px] text-White opacity-30 font-extrabold">02</span>
                <span className="body absolute font-extrabold text-White left-[1.3rem] 1440:left-[4rem] top-[65%] translate-y-[-50%]">
                  Brand Design
                </span>
              </h6>
              <p className="body pl-[1.3rem] 1440:pl-[4rem] text-White">Keeping the brand design unique and meaningful helps in communicating the brand’s timeless 
              value effectively.</p>
            </li>
            <li>
              <h6 className="relative w-full">
                <span className="text-[80px] leading-[88px] text-White opacity-30 font-extrabold">03</span>
                <span className="body absolute font-extrabold text-White left-[1.3rem] 1440:left-[4rem] top-[65%] translate-y-[-50%]">
                  Web Design
                </span>
              </h6>
              <p className="body pl-[1.3rem] 1440:pl-[4rem] text-White">A beautifully crafted website is the best tool for brand awareness, and ultimately results 
              in increased revenues.</p>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default Section3