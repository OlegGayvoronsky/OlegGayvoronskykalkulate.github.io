function click1() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    f1[0].value * f2[0].value;
    if(!(f1[0].value * f2[0].value)) return "Введены не коректные данные";
    return f1[0].value * f2[0].value;
  }

  function onClick() {
    alert(click1());
  }
  
  window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("my-button");
    b.addEventListener("click", onClick);
  });
