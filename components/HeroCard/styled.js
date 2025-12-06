import styled from 'styled-components'
import Image from 'next/image'

export const Wrapper = styled.div`
  display: flex;
  width: 220px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  gap: 10px;

  ${({ $isActive }) => $isActive ? `
    background-color: #1e9fd2;

    &:hover {
      background-color: #0f7aab;
    }

    &:active {
      background-color: #055885;
    }
  ` : `
    &:hover {
      background-color: #e0e0e0;
    }

    &:active {
      background-color: #d0d0d0;
    }
  `}
`

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    padding-top: 56.25%;
  }
`
export const HeroImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`