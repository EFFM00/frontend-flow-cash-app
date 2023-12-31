const Header = () => {
    return (
        <NavBar>
        <ImgIcon
            src={MenuIcon}
            isopen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
        />
        </NavBar>
    );
};

export default Header;
