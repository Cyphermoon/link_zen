import Container from '../../common/Container'
import { FiLink2 } from 'react-icons/fi'
import { MdOutlineVisibility } from "react-icons/md";
import { GrMultiple } from "react-icons/gr";
import { IoColorPaletteOutline } from "react-icons/io5";


import Box from './Boxes';
import { useTiltEffect } from '@/hooks/index.hook';


const Features = () => {

  const { tiltCard, removeTiltEffect } = useTiltEffect()

  return (
    <main>
      <Container>
        <h3 className="text-center mb-12">Features</h3>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12" style={{ perspective: "800px" }}>
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

          <div onMouseMove={tiltCard} onMouseOut={removeTiltEffect} className="flex flex-col  md:col-span-2 order-last lg:order-none lg:row-span-2 lg:col-auto profile-gradient rounded-xl items-center justify-center p-3 md:py-4 md:px-12 shadow-md h-72 lg:h-full">
            <h5 className={"my-8 text-2xl text-center font-medium"}>Build Profile Page</h5>
            <p className={"text-center text-lg"}>Showcase essential links on your profile and share them with the entire world</p>
          </div>


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