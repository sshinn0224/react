import Menu from "../Menu";
import './Header.scss'
import {useState} from "react";

function Search() {
    let [searchKey, setSearchKey] = useState("")
    return <><input type="text" placeholder="검색어를 입력하세요"
                  onChange={(e)=> {
        e.preventDefault();
        setSearchKey(e.target.value)

    }}/>
    <button onClick={() => alert(searchKey)}>Search</button>
    </>
}

function Login(props) {
    console.log(props)
    return <div className={props.className}>Login</div>
}

function Header() {
    const menuList = [
        {id:1 , title:'search'},
        {id:2 , title:'my-page'}
    ]

    return <div className="header">
        <div className="header-flex">
            <h1>LOGO</h1>
            <div className="header-center"></div>
            <Login className="header-login" />
        </div>
        <Search />
        <Menu menuList={menuList}/>
    </div>
}

export default Header