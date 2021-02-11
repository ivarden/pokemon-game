// import {
//   createContext,
//   useCallback,
//   useContext,
//   useState,
// } from "react";

// const PokemonContext = createContext(null);

// export const PokemonProvider = ({ children }) => {
//   const [selectedPokemons, setSelectedPokemons] = useState({});

//   const selectPokemons = useCallback((key, pokemon) => {
//     setSelectedPokemons((prevState) => {
//       if (prevState[key]) {
//         const { [key]: odd, ...newState } = prevState;
//         return newState;
//       }
//       return { ...prevState, [key]: pokemon };
//     });
//   }, []);

//   const handleSelectedPokemons = (key, pokemon) => {
//     setSelectedPokemons((prevState) => {
//       if (prevState[key]) {
//         const copyState = { ...prevState };
//         delete copyState[key];
//         return copyState;
//       }
//       return { ...prevState, [key]: pokemon };
//     });
//   };

//   return (
//     <PokemonContext.Provider value={{ selectedPokemons, setSelectedPokemons }}>
//       {children}
//     </PokemonContext.Provider>
//   );
// };

// export const usePokemons = () => {
//   const context = useContext(PokemonContext);

//   if (!context) {
//     console.error("usePokemons should be used with PokemonProvider");
//   }

//   return context;
// };
