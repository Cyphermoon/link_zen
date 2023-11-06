import { FiLink2 } from "react-icons/fi";
import { GrMultiple } from "react-icons/gr";
import { IoColorPaletteOutline, IoAnalytics } from "react-icons/io5";
import { MdOutlineVisibility } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { TbFolders } from "react-icons/tb";
import { AiOutlineShop } from "react-icons/ai";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { MdOutlineMobileScreenShare } from "react-icons/md";
import Container from "../../common/Container";
import { opensans, pfDisplay, lato, quicksand } from "font";

import Box from "./Boxes";

const Features = () => {
  return (
    <main id="features">
      <Container>
        <h3
          className={`text-4xl font-semibold normal-case ${pfDisplay.className}`}
        >
          Make your life easy with LinkZen
        </h3>
        <p
          className={`text-lg mt-4 mb-12 md:text-xl font-medium text-gray-500 ${quicksand.className}`}
        >
          Life is hard but we can make it easy
        </p>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          <Box
            title="Save to LinkZen Extension"
            body="Save web content directly to your LinkZen profile while browsing, using LinkZen's chrome extention"
          >
            <div className="p-1 w-20 rounded-md flex items-center justify-center bg-profile-gradient md:bg-none">
              <IoExtensionPuzzleOutline className="text-5xl md:text-7xl text-neutral-500" />
            </div>
          </Box>
          <Box
            title="Analytics"
            body="Gain valuable insights into your content's impact with detailed analytics. Understand your audience and your resource performance"
          >
            <div className="bg-profile-gradient p-1 w-20 rounded-md flex items-center justify-center md:bg-none">
              <IoAnalytics className="text-5xl md:text-7xl text-green-900" />
            </div>
          </Box>
          <Box
            title="Url shortner"
            body="Easily reduce the length of your links with our url shortner for easy sharing of your links"
          >
            <div className="bg-profile-gradient p-1 w-20 rounded-md flex items-center justify-center md:bg-none">
              <FiLink2 className="text-5xl md:text-7xl text-blue-950" />
            </div>
          </Box>
          <Box
            title="Inbuilt Browser"
            body="View the content of external websites directly within LinkZen, without leaving the page"
          >
            <div className="bg-profile-gradient p-1 w-20 rounded-md flex items-center justify-center md:bg-none">
              <VscPreview className="text-5xl md:text-7xl text-stone-700" />
            </div>
          </Box>
          {/* <Box
            title="Link Visibility"
            body="Choose who can see your links by making them public or private"
          >
            <MdOutlineVisibility className="text-7xl" />
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
          </Box> */}
        </div>
      </Container>
    </main>
  );
};

export default Features;
