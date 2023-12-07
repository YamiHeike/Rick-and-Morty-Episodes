import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const App = () => {
    return (
        <>
            <header>
                <Navbar text="Lorem ipsum"/>  
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer text="Lorem ipsum ©2021"/>
            </footer>
        </>
    )
}

export default App;