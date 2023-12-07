import CharactersLoader from "../Components/CharactersLoader";
import '../styles/BasicLayout.css';
import Button from "../Components/Button";



const Characters = () => {
    return (

       <>
            <Button link="/" text="Episodes"/>
            <CharactersLoader />
       </>
    )
}

export default Characters;