import '@/styles/globals.css'
// import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import { createToken } from 'typescript'
import { useRouter } from 'next/router'
import React from "react"
import LoadingBar from 'react-top-loading-bar'


export default function App({ Component, pageProps }) {
  
 const [user, setUser] = useState({value: null})
 const [key, setKey] = useState(0)
 const router = useRouter()
 const [progress, setProgress] = useState(0)

 
  
  
  useEffect( () => {
    router.events.on("routeChangeStart" , () => {
      setProgress(40)
    })
    
    router.events.on("routeChangeComplete" , () => {
      setProgress(100)
    })
    const token = localStorage.getItem("token")
    if(token){
      setUser({value: token})
    }
  setKey(Math.random()) // video 63 outside if loop

  }, [router.query])
  
  const logout = () => {
    localStorage.removeItem("token")
    setUser ({value: null})
    setKey(Math.random)
    router.push("/")
  }
  
  

  
  return (<>
    <Header logout = {logout} user={user} key = {key} />
    <LoadingBar
        color='#ff2400 '
        progress={progress}
        waitingTime = {400}
        onLoaderFinished={() => setProgress(0)}
    />
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
