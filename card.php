<?php
  require_once("index.php");
?>
<div class="card">
  <div class="cardimg">
    <?php
      require("img/$i.html");
    ?>
  </div>
  <div class="cardtext">
      <span class="cardname slidername<?=$i?>"></span>
      <span class="carddesc sliderdesc<?=$i?>"></span>
      <div class="cardprice">
        <span class="sliderprice<?=$i?>"></span> ₽
      </div>
  </div>
  <div class="cardbutton">
    <span class="cardbuttontext">Купить</span>
  </div>
</div>
