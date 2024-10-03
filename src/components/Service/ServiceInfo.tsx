import { IoPrintSharp } from "react-icons/io5";
import { LuPackage } from 'react-icons/lu';
import { MdAutoGraph } from 'react-icons/md';
import { RiCupFill } from 'react-icons/ri';
import { SiGraphite, SiOctoprint } from 'react-icons/si';

// Define the Service type
export interface ServiceType {
  title: string;
  details: string;
  icon: JSX.Element; // This type allows any valid JSX element
}

// Define the services array
export const services: ServiceType[] = [
  {
    title: "Logo Design",
    details: "Craft unique logos and cohesive brand identities that leave a lasting impression on your audience.",
    icon: <SiGraphite className='text-2xl'/>
  },
  {
    title: "Graphic Design",
    details: "Create visually appealing marketing materials, including brochures, flyers, and business cards.",
    icon: <MdAutoGraph className='text-3xl' />
  },
  {
    title: "Packaging",
    details: "Elevate your product presentation with our custom packaging designed to enhance brand visibility and customer experience. ",
    icon: <LuPackage className='text-2xl' />
  },
  {
    title: "Digital Printing",
    details: "Provide high-quality printed products for various media, ensuring that your projects are completed to the highest standards",
    icon: <IoPrintSharp className="text-3xl"/>
  },
  {
    title: "Screen Printing",
    details: "Create vibrant and durable designs on a variety of materials with our screen printing services.",
    icon: <SiOctoprint className='text-2xl' />
  },
  {
    title: "Pad Printing",
    details: "Deliver precise and vibrant designs on a variety of surfaces, including plastics, metals, and glass.",
    icon: <RiCupFill className='text-2xl' />
  },
];
