import { FiLink2 } from 'react-icons/fi';
import { GrMultiple } from "react-icons/gr";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineVisibility } from "react-icons/md";
import Container from '../../common/Container';


import Box from './Boxes';


const Features = () => {

  return (
    <main>
      <Container>
        <h3 className="text-center mb-12">Features</h3>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          <Box
            title="Url Shortner"
            body="You can shorten url you think is too long"
          >
            <FiLink2 className="text-7xl" />
          </Box>

          <Box
            title="Link Visibility"
            body="You can make your links public or private"
          >
            <MdOutlineVisibility className="text-7xl" />
          </Box>


          <Box
            title="Color Tag"
            body="You can customize the color of your links according to your style"
          >
            <IoColorPaletteOutline className="text-7xl" />
          </Box>

          <Box
            title="Multi-Link Creation"
            body="You can create multiple links in a row or provide a json, csv file"
          >
            <GrMultiple className="text-7xl font-thin" />
          </Box>
        </div>
      </Container>
    </main>
  );
}

export default Features