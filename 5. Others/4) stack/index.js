class Stack {
  constructor() {
      this.stack = [];
      this.size = this.stack.length;
  }
  push(item) {
      this.stack.push(item);
      this.size = this.stack.length;
      return this;
  }
  pop () {
      if (this.stack.length === 0) {
          throw new Error('Stack is empty!');
      } else {
          this.stack.pop();
          this.size = this.stack.length;
          return this;
      }
  }
  isEmpty () {
      return this.stack.length === 0;
  }
  print () {
      return `[${this.stack.slice().join(', ')}]`;
  }
}

window.Stack = Stack;

export default Stack;
