总结

event.stopPropagation()
用来阻止事件冒泡的，不会传递到父节点，但是会依次的执行本节点添加的其他的监听器

event.stopImmediatePropagation()
用来阻止事件冒泡的，不会传递到父节点，同时会阻止当前节点的监听器继续执行