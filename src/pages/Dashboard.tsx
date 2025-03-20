import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

interface AnalyticsData {
  date: string;
  followers: number;
}

const Dashboard = (): jsx.Element => {


  const [data, setData] = useState<AnalyticsData[]>([]);

  useEffect(() => {
    axios
  .get<AnalyticsData[]>("/api/analytics")
  .then((response: { data: AnalyticsData[] }) => setData(response.data))
  .catch((error: unknown) => console.error("Error fetching data", error));

  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Social Media Analytics</h1>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="followers" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Dashboard;
