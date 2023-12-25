const memeSection = document.querySelector("section.memes-section");
const form = document.querySelector("form.form-data");

// data submit event handling
form.addEventListener("submit",
function(e){
    e.preventDefault();
    
    let memeToAdd = createImageContainer(form.querySelector("#image-url").value, form.querySelector("#upper-text").value,
    form.querySelector("#lower-text").value);

    // reset the form values
    form.reset();

    memeToAdd.addEventListener("mouseenter", mouseEnter);
    memeToAdd.addEventListener("mouseleave", mouseLeave);

    memeToAdd.querySelector("div.button-overlay button").addEventListener(
        "click", function(e){
            e.target.parentElement.parentElement.remove();
        }
    );

    memeSection.prepend(memeToAdd);
});

 
function mouseEnter(e){
   /**
    * The callback function to be called when mouse pointer is on a meme 
    */
    let idx = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);;
    let element = document.querySelectorAll("section.memes-section div.image-container")[idx];
    e.target.querySelector("img").className = "mouseover";
    element.querySelector("div.text-overlay-top").classList.add("mouseover");
    element.querySelector("div.text-overlay-bottom").classList.add("mouseover");
    element.querySelector("div.button-overlay").style.display = "inline";
}

function mouseLeave(e){
     /**
    * The callback function to be called when mouse pointer leaves a meme 
    */

    let idx = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
    let element = document.querySelectorAll("section.memes-section div.image-container")[idx];
    e.target.querySelector("img").className = "";
    element.querySelector("div.text-overlay-top").classList.remove("mouseover");
    element.querySelector("div.text-overlay-bottom").classList.remove("mouseover");
    element.querySelector("div.button-overlay").style.display = "none";
}

function createImageContainer(imageUrl, topText, bottomText){

     /**
    * A helper function for crearing the layout of the meme to be added
    */

    console.log("URL ",  imageUrl);
    console.log("topText ", topText);
    console.log("bottomText ", bottomText);
    
    let div = document.createElement("div");
    div.className = "image-container";
    let img = document.createElement("img");
    img.setAttribute("src", imageUrl);
    img.setAttribute("alt", "meme");
    let topTextDiv = document.createElement("div");
    topTextDiv.className ="text-overlay-top";
    let topTextParagraph = document.createElement("p");
    topTextParagraph.innerText = topText;
    let bottomTextDiv = document.createElement("div");
    bottomTextDiv.className = "text-overlay-bottom";
    let bottomTextParagraph = document.createElement("p");
    bottomTextParagraph.innerText=bottomText;
    let buttonDiv = document.createElement("div");
    buttonDiv.className = "button-overlay";
    let removeButton = document.createElement("button");
    removeButton.className = "button";
    removeButton.innerText = "Remove";
    
    topTextDiv.append(topTextParagraph);
    bottomTextDiv.append(bottomTextParagraph);
    buttonDiv.append(removeButton);

    div.append(img, topTextDiv, bottomTextDiv, buttonDiv);

    return div;
    // memeSection.prepend(div);


}




