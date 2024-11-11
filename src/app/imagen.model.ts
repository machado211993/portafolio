export interface Imagen {
    idImagen: string;       // ID único de la imagen
    mime: string;           // Tipo MIME de la imagen (por ejemplo, "image/jpeg")
    nombre: string;         // Nombre del archivo de la imagen
    contenido: Uint8Array;
    // Contenido de la imagen en formato de bytes
}