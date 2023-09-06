import { PT_Sans } from 'next/font/google'
import { Barlow } from "next/font/google";
import Image from 'next/image';
import Logo from "app/img/logo.jpg";

const sans = PT_Sans({ subsets: ['latin'], weight: '400' })
const barlow = Barlow({subsets: ['latin'], weight: "100" })
 
export default (About) => {
    return (
        <div className="bg-c6 h-screen w-full">
            <h1 className={`${sans.className} text-center text-4xl text-c4`}>ACERCA DE</h1>
            <br />
            <div className='flex justify-center text-center'>
                <Image src={Logo} className="w-48 rounded-lg" alt='perfil'/>

                <div className={`${barlow.className} text-center text-c4 border-solid border-2 border-c5 rounded-lg p-4 w-80 bg-white items-center`}>
                    <div>Autor</div>
                    <div>Juan Ernesto Diaz Osuna</div>
                    <br />
                    <div>Informacion</div>
                    <div>Instituto Tecnologico de Ensenada</div>
                    <div>Devop & Developer</div>
                    <br />
                    <div>Contacto</div>
                    <div>correo: al19760726@ite.edu.mx</div>
                    <div>numero: 6462698585</div>
                </div>
            </div>
            <div className='mt-7 text-center text-c4'>
                <button className='mx-6'>Instagram</button>
                <button className='mx-6'>Twitch</button>
                <button className='mx-6'>Github</button>
            </div>
        </div>
    );
}