function Menu(props) {

    const menus = props.menuList.map((e) => {
        return <li key={e.id}> {e.title} </li>
    })

    return <nav>
        <ul>
            {menus}
        </ul>
    </nav>
}

export default Menu