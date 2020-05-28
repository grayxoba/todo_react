import React, {Component} from 'react';
import "./Todolist.css";


class TodoList extends Component{
    render(){
        return(
            <div>
            <form onSubmit={this.props.addItem}>
                <input ref  ={this.props.inputElement}
                       value = {this.props.currentItem.text}
                       onChange={this.props.handleInput}
                />
                <button type="submit"> Добавить дело</button>
            </form>
            </div>
        )
    }
}
export default TodoList;

