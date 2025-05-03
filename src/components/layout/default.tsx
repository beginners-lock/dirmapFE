import { Outlet } from "react-router-dom";
import Navbar from "../global/Navbar";
import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import { LANDING_PAGE } from "../../utils/routes";

export default function DefaultLayout(){
    const { pathname } = useLocation();

    const navVisibleInPaths = [LANDING_PAGE];

    return(
        <div className="relative w-full h-full overflow-x-hidden">
            {
                navVisibleInPaths.includes(pathname) &&
                <Navbar/>
            }
            <Outlet/>
        </div>
    )
}