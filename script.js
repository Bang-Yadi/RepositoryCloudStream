function copyUrl() {
  var url = document.getElementById("url");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function showModal() {
  document.getElementById('dialog').showModal();
}

function performClose() {
  document.getElementById('dialog').close();
}

function showModal2() {
  document.getElementById('dialog2').showModal();
}

function performClose2() {
  document.getElementById('dialog2').close();
}

function copyExtension() {
  var url = document.getElementById("Extension");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installExtension() {
        var url = "cloudstreamrepo://raw.githubusercontent.com/recloudstream/extensions/master/repo.json";
        window.open(url);
}

function copyMultilingual() {
  var url = document.getElementById("Multilingual");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installMultilingual() {
        var url = "cloudstreamrepo://codeberg.org/cloudstream/cloudstream-extensions-multilingual/raw/branch/builds/repo.json";
        window.open(url);
}

function copyEnglish() {
  var url = document.getElementById("English");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installEnglish() {
        var url = "cloudstreamrepo://codeberg.org/cloudstream/cloudstream-extensions/raw/branch/builds/repo.json";
        window.open(url);
}

function copyIndonesia() {
  var url = document.getElementById("Indonesia");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installIndonesia() {
        var url = "cloudstreamrepo://codeberg.org/cloudstream/cloudstream-extensions-hexated/raw/branch/builds/repo.json";
        window.open(url);
}

function copyNSFW() {
  var url = document.getElementById("NSFW");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installNSFW() {
        var url = "cloudstreamrepo://codeberg.org/cloudstream/cs3xxx-repo/raw/branch/main/repo.json";
        window.open(url);
}

function copyLinkDev256() {
  var url = document.getElementById("LinkDev256");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installLinkDev256() {
        var url = "cloudstreamrepo://codeberg.org/cloudstream/likdev256-tamil-providers/raw/branch/builds/repo.json";
        window.open(url);
}

function copyStorm() {
  var url = document.getElementById("Storm");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installStorm() {
        var url = "cloudstreamrepo://codeberg.org/Stormunblessed/storm-ext/raw/branch/main/kronch.json";
        window.open(url);
}

function copyStorm2() {
  var url = document.getElementById("Storm2");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installStorm2() {
        var url = "cloudstreamrepo://codeberg.org/Stormunblessed/storm-ext/raw/branch/main/storm.json";
        window.open(url);
}

function copyCakesTwix() {
  var url = document.getElementById("CakesTwix");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installCakesTwix() {
        var url = "cloudstreamrepo://raw.githubusercontent.com/CakesTwix/cloudstream-extensions-uk/master/repo.json";
        window.open(url);
}

function copyBongNgo() {
  var url = document.getElementById("BongNgo");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installBongNgo() {
        var url = "cloudstreamrepo://raw.githubusercontent.com/duongnv1996/bongngo-cs3-extension/master/repo.json";
        window.open(url);
}

function copyArab() {
  var url = document.getElementById("Arab");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installArab() {
        var url = "cloudstreamrepo://codeberg.org/cloudstream/arab/raw/branch/builds/repo.json";
        window.open(url);
}

function copyPrancis() {
  var url = document.getElementById("Prancis");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installPrancis() {
        var url = "cloudstreamrepo://raw.githubusercontent.com/AirbnbEcoPlus/frencharchive/master/repo.json";
        window.open(url);
}

function copyFStream() {
  var url = document.getElementById("FStream");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installFStream() {
        var url = "cloudstreamrepo://codeberg.org/7TE/FStream/raw/branch/build/repo.json";
        window.open(url);
}

function copyHoris() {
  var url = document.getElementById("Horis");
  var textArea = document.createElement("textarea");
  textArea.value = url.textContent;
  document.body.appendChild(textArea);

  textArea.select();
  document.execCommand("Copy");

  textArea.remove();
  alert("Link berhasil di salin: \n" + textArea.value);
}

function installHoris() {
        var url = "cloudstreamrepo://codeberg.org/cloudstream/cloudstream-extensions-horis/raw/branch/master/repo.json";
        window.open(url);
}

function otherRepository() {
        var url = "https://rentry.org/cs3-repos";
        window.open(url);
      }

function downloadApp() {
        var url = "https://modded-by-yadi.blogspot.com/2023/06/CloudStream.html";
        window.open(url);
}