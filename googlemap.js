if (Meteor.isClient) {

    Template.dashboardFirmLocationManagementTemplate.helpers({
        'mapOptions' : function() {
            // Make sure the maps API has loaded
            if (GoogleMaps.loaded()) {


                // Default location
                return {
                    center: new google.maps.LatLng(-37.8136, 144.9631),
                    zoom: 8
                };
            }
        }
    });


}

