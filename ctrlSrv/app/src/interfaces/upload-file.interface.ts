export interface BackendFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
}

export interface UploadResponse {
    files: BackendFile[];
    fields: {};
}