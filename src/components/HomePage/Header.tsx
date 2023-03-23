import Button from '../common/Button'
import Container from '../common/Container'
import ZenLink from '../common/ZenLink'
import NavBar from './NavBar'



const Header = () => {

  return (
    <header className='py-4 flex flex-col h-screen'>
      <NavBar />
      <div className='grow'>
        <Container className='relative h-full  text-center flex flex-col justify-center items-center'>
          <ZenLink className='top-5 lg:top-0 left-0' />
          <ZenLink className='top-5 lg:top-0 right-0' />
          <ZenLink className='bottom-0 left-0' />
          <ZenLink className='bottom-0 right-0' />

          <h1 className='text-3xl lg:text-7xl leading-10 mb-6 w-[20ch]'>
            <span className='underneath_line'>Organise</span> and Share Your <span className='underneath_line'>Links</span>  Nicely
          </h1>

          <Button text="Get Started" href='#' />
        </Container>
      </div>
    </header >
  )
}

export default Header