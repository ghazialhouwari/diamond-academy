export function useDetectOutsideClick(
  componentRef: Ref<HTMLElement | undefined>,
  callback: Function
) {
  if (!componentRef) return;
  const listener = (event: MouseEvent) => {
    if (
      !componentRef.value ||
      (event.target !== componentRef.value &&
        event.composedPath().includes(componentRef.value))
    ) {
      return;
    }
    if (typeof callback === "function") {
      callback();
    }
  };
  onMounted(() => {
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });

  return { listener };
}
