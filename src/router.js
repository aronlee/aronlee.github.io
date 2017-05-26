import { Component } from 'react'
import { Provider } from 'react-redux'
import {
    HashRouter as Router,
    IndexRoute,
    Route
} from 'react-router-dom'
import store, { dispatch } from 'store'

import IndexPage from './views/index/index.js'

export default
class RootRouter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Provider store={store}>
                { /* ConnectedRouter will use the store from Provider automatically */ }
                <Router>
                    <div>
                        <Route path="/" component={IndexPage} />
                    </div>
                </Router>
            </Provider>
        )
    }
}
