export const utils = {
  m: (value: string | number) => ({
    margin: value,
  }),
  mt: (value: string | number) => ({ marginTop: value }),
  mr: (value: string | number) => ({ marginRight: value }),
  mb: (value: string | number) => ({ marginBottom: value }),
  ml: (value: string | number) => ({ marginLeft: value }),
  mx: (value: string | number) => ({
    marginRight: value,
    marginLeft: value,
  }),
  my: (value: string | number) => ({
    marginTop: value,
    marginBottom: value,
  }),
  p: (value: string | number) => ({
    padding: value,
  }),
  pt: (value: string | number) => ({ paddingTop: value }),
  pr: (value: string | number) => ({ paddingRight: value }),
  pb: (value: string | number) => ({ paddingBottom: value }),
  pl: (value: string | number) => ({ paddingLeft: value }),
  px: (value: string | number) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: string | number) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  br: (value: string | number) => ({ borderRadius: value }),
  brt: (value: string | number) => ({
    borderTopLeftRadius: value,
    borderTopRightRadius: value,
  }),
  brr: (value: string | number) => ({
    borderBottomRightRadius: value,
    borderTopRightRadius: value,
  }),
  brl: (value: string | number) => ({
    orderBottomLeftRadius: value,
    borderTopLeftRadius: value,
  }),
  brb: (value: string | number) => ({
    borderBottomLeftRadius: value,
    borderBottomRightRadius: value,
  }),
  btlr: (value: string | number) => ({ borderTopLeftRadius: value }),
  btrr: (value: string | number) => ({ borderTopRightRadius: value }),
  bblr: (value: string | number) => ({ borderBottomLeftRadius: value }),
  bbrr: (value: string | number) => ({ borderBottomRightRadius: value }),
  w: (value: string | number) => ({ width: value }),
  minW: (value: string | number) => ({ minWidht: value }),
  maxW: (value: string | number) => ({ maxWidth: value }),
  h: (value: string | number) => ({ height: value }),
  minH: (value: string | number) => ({ minHeight: value }),
  maxH: (value: string | number) => ({ maxHeight: value }),
  boxSize: (value: string | number) => ({ width: value, height: value }),
};
