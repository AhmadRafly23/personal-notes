import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari catatan ..."
            onChange={this.props.handleSearch}
            value={this.props.inputSearch}
          />
        </div>
      </div>
    );
  }
}
