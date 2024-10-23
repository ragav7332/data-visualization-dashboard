import React, { useState, useEffect } from 'react';
import SalesChart from '../Components/SalesChart';
import RegionDistribution from '../Components/RegionDistribution';

export const BASEURL = `https://ysquare-node.onrender.com`

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASEURL}/api/sales`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
     
        setData(result); // Assuming the API returns an array of sales data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }

  return (
    <div className="dashboard-container">
      <h1 style={{textAlign:'center'}}>Data Visualization Dashboard</h1>
      <SalesChart data={data} />
      <RegionDistribution data={data} />
    </div>
  );
};

export default App;

