import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StudentPerformanceChart = () => {
  // Simulated data for student performance across subjects
  const data = {
    labels: ['Mathematics', 'Science', 'English', 'History', 'Geography'],
    datasets: [
      {
        label: 'Student A',
        data: [85, 92, 78, 88, 75],  // Scores for Student A
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Student B',
        data: [70, 80, 65, 90, 82],  // Scores for Student B
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Student C',
        data: [95, 85, 90, 93, 89],  // Scores for Student C
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options for customization
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Student Performance in Different Subjects',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Maximum score is 100
      },
    },
  };

  return <Bar data={data}  />;
};

export default StudentPerformanceChart;
