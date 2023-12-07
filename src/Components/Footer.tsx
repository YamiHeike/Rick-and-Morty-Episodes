import "../styles/Footer.css"

interface FooterProps {
    text: string,
}

const Footer: React.FC<FooterProps> = ( {text} ) => {
    return (
        <footer className="Footer">
            <p>{text}</p>
        </footer>
    )
}

export default Footer;