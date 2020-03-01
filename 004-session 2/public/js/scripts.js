(function ($, H) {

    var Actor = {

        init: function (config) {
            this.c = config;
            this.bindEvents();
            this.setupTemplate();

            $.ajaxSetup({
                beforeSend: function () {
                    $('#preloader').show();
                },
                complete: function () {
                    $('#preloader').hide();
                }
            });
        },

        bindEvents: function () {
            this.c.letterSelection.on('change', this.fetchActorsByLastName);
            this.c.actorList.on('click', 'li', this.fetchFilmInfo);
            this.c.actorInfo.on('click', 'span.close', this.closeOverlay);
        },

        setupTemplate: function() {
            this.c.actorListTemplate = H.compile(this.c.actorListTemplate);
            this.c.actorInfoTemplate = H.compile(this.c.actorInfoTemplate);
        },

        closeOverlay: function() {
            Actor.c.actorInfo.slideUp();
        },

        fetchFilmInfo: function(e) {
            var self = Actor;
            e.preventDefault();
            var id = $(this).data('actor_id');
            $.ajax({
                url: "http://127.0.0.1:3000/actor-info/" + id,
                success: function (res) {
                    self.c.actorInfo.html(self.c.actorInfoTemplate(res)).slideDown();
                }
            })
        },

        fetchActorsByLastName: function () {
            var letter = $(this).val();
            var self = Actor;
            $.ajax({
                url: "http://127.0.0.1:3000/actors/" + letter,
                success: function (res) {
                    if (res.length) {
                        self.c.actorList.html(self.c.actorListTemplate(res));
                    } else {
                        self.c.actorList.html("<ul><li>NO Result</li></ul>");
                    }
                }
            });
        }

    };


    Actor.init({
        letterSelection: $('#letter-selection'),
        actorListTemplate: $('#actor-list-template').html(),
        actorInfoTemplate: $('#actor-info-template').html(),
        actorList: $('.actor-list'),
        actorInfo: $('.actor_info')
    });



})(jQuery, Handlebars);