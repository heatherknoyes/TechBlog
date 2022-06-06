const newUpdateHandler = async (evnt) => {
  evnt.preventDefault();
  // const title = document.querySelector('#create-post-title').value;
  // const content = document.querySelector('#create-post-content').value;

  await fetch('/api/posts', {
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
