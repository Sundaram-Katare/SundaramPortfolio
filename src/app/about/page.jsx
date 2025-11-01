import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Resume from "@/components/Resume";


export default function About() {
    return (
        <>
            <Navbar />
            <div className="grid grid-cols-2 gap-40 bg-transparent font-poppins p-8 m-4 mb-8">
                <div className="flex justify-center items-center p-6 text-[#ECDFCC]  rounded-xl max-w-fit">
                    <p className="font-poppins text-lg max-w-fit bg-[#342929] p-6 rounded-lg ">
                        I’m a Full Stack Web Developer who enjoys turning ideas into working web apps. I build modern and 
                        responsive applications using the MERN stack with clean design and smooth performance. I’ve made projects 
                        like chat apps, authentication systems, and dashboards. I like learning new tools, improving my coding 
                        skills, and sharing what I learn with others. My aim is to build useful products that solve real problems 
                        and give a great experience to users.
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <img src="images/myFull.png" 
                         className="h-128 border-b-2 border-yellow-400 border-rounded"
                    alt="" />
                </div>
            </div>
            <Highlights />
            <Resume />
        </>
    )
}