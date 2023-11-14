import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { obtenerNumeroAleatorio } from "../utils/obtenerNumeroAleatorio";



interface Tanque {
  tanque1: number;
  tanque2: number;
  tanque3: number;
  tanque4: number;
}

const CurstomChart = ({tanque1,tanque2,tanque3,tanque4}:Tanque) => {
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
          categories: ["TANQUE 1", "TANQUE 2", "TANQUE 3", "TANQUE 4"],
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


const CardMaquina = ({ randomValor, name }: { randomValor: number; name: string }) => {
  const status = randomValor > 20 ? 1 : 2;
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex items-center gap-4">
      <div className="flex items-center flex-col">
        {status == 1 && (
          <>
            <div className="w-[2rem] h-[2rem] rounded-full flex justify-center items-center bg-green-400  border-2 border-black"></div>
            <p className="">operativo</p>
          </>
        )}
        {status == 2 && (
          <>
            <div className="w-[2rem] h-[2rem] rounded-full flex justify-center items-center bg-red-400 border-2 border-black"></div>
            <p className="">Inactivo</p>
          </>
        )}
      </div>

      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p></p>
      </div>
    </div>
  );
};

const PreparacionMateriaPrima = () => {
  const [tanqueState,setTanqueState] = useState<Tanque>({
    tanque1: 73,
    tanque2: 40,
    tanque3: 63,
    tanque4: 79,
  })
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTanqueState({
        tanque1: obtenerNumeroAleatorio(tanqueState.tanque1),
        tanque2: obtenerNumeroAleatorio(tanqueState.tanque2),
        tanque3: obtenerNumeroAleatorio(tanqueState.tanque3),
        tanque4: obtenerNumeroAleatorio(tanqueState.tanque4),
      })
    },360)
    return ()=> clearInterval(interval)

  },[])


  
  return (
    <main>
      <h1 className="text-2xl my-2 font-semibold">
      Zona de Preparación de Materia Prima
      </h1>
      <p className="my-2">
        Recipientes utilizados para combinar leche, azúcar y emulsionantes
      </p>
      <div>
        <div className="bg-[#3ea2f3] rounded-lg text-black">
          <CurstomChart tanque1={tanqueState.tanque1} tanque2={tanqueState.tanque2} tanque3={tanqueState.tanque3} tanque4={tanqueState.tanque4} />
        </div>
      </div>
      <h2 className="font-semibold text-lg my-4">
        Nivel actual de cada tanque de mezcla
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
        <CardTanque count={tanqueState.tanque1} name="Tanque 1" />
        <CardTanque count={tanqueState.tanque2} name="Tanque 2"  />
        <CardTanque count={tanqueState.tanque3} name="Tanque 3" />
        <CardTanque count={tanqueState.tanque4} name="Tanque 4"/>
      </div>
      <h2 className="font-semibold text-lg my-4">Trituradoras y Equipos</h2>
      <div className="grid grid-cols-4 gap-3">
        <CardMaquina name="Molinos de Martillos" randomValor={obtenerNumeroAleatorio(60)} />
        <CardMaquina name="Licuadoras" randomValor={obtenerNumeroAleatorio(60)} />
        <CardMaquina name="Molinos Coloidales" randomValor={obtenerNumeroAleatorio(60)} />
        <CardMaquina name="Máquinas de Corte o Picado" randomValor={obtenerNumeroAleatorio(60)}  />
        <CardMaquina name="Molinos de Bolas"randomValor={obtenerNumeroAleatorio(60)}  />
        <CardMaquina name="Tamizadores" randomValor={obtenerNumeroAleatorio(60)}  />
        <CardMaquina name="Pulverizadores" randomValor={obtenerNumeroAleatorio(60)} />
        <CardMaquina name="Mezcladores de Cinta" randomValor={obtenerNumeroAleatorio(60)} />
      </div>
    </main>
  );
};
export default PreparacionMateriaPrima;
