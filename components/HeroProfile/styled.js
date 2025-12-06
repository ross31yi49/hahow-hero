import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  width: 100%;
  gap: 10px;
  margin-top: 20px;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 10px;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 10px;
`

export const SaveButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
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