import React from 'react';
import './MainBuilder.css';
import SortBuilder from '../SortBuilder/SortBuilder';
import PathFinderBuilder from '../PathFinderBuilder/PathFinderBuilder';
import {Link, BrowserRouter , Route, Switch} from 'react-router-dom';

const MainBuilder=()=>{
    return (
        <BrowserRouter>
        <div className="main-container">
            <div className = "heading">  
                <Link to="/" style={{textDecoration:'none'}}>
                    <p className="main-heading">Sorting Visualizer</p>
                </Link> 
                <Link to = "/PathFinder" style={{textDecoration:'none'}}>
                    <p className="main-heading">Path Finding Visualizer</p>
                </Link>
            </div>
            <Switch>
                <Route path="/" exact component={SortBuilder}/>
                <Route path ="/PathFinder" component={PathFinderBuilder} />
            </Switch>
            
        </div>
        </BrowserRouter>
        
    )
}
export default MainBuilder;