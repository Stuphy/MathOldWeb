function setHeadHeight() {
    $('.main_head').css({
        height: $(window).height() + 'px'
    });
}
setHeadHeight(); 
$(window).resize( setHeadHeight );