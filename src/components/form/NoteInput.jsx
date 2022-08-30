import React from "react";

export default class NoteInput extends React.Component {
  countCharacter(char) {
    const charCount = 50 - char;
    return charCount;
  }
  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.props.handleSubmit}>
          <p className="note-input__title_char-limit">
            Sisa Karakter: {this.countCharacter(this.props.inputTitle.length)}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={this.props.inputTitle}
            onChange={this.props.handleChangeTitle}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu di sini ..."
            value={this.props.inputBody}
            onChange={this.props.handleChangeBody}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}
