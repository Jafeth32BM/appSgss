export interface ActuAlumn {
  ok: boolean;
  msg: string;
}
export interface DocStatus {
  ok: boolean;
  docalumn: Docalumn[];
}

export interface DatosEscuela {
  ok: boolean;
  escolar: Escolar[];
}
export interface DatosEscuela {
  ok: boolean;
  datoEscolar: datoEscolarAlumno[];
}

export interface datoEscolarAlumno {
  noregistro: string;
  matricula: number;
  carrera: string;
  siss: number;
  pinicio: Date;
  pfin: Date;
  promedio: number;
  porcentaje: number;
}


export interface Escolar {
  noregistro: string;
  apaterno: string;
  amaterno: string;
  nombres: string;
  matricula: number | null;
  carrera: null | string;
  siss: number | null;
  pinicio: Date | null;
  pfin: Date | null;
  promedio: number | null;
  porcentaje: number | null;
}


export interface Docalumn {
  noregistro: string;
  historial: string;
  curp: string;
  actnacim: string;
  cargacadem: string;
  conscredit: string;
  solservsoci: string;
  imss: string;
  ruta: string;
}

