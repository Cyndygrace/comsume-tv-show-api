export const removeHtmlChars = (html) => {
  if (html == null) {
    return '';
  }
  return html.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, '').trim();
};
