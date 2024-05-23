import React from 'react';
import { useForm } from 'react-hook-form';

const FormularioForms1 = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            email: 'meu@email.com',
            senha: '1234567890'
        }
    });
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h2>Faça seu Login (React Hook Forms):</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                Email: <input type="email" {...register("email")} /><br />
                {errors.email && <span>{errors.email.message}</span>}
                Senha: <input type="password" {...register("senha")} />
                {errors.senha && <span>{errors.senha.message}</span>}

                <div>
                    <p>Email: {watch('email')}</p>
                    <p>Senha: {watch('senha')}</p>
                </div>

                <input type="submit" />
            </form>
        </div>
    );
}

export default FormularioForms1;
