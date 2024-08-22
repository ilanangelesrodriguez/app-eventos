import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { MailIcon } from './mailIcon.jsx';
import { LockIcon } from './lockIcon.jsx';
import { AdminService } from "@/services/admin.service";
import { Admin } from "@/models/admin.model.js";

interface LoginModalProps {
  onLogin: (admin: Admin) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onLogin }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    const adminService = new AdminService();
    try {
      const admins = await adminService.obtenerTodosAdmins();
      const admin = admins.find(admin => admin.email === email && admin.contrasena === password);
      if (admin) {
        localStorage.setItem("admin", JSON.stringify(admin));
        onLogin(admin);
        onOpenChange();
      } else {
        setError("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
      }
    } catch (error) {
      setError("Error al validar las credenciales. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">Iniciar Sesión</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">Iniciar Sesión</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="Correo electrónico"
                  placeholder="Introduce tu correo electrónico"
                  variant="bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  endContent={<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                  label="Contraseña"
                  placeholder="Introducte tu contraseña"
                  type="password"
                  variant="bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error && <span style={{ color: "red" }}>{error}</span>}
                
              </ModalBody>
              <ModalFooter className="flex justify-center">
                <Button color="danger" variant="flat" onPress={onClose}>Cerrar</Button>
                <Button color="primary" onPress={handleLogin}>Entrar</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};