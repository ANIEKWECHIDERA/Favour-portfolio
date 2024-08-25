"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const modalTitle = document.getElementById("modalTitle");
  const closeBtn = document.querySelector(".close-btn");
  const videoThumbnails = document.querySelectorAll(".video-thumbnail");
  const videoTitles = document.querySelectorAll(".video-title");
  const prevButton = document.getElementById("prevVideo");
  const nextButton = document.getElementById("nextVideo");

  //store the video url and title in an array

  const videos = [
    {
      url: "https://drive.google.com/file/d/11_gaj4akWtP8-CI248Ky1eGidSY553xd/preview",
      title: "World Energy Consumption",
    },
    {
      url: "https://drive.google.com/file/d/14w7W0RCXIa6TpOHIds1X2_yr_j4B5evy/preview",
      title: "W.H.O COVID 19",
    },
    {
      url: "https://drive.google.com/file/d/1gbHCT7rwc7tqVzA3IggFJCbEN7TCAAME/preview",
      title: "Mexico Restaurant Analysis",
    },
    {
      url: "https://drive.google.com/file/d/1FV3Tuity4PkGvxUTSrNM5AJDdciuO2l8/preview",
      title: "COVID 19 Impact on Airport Traffic in 2020",
    },
    {
      url: "https://drive.google.com/file/d/1dGGhJwYGG6LE3SboTILcCQCqt5QRylul/preview",
      title: "Shark Attacks Analysis",
    },
    {
      url: "https://drive.google.com/file/d/1yCDgavtwW3hBENfHYxhZ4zO3AxKNLGhg/preview",
      title: "NYC Taxi Trips Analysis",
    },
    {
      url: "https://drive.google.com/file/d/15X0seXSu5GwQxoq7v47BsKUgnWo6ONtL/preview",
      title: "NCDC COVID 19 Analysis",
    },
    {
      url: "https://drive.google.com/file/d/1hwmVstJqRomav93prOErtGdSqAz3ENeL/preview",
      title: "Historical Stock Prices Analysis",
    },
    {
      url: "https://drive.google.com/file/d/1RPi6na032xVZXPKDScREjwnzvkFTAMUx/preview",
      title: "Excel Dashboard",
    },
    {
      url: "https://drive.google.com/file/d/1AUZiNQFtVgI__6oYYE0PCjFeCKNkccyU/preview",
      title: "Cholera Outbreak",
    },
    {
      url: "https://drive.google.com/file/d/10Im8cOCNBqH-Q9S2uo_dQSTLH7r06Qqp/preview",
      title: "Brazillian E-Commerce",
    },
    {
      url: "https://drive.google.com/file/d/1Jjv5t6IviyBzLLr4LLXd8QS7SUVHcELv/preview",
      title: "Bitcoin Historical Data Analysis",
    },
    {
      url: "https://drive.google.com/file/d/181KOUDNbHYZdqC2eLjRP5lc3w6RcOIFI/preview",
      title: "2015 USA Flight Delay",
    },
  ];

  let currentIndex = 0;

  //function to open the modal
  const openModal = (index) => {
    currentIndex = index;
    modal.style.display = "block";
    modalVideo.src = videos[currentIndex].url;
    modalTitle.textContent = videos[currentIndex].title;
  };

  //function for close the modal
  const closeModal = () => {
    modal.style.display = "none";
    modalVideo.src = "";
  };

  videoTitles.forEach((title, index) => {
    title.addEventListener("click", () => openModal(index));
  });

  closeBtn.addEventListener("click", closeModal);
  //   modal.addEventListener("click", closeModal);

  //handle the display of the buttons

  if (currentIndex > videos.length) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }

  const checkButton = () => {
    if (currentIndex === 0) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "block";
    }

    if (currentIndex === videos.length - 1) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "block";
    }
  };

  checkButton();

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      openModal(currentIndex);
    }
    checkButton();
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < videos.length - 1) {
      currentIndex++;
      openModal(currentIndex);
    }
    checkButton();
  });
});
