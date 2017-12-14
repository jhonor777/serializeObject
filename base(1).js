(function($){
	$.fn.template=function(data){
		var source   = $(this).html();
		var template = Handlebars.compile(source);
        return template(data);
    };
    $.fn.templateTo=function(id,target){
    	var tpl = $("#"+id).html();
		var template = Handlebars.compile(tpl);
		$("#"+target).html(template());
    };
	$.fn.serializeJson=function(){
        return JSON.stringify($(this).serializeObject());
    };
	$.fn.toolbar = function(options) {
		var html='';
		for(var i=0;i<options.buttons.length;i++){
			html+=' <a class="btn btn-'+options.buttons[i].type+'" data-name="'+options.buttons[i].name+'">'+options.buttons[i].text+'</a>'
		}
		var $this = $(this).append(html);
		$this.children('a').each(function(i) {
			$(this).bind('click',function(){
				if(options.handler) options.handler.call($(this));
			})
		})
	}
    $.fn.serializeObject = function(){
        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z_$][a-zA-Z0-9_$]*(?:\[(?:\d*|[a-zA-Z0-9_$]+)\])*$/,
                "key":      /[a-zA-Z0-9_$]+|(?=\[\])/g,
                "push":     /^$/,
                "fixed":    /^\d+$/,
                "named":    /^[a-zA-Z0-9_$]+$/
            };
        this.build = function(base, key, value){
            base[key] = value;
            return base;
        };
        this.push_counter = function(key){
            if(push_counters[key] === undefined){
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };
        $.each($(this).serializeArray(), function(){
            // skip invalid keys
            if(!patterns.validate.test(this.name)){
                return;
            }
            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while((k = keys.pop()) !== undefined){
                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');
                // push
                // fixed
                 if(k.match(patterns.fixed)){
                    merge = self.build([], k, merge);
                }
                // named
                else if(k.match(patterns.named)){
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });
		
        return json;
    };
    
})(jQuery);