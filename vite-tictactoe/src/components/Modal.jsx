import React from 'react'

const Modal = ({functionOne, functionTwo, textOne, textTwo, children}) => {
  return (
     <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 "/>

        <div className="relative bg-LightBlack p-6 rounded-lg text-center w-[100%] z-50 animate-fade-in">
            {children}
            <div className="flex gap-4 justify-center">
                <button 
                onClick={functionOne}
                className="bg-Grey shadow-[0_6px_0_0_var(--color-GreyShadow)] hover:brightness-125 text-DarkBlack font-bold py-3 px-6 rounded-md"
                >
                    {textOne}
                </button>
                <button 
                onClick={functionTwo}
                className="bg-Orange shadow-[0_6px_0_0_var(--color-OrangeShadow)] hover:brightness-125 text-DarkBlack font-bold py-3 px-6 rounded-md"
                >
                    {textTwo}
                </button>
            </div>            
        </div>
    </div>


  )
}

export default Modal