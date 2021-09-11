import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav className="w-full sticky top-0 z-10 bg-white border-b border-gray-200 bg-opacity-30 firefox:bg-opacity-90 backdrop-filter backdrop-blur-lg">
            <div className="flex flex-row items-center justify-between w-5/6 md:w-11/12 2xl:w-5/6 mx-auto py-2 px-0">
                <div>
                    <Image src="/wheelsy-logo.jpg" width={50} height={50} className="rounded-full h-50 w-50 filter transition duration-300 hover:drop-shadow-md"/>
                </div>
                <div >
                    <Link  href="/"><a className="nav-items">Home</a></Link>
                    <Link  href="/about"><a className="nav-items">About</a></Link>
                    <Link  href="/cars"><a className="nav-items">Car Listing</a></Link>
                </div>
                
            </div>
          
        </nav>

     );
}
 
export default Navbar;