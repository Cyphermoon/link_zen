import Container from '../../common/Container'
import { FiLink2 } from 'react-icons/fi'
import Box from './Boxes';


const Features = () => {
    return (
      <main className='bg-primary'>
        <Container>
          <h3 className="text-center my-12 md:my-24">Features</h3>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            <Box
              title="Url Shortner"
              body="You can easily shorten url you think is too long"
            >
              <FiLink2 className="text-7xl" />
            </Box>

            <Box
              title="Link Visibility"
              body="You can make your links public or private"
            >
              <FiLink2 className="text-7xl" />
            </Box>

            <Box
              title="Build Profile Page"
              body="Showcase essential links on your profile and share them with the entire world"
              divStyles="flex flex-col md:col-span-2 lg:row-span-2 lg:col-auto profile-gradient rounded-xl items-center justify-center p-3 md:py-4 md:px-12 shadow-md h-72 lg:h-full"
              hStyles="my-8 text-1xl text-center"
              pStyles="text-center text-lg"
            />

            <Box
              title="Color Tag"
              body="You can customize the color of your links according to your style"
            >
              <FiLink2 className="text-7xl" />
            </Box>

            <Box
              title="Multi-Link Creation"
              body="You can create multiple links in a row or provide a json, csv file"
            >
              <FiLink2 className="text-7xl" />
            </Box>
          </div>
        </Container>
      </main>
    );
}

export default Features