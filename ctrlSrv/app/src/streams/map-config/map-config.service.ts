import type { MapConfig } from '$src/interfaces/map-config.interface';
import createRequest from '$src/utils/request';
import type { Observable } from 'rxjs';
import { of } from 'rxjs';

const BASE_URL = 'http://localhost:3000/';
const MAP_CONFIG_URL = 'map/';

export class MapConfigService {
    private static url = BASE_URL + MAP_CONFIG_URL;

    static get(): Observable<MapConfig | null> {
        return createRequest<MapConfig | null>({
            endpoint: this.url,
            getDefault: () => of(null),
            getId: () => ''
        }, 'GET' as 'POST', undefined as any);
    }

    static save(config: MapConfig): Observable<MapConfig | null> {
        return createRequest<MapConfig | null>({
            endpoint: this.url,
            getDefault: () => of(null),
            getId: () => ''
        }, 'POST', config);
    }
}