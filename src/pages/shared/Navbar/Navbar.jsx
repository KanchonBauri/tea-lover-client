import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const menuData = [
        { path: "/favourites", label: "Favourites", icon: "fa-star text-orange-400" },
        { path: "/policies", label: "Policies & Circulars", icon: "fa-file-shield text-blue-500" },
        { path: "/salary", label: "Salary & Benefits", icon: "fa-money-check-dollar text-green-500" },
        { path: "/insurance", label: "Life & Health Insurance", icon: "fa-heart-pulse text-red-500" },
        { path: "/leave", label: "Leave & Attendance", icon: "fa-calendar-day text-purple-500" },
        { path: "/tax", label: "Income Tax", icon: "fa-percent text-yellow-600" },
    ];


    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-800">
            {/* CSS directly in JS using a style tag - better to put in index.css */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: #ed1c24;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }
                    /* Horizontal Scroll Rokhar Jonno Fix */
                .dropdown-content {
                    overflow: visible !important;

                }
                    .dropdown-content {
        position: fixed !important;
        bottom: 64px !important; 
        /* Width barano hoyeche ekhane */
        width: 96vw !important; 
        max-width: 500px !important; 
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
    }
            `}</style>

            {/* --- TOP NAVBAR --- */}
            <nav className="fixed top-0 w-full bg-white h-16 flex items-center justify-between px-4 md:px-10 border-b border-gray-100 z-50 shadow-sm">
                <div>
                    <img src="https://www.brac.net/images/brac-logo.png" alt="BRAC" className="h-10" />
                </div>
                <div className="flex items-center gap-6">

                    <div className="hidden lg:flex items-center bg-gray-100 px-4 py-2 rounded-full w-80 border border-transparent focus-within:border-red-200 transition-all">
                        <i className="fa-solid fa-magnifying-glass text-gray-400 mr-2"></i>
                        <input type="text" placeholder="Search MyBRAC..." className="bg-transparent outline-none text-sm w-full" />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-bold leading-none">Kanchan Bauri</p>
                        <p className="text-[11px] text-gray-500 mt-1">189683</p>
                    </div>
                    <div className="avatar online placeholder cursor-pointer">
                        <div className="bg-[#ed1c24] text-white rounded-full w-10 ring ring-red-50 ring-offset-2">
                            <span className="text-lg">K</span>
                        </div>
                    </div>

                    <div className="gap-6 items-center ml-4">
                        <div className="flex flex-col items-center mb-2 ml-2 border-l pl-4 border-gray-200 cursor-pointer">
                            <div
                                onClick={() => setDarkMode(!darkMode)}
                                className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                            >
                                <i className={`fa-solid ${darkMode ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-500'}`}></i>
                                <span className="text-[10px] font-bold uppercase">{darkMode ? 'Light' : 'Dark'}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center ml-2 border-l pl-4 border-gray-200 cursor-pointer">
                            <div className="bg-red-50 text-[#ed1c24] text-[10px] px-2 py-0.5 rounded font-bold">বাংলা</div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex pt-16 h-screen overflow-hidden">
                {/* --- SIDEBAR (Desktop) --- */}
                <aside className={`hidden lg:flex flex-col bg-white border-r border-gray-100 transition-all duration-500 ease-in-out relative ${isSidebarOpen ? 'w-72' : 'w-24'}`}>
                    <button
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        className="absolute -right-3 top-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-gray-500 dark:hover:bg-gray-700 transition-all z-10"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                            stroke="currentColor"
                            className={`w-3 h-3 transition-transform duration-300 ${isSidebarOpen ? "" : "rotate-180"}`}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>


                    <ul className="mt-6 px-4 space-y-2 overflow-y-auto custom-scrollbar">
                        {menuData.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `group flex items-center p-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-red-50 border-r-4 border-red-500 text-red-600' : 'hover:bg-gray-50 text-gray-600'}`
                                    }
                                >
                                    <i className={`fa-solid ${item.icon} text-lg ${isSidebarOpen ? 'mr-4' : 'mx-auto'}`}></i>
                                    {isSidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* --- MAIN CONTENT --- */}
                <main className="flex-1 overflow-y-auto p-4 md:p-10 mb-20 lg:mb-0 bg-[#F8F9FA]">
                    <div className="max-w-6xl mx-auto">
                        <div className="w-full h-48 md:h-80 bg-gray-200 rounded-3xl mb-8 overflow-hidden shadow-sm relative">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200" className="w-full h-full object-cover" alt="Banner" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <h2 className="text-white text-2xl md:text-3xl font-bold">Data Privacy Matters</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <InfoCard icon="fa-envelope" color="bg-red-50 text-red-500" title="Connect Gmail" subtitle="Check unread mail" />
                            <InfoCard icon="fa-location-dot" color="bg-blue-50 text-blue-500" title="Location" subtitle="Fetch your current location" />
                            <InfoCard icon="fa-link" color="bg-purple-50 text-purple-500" title="Quick Links" subtitle="ERP, Aarong, BRAC Int'l" />
                        </div>
                    </div>
                </main>
            </div>

            {/* --- BOTTOM NAVIGATION (Mobile) --- */}
            <div className="btm-nav lg:hidden border-t border-gray-100 bg-white h-16 z-[100] shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">

                {/* --- Mobile Menu Dropdown (Scrollable) --- */}
                <div className="btm-nav flex justify-evenly lg:hidden border-t border-gray-100 bg-white  z-[100] shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">

                    {/* 1. Notification */}
                    <div className="dropdown dropdown-top dropdown-center">
                        <button tabIndex={0} className=" items-center gap-1 text-gray-500">
                            <i className="fa-solid fa-bell text-xl"></i>
                            <span className="text-[10px] font-medium">Notification</span>
                        </button>
                        <div tabIndex={0} className="dropdown-content menu p-5 shadow-2xl bg-white rounded-3xl mb-4 animate-in slide-in-from-bottom-5">
                            <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>
                            <p className="text-center text-gray-400 text-sm py-6">No new notifications</p>
                        </div>
                    </div>

                    {/* 2. Menu */}
                    <div className="dropdown dropdown-top dropdown-center">
                        <button tabIndex={0} className=" items-center  text-gray-500">
                            <i className="fa-solid fa-grid-2 text-xl"></i>
                            <span className="text-[10px] font-medium">Menu</span>
                        </button>

                        {/* Dropdown Content Box */}
                        <div tabIndex={0} className="dropdown-content p-5 shadow-2xl bg-white rounded-t-[2.5rem] mb-0 animate-in slide-in-from-bottom-5">

                            {/* Top Handle (Drag bar indicator) */}
                            <div className="w-16 h-1.5 bg-gray-200 rounded-full mx-auto mb-6"></div>

                            {/* Content Container - width 100% and centered items */}
                            <div className="w-full  flex flex-col items-center">
                                <h3 className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-5">Quick Services</h3>

                                {/* Grid layout with more width */}
                                <div className="grid grid-cols-1 gap-4 w-full  max-h-[40vh] overflow-y-auto custom-scrollbar pb-8">
                                    {menuData.map((item, index) => (
                                        <NavLink
                                            key={index}
                                            to={item.path}
                                            className="flex flex-col items-center gap-3 p-3 rounded-2xl hover:bg-red-50 transition-all border border-gray-50 active:scale-95"
                                        >

                                            <span className="text-[10px] text-center font-bold text-gray-700 leading-tight">
                                                {item.label}
                                            </span>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Home */}
                    <button className="  ">
                        <i className="fa-solid fa-house text-xl"></i>
                        <span className="text-[10px] font-bold">Home</span>
                    </button>

                    {/* 4. User */}
                    <div className="dropdown dropdown-top dropdown-end">
                        <button tabIndex={0} className=" items-center  text-gray-500">
                            <i className="fa-solid fa-user text-xl"></i>
                            <span className="text-[10px] font-medium">User</span>
                        </button>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow-2xl bg-white rounded-2xl w-52 mb-4 border border-gray-50">
                            <li><a><i className="fa-solid fa-user-circle"></i> Profile</a></li>
                            <li><a className="text-red-500"><i className="fa-solid fa-sign-out"></i> Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InfoCard = ({ icon, color, title, subtitle }) => (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-row items-center gap-4 cursor-pointer">
        <div className={`${color} w-12 h-12 flex items-center justify-center rounded-xl text-xl shrink-0`}>
            <i className={`fa-solid ${icon}`}></i>
        </div>
        <div>
            <h4 className="font-bold text-gray-800 leading-none mb-1">{title}</h4>
            <p className="text-[11px] text-gray-400 font-medium">{subtitle}</p>
        </div>
    </div>
);

export default Navbar;