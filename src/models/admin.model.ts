import { Rol } from "@/models/rol.model";

export interface Admin {
    adminId: number;
    nombreAdmin: string;
    apellidoAdmin: string;
    email: string;
    contrasena: string;
    rol: Rol;
    fechaRegistro: Date;
}