import Link from 'next/link';

const Footer = () => {
    return ( 
        <footer className="w-full bg-gray-900">
            <div className="w-5/6 md:w-11/12 2xl:w-5/6 mx-auto grid grid-cols-2 md:grid-cols-6 gap-1 py-4 border-b border-gray-200">
                <div className="footer-list">
                    <p className="footer-list-label">Address</p>
                    <p className="text-gray-300 text-sm 2xl:text-base">123 6th St.</p>
                    <p className="text-gray-300 text-sm 2xl:text-base">Melbourne, FL 32904</p>
                </div>
                <div className="footer-list"> 
                    <p className="footer-list-label">Features</p>
                    <ul>
                        <li><Link  href="/">Cool stuff</Link></li>
                        <li><Link  href="/">Random feature</Link></li>
                        <li><Link  href="/">Team feature</Link></li>
                        <li><Link  href="/">Stuff for developers</Link></li>
                        <li><Link  href="/">Another one</Link></li>
                    </ul>
                </div>

                <div className="footer-list">
                    <p className="footer-list-label">Sell/Trade</p>
                    <ul>
                        <li><Link  href="/">Get an Online Offer</Link></li>
                        <li><Link  href="/">Random feature</Link></li>
                    </ul>
                </div>

                <div className="footer-list">
                    <p className="footer-list-label">Finance</p>
                    <ul>
                        <li><Link  href="/">How it Works</Link></li>
                        <li><Link  href="/">Wheelsy Auto Finance</Link></li>
                    </ul>
                </div>

                <div className="footer-list">
                    <p className="footer-list-label">More</p>
                    <ul>
                        <li><Link  href="/">Service & Repairs</Link></li>
                        <li><Link  href="/">FAQ & Support</Link></li>
                    </ul>
                </div>
                
                <div className="footer-list">

                    <button class="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="footer-bottom">
                <span className="footer-bottom-list">Privacy Policy</span>
                <span className="footer-bottom-list">Privacy Policy</span>
                <span className="footer-bottom-list">Privacy Policy</span>
                <span className="footer-bottom-list">Privacy Policy</span>
                <span className="footer-bottom-list">Privacy Policy</span>
                <span className="footer-bottom-list">Privacy Policy</span>
                <span className="footer-bottom-list">Privacy Policy</span>
                <span className="footer-bottom-list">Privacy Policy</span>
            </div>
           
        </footer>
     );
}
 
export default Footer;