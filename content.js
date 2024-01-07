chrome.runtime.onMessage.addListener(function (request) {
  if (request.action === "runSnippet" && !document.eventListenerAdded) {
    document.addEventListener("keydown", function (event) {
      const video = document.querySelector("video");
      const volumeStep = 0.1;

      switch (event.key) {
        case "u":
          video.volume = Math.min(1, video.volume + volumeStep);
          break;
        case "y":
          video.volume = Math.max(0, video.volume - volumeStep);
          break;
      }
    });

    document.eventListenerAdded = true;
  }
});
