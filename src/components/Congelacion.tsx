import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
} from "recharts";

interface TemperatureData {
  time?: string;
  temperature1?: number;
  temperature2?: number;
}

interface TemperatureByEquipment {
  equipment?: string;
  temperature?: number;
}

interface TemperatureDistribution {
  equipment?: string;
  temperature?: number;
}

interface CombinedChartProps {
  lineChartData: TemperatureData[];
  barChartData: TemperatureByEquipment[];
  pieChartData: TemperatureDistribution[];
}

const CombinedChart: React.FC<CombinedChartProps> = ({
  lineChartData,
  barChartData,
  pieChartData,
}) => {
  return (
    <div>
      <h1 className="text-2xl my-2 font-bold" >Equipos de Control</h1>
      <h2 className="text-2xl my-2 font-semibold" >Indicadores de Tiempo</h2>
      {/* Line Chart */}
      <LineChart width={800} height={400} data={lineChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature1" stroke="#8884d8" />
        <Line type="monotone" dataKey="temperature2" stroke="#82ca9d" />
      </LineChart>
      <h2 className="text-2xl my-2 font-semibold" >Indicadores de Temperatura</h2>
      {/* Bar Chart */}
      <BarChart width={600} height={300} data={barChartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="equipment" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="temperature" fill="#8884d8" />
      </BarChart>
      <h2 className="text-2xl my-2 font-semibold" >Temperaturas Máximas</h2>

      {/* Pie Chart */}
      <PieChart width={400} height={400}>
        <Pie
          data={pieChartData}
          dataKey="temperature"
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default function Congelacion() {
  const lineChartData: TemperatureData[] = [
    { time: "00:00", temperature1: 0, temperature2: 0 },
    { time: "01:00", temperature1: 70, temperature2: 82 },
    { time: "02:00", temperature1: 150, temperature2: 162 },
    { time: "03:00", temperature1: 170, temperature2: 182 },
    { time: "04:00", temperature1: 230, temperature2: 258 },
    { time: "05:00", temperature1: 280, temperature2: 310 },
    { time: "06:00", temperature1: 320, temperature2: 362 },
    { time: "07:00", temperature1: 370, temperature2: 412 },
    { time: "08:00", temperature1: 400, temperature2: 442 },
    { time: "09:00", temperature1: 450, temperature2: 492 },
    { time: "10:00", temperature1: 490, temperature2: 542 },
    { time: "11:00", temperature1: 520, temperature2: 572 },
    { time: "12:00", temperature1: 560, temperature2: 612 },
    { time: "13:00", temperature1: 600, temperature2: 652 },
    { time: "14:00", temperature1: 640, temperature2: 692 },
    { time: "15:00", temperature1: 670, temperature2: 722 },
    { time: "16:00", temperature1: 710, temperature2: 762 },
    { time: "17:00", temperature1: 750, temperature2: 802 },
    { time: "18:00", temperature1: 790, temperature2: 842 },
    { time: "19:00", temperature1: 820, temperature2: 872 },
    { time: "20:00", temperature1: 860, temperature2: 912 },
    { time: "21:00", temperature1: 900, temperature2: 952 },
    { time: "22:00", temperature1: 940, temperature2: 992 },
    { time: "23:00", temperature1: 980, temperature2: 1032 },
    { time: "24:00", temperature1: 1020, temperature2: 1072 },
    // ... Más datos
  ];

  const barChartData: TemperatureByEquipment[] = [
    { equipment: "Valvula A", temperature: 225 },
    { equipment: "Valvula B", temperature: 300 },
    // ... Más datos
  ];

  const pieChartData: TemperatureDistribution[] = [
    { equipment: "Valvula A", temperature: 225 },
    { equipment: "Valvula B", temperature: 310 },
    // ... Más datos
  ];

  return (
    <CombinedChart
      lineChartData={lineChartData}
      barChartData={barChartData}
      pieChartData={pieChartData}
    />
  );
}
