import { useRef, useEffect } from "react";

export default function useTitle(
  title,
  prevailOnUnmount = false,
  devider = "|"
) {
  const defaultTitleComponent = useRef(document.title);
  const length = defaultTitleComponent.current.split(devider).length;
  const defaultTitle = defaultTitleComponent.current.split(devider)[length - 1];
  useEffect(() => {
    if (defaultTitle) {
      document.title = `${title} ${devider} ${defaultTitle}`;
    } else {
      document.title = `${title}`;
    }
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    []
  );
  return document.title;
}
