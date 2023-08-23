$.keyframe.define({
  name: 'background-dimm',
  from: {
    opacity: 0
  },
  to: {
    opacity: 0.5
  }
})

$.keyframe.define({
  name: 'background-undimm',
  from: {
    opacity: 0.5
  },
  to: {
    opacity: 0
  }
})

let isBackgroundPlaying = false;

$(document).ready(function() {

  $(".work-minimized").click(function() {

    if (isBackgroundPlaying != true)
    {
      isBackgroundPlaying = true;

      disableScroll();
  
      document.getElementById("screen-solid").style.zIndex = 5;
  
      $("#screen-solid").playKeyframe({
        name: 'background-dimm',
        duration: '0.5s',
        timingFunction: 'ease-out',
        complete: () => {
          isBackgroundPlaying = false;
        }
      })

    }

  });

  $("#screen-solid").click(function() {

    if (isBackgroundPlaying != true)
    {
      isBackgroundPlaying = true;
      enableScroll();

      $("#screen-solid").playKeyframe({
        name: 'background-undimm',
        duration: '0.5s',
        timingFunction: 'ease-out',
        complete: () => {
          document.getElementById("screen-solid").style.zIndex = -1;
          isBackgroundPlaying = false;
        }
      })
    }
  })

});