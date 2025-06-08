
// Nav-bar and section management 

function showSection(sectionId) {
  const sections = document.querySelectorAll("#about-me, #projects, #reviews, #contact");
  sections.forEach(section => section.style.display = "none");
  
  const active = document.getElementById(sectionId);
  if (active) active.style.display = "block";
}


 // addRecommendation function

function addReview(event) {
  event.preventDefault(); // verhindert das automatische Absenden der Seite

  // Get the message of the new recommendation

  let review = document.getElementById("new_review");
  let email = document.getElementById("email");
  let name = document.getElementById("name");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;               // valid email test const

  // If the user has left a review, display a pop-up

  if (
    review.value.trim() !== "" &&                       // valid input test 
    email.value.trim() !== "" &&
    emailPattern.test(email.value.trim()) &&
    name.value.trim() !== "") 
    {
    console.log("New review added");
    showPopupSuccess(true);

    // Create a new 'recommendation' element and set it's value to the user's message

    var element = document.createElement("div");
    element.setAttribute("class","review");
    element.innerHTML = "\<span\>''\</span\>" + review.value + "\<span\>''\</span\>";

    // Add this element to the end of the list of recommendations

    document.getElementById("all_reviews").appendChild(element); 
    
    // Reset the value of the textarea

    review.value = "";
    email.value = "";
    name.value = ""; 
    }
  else {
    console.log("No valid input");
    showPopupError(true);

    }
}

    // popup function success

function showPopupSuccess(bool) {
  if (bool) {
    document.getElementById('popup-success').style.visibility = 'visible';
  } else {
    document.getElementById('popup-success').style.visibility = 'hidden';
  }
}

  // popup function error
function showPopupError(bool) {
  if (bool) {
    document.getElementById('popup-error').style.visibility = 'visible';
  } else {
    document.getElementById('popup-error').style.visibility = 'hidden';
  }
}

