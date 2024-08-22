import { IAdminRepository } from "@/services/interfaces/IAdminRepository";
import { Admin } from "@/models/admin.model";
import apiConnection from "@/services/apiConnection";

export class AdminRepository implements IAdminRepository {
    async crearAdmin(admin: Admin): Promise<void> {
        try {
            const response = await apiConnection.post('/admins', admin);
            console.log('Admin registrado en la API:', response.data);
        } catch (error) {
            console.error('Error registrando el admin:', error);
            throw error;
        }
    }

    async obtenerAdminPorId(id: number): Promise<Admin | null> {
        try {
            const response = await apiConnection.get(`/admins/${id}`);
            return response.data as Admin | null;
        } catch (error) {
            console.error('Error obteniendo el admin por ID:', error);
            throw error;
        }
    }

    async obtenerTodosAdmins(): Promise<Admin[]> {
        try {
            const response = await apiConnection.get('/admins');
            return response.data as Admin[];
        } catch (error) {
            console.error('Error obteniendo todos los admins:', error);
            throw error;
        }
    }

    async actualizarAdmin(admin: Admin): Promise<void> {
        try {
            const response = await apiConnection.put('/admins', admin);
            console.log('Admin actualizado en la API:', response.data);
        } catch (error) {
            console.error('Error actualizando el admin:', error);
            throw error;
        }
    }

    async eliminarAdmin(id: number): Promise<void> {
        try {
            await apiConnection.delete(`/admins/${id}`);
            console.log('Admin eliminado de la API');
        } catch (error) {
            console.error('Error eliminando el admin:', error);
            throw error;
        }
    }
}
