import Chart from "react-apexcharts";
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
              startAngle: -90,
              endAngle: 90,
              track: {
                background: "#333",
                startAngle: -90,
                endAngle: 90,
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
          categories: [
            "Leche",
            "Azúcar",
            "Emulsionantes",
            "Otros ingredientes",
          ],
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


const PreparacionMezcla = () => {
  return (
    <main>
      <h1 className="text-2xl my-2 font-semibold">
        Zona de Preparación de la Mezcla:
      </h1>
      <p className="my-2">
        Equipo utilizado para combinar varios ingredientes y crear una mezcla
        homogénea
      </p>
      <h2 className="font-semibold text-lg my-4 flex items-center gap-2">
      Máquina Batidora (<span className="flex text-sm items-center gap-2"> <div className="w-2 h-2 rounded-full bg-green-600"></div>Operativo</span>)
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
      <div className="flex">
        <CustomChartCircle name="Eficiencia de Batido" temperature={80} />
        <CustomChartCircle name="Capacidad total" temperature={40} />
        <div>
        <div className="text-center">
          <div className="text-2xl font-semibold">280 RPM</div>
          <div className="text-sm">(Revoluciones por minuto)</div>
        </div>
        <h3 className="text-lg font-semibold"> Velocidad de Varido</h3>
        </div>
      </div>

      {/* <div className="grid grid-cols-4 gap-3">
        <CardTanque count={93} name="Tanque 1" status={3} />
        <CardTanque count={40} name="Tanque 2" status={2} />
        <CardTanque count={63} name="Tanque 3" status={2} />
        <CardTanque count={82} name="Tanque 4" status={1} />
      </div> */}
      <h2 className="font-semibold text-lg my-4">Adicion de Ingredientes</h2>
      <div className="bg-[#3ea2f3] rounded-lg text-black">
        <CurstomChart />
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
