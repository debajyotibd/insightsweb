import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import Image from "next/image";

const LogIn = () => {


  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (  localStorage.getItem("token")){
      router.push("/")
  }
  }, [] )

  const handleChange = (e) => {
      if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    let res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });


    let response = await res.json();
    // console.log(response);
    setEmail("");
    setPassword("");
      if (response.success){
        localStorage.setItem("token", response.token)
        toast.success(" LogIn SUCCSSFUL !!!", {
        });
        setTimeout( () =>  {
        
            router.push("http://localhost:3000/DataExploration")} 
            , 1000); 
      
      }else{
        toast.error( response.error , {
        });
      }

    };






  return (
    <section className="h-screen">
            <ToastContainer/>
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="object-contain md:object-scale-down mx-9">
            <Image src="/in.png"  height={500} width={500} alt="Sample image" />
          </div>
          <div className="xl:ml-0 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            
            <form onSubmit={handleSubmit} method="POST">

              <div className="mb-6">
                <input
                  value={email}
                  onChange={handleChange}
                  name="email"
                  id="email"
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              
              <div className="mb-6">
                <input
                  value={password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
