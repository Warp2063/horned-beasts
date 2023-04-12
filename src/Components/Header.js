function Header({switchTheme}) {
    return (
        <header>
            <h1>Horned Beasts and Where to Find Them</h1>
            <button onClick={switchTheme}>Theme</button>
        </header>
    );
}

export default Header;