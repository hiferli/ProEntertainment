var typed = new Typed("#word", {
    strings: [
        "Entertainment!",
        "Amusement!",
        "Cinema!",
        "Glamour!",
        "Blockbusters!",
        "Luxury!",
        "Excitement!",
        "Extravagance!",
        "Thrill!",
    ],
    typeSpeed: 100,
    loop: true,
});

var newsLetter=(function(){
console.log("Akanksha")
    var prevNewsLettData=localStorage.getItem('newsLetterData');
    var curNewsLettData=[]
    

    if(prevNewsLettData){
        curNewsLettData=JSON.parse(prevNewsLettData);
        console.log(curNewsLettData)
    }

    function storingNewsLetterData(){
        const fname=document.getElementById('floatingFnameInput').value
        const lname=document.getElementById('floatingLnameInput').value
        const email=document.getElementById('floatingEmailInput').value
        const password=document.getElementById('floatingPassword').value
        const obj={fnmae:fname,
                    lname:lname,
                    email:email,
                    password:password
        }

        curNewsLettData.push(obj);
        localStorage.setItem('newsLetterData',JSON.stringify(curNewsLettData));
        console.log(curNewsLettData)

    }
    
    return storingNewsLetterData;
})();

function submitingNewsLetterForm(){     
    console.log("akanksha was....")
    newsLetter();
    

}
