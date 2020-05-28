import React, {Component} from "react";
import './todoitem.css'

const liCss = {
    margin: "30px",
    border: "2px solid black",
    width: "150px",
    padding: "10px",
    borderRadius: "5px",

}

class TodoItem extends Component{
    createTasks = item => {
        return (
            <div style={liCss} key={item.inner_key} className="deal">
                <span className="deal__text">{item.text} </span>
                <button onClick={() => this.props.deleteItem(item.inner_key)}>
                    Удалить
                </button>
            </div>
        )
    }
        render(){
            const ListEn =  this.props.entries;
            const ListItems = ListEn.map(this.createTasks)
            return <div> {ListItems}</div>
        }
}

export default TodoItem;