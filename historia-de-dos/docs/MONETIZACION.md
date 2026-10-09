# Publicidad y monetización

El editor ha facilitado el publisher `ca-pub-8961230782201093`. Se ha añadido su script de conexión en el `<head>` de la página raíz y de la calculadora, junto a la etiqueta de verificación `google-adsense-account`, y se ha publicado su registro en `/ads.txt`. El enlace de la raíz permite descubrir la calculadora.

**Las unidades manuales de la calculadora siguen desactivadas** (`enabled: false`): conectar el sitio no equivale a la aprobación ni a generar ingresos. Los anuncios automáticos son una configuración externa del panel de AdSense; mantenerlos desactivados hasta completar aprobación, CMP y política. El script de conexión ya solicita archivos a Google y la política de privacidad se ha actualizado para reflejarlo. La aprobación y los ingresos no están garantizados.

## Antes de activar

1. Crear o utilizar una cuenta propia de Google AdSense. Añadir el sitio que indique el panel (la propiedad está bajo `molinero95.github.io`; un dominio propio puede facilitar su gestión). Seguir el proceso oficial de verificación y esperar la aprobación. Si requiere una etiqueta de verificación, usar el código exacto de la cuenta; no activar anuncios para intentar eludir la revisión.
2. Revisar la calidad del contenido, navegación, política de privacidad y requisitos de la cuenta. Una calculadora breve puede necesitar más contenido útil original para aprobarse. No añadir artículos vacíos únicamente para aumentar páginas.
3. Crear una unidad de anuncios display responsive. Obtener `ca-pub-…` y el ID de la unidad.
4. Configurar y publicar una CMP certificada por Google para el EEE, Reino Unido y Suiza. Google ofrece una opción en AdSense → Privacidad y mensajes. Comprobar su despliegue real: establecer un booleano no crea una CMP. Usar las instrucciones del proveedor para consentimiento, rechazo, revocación y el inicio de solicitudes publicitarias. No sustituirla por un banner casero.
5. Actualizar `privacidad.html`: identidad y contacto adecuados del responsable, proveedores de anuncios, finalidades y datos tratados, almacenamiento, transferencias cuando proceda, opciones de consentimiento y retirada. La política actual describe únicamente la versión sin anuncios; no sirve sin cambios para la versión monetizada.
6. Publicar el `ads.txt` que proporcione AdSense en la raíz del alojamiento: `https://molinero95.github.io/ads.txt`. Es un archivo del **root del repositorio**, no de `historia-de-dos/`. Copiar el publisher real y no pisar registros de otros sitios del mismo propietario. Ya se ha publicado el registro estándar correspondiente al publisher facilitado; comprobarlo contra el fragmento que muestre el panel de AdSense.
7. Rellenar `config.mjs` con los valores reales, marcar `certifiedCmpConfigured` y `privacyPolicyReady` solo tras verificar los puntos anteriores y activar `enabled`. `ads.mjs` carga una unidad display separada de los controles; no hay popups ni anuncios camuflados como resultados. No habilitar Auto Ads desde el panel sin revisar su comportamiento.
8. Probar en móvil y escritorio con las elecciones de aceptar, rechazar y retirar consentimiento. Comprobar la política, el mensaje, el botón de preferencias, las solicitudes de red y que no haya CLS importante. Nunca hacer clic en tus propios anuncios ni pedir a otras personas que lo hagan.

## Alojamiento

GitHub Pages limita el uso del servicio como alojamiento gratuito para un negocio online, comercio electrónico o SaaS comercial. No hay una autorización general explícita para toda web financiada con anuncios en esa documentación. Esta versión es una herramienta gratuita sin transacciones y la publicidad está desactivada. Antes de convertirla en un negocio basado en ingresos publicitarios, revisar el uso permitido con GitHub y, si corresponde, mantener el código en GitHub y alojar la web en un servicio adecuado para uso comercial. La estructura estática hace sencilla esa migración.

## Qué hará falta aportar

- Cuenta y aprobación de AdSense.
- ID de unidad display (publisher ya configurado).
- Configuración efectiva de CMP (ads.txt ya publicado).
- Identidad y contacto del responsable para la política de privacidad.

No hace falta compartir contraseñas ni claves privadas. Los IDs del publisher y unidad se incorporan al código público del sitio.

## Documentación oficial

- [Añadir un sitio a AdSense](https://support.google.com/adsense/answer/9131547?hl=es)
- [Conectar el sitio a AdSense](https://support.google.com/adsense/answer/7584263?hl=es)
- [CMP y requisitos europeos de Google](https://support.google.com/adsense/answer/13554116?hl=es)
- [Guía de ads.txt](https://support.google.com/adsense/answer/7532444?hl=es)
- [Límites y uso de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

Para ingresos sostenidos harán falta visitas reales y recurrentes. El primer paso es que la calculadora sea útil y compartible; no hay una estimación de ingresos fiable sin conocer tráfico, países y rendimiento real.
