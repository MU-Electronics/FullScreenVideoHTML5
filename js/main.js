(function()
{

    // Get the video instance
    var video = document.getElementById("my-video");

    /// Check when the video is playable
    video.addEventListener( "canplay", function()
    {
        // Play the video
        video.play();
    });

})();