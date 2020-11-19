
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 30,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-30.589974, -71.189641],
    zoom: 14,
    zoomControl: true
});












var style1 = {
                    'color': "green",
                    'weight': 0,
					'dashArray': 3,
                    'opacity': 5,
					'fillOpacity': 0.3
                };
				
var style2 = {
                    'color': "blue",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

				
var style3 = {
                    'color': "yellow",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

var style4 = {
                    'color': "purple",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style5 = {
                    'color': "black",
                    'weight': 0,
                    'opacity': 8,
					'fillOpacity': 0.8
                };

var style6 = {
                    'color': "orange",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style7 = {
                    'color': "brown",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style8 = {
                    'color': "olive",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };								

var style9 = {
                    'color': "aqua",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

var style10 = {
                    'color': "gray",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style11 = {
                    'color': "deeppink",
                    'weight': 0,
                    'opacity': 5,
					'dashArray': 3,
					'fillOpacity': 0.3
                };						

			  
	/*		  

	var nod_ovalle = L.geoJSON(nod_ovalle, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>JOSE GAFARDO LISSETTE</p><p>'+feature.properties.Name+'</p>');
    }
    }).addTo(map);			  
			  
			  */
			  
			  


	/*		  
	var nod_ovalle = L.geoJSON(nod_ovalle, {
    
	onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
    },
	
	
	  style: function(feature) {
           d = feature.properties.Name;
           return d == "539345 - Nodo 9 - 720 HP" ? {color: '#00FF7F', opacity:0.7} :
                  d == "539345 - Nodo 10 - 768 HP"  ? {color: '#BD0026', opacity:0.7} :
                  d == "539350 -nodo 26- 486 HP"  ? {color: '#E31A1C', opacity:0.7} :    
			    	d == "539344 -nodo 11- 369 HP"  ? {color: '#76D7C4', opacity:0.7} :  
					d == "541669 - nodo 14- 758 HP"  ? {color: '#F9E79F', opacity:0.7} :  
					d == "541672 -nodo 15- 765 HP"  ? {color: '#F5B7B1', opacity:0.7} : 
                    d == "541670 -nodo 16- 688 HP"  ? {color: '#808B96', opacity:0.7} :
                    d == "541671 -nodo 17- 768 HP"  ? {color: '#2C3E50', opacity:0.7} :
                   d == "540065 -nodo 12-  521 HP"  ? {color: '#F7DC6F ', opacity:0.7} :
                   d == "539342 -nodo 24- 606 HP"  ? {color: '#B7950B', opacity:0.7} :
                   d == "541668 -nodo 13- 748 HP"  ? {color: '#ABEBC6', opacity:0.7} :
                   d == "541673 -nodo 18- 745 HP"  ? {color: '#138D75', opacity:0.7} :
                   d == "541666 -nodo 19- 756 HP"  ? {color: '#2980B9', opacity:0.7} :
                   d == "541667 -nodo 20- 464 HP"  ? {color: '#A04000', opacity:0.7} :
                   d == "539351 -nodo 31- 144 HP"  ? {color: '#5F6A6A', opacity:0.7} :
				   d == "539343 -nodo 31- 118 HP"  ? {color: '#2471A3', opacity:0.7} :
					 
					 
					  {color: '#FFEDA0', opacity:0.7};

         }
		 }).addTo(map);  
			  
			  
		*/	  

	var a_ = L.geoJSON(a_, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


	var b_ = L.geoJSON(b_, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);
 
 
var c_ = L.geoJSON(c_, {
	style: style3,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


var d_ = L.geoJSON(d_, {
	style: style4,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);

var e_ = L.geoJSON(e_, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);

var f_ = L.geoJSON(f_, {
	style: style7,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


var g_ = L.geoJSON(g_, {
	style: style8,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);
  
  
var h_ = L.geoJSON(h_, {
	style: style9,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);  

var i_ = L.geoJSON(i_, {
	style: style10,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);

//var j_ = L.geoJSON(j_, {
//	style: style11,
 //   onEachFeature: function (feature, layer) {
 //   layer.bindPopup(feature.properties.Name+'</p>');
//  }
//  }).addTo(map);


	//var nodo_9 = L.geoJSON(nodo_9, {
	//style: style1,
    //onEachFeature: function (feature, layer) {
    //layer.bindPopup(feature.properties.Name+'</p>');
  //}
  //}).addTo(map);


//	var nodo_10 = L.geoJSON(nodo_10, {
//	style: style2,
//    onEachFeature: function (feature, layer) {
 //   layer.bindPopup(feature.properties.Name+'</p>');
 // }
 // }).addTo(map);


			  
	var nodo_11 = L.geoJSON(nodo_11, {
	style: style3,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);
	
	var nodo_12 = L.geoJSON(nodo_12, {
	style: style4,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);		  

	var nodo_13 = L.geoJSON(nodo_13, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);
  
  
	var nodo_14 = L.geoJSON(nodo_14, {
	style: style7,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


	var nodo_15 = L.geoJSON(nodo_15, {
	style: style8,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);

	var nodo_16 = L.geoJSON(nodo_16, {
	style: style9,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


	var nodo_17 = L.geoJSON(nodo_17, {
	style: style10,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


  	var nodo_18 = L.geoJSON(nodo_18, {
	style: style11,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);
  
  
  
	var nodo_19 = L.geoJSON(nodo_19, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map); 
			  
	var nodo_20 = L.geoJSON(nodo_20, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);			  

	var nodo_24 = L.geoJSON(nodo_24, {
	style: style3,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);		  


	var nodo_26 = L.geoJSON(nodo_26, {
	style: style4,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


	var nodo_31 = L.geoJSON(nodo_31, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);

var falt = L.geoJSON(falt, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


var nodo_6 = L.geoJSON(nodo_6, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);




//var	bounds = new L.LatLngBounds(
//			new L.LatLng(-30.579153, -71.203989),
//			new L.LatLng(-30.593552, -71.169173));

//		map.fitBounds(bounds);

//		var overlay = new L.ImageOverlay("nods_png.png", bounds, {
//			opacity: 0.5,
			
			
//		})//.addTo(map);
	//	map.addLayer(overlay);

/*
var	bounds = new L.LatLngBounds(
			new L.LatLng(-30.584945, -71.205789),
			new L.LatLng(-30.593468, -71.169284));

		map.fitBounds(bounds);

		var overlay = new L.ImageOverlay("ov_B_png.png", bounds, {
			opacity: 0.8,
			
			
		});
		map.addLayer(overlay);



/*

var	bounds = new L.LatLngBounds(
			new L.LatLng(-30.577925, -71.207801),
			new L.LatLng(-30.587475, -71.177811));

		map.fitBounds(bounds);

		var overlay = new L.ImageOverlay("ov_A_png.png", bounds, {
			opacity: 0.5,
			
			
		});

*/

/*
var	bounds = new L.LatLngBounds(
			new L.LatLng(-30.577892, -71.207964),
			new L.LatLng(-30.599940, -71.169399));

		map.fitBounds(bounds);

		var overlay = new L.ImageOverlay("ovalle_ba_png.png", bounds, {
			opacity: 0.5,
			
			
		});
		map.addLayer(overlay);


*/

    var baseMaps = {
    "mapa base": mapbox,
   };

   var overlayMaps = {
	 
	"Nodo 32 a 37": a_,
	"Nodo 9,10": b_,
	"Nodo 22,23": c_,
	"Nodo 7,8": d_,
	"Nodo 28,29": e_,
	"Nodo 41,44": f_,
	"Nodo 39,40,43": g_,
	"Nodo 2,3,4": h_,
	"Nodo i": i_,
//	"Nodo j": j_,
//	"Nodo 9": nodo_9,
//	"Nodo 10": nodo_10,
    "nodo 6": nodo_6,
	"nodo 11":nodo_11,
	"nodo 12":nodo_12,
	"nodo 13":nodo_13,
	"nodo 14":nodo_14,
	"nodo 15":nodo_15,
	"nodo 16":nodo_16,
	"nodo 17":nodo_17,
	"nodo 18":nodo_18,
	"nodo 19":nodo_19,
	"nodo 20":nodo_20,
	"nodo 24":nodo_24,
	"nodo 26":nodo_26,
	"nodo 31":nodo_31,
	"Otros nodos":falt
	
   };

//  var raster = {
	   
//	 "Imagen nodos" : overlay
	   
//   };



/*
var layerControl = new L.Control.Layers(null, {
    'Group 1': layerGroup1
    
}).addTo(map);
*/
L.control.layers(baseMaps, overlayMaps).addTo(map);










// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc=  L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);
