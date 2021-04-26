import React, {useEffect} from "react";
import LiComponent from "./LiComponent";

const UlComponent = ({searchString, values}) => {
    // Сверху ({searchString, values}) мы принимаем значения values и searchString из компонента выше

    const entries = values.filter(value => {
        // Здесь мы ищем вхождения букв поисковой строки (searchString) в каждый из наших элементов (values)
        for (let i = 0; i < searchString.length; i++) {
            //открываем цикл от 0 (let i = 0) до последнего символа в нашей поисковой строке (i < searchString.length)
            // каждый следующий шаг цикла - он(цикл) будет смотреть на следующую букву с словах (i++ - (i становится на единицу больше каждый проход цикла))
            if (value[i] !== searchString[i]) {
                /* Здесь идет сравнение (value[i] !== searchString[i])
                 нем происходит:
                 Мы берем из value(текущее слово(одно из массива, которое обрабатывается в текущий момент))
                 по одной букве каждую итерацию и сравниваем ее с буквой, на той же самой позиции в нашей
                 поисковой строке (searchString)
                 */

                return false;
                // Если есть хоть одно не совпадение - мы возвращаем ложь (false) и LiComponent с этим словом
                // не будет показан
            }
        }

        return true;
        // Соответственно, если все буквы в поисковой строке оказались такими же, как и в строке элемента массива
        // то мы возвращаем правду (true) - и LiComponent с этим элементом массива будет показан
    });

    // вызывается каждый раз, когда изменится один из параметров ниже (searchString или entries)
    useEffect(() => {
        if (searchString === '') {
            //если поисковая строка пустая (if (searchString === '')), то в заголовок страницы(то, что сверху)
            // запишеися 'useEffect hook example'
            document.title = 'useEffect hook example';
        } else {
            //если поисковая строка не пуста, то в заголовок документа запишется 'Количество найденных элементов: ' + entries.length'
            // где entries.length - это длинна всех элементов массива, которые попали на экран
            document.title = 'Количество найденных элементов: ' + entries.length;
        }


    },[searchString, entries])

    return (
        <ul>
            {entries.map(content => <LiComponent content={content}/>)}
        </ul>
    )
}

export default UlComponent;