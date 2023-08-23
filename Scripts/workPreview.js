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

$.keyframe.define({
  name: 'work-image-appear',
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

$.keyframe.define({
  name: 'work-image-disappear',
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
})

let isBackgroundPlaying = false;

$(document).ready(function() {

  let workMinimizedList = document.getElementsByClassName("work-minimized");

  let workData = {}

  for (i = 0; i < workMinimizedList.length; i++)
  {
    workData[workMinimizedList[i].getAttribute('id')] = workMinimizedList[i];
  }

  for (const [key, value] of Object.entries(workData))
  {
    $("#" + key).click(function() {

      let fullscreenWorkImage =
       document.getElementById("fullscreen-work-image");

      fullscreenWorkImage.style.zIndex = 10;
      fullscreenWorkImage.setAttribute("src",
       workDataInstances[key].work_image);

      $("#fullscreen-work-image").playKeyframe({
        name: 'work-image-appear',
        duration: '0.25s',
        timingFunction: 'ease-out'
      })

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
  }

  $("#screen-solid").click(function() {

    if (isBackgroundPlaying != true)
    {
      isBackgroundPlaying = true;
      enableScroll();

      $("#fullscreen-work-image").playKeyframe({
        name: 'work-image-disappear',
        duration: '0.25s',
        timingFunction: 'ease-out',
      })

      $("#screen-solid").playKeyframe({
        name: 'background-undimm',
        duration: '0.5s',
        timingFunction: 'ease-out',
        complete: () => {
          document.getElementById("screen-solid").style.zIndex = -1;
          document.getElementById("fullscreen-work-image").style.zIndex = -1;
          isBackgroundPlaying = false;
        }
      })
    }
  })

});