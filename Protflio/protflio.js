document.getElementById("snakeBtn").onclick =  () => {
    location.href = "https://github.com/ahmedkhaled11119999/SnakeGameTeam5";
};
document.getElementById("btnContact").onclick = () => {
    location.href = "#contactMeDiv" ; 
};
document.getElementById("inImage").onclick = () =>{
    location.href = "https://www.linkedin.com/feed/" ;
};
/*document.getElementById("fbImage").onclick = () =>{
    location.href = "https://www.facebook.com/?_rdc=2&_rdr" ;
};*/
document.getElementById("whatImage").onclick = () =>{
    location.href = "https://wa.me/01094122010";
};
const download = document.getElementById("btnResume");
download.addEventListener('click' , request);
function request(){
    window.location = 'assets/Abrar AbdEl-Mohsen_Cv.pdf' ;
}
$("#inImage").click(
    () =>{
        location.href = "https://www.linkedin.com/feed/" ;
    }
)