import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Igatos } from '../gatos.model';

@Injectable({
  providedIn: 'root' //a nivel global funciona el servicio 
})
export class GatosApiService {

  constructor(private http: HttpClient) { }  //mediante http client conecta a la base de datos de la api

  fetchDataGatitos(): Observable<Igatos[]> { //fetchdata (significa recuperar datos)
    return this.http
      .get('https://api.thecatapi.com/v1/images/search?limit=9')
      .pipe(map((res: any) => res as Igatos[]));

  }
}

/*//. observable: Es como un flujo o secuencia de datos 
en el que un Observable "emite" valores,
 y las partes de la aplicación que están interesadas
  en esos datos se "suscriben" para recibirlos.*/
/*Conclusión
Los Observables son una herramienta fundamental en Angular 
para manejar flujos de datos y operaciones asíncronas de forma
eficiente y reactiva. Ofrecen un alto nivel de control sobre 
los datos y son esenciales para aplicaciones que interactúan 
constantemente con un backend o manejan eventos en tiempo real.*/

/*fetchData(): Observable<Igatos[]>: Esta declaración indica que la función fetchData devuelve un
 Observable que emitirá un array de objetos de tipo Igatos. Esto significa que fetchData no devuelve directamente 
 los datos de los gatos, sino un Observable al cual 
otros componentes pueden suscribirse para obtener los datos cuando estén disponibles.*/

/*this.http.get(...): Aquí, this.http es una instancia de HttpClient, 
que es el servicio de Angular para realizar solicitudes HTTP. El método .get(...) realiza una solicitud GET
 a la URL https://api.thecatapi.com/v1/images/search?limit=9, 
 la cual es una API que devuelve una lista de imágenes de gatos 
 (en este caso, 9 imágenes debido al parámetro limit=9 en la URL).
.pipe(...): pipe es un método de los Observables que permite aplicar operadores de RxJS 
para transformar o manipular los datos antes de enviarlos a los suscriptores.
 En este caso, utiliza el operador map.
map((res: any) => res as Igatos[]): El operador map de RxJS toma los datos 
que vienen de la respuesta HTTP (aquí nombrados como res) y los transforma.
 En este caso, simplemente está usando res as Igatos[],
 lo que indica que la respuesta se está convirtiendo al tipo Igatos[].*/

/*Nota: res as Igatos[] es una aserción de tipo en TypeScript,
que le indica al compilador que res debería ser tratado como un array de objetos de tipo Igatos.
Esto no cambia los datos, 
solo ayuda con la verificación de tipos 
para que Angular reconozca que se trata de Igatos[].*/

/*¿Por qué se usa map aquí?
El operador map ayuda a convertir o dar formato a los datos que vienen de la API,
 especialmente si necesitas transformar la estructura de datos, filtrar información,
 o realizar una conversión de tipos para ajustarse al modelo de datos esperado (Igatos en este caso).*/

/*Esta estructura es muy común en Angular para obtener
y procesar datos de APIs y hace que trabajar con flujos de datos 
asíncronos sea muy eficiente y organizado.*/ 