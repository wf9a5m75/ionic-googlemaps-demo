import { Platform, IonicPage } from 'ionic-angular';
import {
  Component,
  ComponentRef,
  Injector,
  ApplicationRef,
  ComponentFactoryResolver,
  NgZone,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  BaseArrayClass,
  MarkerOptions,
  Marker,
  HtmlInfoWindow
} from '@ionic-native/google-maps';


@Component({
  selector: 'custom-tag',
  template: `
    <div style="white-space: nowrap;">markerTitle: {{myTitle}}</div>
    <button ion-button (click)="onButton_click($event)">hi</button>
  `,
})
export class CustomTag {
  myTitle: string;

  onButton_click(event) {
    alert(`This is '${this.myTitle}'`);
  }
}


@IonicPage()
@Component({
  selector: 'page-set-content',
  templateUrl: 'set-content.html',
})
export class SetContentPage {

  map: GoogleMap;
  htmInfoWindow: HtmlInfoWindow;

  constructor(
    public platform: Platform,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private _ngZone: NgZone
  ) { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let locations: MarkerOptions[] = [
      {"myTitle": "one", disableAutoPan: true, position: {lat: 41.624615, lng: 0.6238626}},
      {"myTitle": "two", disableAutoPan: true, position: {lat: 41.624615, lng: 0.6248626}},
      {"myTitle": "three", disableAutoPan: true, position: {lat: 41.624615, lng: 0.6258626}}
    ];

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: [
          {lat: 41.624615, lng: 0.6238626},
          {lat: 41.624615, lng: 0.6248626},
          {lat: 41.624615, lng: 0.6258626}
        ],
        padding: 60,
        tilt: 90
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      this.htmInfoWindow =  new HtmlInfoWindow();

      locations.forEach((markerOpts: MarkerOptions) => {
        let marker: Marker = this.map.addMarkerSync(markerOpts);

        // Listen the MARKER_CLICK event
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick.bind(this));
      });

    });
  }

  onMarkerClick(params: any[]) {
    // Get a marker instance from the passed parameters
    let marker: Marker = params.pop();

    // Create a component
    const compFactory = this.resolver.resolveComponentFactory(CustomTag);
    let compRef: ComponentRef<CustomTag> = compFactory.create(this.injector);
    compRef.instance.myTitle = marker.get("myTitle");
    this.appRef.attachView(compRef.hostView);

    let div = document.createElement('div');
    div.appendChild(compRef.location.nativeElement);

    // Dynamic rendering
    this._ngZone.run(() => {
      this.htmInfoWindow.setContent(div);
      this.htmInfoWindow.open(marker);
    });

    // Destroy the component when the htmlInfoWindow is closed.
    this.htmInfoWindow.one(GoogleMapsEvent.INFO_CLOSE).then(() => {
      compRef.destroy();
    });
  }
}
