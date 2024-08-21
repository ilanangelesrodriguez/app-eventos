import { Input } from "@nextui-org/input";
import { Spacer } from "@nextui-org/spacer";
import { Button } from '@nextui-org/button';
import { DateInput } from "@nextui-org/date-input";
import { CalendarDate } from "@internationalized/date";
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure} from "@nextui-org/modal";
import { CalendarIcon } from './calendarIcon';
import useForm from '@/hooks/useForm';
import React, { useState } from 'react';

export default function Form() {
    const getCurrentDate = () => {
        const today = new Date();
        return new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate());
    };

    const currentDate = getCurrentDate();

    const [formData, handleChange, errors, handleSubmit, submitError, touched] = useForm({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        direccion: '',
        fechaRegistro: currentDate.toString()
    });

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [modalContent, setModalContent] = useState<string>('');

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errorMessages = Object.values(errors).filter(error => error);
        if (errorMessages.length > 0) {
            setModalContent(`Errores:\n${errorMessages.join('\n')}`);
        } else {
            setModalContent(`Formulario:\n${JSON.stringify(formData, null, 2)}`);
        }
        onOpen();
    };

    const confirmSubmit = async () => {
        await handleSubmit();
        onOpenChange();
    };

    return (
        <>
            <form onSubmit={handleFormSubmit} className='flex flex-col justify-center w-1/3 m-auto max-md:w-3/4'>
                <Input
                    label="Nombre"
                    name="nombre"
                    isInvalid={touched.nombre && !!errors.nombre}
                    errorMessage={errors.nombre}
                    onChange={handleChange}
                />  
                
                <Spacer y={1} />
                <Input
                    label="Apellido"
                    name="apellido"
                    isInvalid={touched.apellido && !!errors.apellido}
                    errorMessage={errors.apellido}
                    onChange={handleChange}
                />
                <Spacer y={1} />
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    isInvalid={touched.email && !!errors.email}
                    errorMessage={errors.email}
                    isRequired
                    onChange={handleChange}
                />
                <Spacer y={1} />
                <Input
                    label="Teléfono"
                    name="telefono"
                    type="number"
                    isInvalid={touched.telefono && !!errors.telefono}
                    errorMessage={errors.telefono}
                    onChange={handleChange}
                />
                <Spacer y={1} />
                <Input
                    label="Dirección"
                    name="direccion"
                    isInvalid={touched.direccion && !!errors.direccion}
                    errorMessage={errors.direccion}
                    isRequired
                    onChange={handleChange}
                />
                <Spacer y={1} />
                <DateInput
                    isDisabled
                    label="Fecha de registro"
                    defaultValue={currentDate}
                    placeholderValue={currentDate}
                    labelPlacement="outside"
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
                {submitError && <p className="text-red-500">{submitError}</p>}
            </form>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Confirmación</ModalHeader>
                            <ModalBody>
                                <pre>{modalContent}</pre>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Cerrar
                                </Button>
                                <Button color="primary" onPress={confirmSubmit}>
                                    Confirmar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}