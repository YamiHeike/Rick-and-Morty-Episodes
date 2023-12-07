import { LOAD_EPISODES, EpisodesData } from '../Queries/GetEpisodes';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import '../styles/BasicLayout.css';
import '../styles/Episode.css';

const EpisodeLoader = () => {

  
    
    const { loading, error, data } = useQuery<EpisodesData>(LOAD_EPISODES);

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>An errror occurred</p>
    }

    const episodes = data?.episodes.results || [];

    return (
        
        <div className="BasicLayout Episode">
        {episodes.map((episode) => (
            <section className="ep container">
                <section className="ep-code">
                <h3>{episode.episode}</h3>
                </section>
                <section className="ep-data two-color">
                    <Link to={`/characters/${episode.id}`}><h3>{episode.name}</h3></Link>
                    <p>{episode.air_date}</p>
                </section>
            </section>
        ))}
        </div>
       
  );
}


export default EpisodeLoader;