import img from "./assets/pot.png";
import styles from "./Home.module.css"; // Import normal CSS
import { GiHeartOrgan } from "react-icons/gi";

export default function Home() {
  return (
    <div className="p-8 space-y-6"> 
      
      <div className={`${styles.potImage} border-4 border-gray-200 rounded-xl flex items-center justify-center`}>
        <img src={img} alt="pot" className="w-100 h-120 object-cover hidden md:block" />
        <div>
            <h1 className="text-4xl text-white font-bold uppercase tracking-wider cursor-pointer hover:text-orange-500 transition-colors duration-200">
                Aspiring Machine Learning Engineer with hands-on experience building, optimizing, and deploying end-to-end predictive systems.
                Proficient in Scikit-Learn, and FastAPI, with a track record of deploying scalable architectures and interactive Streamlit interfaces.

            </h1>
        </div>
      </div>
    </div>
  );
}
// component

function Project({ title, description, src }) {
  return (
    <div className="group text-white border-4 border-gray-200 rounded-xl w-60 min-h-100 p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-xl underline uppercase text-center hover:text-orange-500 transition-colors duration-200">
          {title}
        </h1>
        <p className="mt-4 hover:text-orange-500 transition-colors duration-200 text-sm">
          {description}
        </p>
      </div>
      
      <a 
        href={src} 
        className="text-center uppercase hover:text-white bg-orange-500 transition-colors duration-200 w-full hidden group-hover:block py-2 rounded"
      >
        <h2>know more</h2>
      </a>
    </div>
  );
}


function Project1() {
  return <Project title="Multi-organ-diagnostic" src="https://github.com/KUMAR-AYUSH1/Multi-organ-diagnostic" description="Comprehensive medical image diagnosis built with pytorch and streamlit that classifies diseases across multiple organs using CNN while providing visual explanations" />;
}
function Project2() {
  return <Project title="Flight Price & Travel Time Prediction" src="https://github.com/KUMAR-AYUSH1/Flight-price-and-time-prediction" description="An end-to-end Machine Learning project that predicts Flight Price and Travel Time simultaneously using multi-output regression " />;
}
function Project3() {
  return <Project title="Next Word Prediction using LSTM" src="https://github.com/KUMAR-AYUSH1/Next-word-Prediction" description="A deep learning project for Next Word Prediction using an LSTM model built with PyTorch. The project includes a FastAPI backend and    a Streamlit frontend for interactive text generation.The model predicts the next word from user input and can also generate the next N words sequentially." />;
}
function Project4() {
  return <Project title="Customer Churn Prediction" src="https://github.com/KUMAR-AYUSH1/Telco-Customer-Churn-Prediction" description="An end-to-end Customer Churn Prediction System built using Machine Learning, Optuna, FastAPI, Streamlit, Docker, and CI/CD concepts.The project predicts whether a telecom customer is likely to churn and provides actionable insights to the business team." />;
}
function Project5() {
  return <Project title="Demand Forecasting" src="https://github.com/KUMAR-AYUSH1/Demand-forecasting" description="A machine learning project for forecasting Demand and Units Sold using retail store data. The project uses a Multi-Output Regression approach with sklearn.multioutput.RegressorChain and includes data preprocessing, feature engineering, model selection, hyperparameter tuning, visualization, and deployment with FastAPI and Streamlit." />;
}
function Project6() {
  return <Project title="Poem-Recommender-System" src="https://github.com/KUMAR-AYUSH1/Poem-Recommender-System" description="Poem Recommender System built with Nearest Neighbors, TF-IDF, and Streamlit, fully containerized using Docker" />;
}

function ProjectPart(){
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Project1 />
      <Project2 />
      <Project3 />
      <Project4 />
      <Project5 />
      <Project6 />
    </div>
  );
}



export { ProjectPart };


