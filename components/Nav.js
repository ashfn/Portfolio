import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {FaGithub} from 'react-icons/fa'
import {ImHome} from 'react-icons/im'

function openGithub(){
    window.open("https://github.com/Authorises", '_blank');
}

const Nav = () => {
  return (
    <div className="p-4 grid justify-items-center">
        <div className="btn-group">
            <button aria-label="Home" className="btn btn-primary text-base-200 shadow-md shadow-base-100/75"><ImHome size={32}/></button>
            <button aria-label="Github" onClick={openGithub} className="btn btn-secondary text-base-200 shadow-md shadow-base-100/75"><FaGithub size={32}/></button>
        </div>
    </div>
  )
}

export default Nav