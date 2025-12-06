import React, { useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { PROFILES } from '@/constants/profiles'
import StatusEditor from '@/components/StatusEditor'
import { useUpdateHeroProfile } from '@/hooks/useHeroQuery'
import { Wrapper, Left, Right, SaveButton } from './styled'

const HeroProfileContent = ({ 
  id,
  data = {},
  refetchHeroProfile = () => {},
}) => {
  const initialStatus = useMemo(() => ({
    [PROFILES.STR]: data[PROFILES.STR] ?? 0,
    [PROFILES.INT]: data[PROFILES.INT] ?? 0,
    [PROFILES.AGI]: data[PROFILES.AGI] ?? 0,
    [PROFILES.LUK]: data[PROFILES.LUK] ?? 0,
    remainingPoints: 0,
  }), [data])
  const { mutate: updateHeroProfile, isPending } = useUpdateHeroProfile()
  const [heroStatus, setHeroStatus] = useState(initialStatus)

  const handleAddStatus = useCallback((profile) => {
    const nextStatus = {
      ...heroStatus,
      [profile]: heroStatus[profile] + 1,
      remainingPoints: heroStatus.remainingPoints - 1,
    }
    setHeroStatus(nextStatus)
  }, [heroStatus])
  
  const handleSubtractStatus = useCallback((profile) => {
    const nextStatus = {
      ...heroStatus,
      [profile]: heroStatus[profile] - 1,
      remainingPoints: heroStatus.remainingPoints + 1,
    }
    setHeroStatus(nextStatus)
  }, [heroStatus])

  const handleSave = useCallback(() => {
    const payload = {
      [PROFILES.STR]: heroStatus[PROFILES.STR],
      [PROFILES.INT]: heroStatus[PROFILES.INT],
      [PROFILES.AGI]: heroStatus[PROFILES.AGI],
      [PROFILES.LUK]: heroStatus[PROFILES.LUK],
    }
    
    updateHeroProfile({
      heroId: id,
      data: payload,
    }, {
      onSuccess: () => {
        refetchHeroProfile()
      },
    })
  }, [heroStatus, id, refetchHeroProfile, updateHeroProfile])

  return (
    <Wrapper>
      <Left>
        <StatusEditor 
          profile={PROFILES.STR} 
          value={heroStatus[PROFILES.STR]} 
          onAdd={handleAddStatus}
          onSubtract={handleSubtractStatus}
          AddDisabled={heroStatus.remainingPoints <= 0}
          SubtractDisabled={heroStatus[PROFILES.STR] <= 0}
        />
        <StatusEditor 
          profile={PROFILES.INT} 
          value={heroStatus[PROFILES.INT]} 
          onAdd={handleAddStatus}
          onSubtract={handleSubtractStatus}
          AddDisabled={heroStatus.remainingPoints <= 0}
          SubtractDisabled={heroStatus[PROFILES.INT] <= 0}
        />
        <StatusEditor 
          profile={PROFILES.AGI} 
          value={heroStatus[PROFILES.AGI]} 
          onAdd={handleAddStatus}
          onSubtract={handleSubtractStatus}
          AddDisabled={heroStatus.remainingPoints <= 0}
          SubtractDisabled={heroStatus[PROFILES.AGI] <= 0}
        />
        <StatusEditor 
          profile={PROFILES.LUK} 
          value={heroStatus[PROFILES.LUK]} 
          onAdd={handleAddStatus}
          onSubtract={handleSubtractStatus}
          AddDisabled={heroStatus.remainingPoints <= 0}
          SubtractDisabled={heroStatus[PROFILES.LUK] <= 0}
        />
      </Left>
      <Right>
        剩餘點數：{heroStatus.remainingPoints}
        <SaveButton onClick={handleSave} disabled={heroStatus.remainingPoints !== 0 || isPending}>
          {isPending ? '儲存中...' : '儲存'}
        </SaveButton>
      </Right>
    </Wrapper>
  )
}

HeroProfileContent.propTypes = {
  /**
   * The id of the hero
   */
  id: PropTypes.string.isRequired,
  /**
   * The data of the hero
   * @example
   * {
   *    str: 10,
   *    int: 10,
   *    agi: 10,
   *    luk: 10,
   * }
   */
  data: PropTypes.object,
  /**
   * The function to refetch the hero profile
   */
  refetchHeroProfile: PropTypes.func,
}

export default HeroProfileContent