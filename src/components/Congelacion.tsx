import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { obtenerNumeroAleatorio } from "../utils/obtenerNumeroAleatorio";



interface Tanque {
  valvula1: number;
  valvula2: number;
  valvula3: number;
  valvula4: number;
}

const CurstomChart = ({valvula1,valvula2,valvula3,valvula4}:Tanque) => {
  return (
    <Chart
      type="bar"
      height={220}
      
      series={[
        {
          name: "Views",
          data: [valvula1, valvula2, valvula3, valvula4],
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
          categories: ["VALVULA 1", "VALVULA 2", "VALVULA 3", "VALVULA 4"],
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

const CardTanque = ({
  name,
  count,
}: {
  name: string;
  count: number;
}) => {
  const status = count > 70 ? 3 : count > 60 ? 2 : 1;
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




const PreparacionMateriaPrima = () => {
  const [tanqueState,setTanqueState] = useState<Tanque>({
    valvula1: 73,
    valvula2: 40,
    valvula3: 63,
    valvula4: 79,
  })
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTanqueState({
        valvula1: obtenerNumeroAleatorio(tanqueState.valvula1),
        valvula2: obtenerNumeroAleatorio(tanqueState.valvula2),
        valvula3: obtenerNumeroAleatorio(tanqueState.valvula3),
        valvula4: obtenerNumeroAleatorio(tanqueState.valvula4),
      })
    },360)
    return ()=> clearInterval(interval)

  },[])


  
  return (
    <main>
      <h1 className="text-2xl my-2 font-semibold">
      Equipo de Congelamiento
      </h1>
      <p className="my-2">
        Valvulas en funcionamiento 
      </p>
      <div>
        <div className="bg-[#3ea2f3] rounded-lg text-black">
          <CurstomChart valvula1={tanqueState.valvula1} valvula2={tanqueState.valvula2} valvula3={tanqueState.valvula3} valvula4={tanqueState.valvula4} />
        </div>
      </div>
      <h2 className="font-semibold text-lg my-4">
        Temperatura funcional de las Valvulas 
      </h2>
      <div className="flex items-center gap-2 mb-4">
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
      <div className="grid grid-cols-4 gap-3">
        <CardTanque count={tanqueState.valvula1} name="Valvula 1" />
        <CardTanque count={tanqueState.valvula2} name="Valvula 2"  />
        <CardTanque count={tanqueState.valvula3} name="Valvula 3" />
        <CardTanque count={tanqueState.valvula4} name="Valvula 4"/>
      </div>
      
      

      
    </main>
  );
};
export default PreparacionMateriaPrima;
