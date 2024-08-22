import { Admin } from "@/models/admin.model";
import { AdminRepository } from "@/services/repositories/admin.repository";

export class AdminService {
    private adminRepository: AdminRepository;

    constructor() {
        this.adminRepository = new AdminRepository();
    }

    async crearAdmin(admin: Admin): Promise<void> {
        await this.adminRepository.crearAdmin(admin);
    }

    async obtenerAdminPorId(id: number): Promise<Admin | null> {
        return await this.adminRepository.obtenerAdminPorId(id);
    }

    async obtenerTodosAdmins(): Promise<Admin[]> {
        return await this.adminRepository.obtenerTodosAdmins();
    }

    async actualizarAdmin(admin: Admin): Promise<void> {
        await this.adminRepository.actualizarAdmin(admin);
    }

    async eliminarAdmin(id: number): Promise<void> {
        await this.adminRepository.eliminarAdmin(id);
    }
}
