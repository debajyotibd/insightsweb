import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Corpus = () => {
  return (
    <div>
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Corpora / Data</h1>
                <Image className="lg:w-3/6 md:w-4/6 w-6/6 mb-10 object-cover object-center rounded" width={500} height={500} alt="Chimate Change" src="/cc.png"/>
                <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                  <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Climate Change</h3>
                  <p className="mb-8 leading-relaxed text-justify">The data we are working with in the project are collections of documents called corpora. These corpora are collected from a variety of sources such Wikipedia, OpenAlex and the Science News, but also data collected from specific stakeholders concerned with our use case <b>Climate Change(CC)</b>. We have obtained permission to compile a multimodal corpus of texts published online by Greenpeace International and Greenpeace Germany as representatives of non-governmental organisations (NGOs). </p>
                
                  <p className="mb-8 leading-relaxed text-justify">Our corpora are multimodal which means that we are representing and researching not only the text, but also any other modalities that constitute a document such as e.g. any embedded images, data and videos.</p>
                  
                  <p className="mb-8 leading-relaxed text-justify">The corpus data are enriched by metadata enabling targeted research on data from different genres, time periods and sources and key topics. Corpora are annotated at different levels of linguistic organisation. Annotations include lemmatization, part of speech tagging and dependency parsing as well as the identification of named entities and key words.</p>

                </div>
              </div>
            </section>
    </div>
  )
}

export default Corpus
 