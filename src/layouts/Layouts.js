import Main from "../pages/Main";
import Header from "./header/Header";
import './Layouts.scss'

function Footer() {
    return <h1>Footer</h1>
}
function Layouts() {
    return <div className="layout-wrapper">
        <Header/>
        <Main />
        <Footer />
    </div>
}

export default Layouts
