import Link from "next/link";

export default function NavBtn({ key, route }) {
    return (
        <>
         <Link className="px-2 py-1 font-poppins rounded-md text-[#ECDFCC] bg-[#3C3D37] text-xl "
               href={route.route}
               key={key}
         >
           {route.name}
         </Link>
        </>
    )
}