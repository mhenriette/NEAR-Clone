import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Buttons from '../components/buttons'
import Header from '../components/header'
import Logo from '../components/logos'
import Modules from '../components/modules'
import Title from '../components/titles'
import { useRouter } from 'next/router'



export default function Home() {
  const router = useRouter()
  function goToWalletPage(){
      
          router.push("/Wallet");

  }
  return (
  <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Hello world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className='relative'>
      <Header/>
      <div className='bg-mywhite min-h-screen overflow-hidden pt-40 font-graphik'>
        <div className='bg-mywhite px-6 lg:px-0 font-primary  lg:pt-32 pt-12 h-large lg:h-medium w-full '>
         
          <div className='background-gradient absolute -top-2 left-0 opacity-25 h-72 w-1/2 md:hidden'></div>
          <div className='background-gradient absolute -top-2 right-0 opacity-25 h-72 w-1/2 md:hidden'></div>

          <div className='mx-auto text-center w-11/12 md:w-large'>
            <h1 className=' font-medium text-darkgrey text-large mx-auto w-medium text-center font-graphik md:text-extralarge md:w-full'>Get <span className='text-transparent bg-clip-text bg-gradient-to-b from-myindigo via-mysky to-lightgreen'> NEAR </span> Certified!</h1>
            <p className='leading-medium lg:text-medium text-lg pb-24 pt-5 text-textgray'>We, in NEAR Balkans, know how important it is to have regional and local support. Now you can become NEAR certified in a regional language of preference and connect with our team to support your further growth within the NEAR ecosystem.</p>

         
          
          </div>
          <div className='flex justify-center'>
            <img src='/arrow.svg' alt='arrow'/>
          </div>
         

        </div>
        <div className='grid mt-16 justify-items-center font-primary text-center text-darkgrey font-medium text-basex lg:text-5xl leading-7 lg:leading-large tracking-small'>
         <span>Making your NEAR <br/>
learning easy.</span>
        </div>
        <div className='mx-auto container flex flex-col-reverse gap-y-4 lg:max-w-large lg:px-0 lg:justify-between lg:flex-row items-center px-6 mt-16 md:px-32 lg:mt-large'>
        <div className='text-center lg:text-left font-graphik '>
            <Title text='Open NEAR wallet'/>
            <p className='font-normal pt-extrasmall text-base lg:text-lg lg:leading-6 text-textgray'>Opening a NEAR wallet is the first step and <br className='hidden md:block'/> an essential part of joining the NEAR community  <br className='hidden md:block'/> as well as starting this course.</p>
            <Buttons styles={'border border-accent border-darkgrey border-solid text-base text-darkgrey mt-8 ml-0 '} text={'Create Wallet'} onclick={goToWalletPage}/>
          </div>
   
          <div className=' w-1/2 md:w-mediumx md:h-mediumx'><img src='/infinity.png'/> 
        
        
          </div>
         
          
        </div>
        <div className='lg:mt-44 lg:px-0 lg:max-w-large mx-auto mt-16 px-6 flex gap-x-44 lg:flex-row flex-col gap-y-4 items-center'>
          <div className='z-50 '>
            <div className='z-10 relative lg:w-mediumx lg:h-mediumx w-48 h-48'><img src='/pointer.svg'/></div>
            </div>
            <div className='text-center md:relative lg:text-start'>
              {/* <h1 className='text font-medium text-2xl leading-[44px] text-darkgrey'>Complete the course</h1> */}
             
              <Title text={'Complete the course'} />
               <div className='absolute top-0 hidden md:block -mt-32 -left-20'><img src='/pointicon.svg' alt='pointer'/></div>
           
                
              <p className='text-lg mt-6 leading-6 text-textgray'>In three simple modules, learn:</p>
              <div>
                <Modules url='/module1.png' text='Essential NEAR concepts'/>
                <Modules url='/module2.png' text='How to write smart contracts on NEAR'/>
                <Modules url='/module3.png' text='How to build dapps on the NEAR blockchain'/>
              </div>
            </div>
        </div>
        <div className='grid justify-items-center mt-16 px-5 lg:mt-medium'>
          <div className='text-center mx-auto relative'>
            {/* <h1 className='text-center font-medium leading-[44px] text-2xl text-darkgrey lg:text-4xl'>Claim NEAR certificate</h1> */}
            <Title text={'Claim NEAR certificate'}/>
            <div className='absolute top-0 hidden md:block -mt-32 left-[40%]'><img src='/pointericon2.svg' alt='pointer'/></div>
            <p className='font-normal text-lg leading-6 text-center text-textgray'>Upon course completion, receive the NEAR dev 101 <br className='hidden md:block'/> certificate as an NFT on your NEAR wallet.</p>

          </div>
          <div className='mt-8 h-44  lg:h-smallx lg:w-largex '>
            <img src='/cert.png'/>
          </div>

        </div>
        <div className=' lg:mx-auto container '>
          <div className='flex flex-col-reverse lg:flex-row justify-between mt-small items-center lg:px-small bg-gradient-to-l from-white  via-green-50 bg-opacity-10 to-white'>
            <div className='text-center lg:text-left relative '>
              <Title text='NEAR Development 101'/>
              <Buttons styles={'border border-accent border-darkgrey border-solid text-base text-darkgrey border-opacity-10 mt-4 ml-0'} text={'Start The Course'}/>

            </div>
            <div className='h-small w-small lg:h-basex lg:w-basex'><img src='infinity2.png' alt='infinity'/></div>

          </div>
          <footer className='w-full '>
            <div className='text-darkgrey mx-auto text-lg py-24 px-6 lg:w-extralarge lg:pt-medium'>
              <h6 className='text-center px-6'>visit <span className='font-bold cursor-pointer'><Link href='https://nearbalkans.org/'>nearbalkans.org</Link> </span> and make sure to follow us on our social and community channels!</h6>
              <div className='w-full lg:mx-auto  pt-middle  lg:flex lg:w-wide '>
                <div className='hidden md:block'><Link href='https://nearbalkans.org/'><img src='/logodesk.svg' alt='logo'/></Link></div>
                <div className="border-gray-200 border-solid border-r-2 mx-16 hidden lg:block "></div>
                <div className='flex justify-between items-center '>
                  <Logo url='https://twitter.com/NEARbalkan' imgurl='/twitter.svg'/>
                  <Logo url='https://discord.com/invite/NgSYSmJXg9' imgurl='/discord.svg'/>
                  <Logo url='https://t.me/nearbalkanshub' imgurl='/telegram.svg'/>
                  <Logo url='https://www.facebook.com/nearbalkans' imgurl='/fb.svg'/>
                  <Logo url='https://www.linkedin.com/company/nearbalkans/' imgurl='/in.svg'/>
                  <Logo url='https://www.instagram.com/nearbalkans/' imgurl='/insta.svg'/>
                  <Logo url='https://medium.com/@nearbalkans' imgurl='/med.svg'/>

                </div>
              </div>
              <div className='lg:flex justify-center pt-top md:pt-middle   gap-10'>
                <div className='text-lg cursor-pointer text-center'><Link href='/#'><p>NEAR Balkans 2022</p></Link> </div>
                <div className='text-lg cursor-pointer text-center'><Link href='href="mailto: info@nearbalkans.org"'><p>info@nearbalkans.org</p></Link> </div>
                <div className='text-lg cursor-pointer text-center'><Link  href="https://dacade.org/privacy-policy/"><p>Privacy Policy</p></Link> </div>
                <div className='text-lg cursor-pointer text-center'><Link  href="https://dacade.org/privacy-policy/"><p>Cookie Policy</p></Link> </div>
                <div className='text-lg cursor-pointer text-center'><Link  href="/#"><p>Terms &amp; Conditions</p></Link> </div>
              </div>
              <h6 className='pt-top text-center'>NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia, Montenegro, North Macedonia, Serbia, and Slovenia</h6>
            </div>

          </footer>

        </div>

      </div>
      </div>
      </>

      

  )
}
