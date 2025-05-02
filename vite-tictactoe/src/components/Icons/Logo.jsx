import React from 'react'
import LogoIcon from '../../assets/logo.svg';

const Logo = ({extraStyle}) => {
  return (
        <img src={LogoIcon} alt="" className={extraStyle}/>
  )
}

export default Logo