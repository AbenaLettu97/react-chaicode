
const  strs = [flight, fleight, flow];
function longestCommonPrefix(strs){
    if (strs.length === 0){
    return " ";
    }
    
    let prefix = strs[0];
    for (let i = 1; i <strs.length; i++){
     while(strs[i].startsWith(prefix)){
    prefix = prefix.substring(0, prefix.length - 1);
    if (prefix === " "){
    return " ";
    }}}}
    