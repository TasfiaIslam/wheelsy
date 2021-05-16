import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav className="flex justify-start px-2.5 py-1.5 bg-gray-600 shadow-md border-md">
            <div>
                <Image src="/car-logo.jpg" width={50} height={50} className="rounded-full h-50 w-50"/>
            </div>
    
            <Link  href="/"><a className="mx-4 my-3 text-white">Home</a></Link>
            <Link  href="/about"><a className="mx-4 my-3 text-white">About</a></Link>
            <Link  href="/cars"><a className="mx-4 my-3 text-white">Car Listing</a></Link>
          
        </nav>

     );
}
 
export default Navbar;