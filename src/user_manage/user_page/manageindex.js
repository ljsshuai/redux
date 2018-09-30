import React from 'react';
import UserHome from './userhome';
class ManageIndex extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
             <UserHome/>
            </div>
        );
    }
}
export default ManageIndex;