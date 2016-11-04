jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
    scrollwheel: false,
    disableDefaultUI: true,

        mapTypeId: 'roadmap',
     styles:[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
};
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['Talao-Talao', 13.9120953,121.6354403, 1]   ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>The Venue in Plano</h3>' +
        '<p> Phone: Ph. (972) 801 - 8786 <br/> Dennis - Ph. (214) 500 - 2344 <br/> David - Ph. (214) 537 - 9793 <br/> Joe - Ph. (214) 460 - 3593 <br/> 2540 Avenue<br/> K Suite 300 Plano,<br/> TX 75074 (Behind Whataburger)</p>' +        '</div>']
       
    ];
        
    // Display multiple markers on a map 2540 Avenue K Suite 300 Plano, TX 75074 (Behind Whataburger)
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,

            title: markers[i][0]

        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(10);
        google.maps.event.removeListener(boundsListener);
    });
    
}



        // Returns true if the specified element has been scrolled into the viewport.


function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('#skills .circle');

    // If the animation has already been started
    if ($elem.hasClass('start')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
        $('.circle.first').circleProgress({
    value: 0.9,
     size:110
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
});
         $('.circle.second').circleProgress({
    value: 0.87,
     size:110
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(87 * progress) + '<i>%</i>');
});
         $('.circle.third').circleProgress({
    value: 0.5,
     size:110
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(50 * progress) + '<i>%</i>');
});
         $('.circle.forth').circleProgress({
    value: 0.95,
     size:110
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(95 * progress) + '<i>%</i>');
});
    }
}


$(function() {
  $('.nav').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
var page = $('body'),
    scrollRange = 60,
    scrollSpeed = 200;

$(window).mousewheel(function(event, delta, deltaX, deltaY) {
    if (delta < 0) {
        page.stop(true,true).animate({scrollTop: page.scrollTop()+scrollRange}, scrollSpeed);
    } else if (delta > 0) {
        page.stop(true,true).animate({scrollTop: page.scrollTop()-scrollRange}, scrollSpeed);
    }
    return false;
});
