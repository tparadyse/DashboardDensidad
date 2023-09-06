import React, { useState } from 'react'
import { Barlow } from "next/font/google";

const barlow = Barlow({subsets: ['latin'], weight: "100" })

export const Formulario = ({ calcularDensidad }) => {
    
    const [inputValues, setInputValues] = useState({
        genero: '',
        peso: '',
        talla: '',
        edad: '',
        bicipital: '',
        tricipital: '',
        subescapular: '',
        supraileaco: '',
        femur: '',
        bistiloideo: ''
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
      
        let parsedValue = value;
      
        if (type === 'number' && value.trim() !== '') {
          parsedValue = parseFloat(value);
        }
      
        setInputValues((prevValues) => ({
          ...prevValues,
          [name]: parsedValue,
        }));
    };    

    const handleSubmit = (e) => {
        e.preventDefault();
        if([inputValues.genero, inputValues.bicep, inputValues.tricep, inputValues.subscapular, inputValues.supraileaco].includes('')){
            console.log('Existen campos faltantes');
            setError(true);
            return
        }
        setError(false);
        
        calcularDensidad(inputValues);
    };

    return (
        <div className='p-[40px] w-full bg-c6'>
            <div className={`${barlow.className} flex items-center w-full text-c4`}>
                <form onSubmit={handleSubmit}>
                    {/* Datos personales */}
                    <h2 className='font-medium text-gray-500 mb-2'>Datos Personales</h2>
                    <div className='grid grid-cols-2 gap-x-6 gap-y-2 mb-4 font-bold'>
                    
                        <div className='flex flex-col'>
                            <h2>Genero</h2>
                            <div className='flex space-x-4 justify-center items-center pt-2 pl-2'>

                                <div className='flex flex-row space-x-4'>
                                    <label className='font-normal'>Masculino</label>
                                    <input className='form-input bg-c2' type="radio"  name='genero' value='hombre' required onChange={handleInputChange} />
                                </div>

                                <div className='flex flex-row space-x-4'>
                                    <label className='font-normal'>Femenino</label>
                                    <input className='form-input bg-c2' type="radio"  name='genero' value='mujer' required onChange={handleInputChange}  />
                                </div>

                            </div>

                        </div>
                               
                        <div className='flex flex-col relative'>
                            <label>Peso</label>
                            <input className='form-input bg-c2' type="number" name='peso' value={inputValues.peso} placeholder='Ingrese su peso' required onChange={handleInputChange}/>
                            <span className="input-extent">kg</span>
                        </div>
                               
                        <div className='flex flex-col relative'>
                            <label>Talla</label>
                            <input className='form-input bg-c2' type="number" name='talla' value={inputValues.talla} placeholder='Ingrese su talla' required onChange={handleInputChange}/>
                            <span className="input-extent">m</span>
                        </div>
                                
                        <div className='flex flex-col'>
                            <label>Edad</label>
                            <input className='form-input bg-c2' type="number" name='edad' value={inputValues.edad} placeholder='Ingrese su edad' required onChange={handleInputChange}/>
                        </div>

                    </div>

                    <h2 className='font-medium text-gray-500 mb-2'>Datos Corporales</h2>
                    <div className='grid grid-cols-2 gap-x-6 gap-y-2 font-bold'>

                        <div className='flex flex-col relative'>
                            <label>Femur</label>
                            <input className='form-input bg-c2' type="number" name='femur' value={inputValues.femur} required onChange={handleInputChange}/>
                            <span className="input-extent">mm</span>
                        </div>

                        <div className='flex flex-col relative'>
                            <label>Biestiloideo</label>
                            <input className='form-input bg-c2' type="number" name='bistiloideo' value={inputValues.bistiloideo} required onChange={handleInputChange}/>
                            <span className="input-extent">mm</span>
                        </div>

                        <div className='flex flex-col relative'>
                            <label>Bicipital</label>
                            <input className='form-input bg-c2' type="number" name='bicipital' value={inputValues.bicipital} required onChange={handleInputChange}/>
                            <span className="input-extent">mm</span>
                        </div>

                        <div className='flex flex-col relative'>
                            <label>Tricipital</label>
                            <input className='form-input bg-c2' type="number" name='tricipital' value={inputValues.tricipital} required onChange={handleInputChange}/>
                            <span className="input-extent">mm</span>
                        </div>
                        
                        <div className='flex flex-col relative'>
                            <label>Subescapular</label>
                            <input className='form-input bg-c2' type="number" name='subescapular' value={inputValues.subescapular} required onChange={handleInputChange}/>
                            <span className="input-extent">mm</span>
                        </div>
                     
                        <div className='flex flex-col relative'>
                            <label>Supraileaco</label>
                            <input className='form-input bg-c2' type="number" name='supraileaco' value={inputValues.supraileaco} required onChange={handleInputChange}/>
                            <span className="input-extent">mm</span>
                        </div>
                    
                    </div>

                    <button className='mt-4 p-2 bg-c2 hover:bg-c6 border border-c2 text-black rounded-md w-full' type='submit'>Calcular</button>
                </form>
            </div>
        </div>
    );
}