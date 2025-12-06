import { request } from "../axiosClients"

export const getHeroes = async () => {
  return await request({
    url: "/heroes",
    method: "GET",
  })
}

export const getHero = async (id) => {
  return await request({
    url: `/heroes/${id}`,
    method: "GET",
  })
}

export const getHeroProfile = async (id) => {
  return await request({
    url: `/heroes/${id}/profile`,
    method: "GET",
  })
}

export const updateHeroProfile = async (id, data) => {
  return await request({
    url: `/heroes/${id}/profile`,
    method: "PATCH",
    data,
  })
}