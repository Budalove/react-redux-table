import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import rootReducer from '../../store/reducers';
import PersonDetails from '../PersonDetails/PersonDetails';
import TablePage from '../Pages/TablePage';
import HomePage from '../Pages/HomePage';
import thunkMiddleware from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

function App() {
    return (
        <Provider store={store} >
            <Router>
                <Route path="/"
                    render={() => <HomePage />} 
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
