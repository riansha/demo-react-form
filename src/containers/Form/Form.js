import React, { Component } from 'react'

import classes from './Form.module.scss'

import Input from '../../components/Input/Input'

export default class Form extends Component {
  state = {
    dataForm : {
      name: "",
      books: [
        { id: 1, nameBook: "", yearBook:"", author: ""},
      ],
      library: [
        { id: 1, name: "", address: "" , keeper: ""}
      ]
    },
    data2: {
      newInput: {
        elType : "input",
        placeholder: "test",
        value: ""
      },
      newInput2: {
        elType : "input2",
        placeholder: "test2",
        value: ""
      }
    }
  }

  changeHandler=(e, method, key, indexArray)=>{
    const name = e.target.name;
    const value = e.target.value;
    switch (method)
    {
      case 'single' :
        this.setState(state=> ({
          ...state,
          dataForm: {
            ...state.dataForm,
            [name]: value
          }
        }))
        break;
      case 'Obj' :
        this.setState(state=>({
            ...state,
            dataForm:{
              ...state.dataForm,
              [name]:{
                ...state.dataForm[name],
                [indexArray]:{
                  ...state.dataForm[name][indexArray],
                  [key] : value
                }
              }
            }
          }))
        break;
      default: break;
    }
  }

  newHandler = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    console.log(name);
    console.log(value);
    console.log(this.state.data2);
    
    
    this.setState(state=>({
      ...state,
      data2:{
        ...state.data2,
        [name]:{
          ...this.state.data2[name],
          value: value
        }
      }
    }))
  }

  addField = (e, field)=>{
    e.preventDefault();
    let newArray = []

    switch(field)
    {
      case 'books' :
        newArray = [
          {
            nameBook: "",
            yearBook: "",
            author: ""
          }
        ]
        break;
      case 'library' :
        newArray = [
          {
            name: "",
            address: "",
            keeper: ""
          }
        ]
        break;
      default: break;
    }

    this.setState((state)=>({
        ...state,
        dataForm:{
          ...state.dataForm,
          [field]:[
            ...state.dataForm[field],
            ...newArray
            ]
          }
        })
      )
  }

  render() {
    return (
      <div>
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className={classes.section}>
            <h4>name</h4>
            <span>
              <input type="text" name="name" placeholder="name" onChange={(e)=>this.changeHandler(e, "single")}  />
            </span>
          </div>
          <div className={classes.section}>
            <h4>books</h4>
            {
              Object.keys(this.state.dataForm.books).map(index=>{
                return(
                  <span key={"book" + index}>
                    <input type="text" name="books" placeholder="name book" onChange={(e)=>this.changeHandler(e, "Obj","nameBook", index)} />
                    <input type="text" name="books" placeholder="year book" onChange={(e)=>this.changeHandler(e, "Obj","yearBook", index)} />
                    <input type="text" name="books" placeholder="author book" onChange={(e)=>this.changeHandler(e, "Obj","author", index)} />
                    {
                      index == [this.state.dataForm.books.length - 1] ?
                      <button onClick={(e)=>this.addField(e, "books")}>add</button> : null
                    }
                  </span>
                )
              })
            }
          </div>
          <div className={classes.section}>
            <h4>library</h4>
            {
              Object.keys(this.state.dataForm.library).map(index=>{
                return(
                  <span key={"library" + index}>
                    <input type="text" name="library" placeholder="name" onChange={(e)=>this.changeHandler(e, "Obj","name", index)} />
                    <input type="text" name="library" placeholder="address" onChange={(e)=>this.changeHandler(e, "Obj","address", index)} />
                    <input type="text" name="library" placeholder="keeper" onChange={(e)=>this.changeHandler(e, "Obj","keeper", index)} />
                    {
                      index == [this.state.dataForm.library.length - 1] ?
                      <button onClick={(e)=>this.addField(e, "library")}>add</button> : null
                    }
                  </span>
                )
              })
            }
          </div>
          <div className={classes.section}>
            <p>error, setelah ketik di field books dan library, button ga bsa di klik</p>
          </div>

          <div className={classes.section}>
            <h4>school</h4>
            <span>
              <Input data={this.state.data2} field="newInput" newHandler={this.newHandler} />
              <Input data={this.state.data2} field="newInput2" newHandler={this.newHandler} />
            </span>
          </div>
          <div className={classes.section}>
            {/* <p>error, return undefine di school waktu ketik</p> */}
            <p>clear</p>
          </div>
        </form>
      </div>
    )
  }
}
