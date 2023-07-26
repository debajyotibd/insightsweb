import React from "react";
import Link from "next/link";
import Image from "next/image";
const About1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <br></br>
                    <p className="font-normal text-base leading-6  text-gray-600 text-justify ">InsightsNet - Development of a meta-methodology and a conceptual framework for the transdisciplinary deep exploration and analysis of multimodal digital objects. Demonstrated on the use cases of discourses on artificial intelligence and climate change.</p>
                    <br></br>
                    <p className="font-normal text-base leading-6 text-gray-600 text-justify "> InsightsNet is a collaborative project of the Federal Ministry of Education and Research (BMBF). It receives funding under the guideline for supporting research and development projects for theoretical, methodological and technical advancement of digital humanities <Link href="https://www.geistes-und-sozialwissenschaften-bmbf.de/de/Digital-Humanities-1710.html">(Federal Gazette of 22.07.2019)</Link>.</p>
                    <br></br>
                    <p className="font-normal text-base leading-6 text-gray-600 text-justify ">Partners involved in the project are Technische Universität Darmstadt with its Institute of Linguistics and Literary Studies and <Link href="http://Hessian.AI">Hessian</Link>.AI and the Institute for Software Technology of the <Link href="https://www.dlr.de/sc/desktopdefault.aspx/tabid-1199/1657_read-3066/">German Aerospace Center (DLR)</Link>.</p>
                    <br></br>
                    <p className="font-normal text-base leading-6 text-gray-600 text-justify ">Please visit our website to learn more about InsightsNet and the team of researchers collaborating on the project.</p>
                </div>
                <div className="w-5 lg:w-5/12 ">
                    <Image className="w-full h-full" src="/in.png" width={500} height={500} alt="InsightsNet" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-2 pt-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">

                </div>
                <div className="w-full lg:w-10/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Link href="https://www.bmbf.de/bmbf/de/home/home_node.html">
                            <Image className="md:block hidden" src="/bmbf.png" width={500} height={500} alt="BMBF" />
                            <Image className="md:hidden block" src="/bmbf.png" width={500} height={500} alt="BMBF" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">BMBF</p>
                            </Link>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Link href="https://www.tu-darmstadt.de/">
                            <Image className="md:block hidden" src="/tuda.png" width={500} height={500} alt="TU Darmstadt" />
                            <Image className="md:hidden block" src="/tuda.png" width={500} height={500} alt="TU Darmstadt" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-3">TU Darmstadt</p>
                            </Link>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                        <Link href="http://Hessian.AI">
                            <Image className="md:block hidden" src="/hessianai.png" width={500} height={500} alt="Hessian.AI" />
                            <Image className="md:hidden block" src="/hessianai.png" width={500} height={500} alt="Hessian.AI" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-10">Hessian.AI</p>
                            </Link>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                            <Link href={"https://www.dlr.de/de"}>
                            <Image className="md:block hidden" src="/dlr.png" width={500} height={500} alt="DLR" />
                            <Image className="md:hidden block" src="/dlr.png" width={500} height={500} alt="DLR" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-7">DLR</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About1;
