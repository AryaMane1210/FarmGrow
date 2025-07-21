const Footer = () => {
    return (
        <div>
            <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-green-700 border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6 text-black">
                <span className="text-sm sm:text-center">© 2025 <a href="/" className="hover:underline">FarmGrow</a>. All Rights Reserved.</span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
