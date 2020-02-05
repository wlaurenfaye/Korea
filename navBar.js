
  <script>

  window.onscroll = (function) {my function()};

  var navBardocument.getElementById("navBar");

  var sticky =navBar.offset.Top;

  function myFunction () {
    if (window.pageYOffset >=sticky) {
      navBar.classlist.add ("sticky") }
      else {
        navBar.classList.remove("sticky");
      }
    }
</script>