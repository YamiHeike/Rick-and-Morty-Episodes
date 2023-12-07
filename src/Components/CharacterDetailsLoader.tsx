import { useQuery } from "@apollo/client";
import { LOAD_CHARACTER_DETAILS, CharacterDetails } from "../Queries/GetCharacterDetails";
import "../styles/CharacterDetails.css";


interface LoaderProps{
    characterId: string,
}


const CharacterDetailsLoader: React.FC<LoaderProps> = ({ characterId }) => {
    const { loading, error, data } = useQuery<{ character: CharacterDetails }>(LOAD_CHARACTER_DETAILS, {
        variables: { characterId }
    });
  

    const character = data?.character; 

    if(loading){
        return <p>Loading...</p>
    };

    if(error || !character){
        return (
        <>
            <p>No details available on the character</p>
        </>
        )
    }

    if(!character) {
        return (<>
        <h1>Character Not Found</h1>
        </>)
    }

console.log(character);
    return(
        <div className="container-f CharacterDetails BasicLayout">
            
            <section className="char-det-header">
                <h1>{character?.name}</h1>
                <img src={character?.image} alt="Character Image" />
            </section>
            <section className="char-det-data">
                <article>
                <h3>
                    {character?.status}
                </h3>
                    <p>Status</p>
                </article>
                <article>
                    <h3>{character?.species}</h3>
                    <p>Species</p>
                </article>
                <article>
                    <h3>{character?.type || "-"}</h3>
                    <p>Type</p>
                </article>
                <article>
                    <h3>{character?.gender}</h3>
                    <p>Gender</p>
                </article>
                <article>
                    <h3>{character?.origin?.name}</h3>
                    <p>Origin</p>
                </article>
                <article>
                    <h3>{character?.location?.name}</h3>
                    <p>Last known location</p>
                </article>
            </section>
        </div>
    )


}

export default CharacterDetailsLoader;