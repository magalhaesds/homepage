import React from "react";
import pfp from '/src/assets/pfp.jpg'
import {FaReact, FaHtml5, FaJs, FaCss3Alt, FaPython, FaGithub, FaGitAlt, FaNpm, } from 'react-icons/fa'
import { SiDotnet } from "react-icons/si"
import { TbBrandMysql } from "react-icons/tb";
import tailwindlogo from '/src/assets/tailwindlogo.svg'
import csharp from '/src/assets/csharp.svg'

function AboutMe() {
    return (
        <>
            <div className='flex justify-center p-5 flex-wrap'>

                <div className="bg-sky-200 h-auto w-screen p-5 rounded-lg shadow-lg">

                    <div className='h-64 w-64 bg-white mb-5 rounded shadow mx-auto '>
                        
                        <img src={pfp} className='rounded'/>

                    </div>
    
                    <h1 className="text-xl font-bold">Quem Sou eu...</h1>

                    <p className="text-justify w-full md:w-8/12 mx-auto">

                        Olá! Meu nome é Gustavo de Magalhães, sou acadêmico de Ciência da Computação na UFMT e atualmente estagiário em Front-End na MTI. Tenho paixão por tecnologia e design, com um interesse especial em UI/UX, criando interfaces que unem estética e usabilidade.
                        <br />
                        Minha trajetória profissional começou com um estágio em suporte no MPMT, onde desenvolvi habilidades técnicas e de atendimento. Agora, meu foco está no desenvolvimento Front-End, buscando aprender e aplicar novas tecnologias do mercado para criar experiências digitais inovadoras.
                        <br />
                        Estou sempre aberto a novos desafios e oportunidades que me permitam crescer e aprimorar minhas habilidades. 
                        <br />

                    </p>

                    <div className='h-72 mt-20 rounded'>

                        <h1 className='font-bold text-xl'>Front-End</h1>

                        <ul className='flex gap-3 mx-auto'>

                            <li className='bg-white h-8 w-32 flex items-center rounded shadow'>

                                <span className='bg-[#149eca] h-full w-8 flex justify-center items-center rounded-l'>

                                    <FaReact className='text-white text-xl' />

                                </span>

                                <span className="flex-1 text-center">ReactJS</span>

                            </li>

                            <li className='bg-white h-8 w-32 flex items-center rounded shadow'>

                                <span className='bg-[#F0DB4F] h-full w-8 flex justify-center items-center rounded-l'>

                                    <FaJs className='text-black text-xl'/>

                                </span>

                                <span className="flex-1 text-center">JavaScript</span>

                            </li>

                            <li className='bg-white h-8 w-32 flex items-center rounded shadow'>

                                <span className='bg-gray-200 h-full w-8 flex justify-center items-center rounded-l'>

                                    <img src={tailwindlogo} className='h-4'/>

                                </span>

                                <span className="flex-1 text-center">TailwindCSS</span>

                            </li>


                            <li className='bg-white h-8 w-32 flex items-center rounded shadow'>

                                <span className='bg-[#f06529] h-full w-8 flex justify-center items-center rounded-l'>

                                    <FaHtml5 className='text-white text-xl' />

                                </span>

                                <span className="flex-1 text-center">HTML5</span>

                            </li>

                    

                            <li className='bg-white h-8 w-32 flex items-center rounded shadow'>

                                <span className='bg-[#2965f1] h-full w-8 flex justify-center items-center rounded-l'>

                                    <FaCss3Alt className='text-white text-xl'/>

                                </span>

                                <span className="flex-1 text-center">CSS</span>

                            </li>

                        </ul>

                        <h1 className='font-bold text-xl flex mt-2'>Back-End</h1>

                        <ul className='flex gap-3 mx-auto'>

                            <li className='bg-white h-8 w-32 flex items-center rounded shadow'>

                                <span className='bg-[#512BD4] h-full w-8 flex justify-center items-center rounded-l'>

                                    <SiDotnet className='text-white text-xl' />

                                </span>

                                <span className="flex-1 text-center">.NET</span>

                            </li>

                    
                            <li className='bg-white h-8 w-32 flex items-center rounded shadow'>

                                <span className='bg-[#682876] h-full w-8 flex justify-center items-center rounded-l'>

                                    <img src={csharp} className='h-6 invert'/>

                                </span>

                                <span className="flex-1 text-center">CSharp</span>

                            </li>

                            <li className='bg-white h-8 w-32 flex items-center rounded shadow'>

                                <span className='bg-[#4584b6] h-full w-8 flex justify-center items-center rounded-l'>

                                    <FaPython className='text-[#FFF000] text-xl' />

                                </span>

                                <span className="flex-1 text-center">Python</span>

                            </li>

                            <li className='bg-white h-8 w-32 flex items-center rounded shadow'>

                            <span className='bg-[#00758F] h-full w-8 flex justify-center items-center rounded-l'>

                                <TbBrandMysql className='text-[#F29111] text-xl' />

                            </span>

                            <span className="flex-1 text-center">MySQL</span>

                            </li>

                        </ul>

                        <h1 className='font-bold text-xl flex mt-2'>Tools</h1>

                        <ul className='flex gap-3 mx-auto'>

                            <li className='bg-white h-8 w-32 flex items-center rounded shadow'>

                                <span className='bg-[#171515] h-full w-8 flex justify-center items-center rounded-l'>

                                    <FaGithub className='text-white text-xl' />

                                </span>

                                <span className="flex-1 text-center">Github</span>

                            </li>

                            <li className='bg-white h-8 w-32 flex items-center rounded shadow'>

                                <span className='bg-[#F1502F] h-full w-8 flex justify-center items-center rounded-l'>

                                    <FaGitAlt className='text-white text-xl' />

                                </span>

                                <span className="flex-1 text-center">Git</span>

                            </li>

                            <li className='bg-white h-8 w-32 flex items-center rounded shadow'>

                                <span className='bg-[#CC3534] h-full w-8 flex justify-center items-center rounded-l'>

                                <FaNpm className='text-white text-xl'/>

                                </span>

                                <span className="flex-1 text-center">NPM</span>

                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </>

    );
}

export default AboutMe;