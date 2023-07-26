import Image from 'next/image'
import Link from 'next/link';


const DataMain = () => {

  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            
            
            
          <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-lg h-40 overflow-hidden">
                <Image
                  alt="ArangoDB"
                  className="object-cover object-center h-auto w-auto"
                  src="/gv.png"
                  width={500}
                  height={500}
                />
              </div>

            </div>
            
            

  
            
            
            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-lg h-40 overflow-hidden">
                <Image
                  alt="IMS CWB"
                  className="object-cover object-center h-auto w-auto"
                  src="/ce.png"
                  width={500}
                  height={500}
                />
              </div>

            </div>
            


            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
              <div className="rounded-lg h-40 overflow-hidden">
                <Image
                  alt="InsightNetCCC"
                  className="object-cover object-center h-auto w-auto"
                  src="/in_ccc.png"
                  width={500}
                  height={500}
                />
              </div>
 
            </div>




            <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div className="rounded-lg h-40 overflow-hidden">
                <Image
                  alt="Jupyter Notebook"
                  className="object-cover object-center h-auto w-auto"
                  src="/lde.png"
                  width={500}
                  height={500}
                />
              </div>

            </div>
          
          
          </div>
        </div>
      </section>


      <div className="mr-8 hover:text-gray-900 text-2xl p-4 mb-6">

              {/* <Link href={"/LogIn"}>
                {" "}
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  {" "}
                  SignIn / LogIn{" "}
                </button>{" "}
              </Link> */}
              <br></br>
              <h1 className='text-center'>To use any of these please contact</h1>
            </div>



    </div>
  
  

  
  
  
  
  
  
  
  
  
  
  
  );






  
};


export default DataMain





