import '../styles/Header.css';

interface HeaderProps {

    routeName: string;
    keyword: string;
    keyNum: string;
};

const Header:React.FC<HeaderProps> = ({ routeName, keyword, keyNum }) => {
    return (
        <h1>
            {routeName} {keyNum && "of the"} <span>{keyNum}</span> {keyword} of the <span className="regular">4th</span> season of the series <span className="rick-and-morty">Rick and Morty</span>
        </h1>
    )
};

export default Header;