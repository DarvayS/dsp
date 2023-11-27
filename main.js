// requirements for a native rendering function:
//
// - it must define a window.renderAd function that will be called by the Prebid Universal Creative
// - renderAd() must return a fully resolved and ready-to-display block of HTML that will be appended to the body
//
window.renderAd=function(data){
	let template = "<div class=\"sponsored-post\"><div class=\"thumbnail\"><\/div><div class=\"content\"><h1> <a href=\"##hb_native_linkurl##\" target=\"_blank\" class=\"pb-click\"><img src=\"##hb_native_icon##\"><br>выше иконка, ниже картинка<img src=\"##hb_native_image##\"><\/a> <a href=\"##hb_native_linkurl##\" target=\"_blank\" class=\"pb-click\">##hb_native_title##<\/a><\/h1><p>##hb_native_body##<\/p> <div class=\"attribution\"> ##hb_native_brand## <\/div> <\/div> <\/div>";
	const map = {
	    title: 'hb_native_title',
	    body: 'hb_native_body',
	    body2: 'hb_native_body2',
	    privacyLink: 'hb_native_privacy',
	    sponsoredBy: 'hb_native_brand',
	    image: 'hb_native_image',
	    icon: 'hb_native_icon',
	    clickUrl: 'hb_native_linkurl',
	    displayUrl: 'hb_native_displayurl',
	    cta: 'hb_native_cta',
	    rating: 'hb_native_rating',
	    address: 'hb_native_address',
	    downloads: 'hb_native_downloads',
	    likes: 'hb_native_likes',
	    phone: 'hb_native_phone',
	    price: 'hb_native_price',
	    salePrice: 'hb_native_saleprice'
	}
	for (var i = 0; i < data.length; i++){
		if (map[data[i].key]) {
			template = template.replace("##"+map[data[i].key]+"##",data[i].value);
		}
	}
	return template;
}