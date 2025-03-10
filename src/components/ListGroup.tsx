import { Fragment, useEffect, useState } from "react";

interface Theme {
  id: string;
  name: string;
  colors: Colors[];
}

interface Colors {
  role: string;
  value: string;
  name: string;
}

interface Props {
  themes: Theme[];
  heading: string;
}

export default function ListGroup({ themes, heading }: Props) {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(() => {
    const savedTheme = localStorage.getItem("current-theme");
    return savedTheme ? JSON.parse(savedTheme) : null;
  });

  const handleThemeClick = (theme: Theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  return (
    <>
      <h1>{heading}</h1>
      {themes.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {themes.map((theme) => (
          <li
            key={theme.name}
            className={`list-group-item cursor-pointer ${
              selectedTheme && theme.name === selectedTheme.name ? "active" : ""
            }`}
            onClick={() => handleThemeClick(theme)}
          >
            {theme.name}
          </li>
        ))}
      </ul>
      <div className="show-selected-theme">
        <hr />
        <h3>Id: {selectedTheme?.id}</h3>
        <hr />
        <h3>Name: {selectedTheme?.name}</h3>
        <hr />
        <h3>Colors:</h3>
        <ul>
          {selectedTheme?.colors.map((color, index) => (
            <Fragment key={index}>
              <li>Role: {color.role}</li>
              <li>Value: {color.value}</li>
              <li>Name: {color.name}</li>
              <hr />
            </Fragment>
          ))}
        </ul>
      </div>
      <style>
        {`
          body {
            background-color: ${selectedTheme?.colors?.[0]?.value || "white"};
          }
          h3 {
            color: ${selectedTheme?.colors?.[2]?.value || "black"};
          }
          li {
            color: ${selectedTheme?.colors?.[2]?.value || "black"};
          }
          h1 {
            color: ${selectedTheme?.colors?.[3]?.value || "black"};
          }
          hr {
            color: ${selectedTheme?.colors?.[3]?.value || "black"}; 
          }
        `}
      </style>
    </>
  );
}
