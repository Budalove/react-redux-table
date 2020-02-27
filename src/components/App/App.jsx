import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import rootReducer from '../../store/reducers';
import PersonDetails from '../PersonDetails/PersonDetails';
import TablePage from '../Pages/TablePage';


const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store} >
            <Router>
                <Route path="/"
                    render={() => <h2>Welcome to StarDB</h2>}
                    exact 
                />
                <Route path="/table/" render={TablePage} />
                <Route path="/table/:id" render={({match}) => {
                    const {id} = match.params;
                    return <PersonDetails id={id} />
                }} />
            </Router>
        </Provider>
    );
}

export default App;
