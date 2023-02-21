class MyComponent {
    constructor() {
      this.state = { name: 'Geeks', age: 15 };
    }
  
    handleClick() {
      this.setState({ name: 'Geeks', age: 15});
    }
  
    render() {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.innerText = `имя: ${this.state.name}, возраст: ${this.state.age}`;
      const button = document.createElement('button');
      button.innerText = 'Нажми на меня';
      button.addEventListener('click', () => this.handleClick());
      div.appendChild(p);
      div.appendChild(button);
      return div;
    }
  }
const myComponent = new MyComponent();
document.body.appendChild(myComponent.render());



