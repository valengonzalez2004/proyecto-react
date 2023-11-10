import cartWhite from "../../images/carrito.png"

const ButtonAddCart = () => {
    const imageStyle = {
        width: "40px",
        height: "30px",
    };

    return (
        <button id="AddCart">
            <img src={cartWhite} alt="add" style={imageStyle} />
        </button>
    );
};


export default ButtonAddCart;