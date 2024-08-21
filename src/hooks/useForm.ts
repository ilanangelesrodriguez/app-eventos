import { Usuario } from '@/models/usuario.model';
import { useState } from 'react';
import { UsuarioService } from '@/services/usuario.service';

function useForm(initialState: Usuario) {
    const [formData, setFormData] = useState<Usuario>(initialState);
    const [errors, setErrors] = useState<{ [key in keyof Usuario]?: string }>({});
    const [touched, setTouched] = useState<{ [key in keyof Usuario]?: boolean }>({});
    const [submitError, setSubmitError] = useState<string | null>(null);

    const usuarioService = new UsuarioService();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        setTouched({
            ...touched,
            [name]: true
        });

        validateField(name as keyof Usuario, value);
    }

    function validateField(name: keyof Usuario, value: string) {
        let errorMessage = '';
    
        if (!value.trim()) {
            errorMessage = 'Este campo es obligatorio';
        } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            errorMessage = 'Por favor, introduce un correo válido';
        } else if (name === 'telefono' && (!/^\d{9}$/.test(value))) {
            errorMessage = 'El teléfono debe tener exactamente 9 dígitos';
        }
    
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage
        }));
    }

    async function handleSubmit() {
        try {
            const fechaRegistro = new Date().toISOString();
            const dataToSend = { ...formData, fechaRegistro };

            await usuarioService.registrar(dataToSend);
            console.log('Usuario registrado:', dataToSend);
            setSubmitError(null);
        } catch (error) {
            setSubmitError('Error registrando el usuario. Por favor, inténtelo de nuevo.');
            console.error(error);
        }
    }

    return [formData, handleChange, errors, handleSubmit, submitError, touched] as const;
}

export default useForm;
