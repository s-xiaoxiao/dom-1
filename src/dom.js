window.dom = {
  find(node, scope) {
    return (scope || document).querySelectorAll(node);
  },
  style(node, name, value) {
    //设置一个样式
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        //得到样式值
        return node.style[name];
      } else if (name instanceof Object) {
        //设置多个样式
        for (key in name) {
          node.style[key] = name[key];
        }
      }
    } else {
      return null;
    }
  },
  each(node, fn) {
    for (let i = 0; i < node.length; i++) {
      fn(node[i], fn);
    }
  }
};
