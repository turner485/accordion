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

    var accordion = document.getElementsByClassName("accordion-wrapper")[0];
    var data = json.blocks;

    for(var a = 0; a < data.length; a++) {
        var blockContent = document.createElement("div");
        blockContent.setAttribute("class",  "blocks");
        blockContent.innerHTML = '<div class="content-wrap"><button class="btn heading">' + data[a].heading + '<i class="fa fa-chevron-down"></i></button> <div class="content"><p>' + data[a].content +'</p></div></div>';
        accordion.appendChild(blockContent);
    }

    // -- Accordion -- //

    var acc = document.getElementsByClassName("btn");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            /* Toggle between adding and removing the "active" class,
             to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }
