import {useStaticQuery, graphql} from 'gatsby'

const UseInicio = () => {
    
    const resultado = useStaticQuery(graphql`
    query {
        allStrapiPaginas(filter: {nombre: {eq: "inicio"}}) {
          nodes {
            imagen {
                sharp: childImageSharp {
                    fluid( maxWidth: 1200 duotone: {highlight: "#222222", shadow: "#192550", opacity: 30}){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
                }
            contenido
            id
            nombre
          }
        }
      }
    `)
    
    return resultado.allStrapiPaginas.nodes.map(inicio =>({
        nombre: inicio.nombre,
        contenido: inicio.contenido,
        imagen : inicio.imagen.sharp.fluid
    }))
}
 
export default UseInicio;