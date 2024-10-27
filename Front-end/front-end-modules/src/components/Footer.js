import Link from './Link'; 
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function Footer() {
    return (
        <footer className='pt-20 px-4 bg-gray-100 text-gray-600 w-full'> {/* Ensure full width */}
            <div className="container flex flex-col justify-between mx-auto space-y-8 lg:flex-row lg:space-y-0 mb-10">
                <div className='lg:w-1/3'>
                    <Link to="" className='flex justify-center'>
                        <div className='flex w-12 h-12'>
                            <img src="images/logo.png" className='h-8 w-8 mr-2' alt="Logo" />
                        </div>
                        <span className='font-semibold text-gray-800 text-2xl'>Blogging Platform</span>
                    </Link>
                </div>
                <FooterMenu />
            </div>
            <RightsFooter />
        </footer>
    );
}

function FooterMenu() {
    return (
        <div className='grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3 w-3/4 mx-auto'>
            <div className='space-y-3'>
                <h3 className='text-gray-900 font-semibold uppercase tracking-wide'>About</h3>
                <ul className='space-y-1'>
                    <li><Link className="text-gray-600">Team</Link></li>
                    <li><Link className="text-gray-600">Careers</Link></li>
                    <li><Link className="text-gray-600">Contact</Link></li>
                </ul>
            </div>
            <div className='space-y-3'>
                <h3 className='text-gray-900 font-semibold uppercase tracking-wide'>Resources</h3>
                <ul className='space-y-1'>
                    <li><Link className="text-gray-600">Blog</Link></li>
                    <li><Link className="text-gray-600">Docs</Link></li>
                    <li><Link className="text-gray-600">Support</Link></li>
                </ul>
            </div>
            <div className='space-y-3'>
                <h3 className='text-gray-900 font-semibold uppercase tracking-wide'>Social</h3>
                <div className='flex justify-start space-x-3'>
                    <Link to="/"><BsFacebook className="text-gray-600" /></Link>
                    <Link to="/"><FaTwitter className="text-gray-600" /></Link>
                    <Link to="/"><BsInstagram className="text-gray-600" /></Link>
                </div>
            </div>
        </div>
    );
}

function RightsFooter() {
    return (
        <div className='py-6 text-center text-gray-500 text-sm'>
            © 2024 Blogging Platform. All rights reserved.
        </div>
    );
}

export default Footer;
