window.addEventListener('load', function(){
  var player = document.getElementById('player'); 
  var snapshotCanvas = document.getElementById('snapshot');
  var captureButton = document.getElementById('capture');
  var downloadLink = document.getElementById("downloadLink");

  var handleSuccess = function(stream) {
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
  };

  captureButton.addEventListener('click', function() {
    var context = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, snapshotCanvas.width, 
        snapshotCanvas.height);
  });

  navigator.mediaDevices.getUserMedia({video: true})
      .then(handleSuccess);
  
  captureButton.addEventListener('click', function() {
    downloadLink.href = snapshotCanvas.toDataURL('image/jpg');
  });
      
});