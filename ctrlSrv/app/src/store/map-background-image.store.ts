import { BehaviorSubject } from 'rxjs';
import type { IIndoorPosition } from '$src/interfaces/position.interface';
import type { MapConfig } from '$src/interfaces/map-config.interface';

export const mapBackgroundImage = new BehaviorSubject<string>('./static/indoor-map.png');
export const mapMaxPosition = new BehaviorSubject<IIndoorPosition | null>(null);
export const mapConfigStore = new BehaviorSubject<MapConfig | null>(null);