const options = {
    method: "GET",
    headers: {
            "Accept" : "application/json"
    }
}   
document.addEventListener("click", event => {
   /* document.getElementById("button").onclick = function () {*/
    if (event.target.id === "button"){
        location.href = "https://www.ncbi.nlm.nih.gov/home/develop/api/";
    }


    /* SAMPLE API FETCH *./
    /*if (event.target.id === "button"){
        fetch('URL', options)
            .then((response) => {
                //onClick();
                //console.log(responseAsJson.joke);
                //console.log(response.json())
                return response.json()
            })
            .then((responseAsJson) => {
                //console.log(responseAsJson)
                console.log(responseAsJson.joke)
                document.getElementById("delivery").innerText = responseAsJson.joke;
                document.getElementById("image").style.visibility = "visible";
                document.getElementById("image").src = "jpg";
                
            })
            .catch((error) => {
                console.error(error)
            })
            
    }*/
})
