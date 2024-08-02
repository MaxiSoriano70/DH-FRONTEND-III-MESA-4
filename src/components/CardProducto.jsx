import CardProductosStyles from "../style/SectionProductos.module.css";

const CardProducto = ({pro}) => {
    return (
    <>
        <article class={CardProductosStyles.cardP}>
            <img src={pro.imagen} alt={pro.imagen}/>
            <h4>{pro.nombre}</h4>
            <p><b>Precio: </b>{pro.precio}</p>
            <a className={CardProductosStyles.btnCard} href="#">Ver más</a>
        </article>
    </>
    )
}

export default CardProducto
