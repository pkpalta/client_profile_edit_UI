
export class GoogleAnalyticsUtil {
  /**
   * Inject Global site tag (gtag.js) - Google Analytics script
   * @param googleAnalyticsId - The Google Analytics ID - GA_MEASUREMENT_ID
   */
  public static initialize(googleAnalyticsEnabled: boolean, googleAnalyticsId: string) {
    if (googleAnalyticsEnabled && googleAnalyticsId) {
      const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      const gtagScript = document.createElement(`script`); //  src='${gtagUrl}'
      gtagScript.setAttribute('async', '');
      gtagScript.setAttribute('src', `${gtagUrl}`);
      document.head.appendChild(gtagScript);

      const googleAnalyticsWidgetCode = `window.dataLayer = window.dataLayer || [];
                                        function gtag(){dataLayer.push(arguments);}
                                        gtag('js', new Date());
                                        gtag('config', '${googleAnalyticsId}'); 
                                        `;

      const script = document.createElement('script');
      script.innerHTML = googleAnalyticsWidgetCode;
      document.head.appendChild(script);
    }
  }
  public static sendPurchaseEvent(googleAnalyticsEnabled: boolean, orderId: string, affiliation: string, amount: number, currency?: string, tax?: number) {
    if (googleAnalyticsEnabled) {
      let purchaseObject = {
        "transaction_id": orderId,
        "affiliation": affiliation,
        "value": amount,
        "currency": currency || "USD",
        "tax": tax || 0,
        "shipping": 0
      }; 
      const gtagEventFn = (window as any).gtag;
      if (gtagEventFn) {
        gtagEventFn('event', 'purchase', purchaseObject);
      }
    }
  }
}
