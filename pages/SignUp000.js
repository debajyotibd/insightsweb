import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";


const SignUp000 = () => {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  useEffect(() => {
    if (  localStorage.getItem("token")){
      router.push("/")
  }
  }, [] )



  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "organization") {
      setOrganization(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, organization, email, password };

    let res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);
    setName("");
    setOrganization("");
    setEmail("");
    setPassword("");
    toast.success("SignUp SUCCSSFUL !!!", {
      });
      setTimeout( () =>  {
        
        router.push("http://localhost:3000")} 
        , 1000);
  };

  return (
    <div>
      <ToastContainer

      />
      <form onSubmit={handleSubmit} method="POST">
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">
            <h1 className="text-center text-lg font-bold text-gray-500">
              Sign Up Form
            </h1>
            <div className="space-y-4 mt-6">
              <div className="w-full">
                <input
                  value={name}
                  onChange={handleChange}
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Enter your Full Name"
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  value={organization}
                  onChange={handleChange}
                  name="organization"
                  id="organization"
                  type="text"
                  placeholder=" Enter your Organization"
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  value={email}
                  onChange={handleChange}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter your Email "
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div className="w-full">
                <input
                  value={password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                  type="password"
                  placeholder="password"
                  className="px-4 py-2 bg-gray-50"
                />
              </div>
              <div> <p>We are no storing any password directly</p></div>
            </div>
            <div>
              <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
                Register
              </button>

              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  If you already have an account, 
                  <Link href="/LogIn" className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                    LogIn
                  </Link> </p>
              
            </div>
          </div>
        </div>
       
      </form>
   
    </div>
  );
};

export default SignUp000;
