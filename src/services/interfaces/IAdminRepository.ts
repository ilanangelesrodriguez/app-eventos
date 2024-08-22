import { Admin } from "@/models/admin.model";

export interface IAdminRepository {
    crearAdmin(admin: Admin): Promise<void>;
    obtenerAdminPorId(id: number): Promise<Admin | null>;
    obtenerTodosAdmins(): Promise<Admin[]>;
    actualizarAdmin(admin: Admin): Promise<void>;
    eliminarAdmin(id: number): Promise<void>;
}
