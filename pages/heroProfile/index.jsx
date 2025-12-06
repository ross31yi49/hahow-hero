'use client'

import React from'react'
import { useParams, notFound } from 'next/navigation'
import { useGetHeroProfile } from '@/hooks/useHeroQuery'
import HeroProfile from '@/components/HeroProfile'

const HeroProfilePage = () => {
  const params = useParams()
  const heroId = params?.heroId
  const { data , isError, refetch } = useGetHeroProfile(heroId)
  if (isError) {
    notFound()
  }
  if (!data) return null
  
  return <HeroProfile id={heroId} data={data} refetchHeroProfile={refetch} />
}

export default HeroProfilePage