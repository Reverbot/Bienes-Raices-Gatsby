import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import usePropiedades from '../hooks/usePropiedades'
import PropiedadView from './PropiedadView'
import useFiltro from '../hooks/useFiltro'


const H2 = styled.h2`
    margin-top: 5rem;
`
const Propiedades = styled.ul`
    max-width: 1200px;
    width: 95%;
    margin: 4rem auto 0 auto;

    @media (min-width:480px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: 2rem;
        column-gap: 2rem;
    }

    @media (min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }
`

const ListadoPropiedades = () => {

    const resultado = usePropiedades()
    const [propiedades] = useState(resultado)
    const [filtradas, guardarFiltradas] = useState([])
    const {filtroUI, categoria} = useFiltro()

    useEffect(() => {
        if(categoria){
            const filtro = propiedades.filter(propiedad => propiedad.categorias.categoria === categoria)
            guardarFiltradas(filtro)
        }else{
            guardarFiltradas(propiedades)
        }
    },[categoria, propiedades])


    return ( 
        <>
        <H2>Nuestras Propiedades</H2>
        {filtroUI()}
        <Propiedades>
            {filtradas.map(propiedad => (
                <PropiedadView 
                    key={propiedad.id}
                    propiedad={propiedad}
                />
            ))}
        </Propiedades>
        </>
     );
}
 
export default ListadoPropiedades;