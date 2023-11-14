import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { obtenerNumeroAleatorio } from "../utils/obtenerNumeroAleatorio";



interface Tanque {
  tanque1: number;
  tanque2: number;
  tanque3: number;
  
}
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
const CurstomChart = ({tanque1,tanque2,tanque3}:Tanque) => {
  return (
    <Chart
      type="bar"
      height={220}
      
      series={[
        {
          name: "Views",
          data: [tanque1, tanque2, tanque3],
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
          categories: ["CONGELADO", "PRE-CONGELADO", "NO CONGELADO"],
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

const PreparacionMateriaPrima = () => {
  const [tanqueState,setTanqueState] = useState<Tanque>({
    tanque1: 73,
    tanque2: 40,
    tanque3: 63,
    
  })
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTanqueState({
        tanque1: obtenerNumeroAleatorio(tanqueState.tanque1),
        tanque2: obtenerNumeroAleatorio(tanqueState.tanque2),
        tanque3: obtenerNumeroAleatorio(tanqueState.tanque3),
        
      })
    },360)
    return ()=> clearInterval(interval)

  },[])


  
  return (
    <main>
      <h1 className="text-2xl my-2 font-bold">
      Zona de Enfriamiento
      </h1>
      <p className="my-2">
        Según estado de Temperatura
      </p>
      <div>
        <h2 className="text-2xl my-2 font-semibold"></h2>
      </div>
        <div className="flex">
        <CustomChartCircle name="Valvula 1" temperature={tanqueState.tanque1} />
        <CustomChartCircle name="Valvula 2" temperature={tanqueState.tanque2} />
        <CustomChartCircle name="Valvula 3" temperature={tanqueState.tanque3} />
        <div></div>
      </div>
      <div>
        <h1> Segun estado de Congelamiento</h1>
        <div className="bg-[#3ea2f3] rounded-lg text-black">
        

          <CurstomChart tanque1={tanqueState.tanque1} tanque2={tanqueState.tanque2} tanque3={tanqueState.tanque3}  />
        </div>
      </div>
      
    </main>
  );
};
export default PreparacionMateriaPrima;
