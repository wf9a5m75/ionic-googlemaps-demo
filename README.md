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
$> git clone https://github.com/wf9a5m75/ionic-googlemaps-demo

$> cd ionic-google-maps
```

**step2: Open the config.xml, then replace the Maps API keys**

Don't forget to enable the Google Maps Android API v2/Google Maps SDK for iOS
at the Google APIs console.

The package name is `ionic.google.maps`

```
<plugin name="cordova-plugin-googlemaps" spec="https://github.com/wf9a5m75/ionic-googlemaps-demo">
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

For example, create a page for `Map.animateCameraZoomIn()`.

```
$> cd (path to)ionic-googlemaps-demo

$> ionic generate page AnimateCameraZoomIn  // Don't generate if the page is already existed.
[OK] Generated a page named AnimateCameraZoomIn!

$> cd src/pages/

$> mv animate-camera-zoom-in map/
```

This will create package in pages folder(there is issue in iconic to allow to specify any location for generated folder). 
All you have to do move this folder to any folder. Restart your ionic cli and all changes will be presented.

NOTE: Make sure you are using latest ionic cli version.

----

## How to build @ionic-native, and install it in local

### Build the @ionic-native/google-maps plugin

```
$> cd (path to)/ionic-native

$> ls
CHANGELOG.md		LICENSE			circle.yml		gulpfile.js		node_modules		package.json		src			tslint.json
DEVELOPER.md		README.md		dist			karma.conf.js		package-lock.json	scripts			tsconfig.json

$> npm run build google-maps
...
Done processing plugins!

$> npm run build core
...
Done processing plugins!
```

### install the @ionic-native/google-maps plugin

```
$> cd (path to)/ionic-googlemaps-demo

$> npm uninstall @ionic-native/google-maps

$> npm install (path to)/ionic-native/dist/@ionic-native/core

$> npm install (path to)/ionic-native/dist/@ionic-native/google-maps
```

After finish the fixing bugs, please commit to the https://github.com/wf9a5m75/ionic-native

Because I already sent [a pull request](https://github.com/ionic-team/ionic-native/pull/1834) to the original ionic-native repo.
If you commit the code to the https://github.com/wf9a5m75/ionic-native, automatic code review is executed at the pull request page.

Pull request [#1834 Fix: Google Maps Doc page](https://github.com/ionic-team/ionic-native/pull/1834)


----

## Current working progress

[x] means the page was created.

- [ ] Map
  - [x] getMap (@wf9a5m75)
  - [x] setDiv (@wf9a5m75)
  - [x] setMapTypeId (@wf9a5m75)
  - [ ] animateCamera (@wf9a5m75)
  - [ ] animateCameraZoomIn (@wf9a5m75)
  - [ ] animateCameraZoomOut (@wf9a5m75)
  - [ ] moveCamera (@wf9a5m75)
  - [ ] moveCameraZoomIn (@wf9a5m75)
  - [ ] moveCameraZoomOut (@wf9a5m75)
  - [ ] getCameraPosition (@wf9a5m75)
  - [ ] getCameraTarget (@wf9a5m75)
  - [ ] getCameraZoom (@wf9a5m75)
  - [ ] getCameraBearing (@wf9a5m75)
  - [ ] getCameraTilt (@wf9a5m75)
  - [ ] setCameraTarget (@wf9a5m75)
  - [ ] setCameraZoom (@wf9a5m75)
  - [ ] setCameraTilt (@wf9a5m75)
  - [ ] setCameraBearing (@wf9a5m75)
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
  - [x] getPosition (@pavel-kurnosov)
  - [x] showInfoWindow (@pavel-kurnosov)
  - [x] hideInfoWindow (@pavel-kurnosov)
  - [x] setAnimation (@pavel-kurnosov)
  - [x] isVisible (@pavel-kurnosov)
  - [x] setTitle (@pavel-kurnosov)
  - [x] setSnippet (@pavel-kurnosov)
  - [x] remove (@pavel-kurnosov)
  - [ ] setIconAnchor (@pavel-kurnosov)
  - [ ] setInfoWindowAnchor (@pavel-kurnosov)
  - [ ] isInfoWindowShown (@pavel-kurnosov)
  - [ ] setOpacity (@pavel-kurnosov)
  - [ ] setZIndex (@pavel-kurnosov)
  - [ ] setVisible (@pavel-kurnosov)
  - [ ] setDraggable (@pavel-kurnosov)
  - [ ] setDisableAutoPan (@pavel-kurnosov)
  - [ ] setPosition (@pavel-kurnosov)
  - [ ] setRotation (@pavel-kurnosov)
  - [ ] setFlat (@pavel-kurnosov)
  - [ ] setIcon (@wf9a5m75)

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

- [X] Geocoding (@ThorvaldAagaard)
  - [X] geocoding
  - [X] reverse_geocoding


- [ ] Environment
  - [ ] setBackgroundColor
  - [ ] getLicenseInfo

- [ ] encoding
  - [ ] encodePath
  - [ ] decodePath
