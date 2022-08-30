import React from "react";
import { createRoot } from "react-dom/client";
import NoteBody from "./components/form/NoteBody";
import Navbar from "./components/header/Navbar";
import Swal from "sweetalert2";

// import style
import "./styles/style.css";
import { getInitialData } from "./utils";

class Coba extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getInitialData(),
      inputTitle: "",
      inputBody: "",
      inputSearch: "",
      contactsArsip: [],
    };
  }

  handleChangeTitle = (event) => {
    const maxLength = 50;
    this.setState(() => {
      return {
        inputTitle: event.target.value.slice(0, maxLength),
      };
    });
  };

  handleChangeBody = (event) => {
    this.setState(() => {
      return {
        inputBody: event.target.value,
      };
    });
  };

  generateId = () => {
    return Date.now();
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.inputTitle === "" || this.state.inputBody === "")
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tolong isikan dengan lengkap!",
      });
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: this.generateId(),
            title: this.state.inputTitle,
            body: this.state.inputBody,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
        inputTitle: "",
        inputBody: "",
      };
    });
  };

  deleteContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
        contactsArsip: prevState.contactsArsip.filter(
          (contact) => contact.id !== id
        ),
      };
    });
  };

  arsipContact = (id) => {
    this.setState((prevState) => {
      const filterArsip = prevState.contacts.filter(
        (contact) => contact.id === id
      );
      return {
        contacts: prevState.contacts.map((contact) => {
          if (contact.id === id) {
            return {
              ...contact,
              archived: !contact.archived,
            };
          } else {
            return contact;
          }
        }),
        contactsArsip: [...prevState.contactsArsip, filterArsip[0]],
      };
    });
  };

  moveContact = (id) => {
    this.setState((prevState) => {
      const filterArsip = prevState.contactsArsip.filter(
        (contact) => contact.id !== id
      );
      return {
        contacts: prevState.contacts.map((contact) => {
          if (contact.id === id) {
            return {
              ...contact,
              archived: !contact.archived,
            };
          } else {
            return contact;
          }
        }),
        contactsArsip: filterArsip,
      };
    });
  };

  handleSearch = (event) => {
    return this.setState(() => {
      return {
        inputSearch: event.target.value,
      };
    });
  };

  render() {
    const filterContacts = this.state.contacts.filter((contact) => {
      return contact.title
        .toLowerCase()
        .includes(this.state.inputSearch.toLowerCase());
    });
    return (
      <div>
        <Navbar
          handleSearch={this.handleSearch}
          inputSearch={this.state.inputSearch}
        />
        <NoteBody
          contacts={filterContacts}
          contactsArsip={this.state.contactsArsip}
          inputTitle={this.state.inputTitle}
          inputBody={this.state.inputBody}
          handleChangeTitle={this.handleChangeTitle}
          handleChangeBody={this.handleChangeBody}
          handleSubmit={this.handleSubmit}
          deleteContact={this.deleteContact}
          arsipContact={this.arsipContact}
          moveContact={this.moveContact}
        />
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<Coba />);
