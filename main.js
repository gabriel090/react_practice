function render(reactElement, containerDOMElement) {
  //1.create a DOM element
  const domElelment = document.createElement(reactElement.type);
  //2. update properties
  domElelment.innerText = reactElement.children; 
  for(const key in reactElement.props){
    const value = reactElement.props[key];
    domElelment.setAttribut(key, value);
  }
  
  //3. put it in container
  containerDOMElement.appendChild(domElelment);
}
const reactElement = {
  type: "a",
  props: {
    id: "some -link",
    href: "https://wikipedia.org/",
  },
  children: "Read more on wikipedia",
};

const containerDOMElement = document.querySelector("#root");
render(reactElement, containerDOMElement);
