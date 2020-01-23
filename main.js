const btnRequest = document.getElementById('btnRequest');
const jsonArea = document.getElementById('jsonArea');

const getData = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(null, data);
    } else if (request.readyState === 4) {
      callback('Could not fetch the data', null);
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send(); 
}

// attach button event listener to fetch data
btnRequest.addEventListener('click', function() {
  jsonArea.value = '';
  getData((err, data) => {
    if(err) {
      jsonArea.value = err;
    } else {
      const arrayObj = [...data];
      arrayObj.forEach((item) => {
        jsonArea.value += item.title;
      })
    }
  });
});