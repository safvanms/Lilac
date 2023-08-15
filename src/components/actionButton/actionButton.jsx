import React from 'react';

const actionButtonStyle = {
  width: "30px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

export default function ActionButton({ background, icon }) {
  const buttonStyle = {
    ...actionButtonStyle,
    backgroundColor: background
  };

  return (
    <div style={buttonStyle}>
      {icon}
    </div>
  );
}






