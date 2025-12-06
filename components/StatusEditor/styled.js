import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  background-color: #f0f0f0;
  color: #000;
  font-size: 14px;
  font-weight: 600;

  &:disabled {
    cursor: not-allowed;
    background-color: #d0d0d0;
  }
`

export const Name = styled.span`
  width: 30px;
  font-size: 20px;
  font-weight: 600;
`

export const Value = styled.span`
  width: 30px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`