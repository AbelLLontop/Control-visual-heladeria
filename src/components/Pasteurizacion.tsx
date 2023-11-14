import Chart from "react-apexcharts";
const CurstomChartTanque = () => {
    return (
      <Chart
        type="bar"
        height={220}
        series={[
          {
            name: "Views",
            data: [50, 20],
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

const Pasteurizacion = () => {
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
        <CustomChart name="Temperatura" temperature={10} />
        <CustomChart name="Precion" temperature={80} />
        <CustomChart name="Nivel de Mezcla" temperature={90} />
      </div>
      <h2 className="font-semibold text-lg my-4">
      Tanques de Almacenamiento Temporal:
      </h2>
      <div className="bg-[#3ea2f3] rounded-lg text-black">
        <CurstomChartTanque/>
        </div>
       
      <h2 className="font-semibold text-lg my-4">Nivel de Almacenamiento</h2>
      <div className="grid grid-cols-2 gap-3">
       <CardTanque
       count={93}
         name="Tanque 1"
            status={3}

       />
        <CardTanque
        count={40}
        name="Tanque 2"
        status={2}
        />
      </div>
    </main>
  );
};
export default Pasteurizacion;
