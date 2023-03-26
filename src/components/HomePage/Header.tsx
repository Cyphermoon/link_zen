import { useWindowSize } from 'usehooks-ts'
import AnimationLayout from './AnimationLayout'
import NavBar from './NavBar'
import SpiderLayout from './SpiderLayout'


const Header = () => {
  const lgScreen = 1024
  const { width } = useWindowSize()

  return (
    <header className='py-4 flex flex-col h-screen'>
      <NavBar />
      {width >= lgScreen ? <SpiderLayout /> : null}
      {width < lgScreen ? <AnimationLayout /> : null}
    </header >
  )
}

export default Header