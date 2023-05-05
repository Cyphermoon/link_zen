import { FiLink2 } from 'react-icons/fi';
import { GrMultiple } from "react-icons/gr";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineVisibility } from "react-icons/md";
import { BsBell } from 'react-icons/bs'
import { VscPreview } from "react-icons/vsc";
import { TbFolders } from 'react-icons/tb'
import { AiOutlineShop } from 'react-icons/ai'
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
            body="Easily reduce the length of your links with our url shortner"
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
            title="Inbuilt Browser"
            body="View the content of your links without leaving the page"
          >
            <VscPreview className="text-7xl" />
          </Box>
          <Box
            title="Nested Folders"
            body="Easily create folders in folders to store even more related links"
          >
            <TbFolders className="text-7xl font-thin" />
          </Box>
          <Box
            title="Market place"
            body="Discover useful links from digital creators and other LinkZen users"
          >
            <AiOutlineShop className="text-7xl font-thin" />
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