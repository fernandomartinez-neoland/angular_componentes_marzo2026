import { Component, signal, inject } from '@angular/core';
// Importamos 'FormsModule' porque es una caja de herramientas que hace que los formularios 
// funcionen súper bien y no den problemas en Angular.
import { FormsModule } from '@angular/forms';
import { FormularioService } from './formulario.service';

/**
 * ¡Hola! Este es el cerebro de la pieza de Lego llamada "Formulario".
 * Aquí controlamos lo que pasa cuando el usuario escribe su nombre en la pantalla.
 */
@Component({
  selector: 'app-formulario', // Así se llama esta pieza cuando la queremos poner en otro lado (como en app.component.html).
  imports: [FormsModule],     // Le damos la caja de herramientas de formularios para usar la magia de 'ngModel'.
  templateUrl: './formulario.component.html', // Aquí le decimos dónde está su dibujo.
  styleUrl: './formulario.component.css',     // Aquí le decimos dónde están sus colores.
})
export class FormularioComponent {
  // Aquí traemos a nuestro mensajero / mochila compartida (FormularioService) usando 'inject()'.
  // Lo necesitamos porque cuando el usuario le dé al botón "Enviar", 
  // vamos a meter el nombre escrito dentro de esta mochila.
  private servicioFormulario = inject(FormularioService);

  // Esta es una cajita de cristal (Signal) que es LOCAL y privada.
  // ¡Solo pertenece a este pequeño formulario y a nadie más!
  // Empieza totalmente vacía (""). 
  // ¿Para qué sirve? Para ir guardando, letra por letra, lo que el usuario va tecleando.
  nombre = signal("");

  /**
   * Este es un "método" (una acción o tarea que el código sabe hacer).
   * Se activa cada vez que el usuario teclea o borra una letra en la pantalla.
   * La variable 'value' es como una bolsita que nos trae la palabra nueva que se acaba de escribir.
   */
  changeName(value: any) {
    // Tomamos nuestra cajita local 'nombre' y le metemos el nuevo valor (.set) 
    // para recordar lo que el usuario está escribiendo.
    this.nombre.set(value);
  }

  /**
   * Esta es otra acción. Pero esta SOLAMENTE se activa cuando el usuario 
   * le da click al botón de "Enviar".
   */
  onSubmit() {
    // ¡Aquí está la magia de enviar datos!
    // Vamos a la mochila compartida ('servicioFormulario') y en su caja llamada 'nombre', 
    // le guardamos (.set) el texto que teníamos en nuestra caja local ('this.nombre()').
    // ¡De esta forma, la aplicación principal se enterará de que hay un nombre nuevo!
    this.servicioFormulario.nombre.set(this.nombre());
    
    // Esto es un mensaje secreto. Solo los programadores pueden verlo 
    // en la "Consola" oculta del navegador para asegurar que todo funcionó bien.
    console.log("Formulario enviado con nombre:", this.nombre());
  }
}
