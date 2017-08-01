# @ionic-native/Google Maps plugin demo (on progress)

This is a demo application of [@ionic-native/Google Maps plugin](https://ionicframework.com/docs/native/google-maps/).

Unfortunately, the current wrapper plugin has lots of mistake.

In order to find out, Masashi(@wf9a5m75) needs to test all methods.
But Masashi is not familiar with ionic framework, and the [Cordova Google Maps Plugin](https://github.com/mapsplugin/cordova-plugin-googlemaps) has lots of methods.

## What does help need?

Masashi has been trying to port the code from [JavaScript version demo](https://github.com/mapsplugin/v2.0-demo) to the ionic wrapper version demo (this project).

Please help me to create each pages by ionic style.

## How to contribute?

It is really easy job. Just convert from JavaScript to TypeScript.

**step1: Clone this project to your local**

```
$> git clone https://github.com/mapsplugin/ionic-google-maps

$> cd ionic-google-maps
```

**step2: Open the config.xml, then replace the Maps API keys**

Don't forget to enable the Google Maps Android API v2/Google Maps SDK for iOS
at the Google APIs console.

The package name is `ionic.google.maps`

```
<plugin name="cordova-plugin-googlemaps" spec="https://github.com/mapsplugin/cordova-plugin-googlemaps">
  <variable name="API_KEY_FOR_ANDROID" value="(REPLACE_WITH_YOUR_KEY)" />
  <variable name="API_KEY_FOR_IOS" value="(REPLACE_WITH_YOUR_KEY)" />
</plugin>
```

**step3: install**

```
$> ionic cordova platform add android (or ios)

$> npm install @ionic-native/googlemaps

```

**step4: run**

Should work.

```
$> ionic cordova run android -l
```

**step5: generate new page**
```
$> ionic generate page GetMap
```

This will create package in pages folder(there is issue in iconic to allow to specify any location for generated folder). 
All you have to do move this folder to any folder. Restart your ionic cli and all changes will be presented.

NOTE: Make sure you are using latest ionic cli version.

Second,

## Current working progress

[x] means the page was created.

- [ ] Map
  - [x] getMap
  - [x] setDiv
  - [x] setMapTypeId
  - [ ] animateCamera
  - [ ] animateCameraZoomIn
  - [ ] animateCameraZoomOut
  - [ ] moveCamera
  - [ ] moveCameraZoomIn
  - [ ] moveCameraZoomOut
  - [ ] getCameraPosition
  - [ ] getCameraTarget
  - [ ] getCameraZoom
  - [ ] getCameraBearing
  - [ ] getCameraTilt
  - [ ] setCameraTarget
  - [ ] setCameraZoom
  - [ ] setCameraTilt
  - [ ] setCameraBearing
  - [ ] panBy
  - [ ] getVisibleRegion
  - [ ] getMyLocation
  - [ ] setClickable
  - [ ] remove
  - [ ] clear
  - [ ] fromLatLngToPoint
  - [ ] fromPointToLatLng
  - [ ] setMyLocationEnabled
  - [ ] getFocusedBuilding
  - [ ] setIndoorEnabled
  - [ ] setTrafficEnabled
  - [ ] setCompassEnabled
  - [ ] setAllGesturesEnabled
  - [ ] setVisible
  - [ ] setPadding
  - [ ] setOptions
  - [ ] toDataURL
  - [ ] MAP_CLICK
  - [ ] MAP_LONG_CLICK
  - [ ] MY_LOCATION_BUTTON_CLICK
  - [ ] CAMERA_EVENTS
  - [ ] MAP_DRAG_EVENTS
  - [ ] MAP_READY

- [ ] Marker
  - [x] map.addMarker
  - [ ] getPosition
  - [ ] showInfoWindow
  - [ ] hideInfoWindow
  - [ ] setAnimation
  - [ ] isVisible
  - [ ] setTitle
  - [ ] setSnippet
  - [ ] remove
  - [ ] setIconAnchor
  - [ ] setInfoWindowAnchor
  - [ ] isInfoWindowShown
  - [ ] setOpacity
  - [ ] setZIndex
  - [ ] setVisible
  - [ ] setDraggable
  - [ ] setDisableAutoPan
  - [ ] setPosition
  - [ ] setRotation
  - [ ] setFlat
  - [ ] setIcon

- [ ] Circle
  - [ ] map.addCircle
  - [ ] setCenter
  - [ ] setRadius
  - [ ] setFillColor
  - [ ] setStrokeWidth
  - [ ] setStrokeColor
  - [ ] setClickable
  - [ ] setZIndex
  - [ ] remove
  - [ ] CIRCLE_CLICK

- [ ] Polyline
  - [ ] map.addPolyline
  - [ ] setPoints
  - [ ] getPoints
  - [ ] setGeodesic
  - [ ] setVisible
  - [ ] setClickable
  - [ ] setStrokeColor
  - [ ] setStrokeWidth
  - [ ] setZIndex
  - [ ] remove
  - [ ] POLYLINE_CLICK

- [ ] Polygone
  - [ ] map.addPolygon
  - [ ] setPoints
  - [ ] getPoints
  - [ ] setPoints
  - [ ] getHoles
  - [ ] setFillColor
  - [ ] setStrokeColor
  - [ ] setClickable
  - [ ] setVisible
  - [ ] setZIndex
  - [ ] remove
  - [ ] POLYGON_CLICK

- [ ] GroundOverlay
- [ ] map.addGroundOverlay
  - [ ] setBounds
  - [ ] setBearing
  - [ ] setImage
  - [ ] setOpacity
  - [ ] setClickable
  - [ ] setZIndex
  - [ ] remove
  - [ ] GROUND_OVERLAY_CLICK

- [ ] HtmlInfoWindow
  - [ ] new HtmlInfoWindow
  - [ ] setContent
  - [ ] setBackgroundColor
  - [ ] open
  - [ ] close

- [ ] TileOverlay
  - [ ] map.addTileLayer
  - [ ] setFadeIn
  - [ ] setZIndex
  - [ ] setOpacity
  - [ ] setVisible
  - [ ] remove

- [ ] Geocoding
  - [ ] geocoding
  - [ ] reverse_geocoding


- [ ] Environment
  - [ ] setBackgroundColor
  - [ ] getLicenseInfo

- [ ] encoding
  - [ ] encodePath
  - [ ] decodePath
