
new Vue({
  el: '#app',
  data: {
    usuario: '',
    logoGlobo: './img/logo.png',
    imageJane: './img/imagen.pric.jpg',
    imagePubli: './img/imgfinal.jpg',
    seguir: false,
    seguirTexto: 'Seguir',
    likes: 200,
    meGusta: false,
    comentarios: [
      { usuario: 'Juan Perez', texto: '¡wow, esa foto es impresionante!' },
      { usuario: 'Kathleen J Rennie', texto: '¡Esta foto de Tokio es simplemente espectacular! Me trae tantos recuerdos.' },
      { usuario: 'Diana Bell', texto: '¡Espero que algún día pueda ver Tokio en persona!.' }
      
    ],
    nuevoComentario: '',
  },
  methods: {
    btnSeguir: function () {
      this.seguir = !this.seguir;
      this.seguirTexto = this.seguir ? 'Dejar de seguir' : 'Seguir';
    },
    btnMeGusta: function () {
      this.meGusta = !this.meGusta;
      if (this.meGusta) {
        this.likes++;
      } else {
        this.likes--;

      }
    },
    agregarComentario: function () {
      if (this.usuario !== '') {
        if (this.nuevoComentario.trim() !== '') {
          this.comentarios.push({ usuario: this.usuario, texto: this.nuevoComentario });
          this.nuevoComentario = '';
        } else {
          Swal.fire('¡El comentario no puede estar vacío!');
        }
      } else {
        Swal.fire('¡No tienes un usuario!');
      }
    },
    eliminarComentario:function (comentarios, index){
      comentarios.splice(index, 1);
    },

  }

});


