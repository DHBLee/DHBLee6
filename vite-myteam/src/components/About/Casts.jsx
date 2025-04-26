import { React, useState } from 'react';
import plusIcon from '../../assets/icon-cross.svg';

const Casts = ({img, name, title, message}) => {
  const [isOpen, setIsOpen] = useState(false);

  const button = {
    bgColor: isOpen ? "bg-RaptureBlue" : "bg-LightCoral",
  }

  return (
    <div className='bg-SacramentoGreen grid place-items-center gap-4 px-6 pt-8'>
        {!isOpen && <img src={img} alt="" className="rounded-full border-2 border-RaptureBlue w-[96px] h-[96px]"/>}

        <div className="grid place-items-center">
            <p className='body1 text-RaptureBlue'>{name}</p>
            {!isOpen && <span className='body2 italic text-white'>{title}</span>}
        </div>

        {isOpen && <p className="body2 text-white">"{message}"</p> }

        {isOpen && 
            <ul className="flex gap-4">
                <li>
                    <i className="ri-twitter-fill text-white hover:text-LightCoral text-3xl"></i>
                </li>
                <li>
                    <i className="ri-linkedin-box-fill text-white hover:text-LightCoral text-3xl"></i>
                </li>
            </ul> 
        }
        <button onClick={() => setIsOpen(prev => !prev)} className={`${button.bgColor} rounded-full w-[56px] h-[56px] mb-[-1.6rem]`}>
            <img src={plusIcon} alt="" className={`w-[16px] h-[16px] mx-auto transition-transform duration-300 ease-in-out ${
      isOpen ? 'rotate-45' : 'rotate-0'
    }`}  />
        </button>
    </div>
  )
}

export default Casts