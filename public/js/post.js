const newPostHandler = async (evnt) => {
  evnt.preventDefault();
  const title = document.querySelector('#create-post-title').value;
  const content = document.querySelector('#create-post-content').value;

  await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    document.location.replace(`/blogs/${id}`);
  }
};

document
  .querySelector('#create-post-form')
  .addEventListener('submit', newPostHandler);

document
  .querySelector('#delete-post-button')
  .addEventListener('click', newPostHandler);
