import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        // Destructure the person object to get id, name, age, and image
        return (
          <div
            key={id}
            className="person"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              background: "#fff",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <img
              className="person-img"
              src={image}
              alt={name}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "1rem",
                border: "2px solid #f28ab2",
              }}
            />
            <div>
              <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#333" }}>
                {name}
              </h4>
              <p style={{ margin: 0, color: "#888" }}>{age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
