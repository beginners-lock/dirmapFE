import { Outlet } from "react-router-dom";
import Navbar from "../global/Navbar";

export default function DefaultLayout(){
    return(
        <div className="relative w-full h-full overflow-x-hidden">
            <Navbar/>
            <Outlet/>
        </div>
    )
}