// Obtenemos los elementos de login.html por sus ID
const form = document.getElementById('loginForm')
const usernameInput = document.getElementById('inputUsername')
const passwordInput = document.getElementById('inputPassword')
const loginButton = document.getElementById('btnLogin')
const togglePassword = document.getElementById('togglePassword')

document.addEventListener('DOMContentLoaded', function () {
  // Verificamos si ya hay una sesión activa y redirigimos al usuario si es necesario
  checkActiveSession()

  // Agregamos eventos a los campos de entrada
  addInputEventListeners()

  // Agregamos un evento al enviar el formulario
  form.addEventListener('submit', handleFormSubmit)

  // Agregamos evento para mostrar/ocultar la contraseña
  togglePassword.addEventListener('click', togglePasswordVisibility)
})

// Función para verificar si ya hay una sesión activa
function checkActiveSession() {
  const token = localStorage.getItem('accessToken')
  if (token) {
    // Si ya hay un token, redirigimos al usuario a la página principal
    window.location.href = 'index.html'
  }
}

// Función para manejar el envío del formulario
function handleFormSubmit(event) {
  event.preventDefault() // Prevenimos que el formulario se envíe

  const username = usernameInput.value
  const password = passwordInput.value

  // Realizamos la solicitud al servidor con fetch
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        // Guardamos el token en localStorage
        localStorage.setItem('accessToken', data.token)

        // Guardamos los datos del usuario si es necesario
        localStorage.setItem('username', username)

        window.location.href = 'index.html' // Redirigimos al usuario
      } else {
        Swal.fire({
          title: 'Error de autenticación',
          text: data.message || 'Usuario o contraseña incorrectos',
          icon: 'error'
        })
      }
    })
    .catch((error) => {
      console.error('Error al iniciar sesión:', error)
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al iniciar sesión. Inténtalo nuevamente.',
        icon: 'error'
      })
    })
}

// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility() {
  const type =
    passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'

  passwordInput.setAttribute('type', type)

  // Alternamos el icono del ojo
  this.classList.toggle('bi-eye')
  this.classList.toggle('bi-eye-slash')
}

// Función para habilitar o deshabilitar el botón de inicio de sesión
function toggleButtonState() {
  if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
    loginButton.disabled = false
  } else {
    loginButton.disabled = true
  }
}

// Función para agregar eventos de entrada a los campos de usuario y contraseña
function addInputEventListeners() {
  usernameInput.addEventListener('input', toggleButtonState)
  passwordInput.addEventListener('input', toggleButtonState)
}
