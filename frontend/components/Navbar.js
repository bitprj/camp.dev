function Navbar() {
    return (
        <div className="flex items-center justify-between w-full h-24 bg-indigo-900">
            <div className="pl-4 text-white text-2xl font-bold">Camp.Dev</div>
            <div className="pr-4">
                <img src="hamburger.svg"></img>
            </div>
        </div>
    );
}

export default Navbar;