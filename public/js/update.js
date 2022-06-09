const newUpdateHandler = async (evnt) => {
  evnt.preventDefault();
  const title = document.querySelector('.card-header').innerHTML;
  const content = document.querySelector('#edit-blog-textarea').value;
  const id = evnt.target.getAttribute('data-id');
  await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#edit-blog-save-button')
  .addEventListener('click', newUpdateHandler);
