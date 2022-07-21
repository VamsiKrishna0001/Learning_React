import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("updated");
      this.forceUpdate();
    });
    //make api call
    //dispatch action
    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
    console.log("state-1", store.getState());
  }
  render() {
    const { movies } = this.props.store.getState();
    console.log("Render");
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tabs">Movies</div>
            <div className="tabs">Favorites</div>
          </div>

          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movie-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
