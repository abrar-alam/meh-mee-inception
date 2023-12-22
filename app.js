const mem_sect = document.querySelector("section.memes-section");


console.log(mem_sect);
mem_sect.addEventListener("mouseover", function(e){

    // if (e.target.)
    
    // if (((e.target.tagName === "DIV") && (e.target.getAttribute("class") === "image-container") )
    //    ||  (e.target.tagName === "IMG") 
    //    || ((e.target.tagName === "DIV") && (e.target.getAttribute("class") === ""))){
    //     console.log("Hello");
    // }
    console.dir(e.target);

    let idx = null;
    let element = null;
    if ((e.target.tagName === "IMG")){
        e.target.className = "mouseover";
        // id = e.target.parentElement.id;
        // console.log("id: ", id);
        // element = document.querySelector(`#${id}`);
        // console.dir(element);
        // element.querySelector("div.text-overlay-top").classList.add = "mouseover";
        // element.querySelector("div.text-overlay-bottom").classList.add = "mouseover";
        idx = Array.prototype.indexOf.call(e.target.parentElement.parentElement.children, e.target.parentElement);
        console.dir(idx);
        element = document.querySelectorAll("section.memes-section")[idx];
        element.querySelector("div.text-overlay-top").classList.add("mouseover");
        element.querySelector("div.text-overlay-bottom").classList.add("mouseover");
        element.querySelector("div.button-overlay").style.display = "inline";


    }


});

mem_sect.addEventListener("mouseout", function(e){
    console.dir(e.target);
    if (e.target.tagName === "IMG"){
        e.target.parentElement.className = "image-container";
    }

});