// // import React, { useEffect, useRef } from 'react';
// // import { Pie } from 'react-chartjs-2';
// // import {
// //   Chart as ChartJS,
// //   ArcElement,
// //   Tooltip,
// //   Legend
// // } from 'chart.js';

// // // Register required components for Pie chart
// // ChartJS.register(ArcElement, Tooltip, Legend);

// // const RegionDistribution = ({ data }) => {
// //   const chartRef = useRef(null);

// //   useEffect(() => {
// //     const chartInstance = chartRef.current;
// //     if (chartInstance) {
// //       chartInstance.destroy(); // Destroy the previous chart to avoid canvas reuse
// //     }
// //   }, [data]); // Re-run effect when 'data' changes

// //   const regions = data.map(item => item.region);
// //   const salesAmounts = data.map(item => item.sales_amount);

// //   const chartData = {
// //     labels: regions,
// //     datasets: [
// //       {
// //         label: 'Sales by Region',
// //         data: salesAmounts,
// //         backgroundColor: [
// //           '#FF6384',
// //           '#36A2EB',
// //           '#FFCE56',
// //           '#4BC0C0',
// //           '#9966FF'
// //         ],
// //         hoverOffset: 4
// //       }
// //     ]
// //   };

// //   return (
// //     <div className="chart-container">
// //       <h2>Sales Distribution by Region</h2>
// //       <Pie ref={chartRef} data={chartData} />
// //     </div>
// //   );
// // };

// // export default RegionDistribution;


// import React, { useEffect, useRef } from 'react';
// import { Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend
// } from 'chart.js';

// // Register required components for Pie chart
// ChartJS.register(ArcElement, Tooltip, Legend);

// const RegionDistribution = ({ data }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chartInstance = chartRef.current;

//     // Destroy the previous chart instance if it exists
//     if (chartInstance) {
//       chartInstance.destroy();
//     }

//     return () => {
//       // Cleanup function to destroy chart on component unmount
//       if (chartInstance) {
//         chartInstance.destroy();
//       }
//     };
//   }, [data]);

//   if (!data || data.length === 0) {
//     return <div>No data available.</div>; // Handle empty data scenario
//   }

//   const regions = data.map(item => item.region);
//   const salesAmounts = data.map(item => item.sales_amount);

//   const chartData = {
//     labels: regions,
//     datasets: [
//       {
//         label: 'Sales by Region',
//         data: salesAmounts,
//         backgroundColor: [
//           '#FF6384',
//           '#36A2EB',
//           '#FFCE56',
//           '#4BC0C0',
//           '#9966FF'
//         ],
//         hoverOffset: 4
//       }
//     ]
//   };

//   return (
//     <div className="chart-container">
//       <h2>Sales Distribution by Region</h2>
//       <Pie ref={chartRef} data={chartData} />
//     </div>
//   );
// };

// export default RegionDistribution;


// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto'; // Automatically register all components

// const RegionDistribution = ({ data }) => {
//   if (!data || data.length === 0) {
//     return <div>No data available.</div>; // Handle empty data scenario
//   }

//   const chartData = {
//     labels: data.map(item => item.region),
//     datasets: [
//       {
//         label: 'Sales by Region',
//         data: data.map(item => item.sales_amount),
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//         hoverOffset: 4,
//       },
//     ],
//   };

//   return (
//     <div className="chart-container">
//       <h2>Sales Distribution by Region</h2>
//       <Pie data={chartData} options={{ responsive: true }} />
//     </div>
//   );
// };

// export default RegionDistribution;


import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const RegionDistribution = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available.</div>; // Handle empty data scenario
  }

  const chartData = {
    labels: data.map(item => item.region),
    datasets: [
      {
        label: 'Sales by Region',
        data: data.map(item => item.sales_amount),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="container mt-5">
         <h2>Sales Distribution by Region</h2>
      <div className="row">
        <div className="col-md-3">
         
          <ul className="list-group mt-4" style={{ maxHeight: '800px', overflowY: 'auto' }}>
            {data.map(item => (
              <li key={item.region} className="list-group-item d-flex justify-content-between align-items-center">
                {item.region}
                <span className="badge bg-primary rounded-pill">{item.sales_amount}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-9" style={{marginTop:'30px', width: '70%' }}>
          <div className="chart-container" style={{width:'50rem',height:'60rem'}}>
            <Pie data={chartData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionDistribution;

