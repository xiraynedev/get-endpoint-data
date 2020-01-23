const btnRequest = document.getElementById('btnRequest');
const jsonArea = document.getElementById('jsonArea');

// attach button event listener to fetch data
btnRequest.addEventListener('click', function() {
  jsonArea.value = '';
  const resource = 'https://jsonplaceholder.typicode.com/todos/';

  getTodos(resource)
    .then(data => {
      const arrayObj = [...data];
      arrayObj.forEach(item => {
        jsonArea.value += item.title;
      });
    })
    .catch(err => {
      jsonArea.value = 'Could not fetch the data.';
    });
});

const getTodos = async resource => {
  const response = await fetch(resource);
  const data = await response.json();
  return data;
};
