import React, { useState } from 'react';
import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";
import { Button } from '@nextui-org/button';
import { DateInput } from "@nextui-org/date-input";
import { Usuario } from "@/models/usuario.model";
import { UsuarioService } from "@/services/usuario.service";
import { CalendarDate } from "@internationalized/date";
import { CalendarIcon } from './calendarIcon';

export default function Form() {
    const [usuario, setUsuario] = useState<Usuario>({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        direccion: '',
        fechaRegistro: ''
    });

    const [, setError] = useState<string | null>(null);
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
        try {
            await usuarioService.registrar(usuario);
            console.log('Usuario registrado:', usuario);
            setError(null);
        } catch (error) {
            setError('Error registrando el usuario. Por favor, inténtelo de nuevo.');
            console.error(error);
        }
    };

    const getCurrentDate = () => {
        const today = new Date();
        return new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate());
    };

    const currentDate = getCurrentDate();

    return (
        <form onSubmit={handleSubmit} className='flex flex-col justify-center w-1/3	m-auto max-md:w-3/4'>
            <div className="flex w-full flex-wrap md:flex-nowrap md:mb-0 gap-4">
                <Input type="email" variant={"flat"} label="Email" />
            </div>  
            
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
            <DateInput
                label="Fecha de registro"
                defaultValue={currentDate}
                placeholderValue={currentDate}
                labelPlacement="outside"
                className=""
                startContent={
                    <CalendarIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
            />
            <Spacer y={1} />
            <div className='m-auto flex justify-evenly gap-x-4'>
                <Button color="primary" variant="shadow" type='submit'>
                    Enviar
                </Button>
                <Button color="danger" variant="shadow" type='reset'>
                    Eliminar
                </Button> 
            </div>
            
        </form>
    );
};
