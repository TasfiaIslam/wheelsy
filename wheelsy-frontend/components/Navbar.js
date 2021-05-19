import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav className="flex justify-start px-2.5 py-1.5 sticky top-0 z-10 bg-white border-b border-gray-200 bg-opacity-30 firefox:bg-opacity-90 backdrop-filter backdrop-blur-lg">
            <div>
                <Image src="/car-logo.jpg" width={50} height={50} className="rounded-full h-50 w-50 filter transition duration-300 hover:drop-shadow-md"/>
            </div>
    
            <Link  href="/"><a className="mx-4 my-3 text-red-500">Home</a></Link>
            <Link  href="/about"><a className="mx-4 my-3 text-red-500">About</a></Link>
            <Link  href="/cars"><a className="mx-4 my-3 text-red-500">Car Listing</a></Link>
          
        </nav>

     );
}
 
export default Navbar;