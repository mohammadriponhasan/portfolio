import { useState, useCallback } from 'react';

export const useCopyToClipboard = (resetDuration = 3000) => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((text: string) => {
    if (!navigator.clipboard) {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), resetDuration);
      } catch (err) {
        console.error('Failed to copy', err);
      }
      document.body.removeChild(textArea);
      return;
    }

    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), resetDuration);
      },
      (err) => console.error('Failed to copy text', err)
    );
  }, [resetDuration]);

  return { copied, copy };
};
