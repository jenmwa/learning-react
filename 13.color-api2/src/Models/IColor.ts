

export interface IColor {
  hex: {
    value: string,
  },
  name: {
    value: string,
  },
  image: {
    named: string,
    closest_named_hex: string,
  },
  contrast: {
    value: string,
  },
  rgb: {
    value: string,
  },
  hsl: {
    value: string,
  },
  hsv: {
    value: string,
  },
  cmyk: {
    value: string,
  },
  XYZ: {
    value: string,
  },
}