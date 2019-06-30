import React, {Component, Fragment} from 'react';
import './App.sass';
import ListView from './component/ListView/ListView';
import { getRoot } from './data/api';
import FileView from './component/FileView/FileView';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {directory: {}, selected: []}
  }

  async componentDidMount() {
    const root = await getRoot();
    this.setState({directory: {...root}});
  }

  handleSelect = (key, level) => {
    const oldSelection = [...this.state.selected];
    const newSelection = oldSelection.slice(0, level).concat(key);
    this.setState({selected: newSelection});
  };

  // This function renders the nested view for the finder.
  renderNested(source, lvl) {
    if(lvl - 1 >= this.state.selected.length)
      return null;

    const key = this.state.selected[lvl - 1];
    const value = source[key];

    // If the type if object which means it's a directoy. Else if type is string which means it's a file.
    if(typeof value === "object") {
      // Render a ListView for directory.
      return <Fragment>
        <ListView key={key} contains={value} onSelect={(key) => this.handleSelect(key, lvl)} />
        {
          // Recursive call to render the nested child.
          this.renderNested(value, lvl + 1)
        }
      </Fragment>
    } else if(typeof value === 'string') {
      // Render the FileView if the selected element is file.
      return <FileView key={key} name={key} content={value} />
    }
  }

  render() {
    const {directory} = this.state;
    return <div className="App">
      <ListView contains={directory} onSelect={(key) => this.handleSelect(key, 0)}/>
      {
        this.renderNested(directory, 1)
      }
    </div>
  }
}

export default App;
