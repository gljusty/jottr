export const setClipboardText: Function = (text: string) => {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
};
