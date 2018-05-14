import React from 'react';
import {connect} from 'react-redux';
const Workers =(props)=>{
    const workerList=props.workers.map((worker,i)=>{
        return <li key={i}>name :{worker.name} job:{worker.category}</li>
    });
    return(
        <div>
            <h1>Workers</h1>
            <ul>
                {workerList}
            </ul>
        </div>
    )
};
const mapStateToProps=(state)=>{
    return{workers:state.workers}
};

export default connect(mapStateToProps)(Workers);