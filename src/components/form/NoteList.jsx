import React from "react";
import NoteItem from "./NoteItem";

export default class NoteList extends React.Component {
  render() {
    const { contacts } = this.props;
    return (
      <>
        {contacts.length === 0 ? (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
          <div className="notes-list">
            {contacts.map((contact) => {
              if (!contact.archived) {
                return (
                  <NoteItem
                    key={contact.id}
                    {...contact}
                    handleDelete={this.props.handleDelete}
                    arsipContact={this.props.arsipContact}
                    moveContact={this.props.moveContact}
                  />
                );
              }
              return null;
            })}
          </div>
        )}
      </>
    );
  }
}
