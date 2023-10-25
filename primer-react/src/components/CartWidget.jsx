import carrito from "../images/carrito.png";

export const CartWidget = () => {
    const imagenStyle = {
        width: "40px",
        height: "30px", 
    };

    return (
        <div>
            <a href="/"><img src={carrito} alt="Carrito" style={imagenStyle} /></a>
            <div>0</div>
        </div>
    );
};
