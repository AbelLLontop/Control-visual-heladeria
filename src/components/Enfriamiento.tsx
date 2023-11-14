import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface CoolingEquipmentData {
  time: string;
  currentTemperature: number;
  trendTemperature: number;
}

const coolingEquipmentData: CoolingEquipmentData[] = [
  { time: "00:00", currentTemperature: 25, trendTemperature: 22 },
  { time: "01:00", currentTemperature: 23, trendTemperature: 20 },
  { time: "02:00", currentTemperature: 30, trendTemperature: 28 },
  { time: "03:00", currentTemperature: 35, trendTemperature: 32 },
  { time: "04:00", currentTemperature: 40, trendTemperature: 36 },
  { time: "05:00", currentTemperature: 45, trendTemperature: 40 },
  { time: "06:00", currentTemperature: 50, trendTemperature: 45 },
  { time: "07:00", currentTemperature: 55, trendTemperature: 50 },
  { time: "08:00", currentTemperature: 60, trendTemperature: 55 },
  { time: "09:00", currentTemperature: 65, trendTemperature: 60 },
  { time: "10:00", currentTemperature: 70, trendTemperature: 65 },
  { time: "11:00", currentTemperature: 75, trendTemperature: 70 },
  { time: "12:00", currentTemperature: 80, trendTemperature: 75 },
  { time: "13:00", currentTemperature: 85, trendTemperature: 80 },
  { time: "14:00", currentTemperature: 90, trendTemperature: 85 },
  { time: "15:00", currentTemperature: 95, trendTemperature: 90 },
  { time: "16:00", currentTemperature: 100, trendTemperature: 95 },
  { time: "17:00", currentTemperature: 105, trendTemperature: 100 },
  { time: "18:00", currentTemperature: 110, trendTemperature: 105 },
  { time: "19:00", currentTemperature: 115, trendTemperature: 110 },
  { time: "20:00", currentTemperature: 120, trendTemperature: 115 },
  // ... Más datos
];

const Enfriamiento: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl my-2 font-bold" >Equipos de Enfriamiento Rápido</h1>
      <LineChart width={800} height={400} data={coolingEquipmentData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="currentTemperature" stroke="#8884d8" name="Temperatura Actual" />
        <Line type="monotone" dataKey="trendTemperature" stroke="#82ca9d" name="Tendencia de Temperatura" />
      </LineChart>
    </div>
  );
};

export default Enfriamiento;
