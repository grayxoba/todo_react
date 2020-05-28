import React, { Component } from 'react';
import Watch from "./Watch";
import TodoList from  "./TodoList"
import TodoItem from "./TodoItem";



let h1_style  = {
    textAlign:'center',
    color: 'red'
}




class App extends Component{
    constructor() {
        super();
        this.state = {
            // error:null,
            // isLoaded: false,
            items: [],
            currentItem:{text:  'first', inner_key:"firstItem"}
        }
    }

    handleInput = e =>{
        const  itemText = e.target.value; // здесь получаем значение из input
        const currentItem = {text: itemText, inner_key:  Date.now()} // объект дела с двумя свойствами item и key
        this.setState({
            currentItem, // обновляем состояние
        })
    }

    addItem = e => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text !== '') {
            const items = [...this.state.items, newItem] // "..." оператор spread
            this.setState({
                items:items,
                currentItem: {text: '', key: ''} // очищение input'a
            })
        }
    }

    deleteItem  = inner_key =>{
        const filteredItems = this.state.items.filter(item=>{
            return item.inner_key !== inner_key
        })
        this.setState({
            items:filteredItems,
        })
    }



render(){
return(
    <div>
        <Watch/>
    <h1 style={h1_style}> Приложение для создания своих дел </h1>
        <TodoList
            addItem = {this.addItem}
            inputElement = {this.inputElement}
            handleInput = {this.handleInput}
            currentItem = {this.state.currentItem}
        />
            <TodoItem entries = {this.state.items}  deleteItem={this.deleteItem} />
    </div>)
    }
}



export default App;