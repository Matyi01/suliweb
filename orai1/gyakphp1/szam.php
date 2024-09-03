<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Szám: <input type="number" name="szam">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $szam = htmlspecialchars($_POST['szam']);
  if (empty($szam)) {
    echo "Nincs szám";
  } else {
    echo $szam * 2;
  }
}
?>
</body>
</html>