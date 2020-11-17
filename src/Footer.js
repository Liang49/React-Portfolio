import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div class="listContact">
          <div class="myContact">Email: liangzhang2014@gmail</div>
          <div class="myContact">Github: https://github.com/Liang49</div>
          <div class="myContact">Phone: 917-XXX-XXXX</div>
        </div>
        <hr />
        <div class="bottom">
          {"\u00A9"}Liang Front-Developer Portofilio All Rights Reserved
        </div>
      </div>
    );
  }
}

export default Footer;
