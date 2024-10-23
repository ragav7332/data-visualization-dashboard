
// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

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
//     <div className="container mt-5">
//          <h2>Sales Distribution by Region</h2>
//       <div className="row">
//         <div className="col-md-3">
         
//           <ul className="list-group mt-4" style={{ maxHeight: '800px', overflowY: 'auto' }}>
//             {data.map(item => (
//               <li key={item.region} className="list-group-item d-flex justify-content-between align-items-center">
//                 {item.region}
//                 <span className="badge bg-primary rounded-pill">{item.sales_amount}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="col-lg-9" style={{marginTop:'30px', width: '70%' }}>
//           <div className="chart-container" style={{width:'50rem',height:'60rem'}}>
//             <Pie data={chartData} options={{ responsive: true }} />
//           </div>
//         </div>
//       </div>
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
      <h2 className="text-center">Sales Distribution by Region</h2>
      <div className="row">
        {/* Sales Data List */}
        <div className="col-lg-3 col-md-4 col-sm-12">
          <ul className="list-group mt-4" style={{ maxHeight: '800px', overflowY: 'auto' }}>
            {data.map(item => (
              <li key={item.region} className="list-group-item d-flex justify-content-between align-items-center">
                {item.region}
                <span className="badge bg-primary rounded-pill">{item.sales_amount}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pie Chart Section */}
        <div className="col-lg-9 col-md-8 col-sm-12 d-flex justify-content-center" style={{ marginTop: '30px' }}>
          <div className="chart-container w-100 h-auto" style={{ maxWidth: '600px' }}>
            <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionDistribution;
