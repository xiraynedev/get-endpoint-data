const btnRequest = document.getElementById('btnRequest');
const jsonArea = document.getElementById('jsonArea');

const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('Error getting resource');
      }
    })
  
    request.open('GET', resource);
    request.send(); 
  });
}

// attach button event listener to fetch data
btnRequest.addEventListener('click', function() {
  jsonArea.value = '';
  const resource = 'https://jsonplaceholder.typicode.com/todos/';
  getData(resource).then(data => {
    const arrayObj = [...data];
    arrayObj.forEach(item => {
      jsonArea.value += item.title;
    })
  }).catch(err => {
    jsonArea.value = err;
  })
});