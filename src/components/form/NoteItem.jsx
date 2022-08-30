import React from "react";
import NoteAction from "./NoteAction";
import NoteContent from "./NoteContent";

export default class NoteItem extends React.Component {
  render() {
    const { id, title, body, archived, createdAt } = this.props;
    return (
      <div className="note-item">
        <NoteContent title={title} body={body} createdAt={createdAt} />
        <NoteAction
          handleDelete={this.props.handleDelete}
          id={id}
          archived={archived}
          arsipContact={this.props.arsipContact}
          moveContact={this.props.moveContact}
        />
      </div>
    );
  }
}
