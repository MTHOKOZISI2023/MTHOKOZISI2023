document.querySelector('#picture').addEventListener('change', event => {
    if (event.target.files && event.target.files[0]) {
        if (/image\/*/.test(event.target.files[0].type)) {
            const reader = new FileReader();

            reader.onload = function() {
                document.querySelector('.pin_image img').src = reader.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    document.querySelector('#picture').value = '';
});
// Select all like buttons and like counters
const likeButtons = document.querySelectorAll('.like_button');
const likeCounts = document.querySelectorAll('.like_count');

// Add event listeners to like buttons
likeButtons.forEach((button, index) => {
    let isLiked = false; // Track if the photo is liked
    let likes = 0; // Track the number of likes

    button.addEventListener('click', () => {
        if (isLiked) {
            // If already liked, unlike the photo
            likes--;
            button.textContent = '❤️ Like'; // Reset button text
            button.style.color = '#e60023'; // Reset button color
        } else {
            // If not liked, like the photo
            likes++;
            button.textContent = '❤️ Liked'; // Update button text
            button.style.color = '#ad081b'; // Change button color
        }

        // Update the like counter
        likeCounts[index].textContent = likes;
        isLiked = !isLiked; // Toggle the like state
    });
});