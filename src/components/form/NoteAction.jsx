import React from "react";

export default class NoteAction extends React.Component {
  render() {
    return (
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => this.props.handleDelete(this.props.id)}
        >
          Delete
        </button>
        {this.props.archived ? (
          <button
            className="note-item__archive-button"
            onClick={() => this.props.moveContact(this.props.id)}
          >
            Pindahkan
          </button>
        ) : (
          <button
            className="note-item__archive-button"
            onClick={() => this.props.arsipContact(this.props.id)}
          >
            Arsipkan
          </button>
        )}
      </div>
    );
  }
}
