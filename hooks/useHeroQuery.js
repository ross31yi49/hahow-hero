import { useQuery, useMutation } from '@tanstack/react-query'
import { getHeroes, getHeroProfile, updateHeroProfile } from '@/apis/fetchers/heroes'

const GET_HEROES = 'GET_HEROES'
const GET_HERO_PROFILE = 'GET_HERO_PROFILE'

export const useGetHeroes = () => {
  return useQuery({
    queryKey: [GET_HEROES],
    queryFn: () => getHeroes(),
    refetchOnWindowFocus: false,
    retry: false,
  })
}

export const useGetHeroProfile = (heroId) => {
  return useQuery({
    queryKey: [GET_HERO_PROFILE, heroId],
    queryFn: () => getHeroProfile(heroId),
    enabled: !!heroId,
    refetchOnWindowFocus: false,
    retry: false,
  })
}

export const useUpdateHeroProfile = () => {
  return useMutation({
    mutationFn: ({heroId, data}) => updateHeroProfile(heroId, data),
  })
}