# Test task for frontend

[Deployed App on Heroku](https://test-assignment-for-frontend.herokuapp.com/)

Author: Vitalii Melnyk

## Technology Stack

- React with React Hooks 
- React styles & libraries: Material-UI
- Redux with Redux Hooks
- Redux-thunk
- Formik and Yup
- axios
- react-input-mask
- react-toastify
-------------------------------------------
## Technical Requirements
1. React;
2. HTML5 / CSS3;
3. CSS препроцессор (Sass/Less) или PostCSS;
4. Разметка должна быть pixel-perfect (desktop: последняя версия Chrome / FF / Safari / Edge,
  mobile/tablet: последняя версия Safari на iOS 12+ и Chrome на Android 7+);
5. Минимальная ширина экрана 360px;
6. Максимальная ширина экрана 2560px;
7. Максимальная ширина основного контейнера 1170px;
8. Разметка должна быть готова к переполнению содержимого, включая длину заголовка блока.
  Если текст длиннее чем может отображать блок - Вы должны его обрезать и показать знак «...» с
  помощью CSS или Javascript;
9. Все CTA (call to action) ссылки/кнопки должны вести на регистрацию;
10. Все изображения на сайте должны поддерживать Retina экраны (для моб версии);
11. Используя полученные данные юзеров реализуйте вывод блока “Our cheerful users” в
  соответствии с макетом. Кнопка “Show more” должна подгружать пользователей из API
  согласно макетам. Кнопка “Show more” должна быть скрыта, когда больше нет
  пользователей в БД (достигнута последняя страница результатов в API). Пользователи
  отсортированы по дате регистрации (новые первые);
12. Обратите внимание на mockups и style guide при работе с блоком юзеров. Задание
  предполагает ваше внимание к деталями вывода контента. Такие детали как количество
  блоков, “...”, tooltips, перенос строк и т.п.;
13. Для отображения радиобаттонов на форме регистрации используйте GET /positions
  метод из API документации;
14. Реализовать валидацию на фронт-енд части и бизнес логику формы регистрации в соответствии с макетами и API
  документацией;
15. После успешной регистрации обновить список пользователей в блоке “Our cheerful
  users”. Если кнопка “Show more” была нажата (т.е. больше чем одна страница
  пользователей была загружена из API), то свернуть все и отобразить только первых 6
  пользователей. В результате новый пользователь будет выведен первым;
16. Самостоятельное тестирование в следующих браузерах :
    - Chrome, Firefox, Edge, Safari (Windows)
    - Chrome, Firefox, Safari (MacOS)
    - Chrome, Safari (iOS)
    - Chrome (Android)
17. Оптимизация вебсайта (бонусное задание). Минимизируйте и оптимизируйте css, js,
    изображения, и т.д. Для этого Вам необходимо развернуть Вашу работу на любом доступном
    Вам хостинге и направить на него любой доступный Вам домен:
    - Проверьте Вашу работу используя Google Page Speed и убедитесь что Ваша работа в
    зеленой зоне.
    - Проверьте Вашу работу используя Google Chrome Audit и убедитесь что Ваша работа в
      зеленой зоне для Performance, Best practices, SEO (mobile and desktop для 3G).
    - Проверьте Вашу работу используя Webpagetest и убедитесь что показатели близки к
      AAAAAA.

- [Link 1 Test task for frontend developer position](https://drive.google.com/file/d/1cUo-vbZP0C2YtRF3L9667BlXoqaZdACl/view)
- [Link 2 Style guide)](http://view.maquetter.com/rkymlp/0101)
- [Link 3 Mockups](http://view.maquetter.com/rkymlp/0201)
- [Link 4 Necessary sources](https://drive.google.com/drive/folders/1I-1EiTdo87flddzGjIFgnFVhWGKr-ybC)

-------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
