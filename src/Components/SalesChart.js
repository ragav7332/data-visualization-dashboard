// import React from 'react';
// import { Line, Bar } from 'react-chartjs-2';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const SalesChart = ({ data }) => {
//   if (!data || data.length === 0) {
//     return <div>No sales data available.</div>; // Handle empty data scenario
//   }

//   const salesAmounts = data.map(item => item.sales_amount);
//   const dates = data.map(item => new Date(item.date).toLocaleDateString());

//   // Chart data for Sales Amount over Time
//   const lineChartData = {
//     labels: dates,
//     datasets: [
//       {
//         label: 'Sales Amount',
//         data: salesAmounts,
//         borderColor: 'rgba(75,192,192,1)',
//         backgroundColor: 'rgba(75,192,192,0.2)',
//         fill: true,
//       },
//     ],
//   };

//   // Sales by Category
//   const categories = [...new Set(data.map(item => item.product_category))]; // Unique categories
//   const salesByCategory = categories.map(category => {
//     const totalSales = data
//       .filter(item => item.product_category === category) // Filter by product_category
//       .reduce((total, item) => total + item.sales_amount, 0); // Sum sales_amount

//     console.log(`Total sales for ${category}:`, totalSales); // Debugging
//     return totalSales;
//   });

//   const barChartData = {
//     labels: categories,
//     datasets: [
//       {
//         label: 'Sales by Category',
//         data: salesByCategory,
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//       },
//     ],
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         {/* Sales Data List */}
//         <div className="col-md-3 col-sm-12">
//           <h2>Sales Data</h2>
//           <ul className="list-group mt-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
//             {data.map(item => (
//               <li key={item.date} className="list-group-item d-flex justify-content-between align-items-center">
//                 {new Date(item.date).toLocaleDateString()}
//                 <span className="badge bg-primary rounded-pill">{item.sales_amount}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Chart Section */}
//         <div className="col-md-9 col-sm-12">
//           <h4>Sales Over Time</h4>
//           <div className="chart-container" style={{ marginTop: '20px' }}>
//             <Line data={lineChartData} options={{ responsive: true }} />
//           </div>
//           <h4 style={{ marginTop: '20px' }}>Sales by Category</h4>
//           <div className="chart-container" style={{ marginTop: '20px' }}>
//             <Bar data={barChartData} options={{ responsive: true }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SalesChart;

import React, { useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; // Import necessary modules from Chart.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Register all Chart.js components (elements, controllers, scales, plugins, etc.)
Chart.register(...registerables);

const SalesChart = ({ data }) => {
  useEffect(() => {
    return () => {
      // Ensure to destroy any existing charts when the component unmounts or before rerender
      Chart.getChart('line-chart')?.destroy();
      Chart.getChart('bar-chart')?.destroy();
    };
  }, []);

  if (!data || data.length === 0) {
    return <div>No sales data available.</div>; // Handle empty data scenario
  }

  const salesAmounts = data.map(item => item.sales_amount);
  const dates = data.map(item => new Date(item.date).toLocaleDateString());

  // Chart data for Sales Amount over Time
  const lineChartData = {
    labels: dates,
    datasets: [
      {
        label: 'Sales Amount',
        data: salesAmounts,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  // Sales by Category
  const categories = [...new Set(data.map(item => item.product_category))]; // Unique categories
  const salesByCategory = categories.map(category => {
    const totalSales = data
      .filter(item => item.product_category === category) // Filter by product_category
      .reduce((total, item) => total + item.sales_amount, 0); // Sum sales_amount

    console.log(`Total sales for ${category}:`, totalSales); // Debugging
    return totalSales;
  });

  const barChartData = {
    labels: categories,
    datasets: [
      {
        label: 'Sales by Category',
        data: salesByCategory,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sales Data List */}
        <div className="col-lg-3 col-md-4 col-sm-12">
          <h2>Sales Data</h2>
          <ul className="list-group mt-4" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {data.map(item => (
              <li key={item.date} className="list-group-item d-flex justify-content-between align-items-center">
                {new Date(item.date).toLocaleDateString()}
                <span className="badge bg-primary rounded-pill">{item.sales_amount}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chart Section */}
        <div className="col-lg-9 col-md-8 col-sm-12">
          <h4>Sales Over Time</h4>
          <div className="chart-container w-100 h-auto" style={{ marginTop: '20px' }}>
            <Line id="line-chart" data={lineChartData} options={{ responsive: true }} />
          </div>
          <h4 style={{ marginTop: '20px' }}>Sales by Category</h4>
          <div className="chart-container w-100 h-auto" style={{ marginTop: '20px' }}>
            <Bar id="bar-chart" data={barChartData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
