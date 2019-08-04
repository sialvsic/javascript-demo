let demoNode = ({
  tagName: 'ul',
  props: {'class': 'list'},
  children: [
    ({tagName: 'li', children: ['douyin']}),
    ({tagName: 'li', children: ['toutiao']})
  ]
});


function Element(type, props, children) {
  this.type = type;
  this.props = props;
  this.children = children || [];
}


Element.prototype.render = function () {

  let el = document.createElement(this.type);
  let props = this.props;

  for (let propName in props) {
    let value = props[propName];
    el.setAttribute(propName, value);
  }

  let children = this.children;
  children.forEach(function (child) {
    let childEl;
    if (child instanceof Element) {
      childEl = child.render();
    } else {
      childEl = document.createTextNode(child);
    }
    el.appendChild(childEl);
  });

  return el;
};


const ul = new Element('ul', {'class': 'list'}, [
  new Element('li', null, ['douyin']),
  new Element('li', null, ['toutiao']),
]);

const ulRoot = ul.render();
document.body.appendChild(ulRoot);