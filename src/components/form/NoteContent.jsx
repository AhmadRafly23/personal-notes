import React from "react";
import { showFormattedDate } from "../../utils";

export default class NoteContent extends React.Component {
  render() {
    return (
      <div className="note-item__content">
        <h3 className="note-item__title">{this.props.title}</h3>
        <p className="note-item__date">
          {showFormattedDate(this.props.createdAt)}
        </p>
        <p className="note-item__body">{this.props.body}</p>
      </div>
    );
  }
}
