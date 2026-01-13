import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import TeaLogo from "../TeaLogo/TeaLogo";

const Navbar = ({ isSidebarOpen, setSidebarOpen }) => {
    // const [isSidebarOpen, setSidebarOpen] = useState(true);

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
        <div className=" bg-[#F8F9FA] font-sans text-gray-800">
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
                   <div className="w-2/4"> 
                    <TeaLogo /> 
                </div>

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

            <div className="flex pt-16  overflow-hidden">
                {/* --- SIDEBAR (Desktop) --- */}
                <aside className={`fixed left-0 top-16 h-[calc(100vh-64px)] hidden lg:flex flex-col bg-white border-r border-gray-100 transition-all duration-500 ease-in-out z-40 ${isSidebarOpen ? 'w-72' : 'w-24'}`}>
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
            </div>

           
            {/* --- BOTTOM NAVIGATION (Mobile) --- */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 h-16 z-[100] shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
                <div className="flex justify-evenly items-center h-full w-full">

                    {/* 1. Notification */}
                    <div className="dropdown dropdown-top dropdown-center flex-1">
                        <button tabIndex={0} className="flex flex-col items-center w-full text-gray-500 dark:text-gray-400">
                            <i className="fa-solid fa-bell text-xl"></i>
                            <span className="text-[10px] font-medium">Notification</span>
                        </button>
                        <div tabIndex={0} className="dropdown-content menu p-5 shadow-2xl bg-white dark:bg-gray-800 rounded-3xl mb-4 animate-in slide-in-from-bottom-5">
                            <div className="w-10 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
                            <p className="text-center text-gray-400 text-sm py-6">No new notifications</p>
                        </div>
                    </div>

                    {/* 2. Menu */}
                    <div className="dropdown dropdown-top dropdown-center flex-1">
                        <button tabIndex={0} className="flex flex-col items-center w-full text-gray-500 dark:text-gray-400">
                            <i className="fa-solid fa-grid-2 text-xl"></i>
                            <span className="text-[10px] font-medium">Menu</span>
                        </button>
                        <div tabIndex={0} className="dropdown-content p-5 shadow-2xl bg-white dark:bg-gray-800 rounded-t-[2.5rem] mb-0 animate-in slide-in-from-bottom-5">
                            <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-6"></div>
                            <div className="w-full flex flex-col items-center">
                                <h3 className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-5">Quick Services</h3>
                                <div className="grid grid-cols-2 gap-4 w-full max-h-[40vh] overflow-y-auto custom-scrollbar pb-8">
                                    {menuData.map((item, index) => (
                                        <NavLink key={index} to={item.path} className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all border border-gray-50 dark:border-gray-700">
                                            <span className="text-[10px] text-center font-bold text-gray-700 dark:text-gray-200">{item.label}</span>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Home */}
                    <button className="flex flex-col items-center flex-1 text-red-500">
                        <i className="fa-solid fa-house text-xl"></i>
                        <span className="text-[10px] font-bold">Home</span>
                    </button>

                    {/* 4. User */}
                    <div className="dropdown dropdown-top dropdown-end flex-1">
                        <button tabIndex={0} className="flex flex-col items-center w-full text-gray-500 dark:text-gray-400">
                            <i className="fa-solid fa-user text-xl"></i>
                            <span className="text-[10px] font-medium">User</span>
                        </button>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow-2xl bg-white dark:bg-gray-800 rounded-2xl w-52 mb-4 border border-gray-50 dark:border-gray-700">
                            <li><a className="dark:text-gray-200"><i className="fa-solid fa-user-circle"></i> Profile</a></li>
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