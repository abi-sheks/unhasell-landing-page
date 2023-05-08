let isActive = false;
let currentActive = null;
const sfty = document.getElementsByClassName("safety-splash");
const count = sfty.length;
console.log(count);
console.log("script is running");
for (let i = 0; i < count; i++) {
  sfty[i].addEventListener("click", () => {
    console.log("click");
    if (currentActive) {
      if (currentActive === sfty[i]) {
        toggleOff(sfty[i])
        currentActive = null;
      } else {
        toggleOff(currentActive)
        currentActive = sfty[i];
        toggleOn(sfty[1])
      }
    } else {
      currentActive = sfty[i];
      isActive = true;
      console.log(sfty[i].nextElementSibling);
      toggleOn(sfty[i])
    }
  });
}
function toggleOn(item) {
  item.nextElementSibling.style.display = "block";
  item.style.backgroundColor = "black";
  item.childNodes[1].style.color = "white";
  item.style.borderBottomRightRadius ="0px";
  item.style.borderBottomLeftRadius ="0px";

  // if(window.innerWidth >= 1000)
  // {
  // item.style.margin = "0rem 0rem 0rem 0rem";
  // }
  // else
  // {
  // item.style.margin = "0rem 1rem";
  // }
}
function toggleOff(item) {
  item.nextElementSibling.style.display = "none";
  item.style.backgroundColor = "#01af57";
  item.childNodes[1].style.color = "#1f2420";
  item.style.borderBottomRightRadius ="8px";
  item.style.borderBottomLeftRadius ="8px";
  // if(window.innerWidth >= 1000)
  // {
  // item.style.margin = "0rem 0rem 0.5rem 0rem";
  // }
  // else
  // {
  // item.style.margin = "1rem 1rem";
  // }
}
