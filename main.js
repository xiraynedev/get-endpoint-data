const btnRequest = document.getElementById('btnRequest');
const jsonArea = document.getElementById('jsonArea');

// attach button event listener to fetch data
btnRequest.addEventListener('click', function() {
  jsonArea.value = '';
  const resource = 'https://jsonplaceholder.typicode.com/todos/';
  
  fetch(resource).then(response => response.json())
  .then(data => {
    const arrayObj = [...data];
    arrayObj.forEach(item => {
      jsonArea.value += item.title;
    })
  }).catch(err => {
    jsonArea.value = err;
  })
});