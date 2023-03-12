import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>Sondage.com</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Créez facilement votre sondage grâce à sondage.com"
      />
      <link
        precedence="default"
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        precedence="default"
        rel="preconnect"
        href="https://fonts.gstatic.com"
      />
      <link
        precedence="default"
        href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
      {/* <Script strategy="">
        {
          (window.fbAsyncInit = (function () {
            FB.init({
              appId: "{your-app-id}",
              cookie: true,
              xfbml: true,
              version: "{api-version}",
            });

            FB.AppEvents.logPageView();
          })(
            (function (d, s, id) {
              var js,
                fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) {
                return;
              }
              js = d.createElement(s);
              js.id = id;
              js.src = "https://connect.facebook.net/en_US/sdk.js";
              fjs.parentNode.insertBefore(js, fjs);
            })(document, "script", "facebook-jssdk")
          ))
        }
      </Script> */}
    </>
  );
}
