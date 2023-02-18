export const removeHtmlFromString = (html: string): string => {
  return html.replace(/(<([^>]+)>)/gi, "");
};
