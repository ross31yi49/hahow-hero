import { useQuery, useMutation } from '@tanstack/react-query'
import { getHeroes } from '@/apis/fetchers/heroes'

const GET_HEROES = 'GET_HEROES'

export const useGetHeroes = () => {
  return useQuery({
    queryKey: [GET_HEROES],
    queryFn: () => getHeroes(),
  })
}