let bulbOnButton = document.getElementById("bulbOnButton");
let bulbOffButton = document.getElementById("bulbOffButton");
let image = document.getElementById("image");

bulbOnButton.addEventListener("click", () => {
  image.src =
    "https://up.yimg.com/ib/th?id=OIP.zHtYy800GhmmVF2UfkgymwHaJ4&pid=Api&rs=1&c=1&qlt=95&w=93&h=124";
  console.log("Bulb On");
  bulbOnButton.disabled = true;
  bulbOffButton.disabled = false;
});
bulbOffButton.addEventListener("click", () => {
  image.src =
    "https://up.yimg.com/ib/th?id=OIP.dTmDdvOWEO-0s7t0Z3Yr4gHaJ4&pid=Api&rs=1&c=1&qlt=95&w=83&h=110";
  console.log("Bulb off");
  bulbOffButton.disabled = true;
  bulbOnButton.disabled = false;
});
