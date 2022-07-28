(function() {

  var youtube = document.querySelectorAll(".youtube");

  for (var i = 0; i < youtube.length; i++) {

    var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";

    var image = new Image();
    image.src = source;
    image.addEventListener("load", function() {
      youtube[i].appendChild(image);
    }(i));

    youtube[i].addEventListener("click", function() {

      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  };

})();















<script>
info="<!DOCTYPE html>
<html lang=&#34;en&#34;>
<head>
  <meta charset=&#34;UTF-8&#34;>
  <meta http-equiv=&#34;X-UA-Compatible&#34; content=&#34;IE=Edge&#34;>
  <meta name=&#34;viewport&#34; content=&#34;width=device-width, initial-scale=1&#34;>

  <title>Tubesea</title>
  
 
  

  <!-- Custom Styles -->
  <link 

 rel=&#34;stylesheet&#34;

 href=&#34;https://cdn.jsdelivr.net/gh/Seminarclass/test@main/Test.css&#34;

>
</head>

<body>
  
  
  
  
  
  <div class=&#34;wrapper&#34;>
	<div class=&#34;youtube&#34; data-embed=&#34;Qag0Ks9BlDU&#34;>
		<div class=&#34;play-button&#34;></div>
	</div>
</div>

  
    <div class=&#34;wrapper&#34;>
      <div class=&#34;youtube&#34; data-embed=&#34;VKuSDtla9Dg&#34;>
        <div class=&#34;play-button&#34;></div>
      </div>
    </div>
  
 
  
  <script src=&#34;main.js&#34;></script>
</body>
</html>"

document.write(info)
</script>
