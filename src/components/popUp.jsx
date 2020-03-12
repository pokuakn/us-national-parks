import React, { Component } from "react";

const dialogStyles = {
  width: "700px",
  maxWidth: "100%",
  margin: "0",
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "999",
  backgroundColor: "#eee",
  padding: "10px 20px 40px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column"
};

const dialogCloseButtonStyles = {
  marginBottom: "15px",
  padding: "3px 8px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "none",
  width: "30px",
  height: "30px",
  fontWeight: "bold",
  alignSelf: "flex-end"
};

export default class PopUp extends Component {
  render() {
    const { Name, Image, Location } = this.props.data;

    let popup = null;

    if (this.props.selectedPark === Name) {
      popup = (
        <div style={dialogStyles} id={Name}>
          <div className="row">
            <div className="col">
              <h4 className="text-secondary">{Name} National Park</h4>
              <h5 className="text-secondary">{Location}</h5>
            </div>
            <div className="col-1">
              <button
                style={dialogCloseButtonStyles}
                onClick={this.props.onClose}
              >
                &times;
              </button>
            </div>
          </div>
          <div>
            <img src={Image} alt={Name} width="100%" />
          </div>
        </div>
      );
    }

    return popup;
  }
}
