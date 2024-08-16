import { IUsuarioRepository } from "@/interfaces/IUsuarioRepository";
import { Usuario } from "@/models/usuario.model";

export class RegistrarUsuario {
    private usuarioRepository: IUsuarioRepository;

    constructor(usuarioRepository: IUsuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    async execute(usuario: Usuario): Promise<void> {
        await this.usuarioRepository.registrar(usuario);
    }
}