import React, { Component } from 'react'


export default class Ccomponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            visibilty: false,
            input:"",
            items: []
        };
        this.NewWindow = this.NewWindow.bind(this);
        this.AddService = this.AddService.bind(this);
        this.AddService2= this.AddService2.bind(this);
    }

    //constructor(props){
     //   super(props)
      //  this.state = {
       //     input:""
        //};
        //this.AddService = this.AddService.bind(this);
   // }

    AddService(event){
        this.setState({
            input: event.target.value
        });
    }
    AddService2(event){
        event.preventDefault();
        this.setState({
            input: this.state.input,
            items: [...this.state.items,this.state.input]
        });
    }
    

    NewWindow(){
        this.setState(state =>({
            visibilty: !state.visibilty
        }));
    }
    render() {
        if (this.state.visibilty){
            return (
                <div>
                    <form onSubmit={this.AddService2}>
                        <input value={this.state.input} onChange={this.AddService}/>
                        <button type="submit">Добавить запись</button>
                    </form>
                    <h3>Запись</h3>
                    
                   <ul>
                       {this.state.items.map((item, index) => (
                           <li key = {index}>{item}</li>
                       ))}
                   </ul>
                    <h1>{this.state.submit}</h1>
                    <button onClick={this.NewWindow} >Вернуться обратно</button>
                </div>
            );
        }
        else{
            return(
                <div>
                    <h1>Тестовое Задание</h1>
                    <button onClick={this.NewWindow} >Окно Событий</button>
                </div>
            )
        }
    }
}
