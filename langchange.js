/* 
Label: cloud
Version: 1.0
Design: Sean
Email: li.xiao@i-soft.com.cn
Remark:语言切换插件
skin:系统默认
--------------------------------------------------------------------------------------------------------- */

(function($){
	
	$.fn.cloudLang = function(params){
		
		var defaults = {
			file: 'lang-example.xml',
			lang: 'en'
		}
		
		var aTexts = new Array();
		
		if(params) $.extend(defaults, params);
		
		$.ajax({
		      type: "GET",
		      url: defaults.file,
		      dataType: "xml",
		      success: function(xml)
					   {
		           			$(xml).find('text').each(function()
							{
								var textId = $(this).attr("id");
		                 		var text = $(this).find(defaults.lang).text();
								
								aTexts[textId] = text;
							});
		
							$.each($("*"), function(i, item)
							{
								//alert($(item).attr("langtag"));
								if($(item).attr("langtag") != null)
									$(item).fadeOut(150).fadeIn(150).text(aTexts[$(item).attr("langtag")]);
							});
		               }
		      });
	};
	
})(jQuery);
$(document).ready(function(){
	
		$("#lang-en").click(function(){
			$("body").cloudLang({lang: "en", file: "lang-example.xml"});
		});

		$("#langzh").click(function(){
			$("body").cloudLang({lang: "zh", file: "lang-example.xml"});
		});
	});