const newDeleteHandler = async (evnt) => {
  evnt.preventDefault();
  console.log('You hit the button');
  await fetch('/api/posts/', {
    method: 'DELETE',
    body: JSON.stringify({
      id,
      title,
      content,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
};

document
  .querySelector('#delete-post-button')
  .addEventListener('click', newDeleteHandler);
