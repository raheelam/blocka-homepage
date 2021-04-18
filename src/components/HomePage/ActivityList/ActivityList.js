import React from 'react';
import ListItem from './ListItem';

const ActivityList = () =>{
    return(
            <ul  className="list-group mb-5 pb-5">        
                <ListItem code="A100" description="HIV Blood Draw Test" >
                    <i className="bi bi-calendar4-range "></i>
                </ListItem>
                <ListItem code="A200" description="HIV Blood Draw Test" >
                    <i className="bi bi-calendar4-range "></i>
                </ListItem>
                <ListItem code="A300" description="HIV Blood Draw Test" >
                    <i className="bi bi-calendar4-range "></i>
                </ListItem>
                <ListItem code="A400" description="HIV Blood Draw Test" >
                    <i className="bi bi-calendar4-range "></i>
                </ListItem>
                <ListItem code="A500" description="HIV Blood Draw Test" >
                    <i className="bi bi-calendar4-range "></i>
                </ListItem>
                <ListItem code="A600" description="HIV Blood Draw Test" >
                    <i className="bi bi-calendar4-range "></i>
                </ListItem>
                <ListItem code="A700" description="HIV Blood Draw Test" >
                    <i className="bi bi-calendar4-range "></i>
                </ListItem>
                <ListItem code="A800" description="HIV Blood Draw Test" >
                    <i className="bi bi-calendar4-range "></i>
                </ListItem>
            </ul>
        
    );
}

export default ActivityList;