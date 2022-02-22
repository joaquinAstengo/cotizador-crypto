import styled from "@emotion/styled"

const Resultado = ({ resultado }) => {

  const Contenedor = styled.div`  
  color: white;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
  `

  const Texto = styled.p`
    font-size: 18px;
  span{
    font-weight: 700;
  }
  `

  const Precio = styled.p`
  font-size: 24px;
  span{
    font-weight: 700;
  }
  `

  const Imagen = styled.img`
    display: block;
    width: 120px;
  `

  const Span = styled.span`
    margin-left: 5px;
  `

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

  return (
    <Contenedor>
      <Imagen
      src={`https://cryptocompare.com/${IMAGEURL}`}
      alt="Imagen de la moneda"></Imagen>


      <div>
      <Precio>El precio es de <Span>{PRICE}</Span></Precio>
      <Texto>El precio más alto 24hs <Span>{HIGHDAY}</Span></Texto>
      <Texto>El precio más bajo 24hs <Span>{LOWDAY}</Span></Texto>
      <Texto>Última Variación 24hs <Span>{`${CHANGEPCT24HOUR}%`}</Span></Texto>
      <Texto>Última actualización <Span>{LASTUPDATE}</Span></Texto>
      </div>

    </Contenedor>
  )
}

export default Resultado