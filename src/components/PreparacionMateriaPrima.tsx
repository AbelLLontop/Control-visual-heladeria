import Chart from "react-apexcharts";

const CurstomChart = () => {
  return (
    <Chart
      type="bar"
      height={220}
      series={[
        {
          name: "Views",
          data: [50, 20, 10, 22],
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
  status,
  name,
  count,
}: {
  status: number;
  name: string;
  count: number;
}) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex items-center gap-4">
      <div className="flex gap-2 items-center">
        {status == 1 && (
          <div className="w-[4rem] h-[4rem] rounded-full flex justify-center items-center bg-yellow-400 outline-dashed ">
            <p className="font-bold">{count}%</p>
          </div>
        )}
        {status == 2 && (
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
const CardMaquina = ({ status, name }: { status: number; name: string }) => {
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
            <p className="">Incativo</p>
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
          <CurstomChart />
        </div>
      </div>
      <h2 className="font-semibold text-lg my-4">
        Nivel actual de cada tanque de mezcla
      </h2>
      <div className="grid grid-cols-4 gap-3">
        <CardTanque count={93} name="Tanque 1" status={3} />
        <CardTanque count={40} name="Tanque 2" status={2} />
        <CardTanque count={63} name="Tanque 3" status={2} />
        <CardTanque count={82} name="Tanque 4" status={1} />
      </div>
      <h2 className="font-semibold text-lg my-4">Trituradoras y Equipos</h2>
      <div className="grid grid-cols-4 gap-3">
        <CardMaquina name="Molinos de Martillos" status={1} />
        <CardMaquina name="Licuadoras" status={2} />
        <CardMaquina name="Molinos Coloidales" status={2} />
        <CardMaquina name="Máquinas de Corte o Picado" status={1} />
        <CardMaquina name="Molinos de Bolas" status={1} />
        <CardMaquina name="Tamizadores" status={1} />
        <CardMaquina name="Pulverizadores" status={1} />
        <CardMaquina name="Mezcladores de Cinta" status={1} />
      </div>
    </main>
  );
};
export default PreparacionMateriaPrima;
