export const classJoiner = (styles: any, classes: string[]) => {
  return classes.map((val: string) => styles[`${val}`]).join(' ');
};
