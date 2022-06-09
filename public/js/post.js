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
  // evnt.preventDefault();
  console.log('You hit the button');
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      // body: JSON.stringify({
      //   id,
      //   title,
      //   content,
      // }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete blog');
    }
  }
};

// const newCommentHandler = async (evnt) => {
//   evnt.preventDefault();
//   const content = document.querySelector('#comment-text-area').value;

//   console.log(
//     await fetch('/api/comments', {
//       method: 'POST',
//       body: JSON.stringify({
//         content,
//       }),
//       headers: { 'Content-Type': 'application/json' },
//     })
//   );

//   document.location.replace('/dashboard');
// };

document
  .querySelector('#create-post-form')
  .addEventListener('submit', newPostHandler);

document
  .querySelector('.delete-post-button')
  .addEventListener('submit', delButtonHandler);

// document
//   .querySelector('#comment-submit')
//   .addEventListener('click', newCommentHandler);
