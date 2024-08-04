let isAdmin = true; // Set this based on the user role (admin/non-admin)

function showComments() {
  const commentsSection = document.getElementById('comments-section');
  commentsSection.style.display = 'block';

  if (isAdmin) {
    const adminControls = document.getElementById('admin-controls');
    adminControls.style.display = 'block';
  }
}

function addComment() {
  const commentInput = document.getElementById('comment-input');
  const commentText = commentInput.value.trim();

  if (commentText !== '') {
    const commentList = document.getElementById('comment-list');
    const newComment = document.createElement('li');
    newComment.innerText = commentText;
    commentList.appendChild(newComment);
    commentInput.value = '';
  }
}

function editPost() {
  // Logic to edit the post (only for admin)
}

function deletePost() {
  // Logic to delete the post (only for admin)
}
