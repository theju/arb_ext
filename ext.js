(function() {
    const cm = CodeMirror.fromTextArea(document.querySelector('textarea'), {mode: 'javascript'});

    document.querySelector('button').addEventListener('click', function() {
        eval(cm.getValue());
    });

    document.querySelector('input[type=file]').addEventListener('change', function(ev) {
        const fr = new FileReader();
        fr.addEventListener('load', function(evt) {
            cm.setValue(evt.target.result);
        });
        fr.readAsText(ev.target.files[0]);
    });
})();
