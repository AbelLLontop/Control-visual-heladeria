import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { obtenerNumeroAleatorio } from "../utils/obtenerNumeroAleatorio";
const CustomChartCircle = ({
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


interface CharTanque{
  tanque1:number;
  tanque2:number;
  tanque3:number;
  tanque4:number;
}
const CurstomChart = ({tanque1,tanque2,tanque3,tanque4}:CharTanque) => {
  return (
    <Chart
      type="bar"
      height={220}
      series={[
        {
          name: "Views",
          data: [tanque1, tanque2, tanque3, tanque4],
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
          categories: [
            "Envasado",
            "Etiquedado",
            "Empaquetado",
            "Enviado",
          ],
        },
        yaxis: {
          max: 100,
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
interface Tanque {
  tanque1: number;
  tanque2: number;
  tanque3: number;
  tanque4: number;
  eficiencia: number;
  capacidad: number;
  velocidad: number;
}

const PreparacionMezcla = () => {
  const [tanqueState,setTanqueState] = useState<Tanque>({
    tanque1: 60,
    tanque2: 40,
    tanque3: 20,
    tanque4: 72,
    eficiencia: 20,
    capacidad: 40,
    velocidad: 29
  })
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTanqueState({
        tanque1: obtenerNumeroAleatorio(tanqueState.tanque1),
        tanque2: obtenerNumeroAleatorio(tanqueState.tanque2),
        tanque3: obtenerNumeroAleatorio(tanqueState.tanque3),
        tanque4: obtenerNumeroAleatorio(tanqueState.tanque4),
        eficiencia: obtenerNumeroAleatorio(tanqueState.eficiencia),
        capacidad: obtenerNumeroAleatorio(tanqueState.capacidad),
        velocidad: obtenerNumeroAleatorio(tanqueState.velocidad)
      })
    },360)
    return ()=> clearInterval(interval)

  },[])
  return (
    <main>
      <h1 className="text-2xl my-2 font-semibold">
        Zona de Maduración
      </h1>
      <p className="my-2">
        Area de Almacenamiento
      </p>
      <h2 className="font-semibold text-lg my-4 flex items-center gap-2">
      Almacén (<span className="flex text-sm items-center gap-2"> <div className="w-2 h-2 rounded-full bg-green-600"></div>Operativo</span>)
      </h2>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-600 rounded-sm"></div>Hay Espacio
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>Regular
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-600 rounded-sm"></div>Lleno
        </div>
      </div>
      <div className="flex">
        <CustomChartCircle name="Eficiencia" temperature={tanqueState.eficiencia} />
        <CustomChartCircle name="Capacidad total" temperature={tanqueState.capacidad} />
        <CustomChartCircle name="Velocidad" temperature={tanqueState.velocidad} />
        <div>
        <div className="text-center">
          <div className="text-2xl font-semibold">15 cajas/hora</div>
          
        </div>
        <h3 className="text-lg font-semibold"> Ingreso de Prouctos</h3>
        </div>
      </div>

      {/* <div className="grid grid-cols-4 gap-3">
        <CardTanque count={93} name="Tanque 1" status={3} />
        <CardTanque count={40} name="Tanque 2" status={2} />
        <CardTanque count={63} name="Tanque 3" status={2} />
        <CardTanque count={82} name="Tanque 4" status={1} />
      </div> */}
      <h2 className="font-semibold text-lg my-4">Etiquetado y Seguimiento</h2>
      <div className="bg-[#3ea2f3] rounded-lg text-black">
        <CurstomChart 
        tanque1={tanqueState.tanque1}
        tanque2={tanqueState.tanque2}
        tanque3={tanqueState.tanque3}
        tanque4={tanqueState.tanque4}
        />
      </div>
      {/* <div className="grid grid-cols-4 gap-3">
        <CardMaquina name="Molinos de Martillos" status={1} />
        <CardMaquina name="Licuadoras" status={2} />
        <CardMaquina name="Molinos Coloidales" status={2} />
        <CardMaquina name="Máquinas de Corte o Picado" status={1} />
        <CardMaquina name="Molinos de Bolas" status={1} />
        <CardMaquina name="Tamizadores" status={1} />
        <CardMaquina name="Pulverizadores" status={1} />
        <CardMaquina name="Mezcladores de Cinta" status={1} />
      </div> */}
    </main>
  );
};
export default PreparacionMezcla;
