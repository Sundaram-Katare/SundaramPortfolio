import NavBtn from "./NavBtn";

const routes = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "About", route: "about" },
    { id: 3, name: "Projects", route: "project" },
    { id: 4, name: "Contact", route: "contact" },
]

export default function Navbar() {
    return (
        <>
            <div className="flex font-poppins justify-between items-center p-6 bg-transparent rounded-md">
                <div className="flex gap-4">
                   {routes.map((route) => (
                    <NavBtn key={route.id} route={route} />
                   ))}
                </div>
            </div>
        </>
    )
}