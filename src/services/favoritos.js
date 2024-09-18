import axios from 'axios'

const FavoritosAPI = axios.create({
  baseURL: 'http://localhost:8000/favoritos',
})

async function getFavoritos() {
  const response = await FavoritosAPI.get('/')

  return response.data
}

async function postFavoritos(id) {
  const response = await FavoritosAPI.post(`/${id}`)

  return response.data
}

async function deleteFavoritos(id) {
  const response = await FavoritosAPI.delete(`/${id}`)

  return response.data
}

export { getFavoritos, postFavoritos, deleteFavoritos }
