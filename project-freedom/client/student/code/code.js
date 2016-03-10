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

Session.setDefault('codeMessages', messages);
Session.setDefault('codeLink', "");

Template.codeLink.helpers({
    link: function () {
        return Session.get("codeLink");
    },
    blank: function () {
        if (Session.get("codeLink") == "")
            return false
        else
            return true;
    }
});

Template.codeLink.events({
    "submit .form-horizontal": function (event, template) {
        event.preventDefault();
        Session.set('codeLink', template.$("#link").val());
    }
});

Template.addCodeMessage.events({
    "submit .form-horizontal": function (event, template) {
        event.preventDefault();
     
        var name = "Administrador";
        var type = template.$("#type option:selected").text();
        var message = template.$("#message").val();

        messages.unshift({ name, type, message });

        Session.set('codeMessages', messages);
    }
});

Template.codeMessages.helpers({
    messages: function () {
        return Session.get('codeMessages');
    }
});