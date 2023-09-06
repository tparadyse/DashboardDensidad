'use client'

import { useState } from "react"
import { Formulario } from '@/components/Form'
import { TablaComposicion } from '@/components/TableResults'

export const Densidad = () => {

    const [densidad, setDensidad] = useState('')

    const [porcentajes, setPorcentajes] = useState({
      masa_osea: '',
      masa_grasa: '',
      masa_residual: '',
      masa_muscular: ''
    });
  
    const [masas, setMasas] = useState({
        masa_osea: '',
        masa_grasa: '',
        masa_residual: '',
        masa_muscular: ''
    });

    const calcularDensidad = (inputValues) => {
        const { genero, bicipital, tricipital, subescapular, supraileaco, femur, bistiloideo, talla, peso } = inputValues;
  
        const X1 = bicipital + tricipital + subescapular + supraileaco;
  
        const calcularMasaOsea = () => {
            return Math.pow(Math.pow((talla / 100), 2) * (femur / 100) * (bistiloideo / 100) * 400, 0.712) * 3.02;
        };
  
        const calcularDensidadYResidual = () => {
            const densidadCorporal = genero === 'hombre'
                ? 1.1765 - (0.0744 * Math.log10(X1))
                : 1.1567 - (0.0717 * Math.log10(X1));
            const residual = genero === 'hombre' ? peso * 0.24 : peso * 0.21;
            return { densidadCorporal, residual };
        };
  
        const densidadYMasas = () => {
            const { densidadCorporal, residual } = calcularDensidadYResidual();
            setDensidad(densidadCorporal);
      
            //Porcentajes
            const grasa = (495 / densidadCorporal) - 450;
            const porcentajeMasaOsea = calcularMasaOsea() * 100 / peso;
            const porcentajeMasaResidual = residual * 100 / peso;
            const porcentajeMasaMuscular = 100 - (grasa + porcentajeMasaOsea + porcentajeMasaResidual);

            //Masas
            const masaGrasaKilos = peso * (grasa / 100);
            const masaMuscularKilos = peso - (masaGrasaKilos + calcularMasaOsea() + residual);
  
            setMasas((prevValues) => ({
                ...prevValues,
                masa_osea: calcularMasaOsea(),
                masa_grasa: masaGrasaKilos,
                masa_muscular: masaMuscularKilos,
                masa_residual: residual,
            }));
  
            setPorcentajes((prevValues) => ({
                ...prevValues,
                masa_osea: porcentajeMasaOsea,
                masa_grasa: grasa,
                masa_muscular: porcentajeMasaMuscular,
                masa_residual: porcentajeMasaResidual,
            }));
        };
  
        densidadYMasas();
    };
  

    return (
        <div className='grid grid-cols-2 gap-x-6 bg-c6 items-center justify-center h-screen'>
            <Formulario calcularDensidad={calcularDensidad}/>
            { densidad &&  <TablaComposicion porcentajes={porcentajes} masas={masas} densidad={densidad}/> }
        </div>
    );
}

export default Densidad