import Image from 'next/image';
import Link from 'next/link'
const date: number = new Date().getFullYear();

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 mt-10 border-t-2 border-gray-300 dark:border-black">
            <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-8 ">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                Speed
                            </span>
                            <Image src="/logo.png" width={50}
                                height={50}
                                alt="Logo" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-10 sm:gap-6 ">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Speed
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#service" className="hover:underline">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contact" className="hover:underline">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                Social
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://www.facebook.com/speeddesignhouse"
                                        className="hover:underline "
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/speed.design/"
                                        className="hover:underline"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-gray-200 sm:mx-auto dark:border-gray-700" />
                <div className=" sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © {date}{" "}
                        <a href="#" className="hover:underline">
                            Speed
                        </a>
                        . All Rights Reserved.
                    </span>

                </div>
            </div>
        </footer>

    )
}

export default Footer