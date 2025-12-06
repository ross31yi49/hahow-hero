'use client'

import React from 'react'
import { useGetHeroes } from '@/hooks/useHeroQuery'
import HeroCard from '@/components/HeroCard'
import { Wrapper } from './styled'

const HeroList = () => {
  const { data, error } = useGetHeroes()
  if (!data) return null

  return (
    <Wrapper>
      {data.map((hero) => (
        <HeroCard key={hero.id} name={hero.name} image={hero.image} id={hero.id} />
      ))}
    </Wrapper>
  )
}

export default HeroList