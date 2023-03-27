export function validate({ data }) {
  const errors = {};
  const regexURL = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;

  if (!data.name) errors.name = 'Se debe ingresar un nombre a la receta';
  if (data.name.length < 4) errors.name = 'Longitud insuficiente';
  if (!regexURL.test(data.image))
    errors.image = 'la infomarcion no coincide con una URL valida';
  if (!data.summary) errors.summary = 'Se debe ingresar un Resumen a la receta';
  if (data.summary.length < 10)
    errors.summary = 'Se debe agregar mas caracteres al resumen de la receta';
  if (!data.healthScore)
    errors.healthScore = 'se debe ingresar un valor de HealthScore a la receta';
  //   if (data.diets.length < 1)
  //     errors.diets =
  //       'se debe seleccionar al menos 1 tipo de dieta para la receta';

  // errors.bandera = true;
  return errors;
}
