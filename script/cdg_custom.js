
function createCDG() {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 432;
    const cdg = new CDGPlayer(canvas)
    var bf = {};
    fetch('uploads/0007fe4dfc0ddd92002200be94470ee0e808cbcb.cdg')
        .then(response => response.arrayBuffer())
        .then(buffer => {
            bf.bfr = buffer;
        });
}
function syncVideo() {
    cdg.load(new Uint8Array(bf.bfr))
    cdg.sync(audio.currentTime * 1000) // convert to ms
}
function playVideo() {
    syncVideo();
    cdg.play();
}
function stopVideo() {
    cdg.stop();
}