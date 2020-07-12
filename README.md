# Music API Demo

This ReactJS app integrates with Deezer's API and shows a list of genres along with some artists.

The API endpoints gave me Cross Origin errors when I attempted to call them directly from ReactJS, so I had to make a nodeJS server that acts like a proxy server. Its role is to facilitates the communication between ReactJS and Deezer API.

## Dependencies

1. **react-router-dom**

2. **ant-design**

3. **axios**

4. **redux** and **react-redux**


## Todos (If I had more time) :grin:

1. **Pagination**

    The genres are too many to be displayed in one page and should have been divided into multiple pages. Same goes for the artists modal.

2. **Loading Spinners**

    To indicate that the web app is loading for better user experience

3. **Handle server errors**

    To indicate that an error has occurred instead of letting the user wait forever

## IMPORTANT: Don't Forget To Run The NodeJS Server First