// components/CrispChat.js

const CrispChat = () => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
        window.$crisp=[];
        window.CRISP_WEBSITE_ID="20aa4c38-d49f-4ee1-aa43-95f04da00f46";
        (function(){
          var d=document;
          var s=d.createElement("script");
          s.src="https://client.crisp.chat/l.js";
          s.async=1;
          d.getElementsByTagName("head")[0].appendChild(s);
        })();
      `,
    }}
  />
);

export default CrispChat;
