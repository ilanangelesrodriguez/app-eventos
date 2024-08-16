import { Usuario } from "@/models/usuario.model";
import { RegistrarUsuario } from "@/usecases/registrarUsuario";
import { UsuarioRepository } from "@/repositories/usuarioRepository";

export class UsuarioService {
    private registrarUsuario: RegistrarUsuario;

    constructor() {
        const usuarioRepository = new UsuarioRepository();
        this.registrarUsuario = new RegistrarUsuario(usuarioRepository);
    }

    async registrar(usuario: Usuario): Promise<void> {
        await this.registrarUsuario.execute(usuario);
    }
}