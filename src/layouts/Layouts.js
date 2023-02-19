import Main from "../pages/Main";
import Menu from "./Menu";


function Header() {
    return <div>
        <h1>LOGO</h1>
        <Menu/>
    </div>
}
function Footer() {
    return <div>Footer</div>
}
function Layouts() {
    return <div>
        <Header/>
        <Main />
        <Footer />
    </div>
}

export default Layouts
