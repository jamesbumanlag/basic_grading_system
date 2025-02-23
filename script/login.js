function getUsername(){
    const username = document.getElementById('username').value;
    if (!username || username.trim()===''){
            
            return null
    } 

    localStorage.setItem('username',username.trim());

    return username.trim();
}

document.addEventListener('DOMContentLoaded',function(){
    const loginButton = document.getElementById('loginButton');
    

    if (loginButton){
        
        loginButton.addEventListener('click',function(event){
            event.preventDefault();

            let username = getUsername();

            if (username !== null){
                window.location.href = "final.html"
            } else{
                alert('Enter Username')
            }

            
        })
    }

})


