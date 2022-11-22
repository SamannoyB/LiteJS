function renderHTML() {
    var template = document.getElementsByTagName('lite');
   // console.log(template);
    Array.from(template).forEach((temp) => {
       // console.log(temp);
        var result = temp.innerHTML.split(/[\{\}]/); 
        if (result[2].includes(" ")) return console.error("Variable names cannot contain spaces");
        else {
           if (!(`${result[2]}` in returnObject) === false) {
        //    console.log(returnObject[`${result[2]}`]);
            temp.textContent = returnObject[`${result[2]}`];
           }
           else return console.error("doesn't exist!");
        }
    })
} renderHTML();