import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [robotData, setRobotData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/robot');
      setRobotData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Robotic System Dashboard</h1>
      {robotData && (
        <div className="border rounded p-4">
          <p><strong>Battery Level:</strong> {robotData.batteryLevel}%</p>
          <p><strong>Status:</strong> {robotData.status}</p>
          <p><strong>Recent Activity:</strong></p>
          <ul>
            {robotData.activityLog.map((log, index) => (
              <li key={index}>{log}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
