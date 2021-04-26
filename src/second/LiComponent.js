import React from "react";

const LiComponent = ({content}) => (
    //<li> - компонент отражающий HTML элемент (часть списка)
    // key - ключ, помогает реакту понимать где какой компонент
    // {content} - отрисует текст внутри элемента li
    <li key={content}>{content}</li>
)

export default LiComponent;
