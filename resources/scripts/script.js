window.onload = function () {
  let navigationMarkup = `<h1>Brooke Claroni</h1><div><nav><a href="index.html">About</a><a href="education.html">Education</a><a href="professional.html">Professional</a><a href="portfolio.html">Portfolio</a><a href="hobbies.html">Hobbies</a><a href="contact.html">Contact</a></nav></div>`
  document.getElementById("navigation").innerHTML = navigationMarkup;
  let footerMarkup = `<div><ul><li><a href="https://www.linkedin.com/in/brooke-claroni-7bb429184/" target="_blank">Linkedin</a></li><li><a href="https://www.facebook.com/brooke.claroni" target="_blank">Facebook</a></li><li><a href="https://www.instagram.com/brookeclaroni/" target="_blank">Instagram</a></li><li><a href="https://www.tiktok.com/@brookeclaroni" target="_blank">TikTok</a></li></ul></div>`
  document.getElementById("footer").innerHTML = footerMarkup;
}
