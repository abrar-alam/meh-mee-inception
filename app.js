const memeSection = document.querySelector("section.memes-section");
const form = document.querySelector("form.form-data");
// let selected_item_idx = null;


const memes = memeSection.querySelectorAll("div.image-container");

// console.log(memes);

// for (let meme of memes){
//     console.dir(meme);
// }
for (let meme of memes){
    meme.addEventListener("mouseenter", function(e){
        // console.dir(e);
        let idx = null;
        let element = null;
        e.target.querySelector("img").className = "mouseover";
        idx = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
        console.log("idx: ", idx);
        element = document.querySelectorAll("section.memes-section div.image-container")[idx];
        console.dir(element);
        element.querySelector("div.text-overlay-top").classList.add("mouseover");
        element.querySelector("div.text-overlay-bottom").classList.add("mouseover");
        element.querySelector("div.button-overlay").style.display = "inline";
    });

    meme.addEventListener("mouseleave", function(e){
        console.dir(e);

        let idx = null;
        let element = null;
        e.target.querySelector("img").className = "";
        idx = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
        console.log("idx: ", idx);
        element = document.querySelectorAll("section.memes-section div.image-container")[idx];
        console.dir(element);
        element.querySelector("div.text-overlay-top").classList.remove("mouseover");
        element.querySelector("div.text-overlay-bottom").classList.remove("mouseover");
        element.querySelector("div.button-overlay").style.display = "none";
    });

    meme.querySelector("div.button-overlay button").addEventListener(
        "click", function(e){
            e.target.parentElement.parentElement.remove();
        }
    );
}

// data submit event handling
form.addEventListener("submit",
function(e){
    e.preventDefault();
    alert("Hh");
    console.log(e);

    let memeToAdd = createImageContainer(form.querySelector("#image-url").value, form.querySelector("#upper-text").value,
    form.querySelector("#lower-text").value);

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
    let idx = null;
    let element = null;
    e.target.querySelector("img").className = "mouseover";
    idx = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
    console.log("idx: ", idx);
    element = document.querySelectorAll("section.memes-section div.image-container")[idx];
    console.dir(element);
    element.querySelector("div.text-overlay-top").classList.add("mouseover");
    element.querySelector("div.text-overlay-bottom").classList.add("mouseover");
    element.querySelector("div.button-overlay").style.display = "inline";
}

function mouseLeave(e){
    let idx = null;
    let element = null;
    e.target.querySelector("img").className = "";
    idx = Array.prototype.indexOf.call(e.target.parentElement.children, e.target);
    console.log("idx: ", idx);
    element = document.querySelectorAll("section.memes-section div.image-container")[idx];
    console.dir(element);
    element.querySelector("div.text-overlay-top").classList.remove("mouseover");
    element.querySelector("div.text-overlay-bottom").classList.remove("mouseover");
    element.querySelector("div.button-overlay").style.display = "none";
}

function createImageContainer(imageUrl, topText, bottomText){

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




