
export class FirstPromoterUtil {

  public static initialize(firstPromoterEnabled: boolean, firstPromoterCid: string, firstPromoterDomain: string) {
    if (firstPromoterEnabled) {
      const firstPromterScript = document.createElement('script');
      // this inner HTML of script needs to be dynamic. Every site owner has their own
      firstPromterScript.innerHTML = `(function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://cdn.firstpromoter.com/fprom.js',t.onload=t.onreadystatechange=function(){var t=this.readyState;if(!t||"complete"==t||"loaded"==t)try{$FPROM.init("${firstPromoterCid}",".${firstPromoterDomain}")}catch(t){}};var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)})();`;
      document.head.appendChild(firstPromterScript);
    }
  }

}
