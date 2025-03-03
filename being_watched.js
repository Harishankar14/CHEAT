function monitor_code(){
    const editor=document.querySelector(".CodeMirror");
    if(!editor){
        console.log("Code editor not found");   // have to log the results .. not here ig. but yeah, will implement it . 
        return;
    }

    editor.addEventListener("input",function(){
        let code=editor.innerText;
        console.log("User code",code);   // given user thingy.. 

    });
    console.log("Montioring");  // just montior the progress 
}

window.onload=monitor_code; 
