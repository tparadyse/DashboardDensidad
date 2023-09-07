'use client'

import { useState } from "react"
import { FormPage } from '@/components/Form'
import { CompositionTable} from '@/components/TableResults'

export const Density = () => {

    const [density, setDensity] = useState('')

    const [porcentage, setPorcentage] = useState({
        bone_mass: '',
        fat_mass: '',
        residual_mass: '',
        muscle_mass: ''
    });
  
    const [mass, setMass] = useState({
        bone_mass: '',
        fat_mass: '',
        residual_mass: '',
        muscle_mass: ''
    });

    const calculateDensity = (inputValues) => {
        const { gender, bicipital, tricipital, subescapular, supraileaco, femur, bistiloideo, size, weight } = inputValues;
  
        const X1 = bicipital + tricipital + subescapular + supraileaco;
  
        const calculateBoneMass = () => {
            return Math.pow(Math.pow((size / 100), 2) * (femur / 100) * (bistiloideo / 100) * 400, 0.712) * 3.02;
        };
  
        const calculateResidualDensity = () => {
            const corporalDensity = gender === 'hombre'
                ? 1.1765 - (0.0744 * Math.log10(X1))
                : 1.1567 - (0.0717 * Math.log10(X1));
            const residual = gender === 'hombre' ? weight * 0.24 : weight * 0.21;
            return { corporalDensity, residual };
        };
  
        const massesDensities = () => {
            const { corporalDensity, residual } = calculateResidualDensity();
            setDensity(corporalDensity);
      
            //Porcentajes
            const fat = (495 / corporalDensity) - 450;
            const porcentageBoneMass = calculateBoneMass() * 100 / weight;
            const porcentageResidualMass = residual * 100 / weight;
            const porcentageMuscleMass = 100 - (fat + porcentageBoneMass + porcentageResidualMass);

            //Masas
            const kilosFatMass = weight * (fat / 100);
            const kilosMuscleMass = weight - (kilosFatMass + calculateBoneMass() + residual);
  
            setMass((prevValues) => ({
                ...prevValues,
                bone_mass: calculateBoneMass(),
                fat_mass: kilosFatMass,
                muscle_mass: kilosMuscleMass,
                residual_mass: residual,
            }));
  
            setPorcentage((prevValues) => ({
                ...prevValues,
                bone_mass: porcentageBoneMass,
                fat_mass: fat,
                muscle_mass: porcentageMuscleMass,
                residual_mass: porcentageResidualMass,
            }));
        };
  
        massesDensities();
    };
  

    return (
        <div className='grid grid-cols-2 gap-x-6 bg-c6 items-center justify-center h-screen'>
            <FormPage calculateDensity={calculateDensity}/>
            { density &&  <CompositionTable porcentages={porcentage} masses={mass} density={density}/> }
        </div>
    );
}

export default Density