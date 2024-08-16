import { Input } from "@nextui-org/input";
import {Spacer} from "@nextui-org/spacer";
import React, { useState } from 'react';
import { Button } from '@nextui-org/button';
import { Usuario } from "@/models/usuario.model";
import { UsuarioService } from "@/services/usuarioService";

const Form: React.FC = () => {
    const [usuario, setUsuario] = useState<Usuario>({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        direccion: '',
        fechaRegistro: ''
    });

    const usuarioService = new UsuarioService();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUsuario({
            ...usuario,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await usuarioService.registrar(usuario);
        console.log('Usuario registrado:', usuario);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                isClearable
                label="Nombre"
                name="nombre"
                value={usuario.nombre}
                onChange={handleChange}
            />
            <Spacer y={1} />
            <Input
                isClearable
                label="Apellido"
                name="apellido"
                value={usuario.apellido}
                onChange={handleChange}
            />
            <Spacer y={1} />
            <Input
                isClearable
                label="Email"
                name="email"
                type="email"
                value={usuario.email}
                onChange={handleChange}
            />
            <Spacer y={1} />
            <Input
                isClearable
                label="Teléfono"
                name="telefono"
                type="tel"
                value={usuario.telefono}
                onChange={handleChange}
            />
            <Spacer y={1} />
            <Input
                isClearable
                label="Dirección"
                name="direccion"
                value={usuario.direccion}
                onChange={handleChange}
            />
            <Spacer y={1} />
            <Input
                isClearable
                label="Fecha de Registro"
                name="fechaRegistro"
                type="date"
                value={usuario.fechaRegistro}
                onChange={handleChange}
            />
            <Spacer y={1} />
            <Button type="submit">Registrar</Button>
        </form>
    );
};

export default Form;
