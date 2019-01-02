
## Fetchful

This is an educational application intended purely for testing API endpoints.

Clone this project to your machine and open the `App.js`.

The component has a method called `performFetch`, you can edit the `fetch` call inside this method to target any API endpoints you're working on.

```js
  performFetch = () =>
    fetch('http://localhost:8000/my-endpoint', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer MY-SECRET-TOKEN',
      },
      body: JSON.stringify({ test: 'data' }),
    });
```

This is a way to test how your endpoints behave in a full-stack website scenario.

When running, the webpage has a button for triggering the fetch request. The options passed into the fetch will be displayed on the page in JSON as well as any errors or response data.

### Commands

- `npm start`
- `npm test`
