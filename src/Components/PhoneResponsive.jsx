import React from 'react'
import { NavContent } from './Header'

const PhoneResponsive = ({Menu,SetMenu}) => {
    return (
      <div className={`navPhone${Menu ? "navPhoneComes" : ""}`}>
          <NavContent SetMenu={SetMenu}/>
      </div>
    )
  }

export default PhoneResponsive