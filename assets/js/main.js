/*-----------------------------------------------------------------------------
Theme Name: Gittu
Author: uigigs
Author URL: https://themeforest.net/user/uigigs/portfolio
version: 1.0.0
-----------------------------------------------------------------------------*/
(function ($) {
  ("use strict");
  //dropdown
  var tokenDropdownContent = $(".token-dropdown");
  if (tokenDropdownContent.length) {
    document.addEventListener("DOMContentLoaded", () => {
      const tokenDropdown = document.querySelector(".token-dropdown");
      const tokenName = tokenDropdown.querySelector(".token-name");
      const tokenList = tokenDropdown.querySelector(".token-drpdown-list");
      const tokenItems = tokenList.querySelectorAll("li");

      // Toggle dropdown visibility
      tokenName.addEventListener("click", () => {
        tokenList.classList.toggle("show");
      });

      // Select token and hide the dropdown
      tokenItems.forEach((item) => {
        item.addEventListener("click", () => {
          const selectedToken = item.innerHTML; // Get the content of the clicked item
          tokenName.innerHTML = selectedToken; // Set it as the selected token
          tokenList.classList.remove("show"); // Hide the dropdown
        });
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", (event) => {
        if (!tokenDropdown.contains(event.target)) {
          tokenList.classList.remove("show");
        }
      });
    });
  }

  // banner9 card
  var banner9Card = $(".banner9-card");
  if (banner9Card.length) {
    const _card = document.querySelector(".banner9-card");
    const flipBtn = document.querySelector(".flip-card-btn");
    flipBtn.addEventListener("click", () => {
      _card.classList.add("flip");
    });

    const backBtn = document.querySelector(".back-btn");
    backBtn.addEventListener("click", () => {
      _card.classList.remove("flip");
    });
  }

  // semicircle progress
  var semicircleProgress = $(".semicircle-progress");
  if (semicircleProgress.length) {
    const _progressContent = document.querySelector(".semicircle-progress");
    const _progressItem = _progressContent.querySelector(".progress-item");
    const _percent = _progressItem.getAttribute("data-percent");
    _progressContent.style.setProperty("--percent", `${_percent}`);
    const _progressTitle = _progressContent.querySelector(".progress-title");
    _progressTitle.innerHTML = `${_percent}%`;
  }

  // circle progress
  var circleProgress = $(".circle-progress");
  if (circleProgress.length) {
    const _progressContent = document.querySelector(".circle-progress");
    const _percent = _progressContent.getAttribute("data-percent");
    _progressContent.style.setProperty("--percent", `${_percent}`);
    const _progressTitle = _progressContent.querySelector(".progress-title");
    _progressTitle.innerHTML = `${_percent}%`;
  }

  //presale end timer countdown
  var presaleEnd = $(".presale-end-time");
  if (presaleEnd.length) {
    const _presaleEndContent = document.querySelectorAll(".presale-end-time");
    _presaleEndContent.forEach((item) => {
      function updateTimer() {
        const _dateTime = new Date("2025-10-15 23:59:59");
        const _targetTime = new Date(_dateTime).getTime() / 1000;
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const timeLeft = _targetTime - currentTimestamp;
        let days = (hours = minutes = seconds = 0);
        if (timeLeft > 0) {
          days = Math.floor(timeLeft / 86400);
          hours = Math.floor((timeLeft - days * 86400) / 3600);
          minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
          seconds = Math.floor(
            timeLeft - days * 86400 - hours * 3600 - minutes * 60
          );
          
          if (days < "10") {
            days = "0" + days;
          }
          if (hours < "10") {
            hours = "0" + hours;
          }
          if (minutes < "10") {
            minutes = "0" + minutes;
          }
          if (seconds < "10") {
            seconds = "0" + seconds;
          }
        } else {
          clearInterval(timerInterval);
          days = hours = minutes = seconds = "00";
        }
        item.innerHTML = `<li class="days">${days}<span>d</span></li><li class="hours">${hours}<span>h</span></li><li class="minutes">${minutes}<span>m</span></li><li class="seconds">${seconds}<span>s</span></li>`;
      }

      const timerInterval = setInterval(function () {
        updateTimer();
      }, 1000);
    });
  }
})(jQuery);
