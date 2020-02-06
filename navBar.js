
  <script>

  window.onscroll = function() {my function()};

  var navBar = document.getElementById("navBar");

  var sticky =navBar.offset.Top;
  var navBar = function()

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navBar.classlist.add ("sticky") }
      else {
        navBar.classList.remove("sticky");
      }
    }
</script>
