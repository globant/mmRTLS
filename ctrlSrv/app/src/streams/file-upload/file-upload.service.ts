import type { UploadResponse } from '$src/interfaces/upload-file.interface';
import { catchError, map, Observable } from 'rxjs';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

const BASE_URL = 'http://localhost:3000/';
const MAP_CONFIG_URL = 'files/';

export class FileUploadService {
    private static url = BASE_URL + MAP_CONFIG_URL;

    static get({id}: {id: number}): Observable<string | null> {
        return fromFetch<string | null>(this.url + id, {
            selector: ({text}) => text()
        }).pipe(
            catchError(() => of(null))
        );
    }

    static save(file: File): Observable<string | null> {
        const formData = new FormData();
        formData.append('file', file);
        return fromFetch<UploadResponse>(
            this.url,
            {
                method: 'POST',
                body: formData,
                selector: (response) => response.json()
            }
        ).pipe(
            map((response) => this.url + response.files[0].originalname),
            catchError(() => of(null))
        );
    }
}