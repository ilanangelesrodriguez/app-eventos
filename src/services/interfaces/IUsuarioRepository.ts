import { Usuario } from "@/models/usuario.model";

export interface IUsuarioRepository {
    registrar(usuario: Usuario): Promise<void>;
}