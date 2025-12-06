import DefaultLayout from '@/layout/Default'
import HeroList from '@/components/HeroList'

const HeroesLayout = ({ children }) => {
  return (
    <DefaultLayout>
      <HeroList />
      {children}
    </DefaultLayout>
  )
}

export default HeroesLayout