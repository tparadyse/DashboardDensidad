import React, { useState, useEffect } from 'react';
import ChartComponent from './Charts';

export const CompositionTable = ({ porcentages, masses, density }) => {

    const [chartData, setChartData] = useState({});

    useEffect(() => {
      // Actualiza el estado local cuando los datos cambien
      setChartData({
        labels: ["Masa Grasa", "Masa Osea", "Masa Residual", "Masa Muscular"],
        data: [
          porcentages.fat_mass.toFixed(2),
          porcentages.bone_mass.toFixed(2),
          porcentages.residual_mass.toFixed(2),
          porcentages.muscle_mass.toFixed(2),
        ],
      });
    }, [porcentages]);


  return (
    <div className='w-3/4 bg-white h-fit p-4 rounded-md ml-12 text-c4'>
     <h1 className='text-xl font-bold mb-2 text-center'>Composición Corporal</h1>
        
        <table className='table-auto w-full text-left items-center border-collapse border-y mb-2 '>
          <thead>
            <tr>
              <th className='p-2'>
                Componente
              </th>
              <th>
                Porcentaje
              </th>
              <th>
                Kilogramos
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-y'>
              <td className='p-2'>
                Masa grasa
              </td>
              <td>
                { porcentages.fat_mass.toFixed(2) } %
              </td>
              <td>
                
                { masses.fat_mass.toFixed(2) } kg
              </td>
            </tr>

            <tr className='border-y'>
              <td className='p-2'>
                Masa osea
              </td>
              <td>
                
                { porcentages.bone_mass.toFixed(2) } %
              </td>
              <td>
                { masses.bone_mass.toFixed(2) } kg
              </td>
            </tr>

            <tr className='border-y'>
              <td className='p-2'>
                Masa residual
              </td>

              <td>
                
                { porcentages.residual_mass.toFixed(2) } %
              </td>

              <td>
                { masses.residual_mass } kg
              </td>
            </tr>

            <tr>
              <td className='p-2'>
                Masa muscular
              </td>
              <td>
                { porcentages.muscle_mass.toFixed(2) } %
              </td>
              <td>
                { masses.muscle_mass.toFixed(2) } kg
              </td>
            </tr>

          </tbody>
        </table>
        <span className='p-2 font-bold'> Densidad corporal: { density.toFixed(3) } </span>
        <div>
            <ChartComponent chartData={chartData} />
        </div>
      </div>
  );
}