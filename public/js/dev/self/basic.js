/**
 * Created by Donghui Huo on 2016/3/15.
 */
var $ = jQuery = require('jquery');
require("flexslider");
require("bootstrap");
var utilFun = require("utilFun");
$(document).ready(function () {
    //do something
    if ($("body").attr("id") === 'index') {
        $('.first-container .flexslider').flexslider({
            fadeFirstSlide: false,
            controlNav: false,
            directionNav: true,
            animationSpeed: 1000,
            slideshowSpeed: 4000,
            slideshow: true,
            animation: "slide",
            prevText: "",
            nextText: "",
        });
    }

});

