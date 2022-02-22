import React from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import { useEffect } from 'react'
import useSelectMonedas from '../Hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import { useState } from 'react'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color  .3s ease;

    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = ({ setMonedas }) => {

    const [error, setError] = useState(false)
    
    const [criptos, setCriptos] = useState([])

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [criptomoneda, SelectCriptoMonedas] = useSelectMonedas('Elige tu Criptomoneda', criptos)
    
    
    useEffect(() => {

        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map(cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                return objeto
            })
            setCriptos(arrayCriptos)
        }


        consultarAPI()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([moneda, criptomoneda].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
            {error && <Error>Complete todos los campos</Error>}
            <form>
                <SelectMonedas>{moneda}</SelectMonedas>
                <SelectCriptoMonedas>{criptomoneda}</SelectCriptoMonedas>
                <InputSubmit
                    onClick={handleSubmit}
                    type="submit"
                    value="Cotizar"></InputSubmit>
            </form>
        </>
    )
}

export default Formulario