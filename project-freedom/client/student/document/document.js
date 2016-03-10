var messages = [
    {
        name: "Raul Cornejo",
        type: "Observacion",
        message: "Se debe cambiar el orden del index"
    },
    {
        name: "Marco Alen",
        type: "Sugerencia",
        message: "Podria cambiarse la composion del texto "
    },
    {
        name: "Lara Mancilla",
        type: "Reclamo",
        message: "Se omitio las fuentes bibliograficas en los antecedentes"
    }
]


Session.setDefault('messages', messages);
Session.setDefault('link', "");

Template.documentLink.helpers({
    link: function () {
        return Session.get("link");
    },
    blank: function () {
        if (Session.get("link") == "")
            return false;
        else
            return true;
    }
});

Template.documentLink.events({
    "submit .form-horizontal": function (event, template) {
        event.preventDefault();
        Session.set('link', template.$("#link").val());
    }
});

Template.addDocumentMessage.events({
    "submit .form-horizontal": function (event, template) {
        event.preventDefault();

        var name = "Administrador";
        var type = template.$("#type option:selected").text();
        var message = template.$("#message").val();

        messages.unshift({ name, type, message });

        Session.set('messages', messages);
    }
});

Template.documentMessages.helpers({
    messages: function () {
        return Session.get('messages');
    }
});