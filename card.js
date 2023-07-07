    function openModal(title, info) {
      var modal = document.getElementById("modal");
      var modalTitle = document.getElementById("modal-title");
      var modalInfo = document.getElementById("modal-info");

      modalTitle.textContent = title;
      modalInfo.textContent = "Information: " + info;
      modal.classList.add("active");
    }

    function closeModal() {
      var modal = document.getElementById("modal");
      modal.classList.remove("active");
    }