import Image from "next/image"
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import ThemeSwitch from "../Button/ThemeSwitch";

const NavBar = () => {
    return (
        <div className="mx-auto w-full max-w-screen-xl navbar bg-base-100 dark:bg-gray-900  z-40">
            <div className="flex-1">
                <span className="cursor-pointer sm:ml-2 xl:ml-0">
                    <Image src="/logo.png" width={50}
                        height={50}
                        alt="Logo" />
                </span>
            </div>
            <div className="flex-none font-semibold text-gray-500  dark:text-gray-400 ">
                <ul className="menu menu-horizontal px-1 text-md">
                    <li className="hidden md:block"><Link href='/'>Home</Link></li>
                    <li className="hidden md:block"><Link href='#about'>About</Link></li>
                    <li className="hidden md:block"><Link href='#service'>Services</Link></li>
                    <li className="hidden md:block"><Link href='#contact'>Contact</Link></li>
                    <ThemeSwitch/>
                    <div className="dropdown dropdown-bottom dropdown-end  md:hidden ml-2">
                        <div tabIndex={0} role="button" className="btn m-1"><IoMenu className="text-2xl" /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li ><Link href='/'>Home</Link></li>
                            <li ><Link href='#about'>About</Link></li>
                            <li ><Link href='#service'>Services</Link></li>
                            <li ><Link href='#contact'>Contact</Link></li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default NavBar