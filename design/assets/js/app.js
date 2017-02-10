/*
 Require Basic Modules
 */
 $ = jQuery = require('jquery');




/**
Nprogress loading bar
*/
var NProgress = require('NProgress');


/**
 * Bootstrap loading
 */

 var bootstrap = require('bootstrap');











// device detection
var isMobile = false;
if (/Mobi/.test(navigator.userAgent))
    isMobile = true;






$("#con_hit").click(function(){
    console.log('Connect');

});






$(document).ready(function()
{


   // init(data,data2);
    /*mixpanel.track("Initial Hit");
  if (!document.cookie || !localStorage.getItem('data'))
  {
        //console.log('localStorage not set');
        d(displayData);

    }
     else
    {
        console.log('localStorage set');
        var data = localStorage.getItem('data');
        displayData(JSON.parse(data));
    }*/

});



$(function () {

    if (window.location == window.parent.location) {
        $('#back-to-bootsnipp').removeClass('hide');
    }


    $('[data-toggle="tooltip"]').tooltip();

    $('a[href="#cant-do-all-the-work-for-you"]').on('click', function(event) {
        event.preventDefault();
        $('#cant-do-all-the-work-for-you').modal('show');
    })
   

    $('#contact-list').searchable({
        searchField: '#contact-list-search',
        selector: 'li',
        childSelector: '.col-xs-12',
        show: function( elem ) {
            elem.slideDown(100);
        },
        hide: function( elem ) {
            elem.slideUp( 100 );
        }
    })

    $('#contact-list2').searchable({
        searchField: '#contact-list-search2',
        selector: 'li',
        childSelector: '.col-xs-12',
        show: function( elem ) {
            elem.slideDown(100);
        },
        hide: function( elem ) {
            elem.slideUp( 100 );
        }
    })
});




var React = require('react');
var ReactDOM = require('react-dom');

var App = require('./Main');




ReactDOM.render(<App/>, document.getElementById('app'));

