import Link from "next/link";
import Buttons from "./buttons";
import {useRouter} from 'next/router'

function Header() {
    const router = useRouter()
    function goToWalletPage(){
        
            router.push("/Wallet");
  
    }
  return (
    <nav className=" flex justify-between  mx-auto container p-6 items-center bg-mywhite  z-40 fixed">
      <div className="flex  ">
        <div className=" border-r-2 border-gray-400 mr-2">
         <Link href='/Dacade'><img src="/logo1.svg" className="w-8 h-8 mr-2" /></Link> 
        </div>
        <div>
   <Link href='/Near'>       <img
            src="/logo2m.svg
"
          /></Link>
        </div>
      </div>
      <Buttons text={'Create Wallet'} styles={"bg-zinc-700 text-white  ml-12"} onclick={goToWalletPage}/>
    </nav>
  );
}
export default Header;
