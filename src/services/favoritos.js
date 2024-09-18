import axios from 'axios'

const FavoritosAPI = axios.create({
  baseURL: 'http://localhost:8000/favoritos',
})

async function getFavoritos() {
  const response = await FavoritosAPI.get('/')

  return response.data
}

export { getFavoritos }
