import React from "react";
import LiComponent from "./LiComponent";
// сверху те же самые импорты


// здесь рисуется html элемент ul и в него вставляется цикл, который отрисует нам LiComponentЫ
const UlComponent = ({values}) => (
    <ul>
        {values.map(content => <LiComponent content={content}/>)}
    </ul>
);
// values.map - функция, которая выведет все элементы из массива values
// она выведет каждый этот элемент как LiComponent
// то, что будет в контенте (content) - передается внутрь LiComponent в качестве свойства content

export default UlComponent;