

let filters = {
 brightness:{
   value:100,
   min: 0,
   max:200,
  unit:"%"
 },
 contrast:{
   value:100,
   min: 0,
   max:200,
    unit:"%"
 },
 saturation:{
   value:100,
   min: 0,
   max:200,
    unit:"%"
 },
 hueRotation:{
   value:0,
   min: 0,
   max:360,
    unit:"deg"
 },
 blur:{
   value:0,
   min: 0,
   max:20,
  unit:"px"
 },
 grayscale:{
   value:0,
   min: 0,
   max:100,
   unit:"%"
 },
 sepia:{
  value:0,
   min: 0,
   max:100,
   unit:"%"
 },
 opacity:{
  value:100,
   min: 0,
   max:100,
   unit:"%"
 },
 invert:{
  value:0,
   min: 0,
   max:100,
   unit:"%"
 },
}

const presets = {
  Normal: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  Vintage: {
    brightness: 110,
    contrast: 90,
    saturation: 80,
    hueRotation: 10,
    blur: 0,
    grayscale: 10,
    sepia: 35,
    opacity: 100,
    invert: 0
  },

  BlackWhite: {
    brightness: 105,
    contrast: 120,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  Sepia: {
    brightness: 105,
    contrast: 105,
    saturation: 80,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 100,
    opacity: 100,
    invert: 0
  },

  Cool: {
    brightness: 100,
    contrast: 110,
    saturation: 120,
    hueRotation: 180,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  Warm: {
    brightness: 110,
    contrast: 105,
    saturation: 125,
    hueRotation: 340,
    blur: 0,
    grayscale: 0,
    sepia: 20,
    opacity: 100,
    invert: 0
  },

  Vibrant: {
    brightness: 110,
    contrast: 120,
    saturation: 160,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  Soft: {
    brightness: 110,
    contrast: 85,
    saturation: 90,
    hueRotation: 0,
    blur: 1,
    grayscale: 0,
    sepia: 10,
    opacity: 100,
    invert: 0
  },

  Night: {
    brightness: 65,
    contrast: 130,
    saturation: 80,
    hueRotation: 220,
    blur: 0,
    grayscale: 10,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  HighContrast: {
    brightness: 105,
    contrast: 170,
    saturation: 110,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  Dreamy: {
    brightness: 115,
    contrast: 80,
    saturation: 110,
    hueRotation: 10,
    blur: 2,
    grayscale: 0,
    sepia: 10,
    opacity: 95,
    invert: 0
  },

  Cinematic: {
    brightness: 90,
    contrast: 135,
    saturation: 120,
    hueRotation: 350,
    blur: 0,
    grayscale: 5,
    sepia: 10,
    opacity: 100,
    invert: 0
  }
};

const imageCanvas = document.querySelector("#image-canvas")
const imageInput = document.querySelector("#image-input")
const filtersContainer = document.querySelector(".filters");
const canvasCtx  = imageCanvas.getContext("2d")
const resetButton = document.querySelector("#reset-btn")
const downloadButton = document.querySelector("#download-btn")
let file = null
let image = null

function createFilterElement(name , unit = "%" , value , min ,max) {
 
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input")
  input.type="range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.id = name
  
  const p = document.createElement("p")
  p.innerText = name

  div.appendChild(p)
  div.appendChild(input)

  input.addEventListener("input",(events)=>{
      filters[name].value = input.value 
      applyFilters()
  })

  return div
}

function createFilters(){
 Object.keys(filters).forEach(key=>{
   const filterElemnt = createFilterElement(key , filters[key].unit , filters[key].value , filters[key].min , filters[key].max)
      console.log(filterElemnt)
      filtersContainer.appendChild(filterElemnt);
    })
}

createFilters()


imageInput.addEventListener("change",(event)=>{
  const file = event.target.files[0]
  const imagePlaceholder = document.querySelector(".placeholder");
  imageCanvas.style.display = "block"
  imagePlaceholder.style.display = "none";
  console.log(file)

  const img = new Image();
  img.src = URL.createObjectURL(file)
  
  img.onload = () => {
    image = img
    imageCanvas.width = img.width
    imageCanvas.height = img.height
    applyFilters();
  }
})

function applyFilters() {
  canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);

  canvasCtx.filter =
    `brightness(${filters.brightness.value}${filters.brightness.unit}) ` +
    `contrast(${filters.contrast.value}${filters.contrast.unit}) ` +
    `saturate(${filters.saturation.value}${filters.saturation.unit}) ` +
    `hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit}) ` +
    `blur(${filters.blur.value}${filters.blur.unit}) ` +
    `grayscale(${filters.grayscale.value}${filters.grayscale.unit}) ` +
    `sepia(${filters.sepia.value}${filters.sepia.unit}) ` +
    `opacity(${filters.opacity.value}${filters.opacity.unit}) ` +
    `invert(${filters.invert.value}${filters.invert.unit})`;

  canvasCtx.drawImage(image, 0, 0);

  canvasCtx.filter = "none";
}
resetButton.addEventListener("click", () => {
  filters.brightness.value = 100;
  filters.contrast.value = 100;
  filters.saturation.value = 100;
  filters.hueRotation.value = 0;
  filters.blur.value = 0;
  filters.grayscale.value = 0;
  filters.sepia.value = 0;
  filters.opacity.value = 100;
  filters.invert.value = 0;

  Object.keys(filters).forEach(key => {
    document.getElementById(key).value = filters[key].value;
  });

  applyFilters();
});

downloadButton.addEventListener("click", () => {
  if (!image) {
    alert("Please select an image first.");
    return;
  }

  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = imageCanvas.toDataURL("image/png");
  link.click();
});

function applyPreset(presetName) {
    const preset = presets[presetName];

    if (!preset) return;

    Object.keys(preset).forEach(key => {
        filters[key].value = preset[key];

        const slider = document.getElementById(key);
        if (slider) {
            slider.value = preset[key];
        }
    });

    applyFilters();
}

const presetsContainer = document.querySelector(".presets");

Object.keys(presets).forEach(name => {
    const button = document.createElement("button");
    button.textContent = name;
    button.addEventListener("click", () => applyPreset(name));
    presetsContainer.appendChild(button);
});