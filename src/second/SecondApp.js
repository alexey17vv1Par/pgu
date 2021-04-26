import React from "react"; //вставили реакт компонент
import UlComponent from "./UlComponent"; //вставляем наш юлкомпонент

const array = ['firstElement', 'secondElement', 'thirdElement']; // создание массива с элементами ввиде строк

const SecondApp = () => (
    // Ul - menu (html) // values - значения
    <UlComponent values={array} /> // этот компонент получает в качесиве свойсивва values значения (наш массив)
)

export default SecondApp;
