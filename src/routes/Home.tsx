import Header from "../components/Header";
import Container from "../components/Container";
import PokemonList from "../components/PokemonList";
import '../index.css'


const Home = () => {

    return (
            <Container>
                <Header />
                <PokemonList />
            </Container>
    )
};

export default Home;