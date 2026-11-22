/* chalkcast site settings. Paste your Kajabi checkout link between the quotes, then save.
   Every "Get chalkcast" button on the site will use it. Until you do, those buttons go to the price section. */
var CHALKCAST_CHECKOUT = "https://www.medmasterscollaborative.com/offers/kbK9ZkG4/checkout";

(function(){
  if(!CHALKCAST_CHECKOUT) return;
  var links=document.querySelectorAll('a[data-buy]');
  for(var i=0;i<links.length;i++){links[i].href=CHALKCAST_CHECKOUT;links[i].target='_blank';links[i].rel='noopener';}
})();
