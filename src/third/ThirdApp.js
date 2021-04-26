import React, {useState} from "react";
import UlComponent from "./UlComponent";

const array = ['fistElement', 'secondElement', 'thirdElement', 'fourthElement', 'fifthElement'];

const ThirdApp = () => {
    const [searchString, setSearchString] = useState('')
    /*
    searchString - строка, по которой будет призводиться поиск элементов
    setSearchString - функция, которая установит значение поисковой строки (searchString)
    Работает это все при помощи хука useState
    в useState('') передается параметр ('') - это пустая строка
    Это и является первым значением для поисковой строки (searchString)
     */
    return (
        <>
            <input onChange={(event) => setSearchString(event.target.value)}/>
            <UlComponent searchString={searchString} values={array}/>
        </>
        // Теперь в наш UlComponent кроме значений массива (values={array}) передается еще и
        // searchString - это наша поисковая строка
    )
    /*
    <input onChange={(event) => setSearchString(event.target.value)}/>

    input - это html элемент для введения символов, в нашем случае - это поисковая строка
    у него есть событие - onChange
    оно принимает параметр (event) и исходя из свойства этого параметра (event.target.value)
    присваивает текущее значение нашей поисковой строки в наш searchString при помощи
    функции setSearchString
    (event) => setSearchString(event.target.value)
    */
}

export default ThirdApp;
