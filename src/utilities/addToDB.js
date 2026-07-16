const getId = () =>{
    const storedIds = localStorage.getItem("Id")
    if(storedIds){
        const parseId = JSON.parse(storedIds)
        return parseId;
    }
    else{
        return []
    }
}
export const setDB =(id) =>{
    const storedIds = getId()
    storedIds.push(id);
    localStorage.setItem("Id", JSON.stringify(storedIds))
}

