import React, {Component} from 'react';
import MovieResults from './MovieResults';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="jumbotron">
                        <h1 class="display-3">Movie App</h1>
                        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                            attention to featured content or information.</p>
                    </div>
                </div>
                <div className="row">
                    <MovieResults/>

                </div>
            </div>
        );
    }
}

export default App;
