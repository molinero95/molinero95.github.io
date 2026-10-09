# Contexto para agentes

Este directorio es una web de pareja en español dentro de `molinero95/molinero95.github.io`. Mantener la publicación en `/historia-de-dos/`. No modificar ni sustituir los archivos históricos de la raíz sin una petición explícita.

- Web estática buildless: no framework/backend/dependencias por defecto.
- Mantener dominio y lógica de fechas en `dates.mjs`, sin DOM ni almacenamiento.
- Trabajar con días civiles, no diferencias de timestamps locales. Considerar bisiestos, DST, casos de porcentaje imposible y aniversarios del 29 de febrero.
- Guardado solo por opt-in; no enviar ni incorporar fechas personales a URLs, telemetría o publicidad.
- Evitar `innerHTML` con datos del usuario. Renderizar con `textContent` y elementos DOM.
- No activar publicidad sin cuenta real, aprobación, CMP certificada operativa y política de privacidad actualizada. Ver `docs/MONETIZACION.md`.
- Ejecutar `node --test historia-de-dos/tests/*.test.mjs` desde la raíz del repositorio y comprobar sintaxis de los módulos modificados.
- Comprobar móvil, teclado, errores del formulario, carga de datos y almacenamiento bloqueado al modificar UI. Si no hay navegador disponible, informar del límite de verificación.
- Publicación existente: rama `master`, raíz del repositorio. El workflow específico solo ejecuta pruebas; no modifica la publicación.
- Si se extrae a un repositorio propio o cambia el dominio, actualizar canonical, metadatos, URL compartida, tarjeta, docs y contacto. `ads.txt` debe mantenerse en la raíz del dominio.
