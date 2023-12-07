import refundBack from "../assets/Refund_back.png";
import { Link } from "react-router-dom";
import "../styles/Button.css"

interface ButtonProps {
    text: string;
    link?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, link, onClick }) => {
    return (
        <Link to={link || ""}>
            
            <button onClick={onClick || undefined} className="Button" data-testid="btn">
                {<img src={refundBack} alt="go back" />}<p>{text}</p>
            </button>
            
        </Link>
    )
}

export default Button;