import { FiLink2 } from 'react-icons/fi';
import { GrMultiple } from "react-icons/gr";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineVisibility } from "react-icons/md";
import { BsBell } from 'react-icons/bs'
import { MdOutlineMobileScreenShare } from 'react-icons/md'
import Container from '../../common/Container';


import Box from './Boxes';


const Features = () => {

  return (
    <main id="features">
      <Container>
        <h3 className="text-center mb-12">Features</h3>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          <Box
            title="Url Shortner"
            body="Long, clunky links can be a hassle to share. You can easily reduce the length of your links with our url shortner"
          >
            <FiLink2 className="text-7xl" />
          </Box>
          <Box
            title="Link Visibility"
            body="Choose who can see your links by making them public or private"
          >
            <MdOutlineVisibility className="text-7xl" />
          </Box>
          <Box
            title="Color Tag"
            body="Customize the display color of your links and make it look even more appealing"
          >
            <IoColorPaletteOutline className="text-7xl" />
          </Box>
          <Box
            title="Multi-Link Creation"
            body="You can create multiple links in a row or provide a json, csv file"
          >
            <GrMultiple className="text-7xl font-thin" />
          </Box>
          <Box
            title="Reach more People"
            body="Share your links with anyone or to your social media to increase your audience"
          >
            <MdOutlineMobileScreenShare className="text-7xl font-thin" />
          </Box>

          <Box
            title="Never miss an Update"
            body="Get notifications from those you subscribe to, you can also choose to unsubscribe anytime"
          >
            <BsBell className="text-7xl font-thin" />
          </Box>
        </div>
      </Container>
    </main>
  );
}

export default Features