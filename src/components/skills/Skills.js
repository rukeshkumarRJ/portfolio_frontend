import React from 'react';
import './skills.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const dataML = {
  labels: ['Expert in Web development'],
  datasets: [
    {
        label: '',

      data: [90,10],
      backgroundColor: ['green','white',],
      borderColor: ['black'],
      borderWidth: 1, 
      },
  ],
};
export const dataWeb = {
    labels: ['Beginner in ML'],
    datasets: [
      {
        
        data: [57,43],
        backgroundColor: ['violet','white',],
        borderColor: ['black'],
        borderWidth: 1,  
        },
    ],
  };export const dataJava = {
    labels: ['Good in Java '],
    datasets: [
      {
        
        label: '',
        data: [80,20],
        backgroundColor: ['orange','white',],
        borderColor: ['black'],
        borderWidth: 1, 
        },
    ],
  };

export function Skills() {
  return <div  className="row containeru">
                <h2>Skills I have</h2>
                <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                    <div class="chartBox">
                        <Pie data={dataJava}/>
                        <text>Software Development: Java</text>
                    </div>
                    
                </div>
                <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                <div class="chartBox">
                        <Pie data={dataML}/>
                        <text>Web development</text>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
                <div class="chartBox">
                        <Pie data={dataWeb}/>
                        <text>Machine Learning</text>
                    </div>
                </div>
    
  </div>;
}
export default Skills;