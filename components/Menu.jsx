import Link from "next/link";
import { PT_Sans } from 'next/font/google'

const sans = PT_Sans({ subsets: ['latin'], weight: '400' })

const menuRoutes = [
    {
        route: "/",
        name: "INICIO"
    },
    {
        route: "/about",
        name: "ACERCA DE"
    },
    {
        route: "/composicion_corporal",
        name: "DENSIDAD"
    }
];

function Menu () {
    return(
        <div className={`${sans.className} w-[20%] h-screen p-4 bg-c1`}>
            <div className="text-center text-c4">MENU</div>
            <ol className="pt-6 text-c4">
            {
                menuRoutes.map((menu,key) => (
                    <li key={key} className="pt-4"><Link href={menu.route}>{menu.name}</Link></li>
                ))
            }
            </ol>
        </div>
    );
}

export default Menu;