(function() {
    var dndEvents = [
        'dragstart',
        'dragenter',
        'dragover',
        'dragleave',
        'drop',
        'dragend',
    ];

    function dndHandler(node, fire, event) {
        fire({
            node: node,
            type: event.type,
            target: this,
            original: event,
        });
    }

    Ractive.events.dnd = function(node, fire) {
        var handler = dndHandler.bind(null, node, fire);

        for (var i = 0; i < dndEvents.length; i++) {
            node.addEventListener(dndEvents[i], handler);
        }

        return {
            teardown: function() {
                for (var i = 0; i < dndEvents.length; i++) {
                    node.removeEventListener(dndEvents[i], handler);
                }
            }
        };
    };
})();
