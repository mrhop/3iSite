/**
 * Created by Donghui Huo on 2016/3/15.
 */
var $ = jQuery = require('jquery');
require("bootstrap");
var Swiper = require("Swiper");
var utilFun = require("utilFun");
$(document).ready(function () {
    $(".navbar-nav li.active").removeClass("active");
    $(".navbar-nav li." + $("body").attr("id") + "-li").addClass("active");
    $(".navbar-nav li." + $("body").attr("id") + "-li-parent").addClass("active");
    $(".left-menu li." + $("body").attr("id")).addClass("active");
    //do something
    if ($("body").attr("id") === 'index') {
        new Swiper('.top-slider .swiper-container', {
            // Optional parameters
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
    }

});

