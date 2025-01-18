//agrupación mayor o familia, para mascotas sería la clase y para vehículos sería el tipo de vehículo
export const groupFamilyPets = [
  { idGroup: 1, descGroup: "Perro", imagen: "" },
  { idGroup: 2, descGroup: "Gato", imagen: "" },
  { idGroup: 3, descGroup: "Ave" },
  { idGroup: 4, descGroup: "Roedor" },
  { idGroup: 5, descGroup: "Peces" },
  { idGroup: 6, descGroup: "Reptiles" },
  { idGroup: 7, descGroup: "Anfibios" },
];

export const groupFamilyVehicle = [
  { idGroup: 1, descGroup: "Auto/Carro", imagen: "" },
  { idGroup: 2, descGroup: "Motocicleta", imagen: "" },
  { idGroup: 3, descGroup: "Bicicleta" },
  { idGroup: 4, descGroup: "Cuatriciclo" },
  { idGroup: 5, descGroup: "Camioneta" },
  { idGroup: 6, descGroup: "Camión" },
  { idGroup: 7, descGroup: "Remolque" },
];

//agrupación menor o subgrupos, para mascotas es la raza, y para vehículos sería la marca/modelo
export const subGroupPets = [
  { idSubGroup: 1, idGroup: 1, descSubGroup: "Galgo", imagen: "" },
  { idSubGroup: 2, idGroup: 1, descSubGroup: "Pequinés", imagen: "" },
  { idSubGroup: 3, idGroup: 2, descSubGroup: "Siames", imagen: "" },
  { idSubGroup: 4, idGroup: 3, descSubGroup: "Loro cotorra", imagen: "" },
];

export const subGroupVehicle = [
  { idSubGroup: 1, idGroup: 1, descSubGroup: "Ford Fiesta", imagen: "" },
];

//listado de algunas mascotas
export const petsList = [
  {
    idPets: "",
    nombre: "Luna",
    Apellido: "Compagnon",
    dueno: "Ayelén Compagnon",
    imagen: [],
    grupo: "Perro",
    subGrupo: "Mestizo",
    sexo: "Hembra",
    peso: 20,
    fechaPeso: "13/01/2025",
    esCastrado: true,
    fechaNacimiento: "01/01/2020",
    incapacidad: "",
    esCallejero: false,
    mePerdíFecha: "",
    meEncontraronSueltoFecha: "",
    fallecidoFecha: "",
  },
  {
    idPets: "",
    nombre: "Chicha",
    Apellido: "Squaglia",
    dueno: "Fernando Squaglia",
    imagen: [],
    grupo: "Perro",
    subGrupo: "Mestizo",
    sexo: "Hembra",
    peso: 20,
    fechaPeso: "13/01/2025",
    esCastrado: true,
    fechaNacimiento: "01/01/2020",
    incapacidad: "Malformación dedos pata derecha delantera",
    esCallejero: false,
    mePerdíFecha: "",
    meEncontraronSueltoFecha: "",
    fallecidoFecha: "11/10/2024",
  },
  {
    idPets: "",
    nombre: "Chiqui",
    Apellido: "Compagnon",
    dueno: "Ayelén Compagnon",
    imagen: [],
    grupo: "Perro",
    subGrupo: "Salchicha peludo",
    sexo: "Hembra",
    peso: 10,
    fechaPeso: "13/01/2025",
    esCastrado: true,
    fechaNacimiento: "01/01/2020",
    incapacidad: "",
    esCallejero: false,
    mePerdíFecha: "",
    meEncontraronSueltoFecha: "",
    fallecidoFecha: "",
  },
  {
    idPets: "",
    nombre: "Negrita",
    Apellido: "Squaglia",
    dueno: "Fernando Squaglia",
    imagen: [],
    grupo: "Perro",
    subGrupo: "Mestizo",
    sexo: "Hembra",
    peso: 15,
    fechaPeso: "13/01/2025",
    esCastrado: true,
    fechaNacimiento: "01/01/2020",
    incapacidad: "",
    esCallejero: false,
    mePerdíFecha: "",
    meEncontraronSueltoFecha: "",
    fallecidoFecha: "",
  },
];

export const resposability =
  "Este sitio posee información proporcionada por usuarios y profesionales ajenos al propietario, por lo que el proveedor no se hace responsable de daños y perjuicios que pudieran incurrirse por el mal uso de dicha información. En ocaciones las imágenes podrán ser meramente simbólicas.";

export const cooquie =
  "Recopilamos datos de terceros únicamente para mejorar la experiencia de navegación de nuestra App. Si solicitamos información personal, será exclusivamente para enviarle novedades. Al navegar el sitio aceptas nuestras políticas y condiciones de privacidad.";

export const developer = "Grupo dev";

export const nameApp = "Simply Pets";
