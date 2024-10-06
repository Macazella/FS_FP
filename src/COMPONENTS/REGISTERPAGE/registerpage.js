import React, { useState } from 'react';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/gifts/register', {
            method: 'POST', // Método HTTP
            headers: {
                'Content-Type': 'application/json', // Tipo de contenido
            },
            body: JSON.stringify({ username, password, email }), // Datos a enviar
        });

        const data = await response.json();
        if (response.ok) {
            // Manejo de respuesta exitosa
            console.log('Registro exitoso:', data);
        } else {
            // Manejo de error
            console.error('Error en el registro:', data);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
