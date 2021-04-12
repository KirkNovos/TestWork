import React, { Component } from 'react'


export default class Ccomponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            visibilty: false,
            input:"",
            items: [],
            inputDate: ""
        };
        this.NewWindow = this.NewWindow.bind(this);
        this.AddService = this.AddService.bind(this);
        this.AddService2= this.AddService2.bind(this);
        this.AddDate=this.AddDate.bind(this);
    }

    //constructor(props){
     //   super(props)
      //  this.state = {
       //     input:""
        //};
        //this.AddService = this.AddService.bind(this);
   // }


    AddDate(event){
        this.setState({
            inputDate: event.target.value
        });
    }

    AddService(event){
        this.setState({
            input: event.target.value
        });
    }
    AddService2(event){
        event.preventDefault();
        this.setState({
            input: this.state.input,
            items: [...this.state.items,this.state.input, this.state.inputDate]
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
                        <label>Дата: </label>
                        <input type='Date' value={this.state.inputDate} onChange={this.AddDate}></input>
                        <label>Описание: </label>
                        <input value={this.state.input} onChange={this.AddService} maxLength="120"/>
                        <button type="submit">Добавить запись</button>
                    </form>
                    <h3>Запись</h3>

                  <table>
                      <tr>
                        {this.state.items.map((item, index) => (
                          <td key = {index}>{item}</td>
                        ))}
                      </tr>
                  </table>

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
