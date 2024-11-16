
      const images = document.querySelectorAll(".gallery-item img");
      const videos = document.querySelectorAll(".gallery-item video");

      let imgSrc;
      // get images src onclick
      images.forEach((img) => {
        img.addEventListener("click", (e) => {
          imgSrc = e.target.src;
          imgModal(imgSrc);
        });
      });

      //creating the modal
      let imgModal = (src) => {
        const modal = document.createElement("div");
        modal.setAttribute("class", "modal");
        //add the modal to the main section or the parent element
        document.querySelector("#imagesModal").append(modal);
        //adding image to modal
        const newImage = document.createElement("img");
        newImage.setAttribute("src", src);
        //creating the close button
        const closeBtn = document.createElement("i");
        closeBtn.innerHTML = "&times;";
        closeBtn.setAttribute("class", "closeBtn");
        //close function
        closeBtn.onclick = () => {
          modal.remove();
        };
        modal.append(newImage, closeBtn);
      };
    