import { useState, useEffect } from "react";

/* function copyToClipboard(textToCopy) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(textToCopy);
  }
}
 */

const useClipboard: Function = (textToCopy: string) => {
  const [text, setText] = useState<string[]>([textToCopy]);

  const setClipboardText: Function = (text: string) => {
    if (navigator.clipboard) {
      return navigator.clipboard.writeText(text);
    }
  };

  useEffect(() => {
    setText((text) => [...text, textToCopy]);
  }, [textToCopy]);

  return [text, setClipboardText];
};

export default useClipboard;
