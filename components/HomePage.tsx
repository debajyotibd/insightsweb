import React from 'react'

const HomePage = () => {
  return (
    <div>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-800 md:text-center">Welcome to InsightsWeb Data Explorer</h1>
      <br></br>
      <br></br>
      <br></br>
      <div className="text-center">
      <p className="mb-9 leading-relaxed text-justify text-1xl">This is the start page of the InsightsNet data explorer, a web interface for text exploration developed by the BMBF-funded project InsightsNet - Development of a meta-methodology and a conceptual framework for the transdisciplinary deep exploration and analysis of multimodal digital objects. Demonstrated on the use cases of discourses on artificial intelligence and climate change <a href='http://insightsnet.org/'>(http://insightsnet.org/)</a>. </p>

      <p className="mb-8 leading-relaxed text-justify text-1xl"> Through this interface we are offering different explorative perspectives on large multimodal collections of texts aka corpora. By combining network graph and linguistic modelling, the InsightsNet data explorer opens of different perspectives on multimodal corpora. The interface allows users to explore corpora from the document collection perspective via our Graph Viewer that offers methods of exploring relations between documents and document components organized into a network graph. In a complementary perspective, users are able to explore the corpus data from the perspective of their linguistic organization enabling research on evolving terminology and rhetorical shifts in complex discourses. Complex discourses on topics of global concern such as  climate change are constituted of texts representing a multitude of genres and registers from a diverse set of communicators and stake-holders. InsightsNet has set itself the goal of exploring and developing new ways of researching and monitoring such discourses. </p>

      <p className="mb-9 leading-relaxed text-justify text-1xl"> The interface is currently a research prototype pursuing ambitious goals of integrating tools and methods from the humanities, social sciences and computer science in a transdisciplinary research project. The InsightsNet team hope users will find our tools useful and look forward to receiving feedback and input for further development.</p>
      </div>
      <div className="flex justify-center">
        {/* <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default HomePage
