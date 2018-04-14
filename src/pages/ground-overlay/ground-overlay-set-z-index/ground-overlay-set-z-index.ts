import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent, LatLngBounds,
  ILatLng, GroundOverlay, GroundOverlayOptions, BaseArrayClass
} from "@ionic-native/google-maps";

@IonicPage()
@Component({
  selector: 'page-ground-overlay-set-z-index',
  templateUrl: 'ground-overlay-set-z-index.html',
})
export class GroundOverlaySetZIndexPage {
  map: GoogleMap;

  constructor() {}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let regions: any[] = [
      {
        "bounds": [
          {"lat": 41.144877, "lng": 138.066162},
          {"lat": 45.738532, "lng": 147.092896}
        ],
        "url": "./assets/groundoverlays/hokkaido-hokkaido-1001_1.png"
      },
      {
        "bounds": [
          {"lat": 43.252673, "lng": 144.749877},
          {"lat": 45.698391, "lng": 149.554238}
        ],
        "url": "./assets/groundoverlays/hokkaido-hoppou-1001_1.png"
      },
      {
        "bounds": [
          {"lat": 41.640700, "lng": 142.146678},
          {"lat": 40.113827, "lng": 139.386590}
        ],
        "url": "./assets/groundoverlays/aomori-aomori-2.png"
      }
    ];

    // Calcuate the bounds that contains all ground overlays
    let viewport: LatLngBounds = new LatLngBounds();
    regions.forEach((region: any) => {
      viewport.extend(region.bounds[0]);
      viewport.extend(region.bounds[1]);
    });
    console.log(viewport);

    // Create a map
    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        target: [
          viewport.northeast,
          viewport.southwest
        ]
      }
    });

    // Add ground overlays
    let gOverlays: BaseArrayClass<GroundOverlay> = new BaseArrayClass<GroundOverlay>();
    regions.forEach((options:any, index: number) => {
      let overlay: GroundOverlay = this.map.addGroundOverlaySync({
        url: options.url,
        bounds: options.bounds,
        opacity: 0.5,
        zIndex: index,
        clickable: true
      });

      overlay.on(GoogleMapsEvent.GROUND_OVERLAY_CLICK).subscribe(() => {
        gOverlays.set("active_idx", index);
      });

      gOverlays.push(overlay);
    });

    gOverlays.on("active_idx_changed").subscribe((params: any[]) => {
      let oldIdx: number = params[0];
      let newIdx: number = params[1];
      if (typeof oldIdx === "number") {
        gOverlays.getAt(oldIdx).setOpacity(0.5);
      }
      gOverlays.getAt(newIdx).setOpacity(1.0);
    });

  }

}
