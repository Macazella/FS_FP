import React, { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/gifts/login', {
            method: 'POST', // Método HTTP
            headers: {
                'Content-Type': 'application/json', // Tipo de contenido
                'Authorization': 'Bearer your-token-here', // Token de autorización (ajusta según tu implementación)
            },
            body: JSON.stringify({ username, password }), // Datos a enviar
        });

        const data = await response.json();
        if (response.ok) {
            // Manejo de respuesta exitosa
            console.log('Inicio de sesión exitoso:', data);
        } else {
            // Manejo de error
            console.error('Error en el inicio de sesión:', data);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
