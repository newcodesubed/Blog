document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const commentText = document.getElementById('comment').value;
    if(commentText === '') return;
    
    const commentList = document.getElementById('commentList');
    
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.innerText = commentText;
    
    commentList.appendChild(newComment);
    
    document.getElementById('comment').value = '';
});