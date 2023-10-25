import { CartWidget } from "./CartWidget"
export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg">
            <div className="container-fluid">
                <a className="navbar-brand" to="/">Mercado Liebre</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Deportes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Cocina</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}