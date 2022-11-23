import {
  useEffect,
  useState,
} from 'react';

export default function useAnchors() {
  const [anchors, setAnchors] = useState<Array<string>>([]);
  useEffect(() => {
    setAnchors(Array.from(document.getElementsByClassName('anchor')).map((h) => h.textContent) as Array<string>);
  }, []);

  return anchors;
}
