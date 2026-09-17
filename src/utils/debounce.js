export function debounce(callee, timeoutMs) {
  let timer = null;

  return function perform(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => callee(...args), timeoutMs);
  };
}
