const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#Height").value);
  const weight = parseInt(document.querySelector("#Weight").value);
  const results = document.querySelector("#results");

  if (height === " " || height < 0 || isNaN(height)) {
    results.innerHTML = (`Enter valid height: ${height}`);
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    results.innerHTML = (`Enter valid weight: ${weight}`);
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    
    if(BMI<=18.6){
      results.innerHTML = `Under Weight: ${BMI}`;
    }
    
    else if(BMI<=24.6){
      results.innerHTML = `Normal Range: ${BMI}`;
    }
    
    if(BMI=>24.9){
      results.innerHTML = `Over Weight: ${BMI}`;
    }
  }
});
