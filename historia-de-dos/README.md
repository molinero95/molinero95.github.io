# Historia de dos

Calculadora de estadísticas de pareja en español, gratuita y sin registro.

URL: https://molinero95.github.io/historia-de-dos/

Se añade como subdirectorio al repositorio público `molinero95/molinero95.github.io`, manteniendo la página y los recursos anteriores. La publicación existente de GitHub Pages sirve los archivos estáticos de `master`. No requiere npm, backend, base de datos ni un proceso de compilación.

## Funciones

- Días, años, meses y días de relación; semanas y horas equivalentes.
- Porcentaje de la vida juntos para cada persona.
- Edad al inicio de la relación.
- Próximo aniversario, siguiente múltiplo de 1.000 días y siguiente hito porcentual.
- Aniversario de boda y cuenta atrás con título y fecha personalizados.
- Fecha y edad para alcanzar un porcentaje del 1 al 99 %, mediante un deslizador.
- Porcentaje a una edad elegida.
- Exportación de fechas al calendario (ICS), compartir texto y guardar tarjeta PNG.
- Guardado voluntario en localStorage y borrado de datos.
- Configuración para integrar AdSense, desactivada hasta completar los requisitos.

## Desarrollo

Desde la raíz del repositorio:

```sh
node --test historia-de-dos/tests/*.test.mjs
node --check historia-de-dos/app.mjs
node --check historia-de-dos/ads.mjs
python3 -m http.server 8000
```

Abrir `http://localhost:8000/historia-de-dos/`. Los módulos ES necesitan HTTP; no abrir `index.html` con `file://`.

Los tests también se ejecutan mediante `.github/workflows/historia-de-dos-checks.yml`. Este workflow comprueba el código; la publicación usa la configuración de GitHub Pages existente. Si se cambia esa configuración, seleccionar `master` y `/ (root)` en Settings → Pages o configurar un workflow de despliegue explícito.

## Estructura

- `dates.mjs`: dominio, fechas civiles y fórmulas puras.
- `app.mjs`: formulario, presentación, guardado, compartir y exportar.
- `ads.mjs` / `config.mjs`: cuenta de AdSense y requisitos de activación de unidades manuales.
- `../ads.txt`: autorización del publisher en la raíz del dominio.
- `index.html` / `styles.css`: interfaz responsive y accesible.
- `privacidad.html`: tratamiento de datos de la versión sin publicidad.
- `tests/`: pruebas con el test runner de Node, sin dependencias.
- `docs/MONETIZACION.md`: pasos de activación y limitaciones del alojamiento.

## Convenciones de cálculo

`porcentaje = (hoy − inicio) / (hoy − nacimiento) × 100`.

Para un objetivo `p` expresado entre 0 y 1:

`fecha = inicio + p × (inicio − nacimiento) / (1 − p)`.

Se redondea hacia arriba al primer día civil que cumple el porcentaje. Los días incluyen bisiestos y no dependen del horario de verano. El cálculo usa el calendario local del visitante; las fechas se representan internamente como números enteros de días UTC. Si la relación empezó al nacer, el porcentaje es 100 % desde el principio. Si empezó después, el 100 % no se alcanza. Porcentajes muy próximos al 100 % se muestran como `>99,9 %` para no redondearlos erróneamente a 100 %.

Los aniversarios del 29 de febrero se llevan al 28 de febrero en años no bisiestos. Un aniversario que cae hoy se muestra como «Hoy». Los próximos múltiplos de 1.000 días son estrictamente futuros. Una cuenta personalizada en el pasado muestra días transcurridos. Las horas son equivalentes de días completos, no un contador exacto desde una hora desconocida. Las fechas porcentuales posteriores a 9999 se muestran como fuera del intervalo calculable.

## Privacidad

Los datos personales se calculan en el cliente y no aparecen en la URL. Se guardan solo si el visitante lo elige. El script de Google AdSense se carga para conectar y verificar el sitio; las unidades manuales siguen desactivadas hasta la aprobación y configuración de consentimiento. La política explica la conexión con Google. Compartir no añade las fechas personales como campos, aunque los números pueden permitir inferencias. El ejemplo usa datos ficticios y no reemplaza los datos persistidos automáticamente.

## Próximas mejoras

- Dominio propio y valoración del alojamiento para una fase comercial.
- Configurar AdSense/CMP y completar la política con la identidad y contacto del responsable.
- Tarjetas con otros estilos e internacionalización.
- Pruebas reales en Safari/iOS, Chrome/Android y lectores de pantalla.
- Más cuentas atrás y aniversarios personalizados, sin introducir cuentas de usuario salvo necesidad.
