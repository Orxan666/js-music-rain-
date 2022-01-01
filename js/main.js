$(function () {

    $(document).on("keydown", function (e) {
        var top = $(".box").css("top")
        var left = $(".box").css("left")
        top = Number(top.slice(0, top.length - 2))
        left = Number(left.slice(0, left.length - 2))
        // console.log(left);

        const myArr = e.originalEvent.keyCode
        // console.log(myArr);
        if (myArr == 39) {
            if(left<1100){
                $(".box").stop().css("transform", "rotateY(0deg)").animate({
                    left: "+=100px"
                })
            }
        }
        else if (myArr == 37) {
            if(left>0){
                $(".box").stop().css("transform", "rotateY(180deg)").animate({
                    left: "-=100px"
                })
            }
        
        }
        else if (myArr == 38) {
            if (top > 0) {
                $(".box").stop().animate({
                    top: "-=100px"
                })
            }

        }
        else if (myArr == 40) {
            if(top<300){
                $(".box").stop().animate({
                    top: "+=100px"
                })
            }
         
        }
    })
    setInterval(() => {
        AddRainDiv()
        setTimeout(() => {
            $(".rainer").first().remove()
            
        }, 1000);

    }, 100);

}())

function AddRainDiv() {
    const rainDiv = $("<div></div>")
    rainDiv.addClass("rainer")
    const width = $(document).outerWidth()
    var rn = Math.floor(Math.random() * width - 20)
    rainDiv.css("left", rn + "px")
    const imgTag = $("<img width='10px'/>")
    imgTag.attr("src", "https://www.nicepng.com/png/full/59-597939_png-image-information-raindrop-png.png")
    rainDiv.append(imgTag)
    $("body").append(rainDiv)
}
// function AddRainDiv() {
//     const rainDiv = $("<div></div>")
//     rainDiv.addClass("basket") 
//     const width = $(document).outerWidth()
//     var rn = Math.floor(Math.random() * width - 70)
//     rainDiv.css("left", rn + "px")
//     const imgTag = $("<img width='70px'/>")
//     imgTag.attr("src", "https://www.seekpng.com/png/full/376-3768289_bread-basket-png.png")
//     rainDiv.append(imgTag)
//     $("body").append(rainDiv)
// }


