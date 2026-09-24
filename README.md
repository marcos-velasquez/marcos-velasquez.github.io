# marcos-velasquez.github.io

Este repositorio ya no contiene el portafolio. Sirve una única página que redirige a donde vive ahora:

**https://marcos-velasquez.web.app**

## Por qué sigue existiendo

La dirección `marcos-velasquez.github.io` está publicada en sitios que no controlo —perfiles, currículums enviados, mensajes—, y una dirección publicada no se puede retirar. Mientras alguien pueda llegar por ella, tiene que llevar a alguna parte.

Los archivos de `public/` se siguen publicando por la misma razón: un enlace directo al currículum o a una imagen sigue resolviendo en vez de romperse.

## Cómo redirige

GitHub Pages sirve archivos estáticos y no puede responder un `301`, así que la mudanza se declara por las tres vías que un cliente o un rastreador sí entienden:

| | |
| --- | --- |
| `rel="canonical"` | le dice a los buscadores cuál es la dirección buena |
| `<meta http-equiv="refresh">` | lleva al visitante aunque no tenga JavaScript |
| `location.replace()` | llega antes y no deja esta página en el botón de atrás |

La tercera importa más de lo que parece: con un `push` en lugar de un `replace`, volver atrás desde el sitio nuevo devuelve aquí, y esta página redirige otra vez. El visitante queda atrapado sin entender por qué.

Quien llegue con JavaScript desactivado y el refresh bloqueado ve una página con el enlace a la vista.

## Comandos

| Comando | Acción |
| --- | --- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor local en `localhost:4321` |
| `npm run build` | Compila a `./dist/` |
| `npm run preview` | Previsualiza el compilado |

El despliegue lo hace GitHub Actions con cada push a `main` ([`.github/workflows/static.yml`](.github/workflows/static.yml)).
