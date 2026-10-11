import HeaderP from './headerP.jsx';
import React from 'react';
import cet from "./assets/IBM PY0101EN Certificate.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import img from "./assets/W.png";
function IBM_Certificate() {
  return (
    <div className="w-full h-full hidden md:block">
      <img 
        src={cet} 
        alt="IBM Certificate" 
        className="w-full h-full object-cover rounded-lg" 
      />
    </div>
  );
}

function Contact(){
    return (
        <div className='text-white  hover:text-orange-500 transition-colors duration-400'>
             <h1 className= "text-center text-bold text-2xl uppercase">Contacts</h1>
             <ul>
                <li><FaPhone />Phone: +91 9661938390 </li>
                <li><MdEmail />Email: kumarayush27002700@gmail.com </li>
                <li><FaLinkedin />linkedin: <a href="https://www.linkedin.com/in/kumar-ayush-508277331/">https://www.linkedin.com/in/kumar-ayush-508277331/</a></li>
                <li><FaGithub />GitHub: <a href="https://github.com/KUMAR-AYUSH1">https://github.com/KUMAR-AYUSH1</a></li>
             </ul>
        </div>
    );
}


function Info(){
    return(
        <div className='text-white w-1/2'>
            <p className='  hover:text-orange-500 transition-colors duration-400 '>
                Hi, I'm Kumar Ayush. I’m a Machine Learning Engineer passionate about building, optimizing, and deploying end-to-end predictive systems that solve real-world problems.
            </p>
            <br></br>
            <p className='  hover:text-orange-500 transition-colors duration-400'>
                I really enjoy bridging the gap between data science and practical applications. Over my projects, I've worked on everything from deep learning models for medical image diagnostics to forecasting systems and fraud detection. My day-to-day focus involves writing clean code in Python, building reliable models with PyTorch and Scikit-Learn, and containerizing architectures using FastAPI, Streamlit, and Docker so they are scalable and easy to interact with.
            </p>
            <br></br>
            <p className='  hover:text-orange-500 transition-colors duration-400'>
                I’m always eager to take on new engineering challenges and connect with others in the AI space. Please feel free to reach out if you'd like to collaborate or just talk tech!
            </p>
        </div>
    )
}

function Info2() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <img 
        src={img} 
        alt="pot" 
        className="w-96 h-96 object-cover rounded-lg transition-transform duration-500 hover:scale-125" 
      />
    </div>
  );
}


export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <HeaderP />
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-6xl mx-auto my-8 px-4">
        <div className="flex-1 flex justify-center w-full">
          <Info />
        </div>
        <div className="flex-1 flex justify-center w-full">
          <Info2 />
        </div>
      </div>
      
      <div className="space-y-4"> 
        <IBM_Certificate />
        <Contact />
      </div>
    </div>
  );
}



export {IBM_Certificate};
export {Contact};
export {Info};