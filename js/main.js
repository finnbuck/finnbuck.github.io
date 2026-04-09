// Lightbox for gallery thumbnails

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

// Open on thumbnail click
document.querySelectorAll('.gallery-thumb').forEach(function(img) {
  img.addEventListener('click', function() {
    openLightbox(this.src, this.alt);
  });
});

// Close on button click
lightboxClose.addEventListener('click', closeLightbox);

// Close on backdrop click
lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) closeLightbox();
});

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});
