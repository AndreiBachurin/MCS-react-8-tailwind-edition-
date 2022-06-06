import React from "react";
import Item from "./Item";

export default function AddItem(props) {
    return (
        <form onSubmit={props.onFormSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            onChange={props.onNameChange}
            value={props.name}
            id="name"
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
          />
        </div>
        <div>
          <label htmlFor="desc">Description: </label>
          <input
            onChange={props.onDescChange}
            value={props.desc}
            id="desc"
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
          />
        </div>
        <div className="form-footer">
          <div className="validation">
            {props.valid ? "" : "Заполнены не все поля"}
          </div>
          <input type="submit" className="ui-button" value="Добавить" />
        </div>
      </form>
    )
}