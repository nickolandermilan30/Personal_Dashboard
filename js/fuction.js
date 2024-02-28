const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
    });
    navItem.className = "nav-item active";
  });
});

// I-update ang JavaScript code
var video = document.getElementById('achievementVideo');
var button = document.querySelector('.play-button');

video.addEventListener('mouseenter', function() {
    button.style.display = 'block'; // ipakita ang button kapag may mouse hover sa video
});

video.addEventListener('mouseleave', function() {
    button.style.display = 'none'; // itago ang button kapag nawala ang mouse hover
});

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
        button.textContent = 'Pause';
    } else {
        video.pause();
        button.textContent = 'Play';
    }
}
