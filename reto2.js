const miniCalculadora = () => {
  let nombre = prompt(
    "SELECCIONA UNA OPCION PARA VER EL TIPO DE ANIMAL: \n a) - Vertebrados \n b) - Invertebrados  \n c) - Herbivoros \n d) - Carnivoros"
  );
  let Vertebrados = prompt(
    "EJEMPLOS DE ANIMALES VERTEBRADOS: \n 1) - Pingüino \n 2) - Caballo \n 3) - Gato \n 4) - Perro"
  );
  alert(
    "Animales vertebrados: Son aquellos animales que tienen columna vertebral y un esqueleto formado por huesos. Son animales vertebrados: el canguro, el camaleón, la serpiente, la foca, la rana, el pingüino, etc."
  );

  switch (nombre) {
    case a:
      alert("Vertebrados");
      break;
    case e:
      alert("Ingresa una opcion entre a y d");
      switch (Vertebrados) {
        case "1":
          alert("Pingüino");
          break;

        default:
          break;
      }
  }
};
