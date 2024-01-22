import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
     return (
        <nav>
            <h3>Hammer Tickets</h3>
            <div style = {{ display: 'flex'}}>
                <button>Tickets</button>
                <button>Proximas Fechas</button>
                <button>Nosotros</button>
                <button>F.A.Q.</button>
                <CartWidget />
            </div>
           
        </nav>

     )
     
}

export default NavBar;
