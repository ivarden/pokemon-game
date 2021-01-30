import Header from "./Header";
import Layout from "./Layout";
import Footer from "./Footer";
import PokemonCard from "./PokemonCard";

import "./App.css";

// import bg1 from "../assets/bg1.jpg";
// import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

import POKEMONS from "../data.json";

function App() {
  return (
    <>
      <Header
        title="Pokemon Game"
        descr="This is simple triple triad card game"
      />
      <Layout urlBg={bg3} title="Rules">
        <p>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid. Each player has five
          cards in a hand and the aim is to capture the opponent's cards by
          turning them into the player's own color of red or blue. To win, a
          majority of the total ten cards played (including the one card that is
          not placed on the board) must be of the player's card color. To do
          this, the player must capture cards by placing a card adjacent to an
          opponent's card whereupon the 'ranks' of the sides where the two cards
          touch will be compared. If the rank of the opponent's card is higher
          than the player's card, the player's card will be captured and turned
          into the opponent's color. If the player's rank is higher, the
          opponent's card will be captured and changed into the player's color
          instead.
        </p>
      </Layout>
      <Layout  id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
        <div className="flex">
          {POKEMONS.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              type={pokemon.type}
              values={pokemon.values}
              img={pokemon.img}
              name={pokemon.name}
            />
          ))}
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
