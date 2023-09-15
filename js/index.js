const downloadIconHoverListener = document.querySelector(".download-icon-hover-listener");
const waveIconHoverListener = document.querySelector(".wave-icon-hover-listener");

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
