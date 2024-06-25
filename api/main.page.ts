import { createEffect } from 'effector'
import api from './apiinstance'

export const getNewProductsFx = createEffect(async () => {
  const { data } = await api.get('/api/goods/new')
  return data
})
export const getBestsellersProductsFx = createEffect(async () => {
  const { data } = await api.get('/api/goods/bestsellers')
  return data
})
