import Link from "next/link";
import Buttons from "./buttons";
import {useRouter} from 'next/router'

function Header() {
    const router = useRouter()
    function goToWalletPage(){
        
            router.push("/Wallet");
  
    }
  return (

    <header className="fixed z-40 w-full bg-mywhite ">
      <nav className=" flex justify-between  p-6 items-center  container mx-auto md:px-32 ">
        <div className="flex  ">
          <div className=" border-r-2 border-gray-400 mr-2 md:border-none md:mr-0 ">
          <Link href='/Dacade'><span className="flex items-center"><img src="/logo1.svg" className="w-8 h-8 md:h-10 md:w-10 mr-2 md:mr-0" /><p className="hidden md:flex ml-2 text-zinc-700 font-bold text-lg">Dacade</p></span> </Link> 
          </div>
          <div className="border-gray-200 border-solid border-r-2 mx-3 hidden md:flex"></div>
          <div className="md:hidden">
    <Link href='/Near'><img
              src="/logo2m.svg
  "
            /></Link>
          </div>
          <div className="md:block hidden">
    <Link href='/Near'><img
              src="/logodesk.svg
  "
            /></Link>
          </div>
        </div>
        <div className="flex items-center">
        <Buttons text={'Start The Course'} styles='border-none hidden md:block text-lg'/>
        <Buttons text={'Create Wallet'} styles={"bg-zinc-700 text-white  ml-12"} onclick={goToWalletPage}/>
        </div>
      </nav>
    </header>
  );
}
export default Header;
