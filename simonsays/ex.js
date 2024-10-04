
let url="https://catfact.ninja/fact"
let btn=document.querySelector("button");

async function getDadJokes(){

try{
    let res=await axios.get(url)
    let fact=res.data.fact;
    console.log(fact);
    let p=document.querySelector("p");
    p.innerText=fact;

}catch(e){
 console.log("error-",e);
 p.innerText="no facts found";
}
    

}
btn.addEventListener("click",getDadJokes);

    
