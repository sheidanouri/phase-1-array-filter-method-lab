// Code your solution here
function findMatching(names,str){
    return names.filter(name => name.toLowerCase() === str.toLowerCase())
    }
    
    function fuzzyMatch(names,str){
    return names.filter(name=>name.search(str)== 0 )
    
    }
    
    function matchName(drivers,str){
        const matchName = drivers.filter(obj => obj.name.toLowerCase() === str.toLowerCase())
    return matchName
    }