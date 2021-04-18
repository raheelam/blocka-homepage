import React from 'react';
import ListItem from './ListItem';

const ActivityList = () =>{
    return(
            <ul  className="list-group">        
                <ListItem />
                <ListItem />
                <ListItem />
            </ul>
        
    );
}

export default ActivityList;