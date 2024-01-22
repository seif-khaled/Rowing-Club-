const imageArray = ["2020-02-05.jpg", "2022-06-18.jpg", "2022-02-21.jpg","2021-01-04.jpg"];
let currentIndex = 0;

function changeImage() {
    const menuImage = document.getElementById("menuImage");

    // Change the image source
    menuImage.src = imageArray[currentIndex];

    // Increment index or reset to 0 if reaching the end
    currentIndex = (currentIndex + 1) % imageArray.length;
}

// Set an interval to change the image every 3000 milliseconds (3 seconds)
setInterval(changeImage, 3000);