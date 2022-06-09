const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    document.location.replace('/dashboard');
  }
};

document
  .querySelector('#delete-post-button')
  .addEventListener('click', delButtonHandler);
