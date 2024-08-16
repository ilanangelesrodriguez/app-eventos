import { IUsuarioRepository } from "@/interfaces/IUsuarioRepository";
import { Usuario } from "@/models/usuario.model";

export class UsuarioRepository implements IUsuarioRepository {
    async registrar(usuario: Usuario): Promise<void> {
        console.log('Usuario registrado en el repositorio:', usuario);
    }
}