jQuery.each(index_data, function() {
    jQuery('<iframe/>', {
        src: 'https://'+app_config.domain + user.run_sessions_path + this[0] + '.gpx'
    }).appendTo('body');
});
