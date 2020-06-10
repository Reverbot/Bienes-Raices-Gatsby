import React from 'react';
import Iconos from './iconos'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import {Link} from 'gatsby'
import urlSlug from 'url-slug'

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75ab00;
    width: 100%;
    color: white;
    display: block;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
`

const Card = styled.div`
    border: 1px solid #e1e1e1;

    img{
        max-width: 100%;
    }
`
const Contenido = styled.div`
    padding: 2rem;

    h3{
        font-family: "Lato", sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .precio{
        font-size: 2rem;
        color: #75ab00;
    }
`

const PropiedadView = ({propiedad}) => {

    const {nombre, imagen, wc, estacionamiento, habitaciones, precio} = propiedad

    return ( 
        <Card>  
            <Image fluid={imagen.childImageSharp.fluid} />
            <Contenido>
                <h3>{nombre}</h3>
                <p className="precio">$ {precio}</p>
                <Iconos 
                    wc={wc}
                    habitaciones={habitaciones}
                    estacionamiento = {estacionamiento}
                />
                <Boton to={urlSlug(nombre)}>Visitar Propiedad</Boton>
            </Contenido>
        </Card>
     );
}
 
export default PropiedadView;