
var formDetails=(function(){
    
    var prevFormData=localStorage.getItem('reviewData')
    var currFormData=[]
    if(prevFormData){
        currFormData=JSON.parse(prevFormData);
        console.log(currFormData)
        var holder=document.getElementById('reviews');
        for(obj of currFormData){
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review ';
            reviewElement.innerHTML = `
                <h3>${obj.name}</h3>
                <p>${obj.desc}</p>
            `;
            holder.appendChild(reviewElement);
        }   
    }
    else{
        console.log(currFormData)
    }

    
    
    function addingData(){
        const sname=document.getElementById('name').value;
        const semail=document.getElementById('email').value;
        const sdesc=document.getElementById('description').value;
        const obj={name:sname,
                    email:semail,
                    desc:sdesc
                }
                currFormData.push(obj);
        localStorage.setItem('reviewData',JSON.stringify(currFormData));
        displayReview();
    }

    function displayReview(){
        var holder=document.getElementById('reviews');
       
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review col ';
            reviewElement.innerHTML = `
                <h3>${currFormData[currFormData.length-1].name}</h3>
                <p>${currFormData[currFormData.length-1].desc}</p>
            `;
            holder.appendChild(reviewElement);
        
    }
    return addingData;
})();

function revSubmit(event){
    event.preventDefault();
    formDetails();
    document.getElementById("myForm").reset();
    
}