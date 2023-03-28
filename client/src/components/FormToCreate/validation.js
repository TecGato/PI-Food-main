export function validate({ data }) {
  const errors = {};
  const regexURL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

  if (!data.name) errors.name = 'Se debe ingresar un nombre a la receta';
  if (data.name.length < 4) errors.name = 'Longitud insuficiente';
  if (data.name[0] !== data.name[0]?.toUpperCase())
    errors.name = 'La primera letra debe ser Mayuscula';
  if (!regexURL.test(data.image))
    errors.image = 'la infomarcion no coincide con una URL valida';
  if (!data.summary) errors.summary = 'Se debe ingresar un Resumen a la receta';
  if (data.summary.length < 10)
    errors.summary = 'Se debe agregar mas caracteres al resumen de la receta';
  if (!data.healthScore)
    errors.healthScore = 'Se debe ingresar un valor de HealthScore a la receta';
  if (data.healthScore > 100 || data.healthScore < 1)
    errors.healthScore = 'El valor de HealhScore debe ser entre 1 y 100';

  return errors;
}
