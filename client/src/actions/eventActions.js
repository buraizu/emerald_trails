export function fetchEvents() {
  // return (dispatch) => {
  //   dispatch({ type: 'LOADING_EVENTS' });
  //   return fetch('/api.amp.active.com/v2/search?query=running&category=event&start_date=2019-03-19..2019-08-31&near=Seattle,WA,US&radius=50&api_key=byrr9ff4y7u9n6se4mgpdpax')
  //   .then(checkStatus)
  //
  //   .then(responseJson => {
  //     dispatch({ type: 'FETCH_EVENTS', payload: responseJson })
  //   })
  // }
}


//
// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const error = new Error(`HTTP Error ${response.statusText}`);
//   error.status = response.statusText;
//   error.response = response;
//   console.log(error); // eslint-disable-line no-console
//   throw error;
// }
