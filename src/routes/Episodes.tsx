import RickMortyImg from '../Components/RickMortyImg';
import EpisodeLoader from '../Components/EpisodeLoader';
import Header from '../Components/Header';
import '../styles/BasicLayout.css';
import '../styles/Episode.css';




const Episodes = () => {
  

    return (
        //Z tej sekcji trzeba zrobić komponent dla wszystkich Route'ów
        <>
            <div className="container-f ep-layout">
                <section className="BasicLayout">
                    <Header routeName="Episodes" keyNum="" keyword=""/>
                    <RickMortyImg />
                </section>
                <EpisodeLoader/>
            </div>
        </> 
    )
}

export default Episodes;