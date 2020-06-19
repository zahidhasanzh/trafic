$(document).ready(function(){

  //google map

   $('.map')
      .gmap3({
        center:[23.5900649, 90.5143443],
        zoom:12,
        mapTypeId: "shadeOfGrey", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
        }
      })
      .styledmaptype(
        "shadeOfGrey",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
          {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#D0D0D0"},{"lightness":16}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#F2F2F2"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#F2F2F2"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#F2F2F2"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#F2F2F2"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#F2F2F2"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"off"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#29AE5F"},{"lightness":17}]}
        ],
        {name: ""}
      );

     var uluru = {lat: 23.5900649, lng: 90.5143443};
    $('.map')
      .gmap3({
        center: uluru,
        zoom:10,

      })

      .infowindow({
        position: uluru,
        content: "<h5>address</h5> <br> <p>M. N. Goshal Rd, Bandar, Bangladesh</p> <h5>Phone Number</h5> <br> <p>(+880) 1731708465</p>",
      })

      .then(function (infowindow) {
        infowindow.open(this.get(0)); // this.get(0) return the map (see "get" feature)
      });  


});

