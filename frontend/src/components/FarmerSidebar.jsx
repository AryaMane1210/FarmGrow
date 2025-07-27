import logo from "../assets/logo.png";
import { ChevronFirst } from 'lucide-react';
import { ChevronLast } from 'lucide-react';
import profile from "../assets/profile.png";
import { MoreVertical } from 'lucide-react';
import React, { createContext, useState, useContext } from "react";



const SidebarContext = createContext();

export default function FarmerSidebar({children}) {
    const [expanded, setExpanded] = useState(true);
    return(
        <>
            <aside className="h-screen">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0" }`} />
                        <button onClick={() => setExpanded((curr) => !curr)} 
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                            {expanded? <ChevronFirst/> : <ChevronLast/>}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{expanded}}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>
                    

                    <div className="border-t flex p-3">
                        <img src={profile} className="w-10 h-10 rounded-md"/>
                        <div className={`flex justify-between items-center overflow-hidden transition-all 
                            ${expanded ? "w-52 ml-3" : "w-0"}`}>
                            <div className="leading-4">
                                <h4 className="font-semibold">constG</h4>
                                <span className="text-xs text-gray-600">constg@gmail.com</span>
                            </div>
                            <MoreVertical/>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}


export function SidebarItem({icon,text, active, alert}) {
    const {expanded} = useContext(SidebarContext)
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-[#BBFFD0] text-[#0C8B3A]" : "hover:bg-[#F0FFF5] text-[#66748F]"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-25 ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-[#0C8B3A] ${expanded ? "" : "top-2"}`}>
    </div>
            )}
            

            {!expanded && (
                <div className={`absolute left-full rounded-md px-3 py-1 ml-6
            bg-[#BDF0CF] text-[#0C8B3A] text-sm invisible opacity-0 translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                {text}
    </div>
            )}

        </li>
    );
}