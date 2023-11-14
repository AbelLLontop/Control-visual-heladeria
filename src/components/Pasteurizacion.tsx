import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { obtenerNumeroAleatorio } from "../utils/obtenerNumeroAleatorio";


interface Tanque {
  tanque1: number;
  tanque2: number;
  temperatura: number;
  presion: number;
  nivel: number;
}
interface CharTanque{
  tanque1:number;
  tanque2:number;
}
const CurstomChartTanque = ({tanque1,tanque2}:CharTanque) => {
    return (
      <Chart
        type="bar"
        height={220}
        series={[
          {
            name: "Views",
            data: [tanque1, tanque2],
          },
        ]}
        options={{
          chart: {
            toolbar: {
              show: false,
            },
          },
  
          title: {},
          dataLabels: {
            enabled: false,
          },
          plotOptions: {
            bar: {
              columnWidth: "16%",
              borderRadius: 5,
            },
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
            labels: {
              style: {
                colors: "#fff",
                fontSize: "13px",
                fontFamily: "inherit",
                fontWeight: 500,
              },
            },
            categories: ["TANQUE 1", "TANQUE 2"],
          },
          yaxis: {
            max:100,
            labels: {
              style: {
                colors: "#fff",
                fontSize: "13px",
                fontFamily: "inherit",
                fontWeight: 300,
              },
            },
          },
          grid: {
            show: true,
            borderColor: "#ffffff6d",
            strokeDashArray: 5,
            xaxis: {
              lines: {
                show: true,
              },
            },
            padding: {
              top: 5,
              right: 20,
            },
          },
          fill: {
            opacity: 0.8,
            colors: ["#fff"],
          },
        }}
      />
    );
  };

  const CardTanque = ({
    name,
    count,
  }: {
    name: string;
    count: number;
  }) => {
    const status = count > 80 ? 3 : count > 50 ? 2 : 1;


    return (
      <div className="bg-white p-4 shadow-md rounded-lg flex items-center gap-4">
        <div className="flex gap-2 items-center">
          {status == 2 && (
            <div className="w-[4rem] h-[4rem] rounded-full flex justify-center items-center bg-yellow-400 outline-dashed ">
              <p className="font-bold">{count}%</p>
            </div>
          )}
          {status == 1 && (
            <div className="w-[4rem] h-[4rem] rounded-full flex justify-center items-center bg-green-400 outline-dashed ">
              <p className="font-bold">{count}%</p>
            </div>
          )}
          {status == 3 && (
            <div className="w-[4rem] h-[4rem] rounded-full flex justify-center items-center bg-red-400 outline-dashed ">
              <p className="font-bold">{count}%</p>
            </div>
          )}
        </div>
  
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p>
            <span>Estado:</span> <span>Activo</span>
          </p>
        </div>
      </div>
    );
  };

const CustomChart = ({
  temperature,
  name,
}: {
  temperature: number;
  name: string;
}) => {
  const getColor = () => {
    if (temperature >= 90) {
      return "#E62020"; // Rojo
    } else if (temperature >= 50) {
      return "#E6E620"; // Amarillo
    } else {
      return "#20E647"; // Verde
    }
  };
  const getEstado = () => {
    if (temperature >= 90) {
      return "Crítico";
      // Rojo
    } else if (temperature >= 50) {
      return "Regular"; // Amarillo
    } else {
      return "Estable"; // Verde
    }
  };

 
  return (
    <div className="flex flex-col items-center w-fit">
      <Chart
        type="radialBar"
        height={280}
        series={[temperature]}
        options={{
          chart: {
            type: "radialBar",
            height: 280,
          },
          colors: [getColor()],
          plotOptions: {
            radialBar: {
              startAngle: 0,
              endAngle: 360,
              track: {
                background: "#333",
                startAngle: 0,
                endAngle: 360,
              },
              dataLabels: {
                name: {
                  show: true,
                },
                value: {
                  fontSize: "30px",
                  show: true,
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              gradientToColors: [getColor(), "#E6E620", "#E62020"],
              stops: [0, 50, 100],
            },
          },
          stroke: {
            lineCap: "butt",
          },
          labels: [getEstado()],
        }}
      />
      <h3 className="font-semibold text-lg">{name}</h3>
    </div>
  );
};

const Pasteurizacion = () => {
  const [tanqueState,setTanqueState] = useState<Tanque>({
    tanque1: 73,
    tanque2: 40,
    temperatura: 63,
    presion: 79,
    nivel: 79,
  })
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTanqueState({
        tanque1: obtenerNumeroAleatorio(tanqueState.tanque1),
        tanque2: obtenerNumeroAleatorio(tanqueState.tanque2),
        temperatura: obtenerNumeroAleatorio(tanqueState.temperatura),
        presion: obtenerNumeroAleatorio(tanqueState.presion),
        nivel: obtenerNumeroAleatorio(tanqueState.nivel),
      })
    },360)
    return ()=> clearInterval(interval)

  },[])

  return (
    <main>
      <h1 className="text-2xl my-2 font-semibold">Zona de Pasteurización</h1>
      <p className="my-2">
        Medidores circulares para la temperatura y la presión, con rangos
        seguros marcados
      </p>
      <h2 className="font-semibold text-lg my-4 flex items-center gap-2">
      Máquina de Pasteurización (<span className="flex text-sm items-center gap-2"> <div className="w-2 h-2 rounded-full bg-green-600"></div>Operativo</span>)
      </h2>
      <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-600 rounded-sm"></div>Estable
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>Regular
        </div>
      
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-600 rounded-sm"></div>Critico
        </div>
      </div>
      <div className="grid grid-cols-3 ">
        <CustomChart name="Temperatura" temperature={tanqueState.temperatura} />
        <CustomChart name="Presion" temperature={tanqueState.presion} />
        <CustomChart name="Nivel de Mezcla" temperature={tanqueState.nivel} />
      </div>
      <h2 className="font-semibold text-lg my-4">
      Tanques de Almacenamiento Temporal:
      </h2>
      <div className="bg-[#3ea2f3] rounded-lg text-black">
        <CurstomChartTanque tanque1={tanqueState.tanque1} tanque2={tanqueState.tanque2}/>
        </div>
       
      <h2 className="font-semibold text-lg my-4">Nivel de Almacenamiento</h2>
      <div className="grid grid-cols-2 gap-3">
       <CardTanque
       count={tanqueState.tanque1}
         name="Tanque 1"

       />
        <CardTanque
        count={tanqueState.tanque2}
        name="Tanque 2"
        />
      </div>
    </main>
  );
};
export default Pasteurizacion;
