(function() {
    var events = ['dragstart', 'dragenter', 'dragover', 'dragleave', 'drop', 'dragend']

    function dragAndDropHandler(node, fire, event) {
        fire({
            node: node,
            type: event.type,
            target: this,
            original: event,
        });
    }

    Ractive.events.dnd = function(node, fire) {
        var handler = dragAndDropHandler.bind(null, node, fire);

        for (var i = 0; i < events.length; i++) {
            node.addEventListener(events[i], handler);
        }

        return {
            teardown: function() {
                for (var i = 0; i < events.length; i++) {
                    node.removeEventListener(events[i], handler);
                }
            }
        };
    };
})();
