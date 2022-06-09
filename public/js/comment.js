const newCommentHandler = async (evnt) => {
  evnt.preventDefault();
  const content = document.querySelector('#comment-text-area').value;
  const id = window.location.href.split('/').pop();
  console.log(id);

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

document
  .querySelector('#comment-submit')
  .addEventListener('click', newCommentHandler);
