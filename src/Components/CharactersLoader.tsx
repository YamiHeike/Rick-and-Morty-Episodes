import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { EpisodesData, Character, LOAD_EPISODES } from "../Queries/GetEpisodes";
import { Link } from "react-router-dom";
import RickMortyImg from "./RickMortyImg";
import Header from "./Header";
import '../styles/BasicLayout.css'
import '../styles/Characters.css';



const CharactersLoader = () => {
    const { loading, error, data } = useQuery<EpisodesData>(LOAD_EPISODES);
    const { episodeId } = useParams<{ episodeId: string }>();

    //Important in terms of syntax! How to assign the inside of your query to a variable
    
    if(loading){
      return <p>Loading...</p>
    }

    if(error){
      return <p>An error occurred</p>
    }

    const episode = data?.episodes.results.find((ep) => ep.id === episodeId);
    
   

    if (!episode) {
        return <p>Episode not found</p>;
      }

    const characters: Character[] = episode.characters;
    return (
        <div className="BasicLayout container-f" data-testid="epBtn">
          <div className="char-header">
            <Header keyNum={`${episode.episode[4] !== "0" ? episode.episode[4]+episode.episode[5] : episode.episode[5]}${episode.episode[5] === "1" ? "st" : episode.episode[5] === "2" ? "nd" : episode.episode[5] === "3" ? "rd" : "th"}`} routeName="Characters" keyword="episode"/>
            <RickMortyImg />
          </div>
          <div className="Character">
            {characters.map((character) => (
              <section key={character.id}>
                <section className="two-color char">
                    <Link to={`/character-details/${character.id}`}><h3 className="characters">{character.name}</h3></Link>
                    <p>{character.species}</p>
                </section>
              </section>
            ))}
          </div>
        </div>
      );
}

export default CharactersLoader;