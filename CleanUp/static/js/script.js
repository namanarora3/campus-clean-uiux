  // Accessing basic Document elements using querySelector() and querySelectorAll()
  const taskList = document.querySelectorAll('.list.task.js-selector');
  const overlay = document.querySelector('.overlay');

  // function to open a specific popup to add image or approve task
  const openModal = function (x, index) {
    const modal = document.querySelector(`.modall.${index}.${x}`);

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  // function to close any open popups
  const closeModal = function () {
    const popup = document.querySelectorAll('.upload-image, .approve-image')

    for(const i of popup){
      i.classList.add('hidden');
    }
    overlay.classList.add('hidden');
  };

  // Adding event listeners for all tasks
  for(const a of taskList){
    a.addEventListener('click', function(){
      console.log('worker', a.classList);
      openModal(a.classList[5], a.classList[4]);
    })
  }

  // Closing the popup on clicking the Overlay
  overlay.addEventListener('click', function () {
    closeModal();
  })

  // Closing the popup on pressing ESC key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });