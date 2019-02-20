function expand(i, btn) {
    var textID = `#exp${i}`;
    var $text = $(textID);

    if ($text.is(":visible")) {
        $text.hide();
        btn.innerHTML = "Ler mais";
    } else {
        $text.show();
        btn.innerHTML = "Ler menos";
    }
}
