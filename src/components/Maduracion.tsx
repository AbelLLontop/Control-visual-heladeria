import React from "react";
import {
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  
} from "recharts";

interface StorageData {
  container: string;
  status: string;
}

interface LabelingData {
  time: string;
  Etiquetado: number;
  Sellado: number;
}

const storageData: StorageData[] = [
  { container: "Contenedor A", status: "En uso" },
  { container: "Contenedor B", status: "Disponible" },
  // ... Más datos
];
const storageChartData = storageData.map((entry) => ({
  name: entry.container,
  status: entry.status,
  value: 2, // Valor constante para cada contenedor
}));

const labelingData: LabelingData[] = [
  { time: "00:00", Etiquetado: 30, Sellado: 120 },
  { time: "01:00", Etiquetado: 50, Sellado: 90 },
  // ... Más datos
];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const StorageAndLabelingDashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl my-2 font-bold">Dashboard: Áreas de Almacenamiento y Etiquetado</h1>

      {/* Storage Area */}
      <h2 className="text-2xl my-2 font-semibold">Áreas de Almacenamiento</h2>
      <PieChart width={400} height={400}>
      <Pie
        data={storageChartData}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>

      {/* Labeling and Tracking */}
      <h2 className="text-2xl my-2 font-semibold">Etiquetado y Seguimiento</h2>
      <BarChart width={800} height={400} data={labelingData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Etiquetado" stackId="a" fill="#8884d8" />
        <Bar dataKey="Sellado" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default function Maduracion() {
  return <StorageAndLabelingDashboard />;
}
