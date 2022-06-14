const newCommentHandler = async (evnt) => {
  evnt.preventDefault();
  const content = document.querySelector('#comment-text-area').value;
  const id = window.location.href.split('/').pop();

  await fetch(`/api/comments`, {
    method: 'POST',
    body: JSON.stringify({
      content,
      postId: id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace(`/blogs/${id}`);
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

const commentUpdateHandler = async (evnt) => {
  evnt.preventDefault();
  // const title = document.querySelector('.card-header').innerHTML;
  const content = document.querySelector('#edit-comment-textarea').value;
  const id = evnt.target.getAttribute('data-id');
  await fetch(`/api/comments/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      content,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#comment-submit')
  .addEventListener('click', newCommentHandler);

// document
//   .querySelector('#delete-comment-button')
//   .addEventListener('click', delButtonHandler);

// document
//   .querySelector('#edit-comment-save-button')
//   .addEventListener('click', commentUpdateHandler);
