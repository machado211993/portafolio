import { Imagen } from './imagen.model';

export interface Iobra {
    idObra: string;            // ID único de la obra
    nombreObra: string;        // Nombre de la obra
    imagen: Imagen;            // Información de la imagen asociada a la obra
    altaObra: Date;            // Fecha de alta de la obra
}
