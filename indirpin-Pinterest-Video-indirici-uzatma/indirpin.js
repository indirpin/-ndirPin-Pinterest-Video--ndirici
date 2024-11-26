
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const url = tabs[0].url;
    const pinStatus = document.getElementById("pin-status");
    const downloadButton = document.getElementById("download-btn");

    // Check if the URL is a Pinterest pin page
    if (url.includes('pinterest.com/pin/')) {
        pinStatus.innerText = "Pin Bulundu!";
        pinStatus.style.color = "#5cb85c";
        pinStatus.style.fontWeight = "bold";
        pinStatus.style.fontSize = "15px";
        downloadButton.style.display = "inline-block"; // Show the download button
        downloadButton.addEventListener("click", function () {
            downloadButton.style.pointerEvents="none";
            downloadButton.style.cursor = "not-allowed";
            downloadButton.style.opacity = "0.5";
            const indirPinUrl = `https://indirpin.com.tr?url=${encodeURIComponent(url)}`;
            setTimeout(() => {
                window.open(indirPinUrl, "_blank");
            }, 500);
        });
    } else {
        pinStatus.innerText = "Pin Bulunamadı";
        pinStatus.style.color = "#d9534f";
        pinStatus.style.fontWeight = "bold";
    }
});
