Выполнил тестовое задание. Нужное решение лежит в ветке Master!!!
Дам несколько комментариев к коду. Возможно это закроет некоторые вопросы

- Для ускорения процесса, проект собрал через create-react-app
- Использовал redux-toolkit и react-table
- Комментарии которые есть в коде. Это для поянения моментов по выполнению ТЗ (просто для удобства, понятно что в продакшене их не должно быть)
- Над версткой и компановкой проекта особо не заморачивался (просто сделал достаточно для проверки ТЗ)
- Все css файлы лежат со своими компонентами, использовал синтаксис module (который просто хэш добавляет)

По работе (коротко):

- реализован debounce (как кастомный хук) чтобы не отправлять запросы на сервер каждое нажатие, а через 500мс после прекращения ввода
- на случай если запрос подвиснет, а ввод продолжиться и новый ответ придет раньше. Реализованы аборты запросов при unmount списка.
- все ошибки обработаны
- (в коде дал отдельное пояснение на случай отсутствия id)
- сделаны все оповещения для пользователей по вводу города и результатам поиска

- таблица сделана с помощью билиотеки react-table
- т.к. просили использовать именно ее, я подумал фильтрацию и сортировку данных тоже хотели бы видеть с использованием возможностей этой библиотеки, поэтому писать кастомные фильтры не стал для этого (ограничился самым простым использованием функционала библиотеки)
