# @ionic-native/Google Maps plugin demo (on progress)

This is a demo application of [@ionic-native/Google Maps plugin](https://ionicframework.com/docs/native/google-maps/).

Unfortunately, the current wrapper plugin has lots of mistake.

In order to find out, Masashi(@wf9a5m75) needs to test all methods.
But unfortunately, he's unfamiliar with the ionic framework and the [Cordova Google Maps Plugin](https://github.com/mapsplugin/cordova-plugin-googlemaps) has lots of methods to implement.

## What do Masashi need help with?

I've has been trying to port the code from [JavaScript version demo](https://github.com/mapsplugin/v2.0-demo) into the ionic wrapper version demo [(ionic-googlemaps-demo)](https://github.com/wf9a5m75/ionic-googlemaps-demo).

Please help me to create each pages in ionic style.

## How to contribute?

It is a really easy job. Just convert what is in JavaScript to TypeScript.

**STEP-1: Clone this project into your machine**

```
$> git clone https://github.com/wf9a5m75/ionic-googlemaps-demo

$> cd ionic-google-maps
```

**STEP-2: Open the config.xml, then replace the Maps API keys**

Don't forget to enable the Google Maps Android API v2/Google Maps SDK for iOS
at the Google APIs console.

The package name is `ionic.google.maps`

```
<plugin name="cordova-plugin-googlemaps" spec="https://github.com/wf9a5m75/ionic-googlemaps-demo">
  <variable name="API_KEY_FOR_ANDROID" value="(REPLACE_WITH_YOUR_KEY)" />
  <variable name="API_KEY_FOR_IOS" value="(REPLACE_WITH_YOUR_KEY)" />
</plugin>
```

**STEP-3: Install**

```
$> ionic cordova platform add android (or ios)

$> npm install @ionic-native/googlemaps

```

**STEP-4: Run**

It should work.

```
$> ionic cordova run android -l
```

**STEP-5: Generate new page**

For example, create a page for `Map.animateCameraZoomIn()`.

```
$> cd (path to)ionic-googlemaps-demo

$> ionic generate page AnimateCameraZoomIn  // Don't generate if the page is already exists.
[OK] Generated a page named AnimateCameraZoomIn!

$> cd src/pages/

$> mv animate-camera-zoom-in map/
```

This will create package in pages folder(there is issue in ionic to allow to specify any location for generated folder).
All you have to do is move this folder into any folder. Restart your ionic cli and all changes will be presented.

NOTE: Make sure you are using latest ionic cli version.
```
$> npm install -g ionic@latest
```
----

## How to build @ionic-native, and install it in your machine

### Install the @ionic-native/google-maps plugin

```
$> git clone https://github.com/wf9a5m75/ionic-native

$> git checkout  dev

$> cd ionic-googlemaps-demo

$> npm uninstall @ionic-native/core @ionic-native/google-maps


$> npm install (path to)/ionic-native/dist/\@ionic-native/core --no-fetch

$> npm install (path to)/ionic-native/dist/\@ionic-native/google-maps --no-fetch

$> ionic cordova run
```

You may get some warning, but you can ignore these messages.
```
$> npm install (path to)/ionic-native/dist/@ionic-native/google-maps --no-fetch
ionic-googlemaps-demo@0.0.1 (path to)/ionic-googlemaps-demo
????????? UNMET PEER DEPENDENCY @ionic-native/core@4.1.0
????????? @ionic-native/google-maps@4.1.0

npm WARN @ionic-native/splash-screen@3.12.1 requires a peer of @ionic-native/core@^3.6.0 but none was installed.
npm WARN @ionic-native/status-bar@3.12.1 requires a peer of @ionic-native/core@^3.6.0 but none was installed.
npm WARN ajv-keywords@2.1.0 requires a peer of ajv@>=5.0.0 but none was installed.
```


After finish fixing bugs, please commit to the https://github.com/wf9a5m75/ionic-native

Because I already sent [a pull request](https://github.com/ionic-team/ionic-native/pull/1834) to the original ionic-native repo.
If you commit the code to the https://github.com/wf9a5m75/ionic-native, an automatic code review is executed at the pull request page.

Pull request [#1834 Fix: Google Maps Doc page](https://github.com/ionic-team/ionic-native/pull/1834)


----

## Current working progress

[x] means the page was created.

- [ ] Map
  - [x] getMap (@wf9a5m75)
  - [x] setDiv (@wf9a5m75)
  - [x] setMapTypeId (@wf9a5m75)
  - [x] animateCamera (@wf9a5m75)
  - [x] animateCameraZoomIn (@wf9a5m75)
  - [x] animateCameraZoomOut (@wf9a5m75)
  - [x] moveCamera (@wf9a5m75)
  - [x] moveCameraZoomIn (@wf9a5m75)
  - [x] moveCameraZoomOut (@wf9a5m75)
  - [x] getCameraPosition (@wf9a5m75)
  - [x] getCameraTarget (@wf9a5m75)
  - [x] getCameraZoom (@wf9a5m75)
  - [x] getCameraBearing (@wf9a5m75)
  - [x] getCameraTilt (@wf9a5m75)
  - [x] setCameraTarget (@wf9a5m75)
  - [x] setCameraZoom (@wf9a5m75)
  - [x] setCameraTilt (@wf9a5m75)
  - [x] setCameraBearing (@wf9a5m75)
  - [x] panBy (@quanganh206)
  - [x] getVisibleRegion (@wf9a5m75)
  - [x] getMyLocation (@quanganh206)
  - [x] setClickable (@quanganh206)
  - [x] remove (@wf9a5m75)
  - [x] clear (@wf9a5m75)
  - [x] fromLatLngToPoint (@wf9a5m75)
  - [x] fromPointToLatLng (@wf9a5m75)
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
  - [x] setIconAnchor (@pavel-kurnosov)
  - [x] setInfoWindowAnchor (@pavel-kurnosov)
  - [ ] isInfoWindowShown (@pavel-kurnosov)
  - [x] setOpacity (@pavel-kurnosov)
  - [x] setZIndex (@pavel-kurnosov)
  - [x] setVisible (@pavel-kurnosov)
  - [x] setDraggable (@pavel-kurnosov)
  - [x] setDisableAutoPan (@pavel-kurnosov)
  - [ ] setPosition (@pavel-kurnosov)
  - [ ] setRotation (@pavel-kurnosov)
  - [ ] setFlat (@pavel-kurnosov)
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

- [-] Polyline
  - [x] map.addPolyline (@quanganh206)
  - [ ] setPoints
  - [ ] getPoints
  - [ ] setGeodesic
  - [ ] setVisible
  - [ ] setClickable
  - [ ] setStrokeColor
  - [ ] setStrokeWidth
  - [ ] setZIndex
  - [ ] remove (@quanganh206)
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

- [ ] HtmlInfoWindow (@dasois)
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
