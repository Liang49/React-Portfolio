import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div class="form-page">
        <h1 class="contact-page">Contact</h1>
        <form>
          <div class="label">
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
          </div>

          <div>
            <textarea class="message" type="message" placeholder="Message" />
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
