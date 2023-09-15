const downloadIconHoverListener = document.querySelector(".download-icon-hover-listener");
const waveIconHoverListener = document.querySelector(".wave-icon-hover-listener");
const viewProjectIconListener = document.querySelectorAll(".view-project-icon-listener");

downloadIconHoverListener.addEventListener('mouseover', _ => 
  document.querySelector(".download-icon").classList.add("spin")
);

downloadIconHoverListener.addEventListener('mouseout', _ =>
  document.querySelector(".download-icon").classList.remove("spin")
);

waveIconHoverListener.addEventListener('mouseover', _ =>
  document.querySelector(".waving-hand-icon").classList.add("wave")
);

waveIconHoverListener.addEventListener('mouseout', _ =>
  document.querySelector(".waving-hand-icon").classList.remove("wave")
); 

viewProjectIconListener.forEach(btn => {
  btn.addEventListener('mouseover', _ => {
    btn.classList.add("view-project-icon-hover");
  });

  btn.addEventListener('mouseout', _ => {
    btn.classList.remove("view-project-icon-hover");
    btn.firstElementChild.classList.remove("hover-underline-animation");
  });

  btn.addEventListener('mousedown', _ => {
    btn.classList.add("view-project-icon-click");
  });

  btn.addEventListener('mouseup', _ => {
    btn.classList.remove("view-project-icon-click");
  });
});