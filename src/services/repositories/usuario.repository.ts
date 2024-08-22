import { IUsuarioRepository } from "@/services/interfaces/IUsuarioRepository";
import { Usuario } from "@/models/usuario.model";
import apiConnection from "@/services/apiConnection";

export class UsuarioRepository implements IUsuarioRepository {
    async registrar(usuario: Usuario): Promise<void> {
        try {
            const response = await apiConnection.post('/usuarios', usuario);
            console.log('Usuario registrado en la API:', response.data);
        } catch (error) {
            console.error('Error registrando el usuario:', error);
            throw error;
        }
    }

}