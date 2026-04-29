import { Component, signal, inject } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormularioService } from './components/formulario/formulario.service';

/**
 * ¡Hola! Imagina que este archivo es como el cerebro principal de nuestra aplicación.
 * 
 * La palabra "@Component" es como una pegatina mágica que le dice a Angular: 
 * "¡Oye, esto es una pieza de Lego principal que vamos a mostrar en la pantalla!"
 */
@Component({
  // 'selector' es el nombre especial de nuestra pieza de Lego. 
  // Cuando escribimos <app-root></app-root> en el HTML, 
  // Angular sabrá que tiene que dibujar este componente ahí.
  selector: 'app-root',
  
  // 'imports' son las otras piezas de Lego que necesitamos usar dentro de esta.
  // Como queremos usar nuestro Formulario aquí adentro, ¡lo invitamos a la fiesta!
  imports: [FormularioComponent],
  
  // 'templateUrl' es la dirección de donde está el dibujo (HTML) de este componente.
  templateUrl: './app.component.html',
  
  // 'styleUrl' es la dirección de donde están los colores y adornos (CSS).
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Aquí estamos pidiendo prestada una mochila mágica llamada 'FormularioService'.
  // 'inject()' es la herramienta que nos permite traer ese servicio para usarlo aquí.
  // Lo necesitamos porque ese servicio es quien guarda el nombre que luego escribiremos.
  // Se usa 'private' para que esta mochila solo se pueda tocar desde aquí adentro.
  private servicioFormulario = inject(FormularioService);
  
  // 'nombreApp' es nuestra variable (como una cajita) donde vamos a mirar qué nombre hay.
  // En lugar de guardar un nombre propio, está mirando DIRECTAMENTE dentro 
  // de la mochila mágica del servicio ('servicioFormulario.nombre').
  // ¡Así, si el nombre cambia en el servicio, aquí también cambiará por arte de magia!
  // ¿Para qué está aquí? Para que luego podamos mostrar este nombre en la pantalla (en el HTML).
  nombreApp = this.servicioFormulario.nombre;
}
