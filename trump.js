chrome.runtime.onMessage.addListener(getMessage)

function getMessage(message, sender, sendResponse) {
    var nicknames = ["Chancellor Cheeto", "Pussy Predator", "Douche L'Orange", "Donnie Chump", "Oompa Loompa", "T###p", "Agent Orange", "The Annoying Orange", "The Fanta Menace"];
    var page = document.body.innerHTML;
    var countTrumps = (page.match(/trump/gi) || []).length;

    //Change all the instances of Trump 
    for (var i = 0; i < countTrumps; i++) {
        console.log(i);
        index = Math.floor(Math.random() * nicknames.length);
        name = nicknames[index];
        page = page.replace(/trump/i, name);
    }

    //Reset the page and report
    document.body.innerHTML = page;
    
    alert(String(countTrumps) + " Oranges Rotted Away");
}
