// TODO
const GroceryListItems = (props) => (
  <ul>
    <li>{props.items[0]}</li>
    <li>{props.items[1]}</li>
  </ul>
);

let GroceryList = () => (
  <div>
    <h2>GroceryList</h2>
    <GroceryListItems items={['Apples', 'Bananas']}/>
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));