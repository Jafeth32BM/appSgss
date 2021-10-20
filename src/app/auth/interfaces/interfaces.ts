export interface Registro {
  ok: boolean;
  msg?: string;
  noregistro: string;
  curp: string;
  contrasena: string;
  nuevacontra: string;
  apaterno: string;
  amaterno: string;
  nombres: string;
  sexo: string;
  correo: string;
  telefono: string;
  tipo: string;
  fecharegistro: Date;
  token?: string;
}
export interface Usuario {
  ok: boolean;
  usuario: Result[];
}

export interface Login {
  ok: boolean;
  token: string;
  usuario: Result[];
}
export interface Result {
  noregistro: string;
  curp: string;
  contrasena: string;
  nuevacontra: string;
  apaterno: string;
  amaterno: string;
  nombres: string;
  sexo: string;
  correo: string;
  telefono: string;
  tipo: string;
  fecharegistro: Date;
}
