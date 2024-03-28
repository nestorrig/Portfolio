/* eslint react/prop-types: 0 */
import { icons } from "./";

export const Icon = ({ name, ...props }) => {
  const SvgIcon = icons[name];
  if (!SvgIcon) {
    // puedes renderizar un icono por defecto o simplemente devolver null si el nombre del icono no es válido
    return null;
  }
  return <SvgIcon {...props} />;
};