import React from "react";
import NoteInput from "./NoteInput";
import NoteItem from "./NoteItem";
import NoteList from "./NoteList";

export default class NoteBody extends React.Component {
  render() {
    return (
      <div className="note-app__body">
        <NoteInput
          inputTitle={this.props.inputTitle}
          inputBody={this.props.inputBody}
          handleChangeTitle={this.props.handleChangeTitle}
          handleChangeBody={this.props.handleChangeBody}
          handleSubmit={this.props.handleSubmit}
        />
        <h2>Catatan Aktif</h2>
        <NoteList
          contacts={this.props.contacts}
          handleDelete={this.props.deleteContact}
          arsipContact={this.props.arsipContact}
          moveContact={this.props.moveContact}
        />
        <h2>Arsip</h2>
        {this.props.contactsArsip.length === 0 ? (
          <p className="notes-list__empty-message">Tidak ada catatan</p>
        ) : (
          <div className="notes-list">
            {this.props.contacts.map((contact) => {
              if (contact.archived) {
                return (
                  <NoteItem
                    key={contact.id}
                    {...contact}
                    handleDelete={this.props.deleteContact}
                    arsipContact={this.props.arsipContact}
                    moveContact={this.props.moveContact}
                  />
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    );
  }
}
