import React, { useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { PROFILES } from '@/constants/profiles'
import { Wrapper, Button, Name, Value } from './styled'

const StatusEditor = ({ 
  profile, 
  value, 
  onAdd = () => {}, 
  onSubtract = () => {},
  AddDisabled = false,
  SubtractDisabled = false,
}) => {
  const profileName = useMemo(() => {
    switch (profile) {
      case PROFILES.AGI:
        return 'AGI'
      case PROFILES.STR:
        return 'STR'
      case PROFILES.INT:
        return 'INT'
      case PROFILES.LUK:
        return 'LUK'
      default:
        return ''
    }
  }, [profile])

  const handleAdd = useCallback(() => {
    onAdd(profile)
  }, [onAdd, profile])

  const handleSubtract = useCallback(() => {
    onSubtract(profile)
  }, [onSubtract, profile])

  return (
    <Wrapper>
      <Name>{profileName}</Name>
      <Button 
        onClick={handleAdd} 
        disabled={AddDisabled}
        $isDisabled={AddDisabled}
      >
        +
      </Button>
      <Value>{value}</Value>
      <Button 
        onClick={handleSubtract} 
        disabled={SubtractDisabled}
        $isDisabled={SubtractDisabled}
      >
        -
      </Button>
    </Wrapper>
  )
}

StatusEditor.propTypes = {
  /**
   * The profile of the status editor
   */
  profile: PropTypes.string.isRequired,
  /**
   * The value of the status editor
   */
  value: PropTypes.number.isRequired,
  /**
   * The function to add the value
   */
  onAdd: PropTypes.func,
  /**
   * The function to subtract the value
   */
  onSubtract: PropTypes.func,
  /**
   * Whether the add button is disabled
   */
  AddDisabled: PropTypes.bool,
  /**
   * Whether the subtract button is disabled
   */
  SubtractDisabled: PropTypes.bool,
}

export default StatusEditor