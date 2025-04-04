document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const loginMessage = document.getElementById('login-message');
    
    loginBtn.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Simular credenciales predeterminadas
        if (username === 'admin' && password === 'admin') {
            loginMessage.textContent = 'Acceso exitoso. Redirigiendo al panel...';
            loginMessage.style.color = 'green';
            
            // Simular redirección
            setTimeout(() => {
                alert('Simulación: Ahora estarías en el panel de control del router');
            }, 1500);
        } else {
            loginMessage.textContent = 'Usuario o contraseña incorrectos. Intenta con admin/admin';
            loginMessage.style.color = 'red';
        }
    });
    
    // Simular tecla Enter para acceder
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
});
