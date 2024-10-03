import NavBar from "./NavBar"

const Header:React.FC = () => {
  return (
    <div className="w-full dark:bg-gray-900  dark:border-b dark:border-black sticky top-0 z-50 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <NavBar/>
    </div>
  )
}

export default Header