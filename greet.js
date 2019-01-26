function greet(name){
    if(name == null){
        return 'Hello, my friend.';
    } 
    else if (Array.isArray(name)) {
       
          
        if(name.length > 2) {
            var getUpper
            var listwithOutUpper = name.filter(function(name) {
                if(name == name.toUpperCase()) {
                    getUpper = name
                }   
                return name != name.toUpperCase()
            }).join(" and ")

            if(getUpper != undefined) {
                return `Hello, ${listwithOutUpper}. AND HELLO ${getUpper}!`
            }
            else {
                return `Hello, ${name.slice(0,2).join(", ")+","} and ${name.slice(2,3)}.`
            }
        }
        else  {
            if(name.join(" ").includes("\"")) {
                var s = name.filter(name => name.includes(", "))+""
                var getText
                name.forEach(function cutInList(textName, index) {
                    if(name.filter(name => name.includes(", "))+"" == textName) {
                        getText = name.splice(name[index],1)
                    }
                })
                return `Hello, ${getText} and ${s.replace(/['"]+/g,"")}.`
            }
            else if(name.join(" ").includes(", ")) {
                var s = name.filter(name => name.includes(", "))+""
                var getText
                name.forEach(function cutInList(textName, index) {
                    if(name.filter(name => name.includes(", "))+"" == textName) {
                        getText = name.splice(name[index],1)
                    }
                })
                return `Hello, ${getText}, ${s.replace(",",", and")}.`
            }
            else {
               
                return `Hello, ${name.join(" and ")}.`
            }
        }
            
        
        
    } else if (name == name.toUpperCase()) {
        return `HELLO ${name.toUpperCase()}!`;
   

    } else {
        return `Hello, ${name}.`;
   }
   
   
}
module.exports = greet;
