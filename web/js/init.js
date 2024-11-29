const CATEGORIES_URL = 'http://localhost:3000/categories'
const PUBLISH_PRODUCT_URL = 'http://localhost:3000/sell'
const PRODUCTS_URL = 'http://localhost:3000/category-products/'
const PRODUCT_INFO_URL = 'http://localhost:3000/products/'
const PRODUCT_INFO_COMMENTS_URL = 'http://localhost:3000/comments/'
const CART_INFO_URL = 'https://japceibal.github.io/emercado-api/user_cart/'
const CART_BUY_URL = 'http://localhost:3000/cart'
const EXT_TYPE = '.json'

// Obtenemos los headers
const getHeaders = () => {
  const token = localStorage.getItem('accessToken') // Obtiene el token desde localStorage

  return {
    'Content-Type': 'application/json',
    'access-token': token // Incluye el token
  }
}

let showSpinner = function () {
  document.getElementById('spinner-wrapper').style.display = 'block'
}

let hideSpinner = function () {
  document.getElementById('spinner-wrapper').style.display = 'none'
}

let getJSONData = function (url) {
  let result = {}
  showSpinner()
  return fetch(url, {
    headers: getHeaders()
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw Error(response.statusText)
      }
    })
    .then(function (response) {
      result.status = 'ok'
      result.data = response
      hideSpinner()
      return result
    })
    .catch(function (error) {
      result.status = 'error'
      result.data = error
      hideSpinner()
      return result
    })
}

document.addEventListener('DOMContentLoaded', setUserNameInNavBar())

function setUserNameInNavBar() {
  const navItemsUserName = document.querySelectorAll('.username-navBar')
  const username = localStorage.getItem('username')

  navItemsUserName.forEach((navItem) => {
    navItem.textContent = username
  })
}
