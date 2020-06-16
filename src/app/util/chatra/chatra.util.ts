
export class ChatraUtil {
  public static adminChatraId = '';
  public static adminChatraGroupId = '';

  /**
   * Inject the chatra.io script
   * @param chatraId - The chatra.io ID
   */
  public static initialize(chatEnabled: boolean, chatraId: string, groupChatraId: string) {
    if (chatEnabled && chatraId) {

      if (groupChatraId) {
        const groupScript = document.createElement('script');
        groupScript.innerHTML = `ChatraGroupID = '${groupChatraId}'`;
        document.head.appendChild(groupScript);
      }

      // Fix position of Chatra chat icon
      const positionScript = document.createElement('script');
      positionScript.innerHTML = `window.ChatraSetup = {
        buttonPosition: 'rm'
        };`;
      document.head.appendChild(positionScript);

      const chatraWidgetCode = `(function(d, w, c) {
        w.ChatraID = "${chatraId}";
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');`;

      const script = document.createElement('script');
      script.innerHTML = chatraWidgetCode;
      document.head.appendChild(script);
    }
  }

  public static hide() {
    if ((window as any).Chatra) {
      (window as any).Chatra('kill');
    }
  }
}
