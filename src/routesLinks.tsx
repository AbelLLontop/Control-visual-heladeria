import Pasteurizacion from "./components/Pasteurizacion";
import PreparacionMateriaPrima from "./components/PreparacionMateriaPrima";
import PreparacionMezcla from "./components/PreparacionMezcla";

export const routesLinks = [
  {
    name: "Preparacion Material Prima",
    path: "/preparacion-material-prima",
    element: <PreparacionMateriaPrima />,
  },
  {
    name: "Pasteurizacion",
    path: "/pasteurizacion",
    element: <Pasteurizacion/>,
  },
  {
    name: "Preparacion Mezcla",
    path: "/preparacion-mezcla",
    element: <PreparacionMezcla/>,
  },
  {
    name: "Zona de Enfriamiento",
    path: "/zona-de-enfriamiento",
    element: <></>,
  },
  {
    name: "Zona de Maduracion",
    path: "/zona-de-maduracion",
    element: <></>,
  },
  {
    name: "Zona de Congelacion",
    path: "/zona-de-congelacion",
    element: <></>,
  }
];
