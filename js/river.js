$(".left-menu").on("click",">li>a",function (e) {
    // e.preventDefault()
    var LIHEIGHT = 40;
    var $this = $(e.target)
    var id = $this.attr("id")
    localStorage.setItem("activeId",id)
    var num = $this.siblings("ul").children().length;
    $this.addClass("active").parent().siblings().children("a").removeClass("active")
    if($this.siblings("ul").height()>0){
        $this.siblings("ul").css("height",0)
        $this.children("span").removeClass("icon-chevron-up icon-chevron-down").addClass("icon-chevron-down")
    }else {
        $this.siblings("ul").css("height",num*LIHEIGHT)
        $this.children("span").removeClass("icon-chevron-down icon-chevron-up").addClass("icon-chevron-up")
    }

})


$(".leftControl").on("click",function (e) {
    var $this = $(e.target)
    if($(".left-side").hasClass("side-left")){
        $(".left-side").removeClass("side-left")
        $(".main-content").removeClass("content-left")
         // $this.parent(".leftControl").css("transform","rotate(0deg)")
        $(".leftControl ").css("transform","rotate(0deg)")
    }else {
        $(".left-side").addClass("side-left")
        $(".main-content").addClass("content-left")
        $(".leftControl ").css("transform","rotate(90deg)")
         // $this.parent(".leftControl").css("transform","rotate(90deg)")
    }

})

window.onload = function(){
    var LIHEIGHT = 40;
    var id = localStorage.getItem("activeId")
    if(id){
        $("#"+id).addClass("active")
        var num = $("#"+id).siblings("ul").children().length;
        $("#"+id).siblings("ul").css("height",num*LIHEIGHT)
        $("#"+id).children("span").removeClass("icon-chevron-down icon-chevron-up").addClass("icon-chevron-up")
    }
}






    