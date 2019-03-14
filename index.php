<!DOCTYPE html>
<html>
	<?php require_once("head.html"); ?>
	<body>
		<div class="wrapper">
			<?php
				require_once("layout.html");
				require_once("slider.php");
			?>
			<span class="goods">Товары</span>
			<?php
				for($i = 1; $i <= 3; $i++) {
					require("card.php");
				}
			?>
		</div>
</body>
</html>
