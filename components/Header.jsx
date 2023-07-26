// import Image from 'next/image'
// import Link from 'next/link';




// export default function Header() {
//     return (
//         <div>
//            <header className="text-gray-600 body-font bg-blue-500 bg-opacity-25">
//        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

//          <a href="/" className="flex items-center" >
//              <Image src="/in.png" width={80} height={200} className="h-15 mr-5" alt="InsightsNet_Logo" />
//              <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white ">InsightsNet_Web</span>
//          </a>


//          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//            <Link href={"/About"} className="mr-8 hover:text-gray-900 text-2xl">  <> About </> </Link>
//            <Link href={"/CorpusData"} className="mr-8 hover:text-gray-900 text-2xl"> <> Corpus/Data </>  </Link>
//            <Link href={"/QueryOverview"} className="mr-8 hover:text-gray-900 text-2xl">  <> Query Overview </> </Link>
//            <Link className="mr-8 hover:text-gray-900 text-2xl" href={"/DataMain"}>Data Exploration</Link>
//            <Link href={"/Contact"} className="mr-8 hover:text-gray-900 text-2xl">  <> Contact</> </Link>
//          </nav>





//        </div>
//        </header>
//      </div> 
//        )
// }






import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { RiAccountPinCircleFill } from "react-icons/ri"

const Header = ({ user, logout }) => {
  const [dropdown, setDropdown] = useState(false)
  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }




  return (
    <div>
      <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-200">
       
          

      <Link href="/" className="flex items-center" >
          <Image src="/inlogo.png" width={80} height={200} className="h-15 mr-5" alt="InsightsNet_Logo" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white ">InsightsWeb</span>
      </Link>


          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/About"} className="mr-8 hover:text-gray-900 text-2xl">  <> About </> </Link>
            <Link href={"/CorpusData"} className="mr-8 hover:text-gray-900 text-2xl"> <> Corpus/Data </>  </Link>
            <Link href={"/QueryOverview"} className="mr-8 hover:text-gray-900 text-2xl">  <> Query Overview </> </Link>
            <Link className="mr-8 hover:text-gray-900 text-2xl" href={"/DataMain"}>Data Exploration</Link>
            <Link href={"/Contact"} className="mr-8 hover:text-gray-900 text-2xl">  <> Contact</> </Link>
          </nav>

          <div >
            <Link href={""} onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }}>
              {dropdown && <div onMouseOver={() => { setDropdown(true) }} onMouseLeave={() => { setDropdown(false) }} className="absolute right-13 bg-blue-400 top-18 rounded-md px-3 w-36">
                <ul>
                  {/* <Link href={"/UserAccount"}><li className="py-1 hover:text-red-600 text-sm font-bold"> My Account </li></Link> */}
                  <Link href={"/DataExploration"}><li className="py-1 hover:text-red-600 text-sm font-bold"> Data Exploration </li></Link>
                  <a onClick={logout}><li className="py-1 hover:text-red-600 text-sm font-bold"> LogOut </li></a>
                </ul>
              </div>}
              {user.value && <RiAccountPinCircleFill className="text-xl md:text-2xl mx-2" />}
            </Link>
            {!user.value && <Link href={'/LogIn'}><button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LogIn
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button></Link>}

          </div>


          {/* <div>
            <Link href={'/SignUp'}><button className="inline-flex items-center bg-blue-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">SignUp
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            </Link>
          </div> */}



        
      </header>
    </div>
  )
}

export default Header



