import {Injectable} from '@angular/core';
import {
    Observable,
    Subject
} from 'rxjs';
import * as L from 'leaflet';
import {LeafletMouseEvent} from 'leaflet';

@Injectable({
    providedIn: 'root'
})
export class MapService {

    private map: L.Map;
    private mapClickedSubject = new Subject<LeafletMouseEvent>();
    private mapMouseMovedSubject = new Subject<LeafletMouseEvent>();
    private mapClicked = this.mapClickedSubject.asObservable();
    private mapMouseMoved = this.mapMouseMovedSubject.asObservable();

    constructor() {}


    public setMap(map: L.Map): void {

        this.map = map;
        this.configureEvents();

    }


    public getMap(): L.Map {

        return this.map;

    }


    private configureEvents(): void {

        const that = this;

        this.map.on('click', function(ev) {
            that.mapClickedSubject.next(<LeafletMouseEvent> ev);
        });

        this.map.on('mousemove', function(ev) {
            that.mapMouseMovedSubject.next(<LeafletMouseEvent> ev);
        });

    }


    public getMapClickedObservable(): Observable<LeafletMouseEvent> {
        return this.mapClicked;
    }


    public getMapMouseMovedObservable(): Observable<LeafletMouseEvent> {
        return this.mapMouseMoved;
    }



}
