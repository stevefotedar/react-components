// TODO
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    }
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    let style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
    <li style={style} onMouseLeave={this.onListItemHover.bind(this)} onMouseEnter={this.onListItemHover.bind(this)}>{this.props.items}</li>
    )
  }
}

let GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    <ul>
      {props.items.map(items => <GroceryListItem items={items}/>)}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList items={["Apples","Bananas","Pears"]}/>, document.getElementById('app'));