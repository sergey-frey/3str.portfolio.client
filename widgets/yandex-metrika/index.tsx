"use client";

import Script from "next/script";

export function Metrika() {
	return (
		<>
			<Script id="yandex-metrika">
				{`
          <!-- Yandex.Metrika counter -->
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
          ym(97195268, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
          });
          <!-- /Yandex.Metrika counter -->
        `}
			</Script>
			<noscript>
				<div>
					<img
						src="https://mc.yandex.ru/watch/97195268"
						style={{ position: "absolute", left: -9999 }}
						alt=""
					/>
				</div>
			</noscript>
		</>
	);
}
