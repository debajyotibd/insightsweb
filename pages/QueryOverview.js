import React from 'react'

const QueryOverview = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Query Overview</h1>
                    <br></br>
                    <p className="font-normal text-base leading-6 text-gray-600 text-justify ">The backbone of our data exploration interfaces are </p>
                    <br></br>
                    <p className="font-normal text-base leading-6 text-gray-600 text-justify "> <b> Graph Query Language (GQL) </b> for the GraphViewer and the <b> Corpus Query Language (CQL) </b> for the exploration of the text corpora. </p>
                    <br></br>
                    <p className="font-normal text-base leading-6 text-gray-600 text-justify "> We are going to demonstrate the potential of these technologies during the workshop.</p>
                    <br></br>
                   
                </div>

    </div>
    </div>
  )
}

export default QueryOverview
