import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'

const ChartComponent = ({ chartData }) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        data: chartData.data,
        backgroundColor: ['#c6c6c6', '#aaaaaa', '#828282', '#6f6f6f'], 
        borderColor: '#e8c39e',
        textColor: '#ffffff',
      },
    ],
  };

  return (
    <div>
      <Pie data={data} className="pt-5 w-auto h-auto"/>
    </div>
  );
};

export default ChartComponent;

 



