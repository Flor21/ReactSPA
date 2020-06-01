import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div>
          <img src="../img/whassap.png" alt="whassap" width={50} height={50} />
        </div>
        <div className="phone"> Phone: 111-12820</div>
        <div className="address">
          {" "}
          Addres: P. Sherman, calle Wallaby, 42, Sydney
        </div>
        <div className="phase"> Love of natural colors</div>
      </div>
    );
  }
}
