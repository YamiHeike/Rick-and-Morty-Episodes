import "../styles/Navbar.css";

interface NavbarProps {
    text: String;
}

const Navbar: React.FC<NavbarProps> = ( {text} ) => {
    return (
        <>
        <div className="Header">
            <h2>{text}</h2>
            <aside className="clip">
                <svg xmlns="http://www.w3.org/2000/svg" width="59" height="95" viewBox="0 0 59 95" fill="none">
                <path d="M0 0H58.1025L0 95V0Z" fill="#DAED49"/>
                </svg>
            </aside>
        </div>
        </>
    )
}

export default Navbar;