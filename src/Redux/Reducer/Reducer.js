import Data from '../../Components/json/project_list.json'

const globalState = {
    data: Data
}

const rootReducer = (state = globalState, action) => {
    // console.log(state);
    if(action.type === "FILTER_GROUP"){
        return state;
    }
    if(action.type === "FILTER_INDIVIDUAL"){
        return state;
    }
    
    return state;
}

export default rootReducer;