document.addEventListener('DOMContentLoaded', function () {
  // Verificamos si no hay un token guardado (estado de autenticación activo)
  if (!localStorage.getItem('accessToken')) {
    // Redirigimos al usuario a la página de inicio de sesión
    window.location.href = 'login.html'
  }
})

// Función para cerrar sesión
function logout() {
  // Eliminamos el token de autenticación
  localStorage.removeItem('accessToken')

  // Eliminamos el nombre de usuario guardado (si es necesario)
  localStorage.removeItem('username')

  // Redirigimos al usuario a la página de inicio de sesión
  window.location.href = 'login.html'
}
