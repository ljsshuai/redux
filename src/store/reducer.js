var storage=window.localStorage;
const defaultState={
 navtitle:localStorage.getItem("title"),
 twotitle:localStorage.getItem('twotitle')
}
//reducer 可以接收state，但是绝不能修改state
export  default (state=defaultState,action)=>{
    if(action.type==='change_title'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.navtitle=action.title;
        storage.setItem("title",action.title);
        console.log(localStorage.getItem(storage.title));
        return newState;
    }
/*    if(action.type==='two_title'){
        const  newState=JSON.parse(JSON.stringify(state));
        newState.navtitle=action.twotitle;
        storage.setItem("twotitle",action.twotitle);
        return newState;
    }*/
        console.log(localStorage.getItem(storage.title));
     /*  console.log(state,action);*/
    return state;
}