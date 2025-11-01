import Navbar from "@/components/Navbar";
import ProjectList from "@/components/ProjectList";
import { FaAngleDown } from "react-icons/fa";

export default function Project() {
    return (
        <>
            <Navbar />
            <div className="bg-transparent flex justify-center flex-col min-h-screen w-full p-4 ">
                {/* <Navbar /> */}
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="font-extrabold  text-8xl font-poppins text-[#ECDFCC]">My Work</h1>
                    <h1 className="font-extrabold text-center text-[#ECDFCC] mt-6"> <FaAngleDown size={48}/> </h1>
                </div>
            </div>

            <ProjectList />
        </>
    )
}