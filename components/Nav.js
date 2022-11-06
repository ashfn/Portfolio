import Link from 'next/link'

import {MdOutlineKeyboardBackspace} from 'react-icons/md'
import {FiGithub} from 'react-icons/fi'

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const Nav = ({back}) => {
  return (
    <div className="pt-8 pl-8 pr-8 flex flex-grid">
      <div className="basis-1/2 text-left">
        {back!="none" &&
          <Link href={back}>
            <div className="text-sky-400 hover:text-sky-500 hover:drop-shadow-2xl cursor-pointer"><MdOutlineKeyboardBackspace size={32}/></div>
          </Link>
        }

      </div>
      <div className="basis-1/2 text-right">
        <div className="">
          <FiGithub onClick={() => openInNewTab('https://github.com/Authorises')} className="text-right inline hover:text-sky-500 text-sky-400 cursor-pointer" size={32}/>
        </div>
      </div>
    </div>
  )
}

export default Nav