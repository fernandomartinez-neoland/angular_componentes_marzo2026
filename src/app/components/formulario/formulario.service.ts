import { Injectable, signal } from '@angular/core';

/**
 * ¡Hola! Imagina que este servicio ("FormularioService") es como un mensajero 
 * o una mochila mágica compartida. Puede guardar datos y llevarlos a cualquier 
 * parte de nuestra aplicación.
 * 
 * La pegatina "@Injectable" le dice a Angular: "¡Esta mochila se puede usar en cualquier lado!"
 * 'providedIn: root' significa que solo hay UNA mochila compartida para toda la aplicación.
 * Si alguien guarda algo aquí, todos los demás podrán verlo.
 */
@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  // 'nombre' es una variable muy especial llamada "Signal".
  // Un Signal es como una caja de cristal transparente: 
  // ¡Todos en la aplicación pueden ver lo que hay adentro en todo momento!
  // Y si alguien cambia lo que hay dentro, todos se enteran súper rápido.
  // 
  // Aquí empieza con el valor inicial "Fernandooooo".
  // ¿Para qué está aquí? Para que el formulario guarde el nombre escrito, 
  // y luego la pantalla principal (App) pueda leerlo de esta misma caja.
  nombre = signal("Fernandooooo");
}
