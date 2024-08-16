import { Usuario } from '@/models/usuario.model';
import { useState } from 'react';

function useForm(initialState: Usuario) {
    const [formData, setFormData] = useState<Usuario>(initialState);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return [formData, handleChange] as const;
}

export default useForm;

