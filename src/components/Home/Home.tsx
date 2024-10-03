import Link from "next/link"
import { homeInfo } from "./HomeInfo"

const Home = () => {
  return (
    <section id="home"
      className=" header relative pt-16 items-center flex h-screen"
    >
      <HomeInfo />
      <HomeImage />
    </section>
  )
}

const HomeInfo = () => {
  return (
    <div className="mx-auto items-center flex flex-wrap z-10">
      <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
        <div className="pt-32 sm:pt-0">
          <h2 className="font-semibold text-2xl md:text-4xl text-blueGray-600 uppercase ">
            {homeInfo.brand}
          </h2>
          <HomeInfoParagraph/>
          <HomeInfoBtns />
        </div>
      </div>
    </div>
  )
}

const HomeInfoParagraph = () => {
  return (
    <p className="mt-4 text-lg leading-relaxed  text-gray-500 font-normal">
      {homeInfo.quote}
    </p>
  )
}

const HomeInfoBtns = () => {
  return (
    <div className="mt-12">
      <Link
        className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        href='#about'
      >
        About Us
      </Link>
      <Link
        href='#service'
        className="ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-600 uppercase text-sm shadow hover:shadow-lg"
      >
        See our Works
      </Link>
    </div>
  )

}

const HomeImage = () => {
  return (
    <img
      className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-36 sm:mt-0 w-10/12"
      src="/Landing.png"
      alt="..."
    />
  )
}

export default Home