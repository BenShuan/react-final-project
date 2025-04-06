import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ info }) => {

  const config = {
    labels: info.map(item => item.label),
    datasets: [{
      label: 'Items Sold',
      data: info.map(item => item.sum),
      backgroundColor: [
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(255, 159, 64, 0.)',
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }]
  }


  return (
    <Pie data={config} 
    
   />
  )
}

export default PieChart