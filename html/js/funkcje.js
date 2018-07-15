var content;

function show(id) {
    content = "";
    switch (id) {
        case 2:
            content + showProjects();
            break;

        case 1:
            content + showContact();
            break;

        default:
            content + showAbout();

    }
    document.getElementById('main').innerHTML = content;
}

function showProjects(){
    content= '<article id="myProject"><h3>Moje projekty</h3>';
    content+='<p class="project"> 8x8x8 LED CUBE </p><div class="slideshow-container"><div class="mySlides fade"><img src="images/IMG_20171111_164535.jpg" alt="photo1" style="width:100%"></div><div class="mySlides fade"><img src="images/IMG_20171111_184504.jpg" alt="photo2" style="width:100%"></div><div class="mySlides fade"><img src="images/IMG_20180224_213230.jpg" alt="photo3" style="width:100%"></div><a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a></div><br><div style="text-align:center"><span class="dot" onclick="currentSlide(1)"></span><span class="dot" onclick="currentSlide(2)"></span><span class="dot" onclick="currentSlide(3)"></span></div></article><br><br>';
    return content;
}

function showContact(){
    content= '<article id="contact"><h3>Kontakt</h3>';
	content+='<p>Napisz do mnie</p>'+'<form method="post" action="mailto:xxx@xxx.xx" enctype="text/plain" onsubmit="return check()"><div class="form-group"><label for="name">Imię*</label><input type="text" name="name" id="name" class="form-control"><span id="name-error" class="red"></span></div><div class="form-group"><label for="email">E-mail*</label><input type="email" name="email"  id="email" class="form-control"><span id="email-error" class="red"></span></div><div class="form-group"><label for="message">Wiadomość*</label><textarea name="message"  id="message" class="form-control"></textarea><span id="text-error" class="red"></span></div><div class="form-group"><button type="submit" class="submit">Wyślij</button></div></form></article>';
    
	return content;
}

function showAbout(){
	content='<p class="photo"><img src="images/INT_WomenInTECHCAMP_wrze%C5%9Bnia%2027,%202017_215.jpg" alt="Weronika Kulbaka"></p>';
    content+='<article id="about"><h3>O mnie</h3>';
    content+= '<p>Jestem studentką drugiego roku informatyki na Politechnice Lubelskiej. W 2016 roku byłam organizatorem IT Academic Day, rok póżniej zostałam wolontariuszem konferencji informatycznej CHECK IT, gdzie odpowiadałam za pomoc w punkcie rejestracyjnym, obsługę techniczną i logistyczną konferencji. W liceum stworzyłam własny projekt społeczny, który poprzez dobrą zabawę miał zachęcić dzieci do uczenia się fizyki. W ramach projektu otrzymałam certyfikat Project Management Fundamentals. </p></article>';
    return content;
}