document.addEventListener('DOMContentLoaded', function () {
  const blogPosts = document.getElementById('blog-posts');
  const postForm = document.getElementById('post-form');

  postForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;

      if (title && content) {
          createPost(title, content);
          postForm.reset();
      } else {
          alert('Please fill in both title and content.');
      }
  });

  function createPost(title, content) {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      const postTitle = document.createElement('h2');
      postTitle.textContent = title;

      const postContent = document.createElement('h4');
      postContent.textContent = content;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.setAttribute("class" , "btn btn-warning btn-lg")

      editButton.addEventListener('click', function () {
          editPost(postDiv, title, content);
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.setAttribute("class" , "btn btn-danger btn-lg");



      deleteButton.addEventListener('click', function () {
          deletePost(postDiv);
      });

      postDiv.appendChild(postTitle);
      postDiv.appendChild(postContent);
      postDiv.appendChild(editButton);
      postDiv.appendChild(deleteButton);

      blogPosts.appendChild(postDiv);
  }

  function editPost(postDiv, oldTitle, oldContent) {
      const newTitle = prompt('Edit title:', oldTitle);
      const newContent = prompt('Edit content:', oldContent);

      if (newTitle !== null && newContent !== null) {
          postDiv.querySelector('h3').textContent = newTitle;
          postDiv.querySelector('p').textContent = newContent;
      }
  }

  function deletePost(postDiv) {
      const confirmation = confirm('Are you sure you want to delete this post?');

      if (confirmation) {
          blogPosts.removeChild(postDiv);
      }
  }
});
