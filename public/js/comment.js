const commentHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const comment = document.querySelector('#comment-input').value.trim();
  
    if (comment) {
      // Send the comment to the server
      const response = await fetch('/api/post', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  

document
  .querySelector('.signup-form')
  .addEventListener('submit', signUpFormHandler);
