
export const deleteId = (appId) =>{
    const ids = JSON.parse(localStorage.getItem("Id"));
    const updatedId = ids.filter(id => appId != id)
    localStorage.setItem("Id",JSON.stringify(updatedId))

}

export const getId = () =>{
   const storedIds = localStorage.getItem("Id")
    if(storedIds){
        const parseId = JSON.parse(storedIds)
        //console.log(parseId)
        return parseId;
    }
    else{
        return []
    }
}
 const setDB =(id) =>{
    const storedIds = getId()
    storedIds.push(Number(id));
    localStorage.setItem("Id", JSON.stringify(storedIds))
}
export default setDB

