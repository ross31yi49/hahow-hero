import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { useRouter, useParams } from 'next/navigation'
import { Wrapper, HeroImage, ImageWrapper } from './styled'

const HeroCard = ({ name, image, id }) => {
  const router = useRouter()
  const params = useParams()
  const heroId = params?.heroId
  const handleClick = () => {
    router.push(`/heroes/${id}`)
  }

  const isActive = useMemo(() => {
    return heroId === id
  }, [heroId, id])

  return (
    <Wrapper onClick={handleClick} $isActive={isActive}>
      <ImageWrapper>
        <HeroImage 
          src={image} 
          alt={name} 
          width={100} 
          height={100} 
          loading="lazy"
          unoptimized
        />
      </ImageWrapper>
      <span>{name}</span>
    </Wrapper>
  )
}

HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default HeroCard