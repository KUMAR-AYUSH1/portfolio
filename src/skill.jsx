import { SiFastapi } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiPytorch } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPandas } from "react-icons/si";

export default function Skill() {
  return (
    // Changed "max-w-2xl" to "w-full" without an upper constraint so it takes up maximum space
    <div className="text-white border-4 border-gray-200 rounded-xl w-full p-6 flex flex-col gap-6">
      <h1 className="text-4xl font-bold tracking-wider cursor-pointer hover:text-orange-500 transition-colors duration-200 text-center">
        Skills
      </h1>
      
      {/* List items will now spread out fully across the wide container */}
      <ul className="flex flex-wrap justify-center gap-4 text-gray-300">
        <li className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-lg">
          Python <FaPython className="text-xl" />
        </li>
        <li className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-lg">
          FastAPI <SiFastapi className="text-xl" />
        </li>
        <li className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-lg">
          PyTorch <SiPytorch className="text-xl" />
        </li>
        <li className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-lg">
          Streamlit <SiStreamlit className="text-xl" />
        </li>
        <li className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-lg">
          Machine Learning
        </li>
        <li className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-lg">
          Docker <FaDocker className="text-xl" />
        </li>
        <li className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-lg">
          MySQL <SiMysql className="text-xl" />
        </li>
        <li className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-lg">
          Scikit-learn
        </li>
        <li className="flex items-center gap-2 hover:text-orange-500 transition-colors cursor-pointer bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-lg">
          Pandas <SiPandas className="text-xl" />
        </li>
      </ul>
    </div>
  );
}
