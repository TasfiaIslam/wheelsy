const Footer = () => {
    return ( 
        <footer className="bg-gray-900 grid md:grid-cols-3 gap-4">
            <div className="mt-4 md:ml-2 text-white flex flex-col items-center border-b-2 border-red-500 md:border-none">
                <p className="text-gray-100 text-xl font-bold">Features</p>
                <p className="text-gray-300">Cool stuff</p>
                <p className="text-gray-300">Random feature</p>
                <p className="text-gray-300">Team feature</p>
                <p className="text-gray-300">Stuff for developers</p>
                <p className="text-gray-300">Another one</p>
            </div>
            <div className="mt-4 flex flex-col items-center border-b-2 border-red-500 md:border-none">
                <p className="text-gray-100 text-xl font-bold">Address</p>
                <p className="text-gray-300">123 6th St.</p>
                <p className="text-gray-300">Melbourne, FL 32904</p>
            </div>
            <div className="mt-4 flex flex-col items-center">
                <button class="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                    Contact Us
                </button>
            </div>
        </footer>
     );
}
 
export default Footer;