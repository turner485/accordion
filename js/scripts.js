        //-- Json -- //

    var json = { "blocks": [
        {
            "heading": "Section 1",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis!"
        },
        {
            "heading": "Section 2",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore sed aliquam vitae fugit odit voluptate eligendi, blanditiis quasi nobis reiciendis! Rem maiores reprehenderit animi aliquam inventore vel adipisci delectus itaque!"
        },
        {
            "heading": "Section 3",
            "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
    ]};

    let accordion = document.getElementsByClassName("accordion-wrapper")[0];
    let data = json.blocks;

    data.map((el) => {
      let blockContent = document.createElement("div");
      blockContent.setAttribute("class",  "blocks");

      // if you use `` you dont need to escape a var and you can interpolate them with ${VARNAME}
      blockContent.innerHTML = `<div class="content-wrap"><button class="btn heading"> ${el.heading} <i class="fa fa-chevron-down"></i></button> <div class="content"><p> ${el.content} </p></div></div>`;

      accordion.appendChild(blockContent);
    })

    // -- Accordion -- //
    // Since document.getElementsByClassName creates a NodeList wich is a ArrayLike type you cant use .map() on it. Create a array and use the spread operator  "..." to be able to iterrate over it
    let acc = [...document.getElementsByClassName('btn')];

    //map iterates over an Array and applies all the code in {} to each array item. el (you could name it as you want) is the item itself
    acc.map((el) => {
      el.onclick = function(){
        let panel = this.nextElementSibling
        this.classList.toggle("active");

        // JavaScript expression for if else
        let triggerStyle = panel.style.display ===  "block" ? panel.style.display = "none" : panel.style.display = "block";

      }
    })