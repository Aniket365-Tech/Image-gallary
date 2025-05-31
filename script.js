 
        document.addEventListener('DOMContentLoaded', () => {
            const galleryItems = document.querySelectorAll('.gallery-item');
            const imageModal = document.getElementById('imageModal');
            const modalImage = document.getElementById('modalImage');
            const closeButton = document.querySelector('.close-button');

            // Add click event listener to each gallery item
            galleryItems.forEach(item => {
                item.addEventListener('click', () => {
                    const fullSrc = item.querySelector('img').getAttribute('data-full-src');
                    modalImage.src = fullSrc;
                    imageModal.style.display = 'flex'; // Use flex to center content
                });
            });

            // Close the modal when the close button is clicked
            closeButton.addEventListener('click', () => {
                imageModal.style.display = 'none';
            });

            // Close the modal when clicking outside the image (on the modal background)
            imageModal.addEventListener('click', (event) => {
                // Check if the click target is the modal itself, not its children
                if (event.target === imageModal) {
                    imageModal.style.display = 'none';
                }
            });

            // Close the modal when the ESC key is pressed
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && imageModal.style.display === 'flex') {
                    imageModal.style.display = 'none';
                }
            });
        });
    