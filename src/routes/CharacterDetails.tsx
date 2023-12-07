import CharacterDetailsLoader from "../Components/CharacterDetailsLoader";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import '../styles/BasicLayout.css'


const CharacterDetails = () => {
   
    const { characterId } = useParams<{ characterId?: string }>();
    const id = characterId || ""
    const navigate = useNavigate();
    const GoBack = () => {
        navigate(-1);
    }
    return (
      <>
        <>
            <Button text="Characters" onClick={GoBack}></Button>
            <CharacterDetailsLoader characterId={id} />
        </>
      </>
    );
  };

export default CharacterDetails;