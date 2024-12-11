let mapedKeys=[]
const volumeM=document.querySelector(".volume input")
const pianoKeys=document.querySelectorAll(".piano-keys .tecla")
const keyCheck=document.querySelector(".check input")
pianoKeys.forEach((tecla)=>{
    console.log(tecla.dataset.key);
    tecla.addEventListener("click",()=>playTune(tecla.dataset.key))
    mapedKeys.push(tecla.dataset.key)
})

const playTune=(tecla)=>{
    audio.src=`tunes/${tecla}.wav`;
    audio.play()
    const cliked=document.querySelector(`[data-key="${tecla}"]`)
    cliked.classList.add("active")
    setTimeout(() => {
       cliked.classList.remove("active") 
    }, 150);
}
let audio= new Audio("tunes/a.wav")

document.addEventListener("keydown",(h)=>{
   if (mapedKeys.includes(h.key)) {
    playTune(h.key)
   } 
})
const showKeys=()=>{
    pianoKeys.forEach((tecla)=>tecla.classList.toggle("hide"))
}
const handleV=(h)=>{
    audio.volume=h.target.value;
};
volumeM.addEventListener("input",handleV)
keyCheck.addEventListener("click",showKeys)