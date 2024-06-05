import { menulists } from "@/assets/data/data";
import LogoImg from "../../../assets/common/logo.png"
import React, { useEffect, useRef, useState } from 'react';
import { CustomNavLink } from "./CustomComponents";
import { IoIosSearch } from "react-icons/io"; 

import { ModelCart } from "@/modal/Panier";


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(isOpen);
    };

    const closeMenuOutSide = (event) => {
if (menuRef.current && !menuRef.current.contains(event.target)){
    setIsOpen(false);
}
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };
   
    useEffect(() => {
        document.addEventListener("mousedown", closeMenuOutSide)
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("mousedown", closeMenuOutSide)
            window.removeEventListener("scroll", handleScroll);
    
        }
    })

    const isHomepage = location.pathname === "/articles"
    return (
    <>

 <header className={isHomepage ?`header px-12 py-3 bg-white-100 relative z-20 ${isScrolled ? "scrolled" : ""}` : `header px-12  py-3 relative z-20  ${isScrolled ? "scrolled" : ""}` }> 
 {isHomepage  && (

   <div className={`${
    isScrolled ? "lg:bg-none" : "lg:bg:black"
} lg:h-[88px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10`}>
     </div>
)}
 
    <nav className="p-4 flex justify-between items-center relative">
    <div className="flex items-center gap-14">
<div>
    <img src={LogoImg} alt="LogoImg" className="h-7" />
</div>
<div className="hidden lg:flex items-center justify-between gap-8">
{menulists.map((list) => (
       <li key={list.id} className=" uppercase list-none">
       <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
       
       </li>


    ))}
</div>
</div>
<div className="flex items-center gap-8 icons ">
    {/* <div className="uppercase hidden lg:block text-inherit relative z-20" >
     <CustomLink>Login</CustomLink> 
     <span className="">/</span>  
     <CustomLink>Register</CustomLink>   
    </div> */}
<div className="icon flex items-center justify-center gap-6">
<IoIosSearch size={23} />
<ModelCart/>

</div>
</div>
    </nav>

        </header> 
    </>
    )
};

