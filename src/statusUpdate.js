export default function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}