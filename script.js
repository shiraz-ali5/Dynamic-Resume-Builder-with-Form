"use strict";
const form = document.getElementById("form");
let userform = document.getElementsByClassName("userform_remove")[0];
let formbox = document.querySelector(".form-container");
form.addEventListener("submit", (e) => {
    var _a;
    e.preventDefault();
    formbox === null || formbox === void 0 ? void 0 : formbox.style.display = "none";
    userform === null || userform === void 0 ? void 0 : userform.classList.remove("userform_remove");
    let profilepic_ele = document.getElementsByClassName("input-profile")[0];
    let fullName_ele = document.getElementsByClassName("fullname")[0];
    let email_ele = document.getElementsByClassName("email")[0];
    let contact_ele = document.getElementsByClassName("Contact")[0];
    let address_ele = document.getElementsByClassName("Address")[0];
    let githublink_ele = document.getElementsByClassName("github")[0];
    let degree_ele = document.getElementsByClassName("degree")[0];
    let univercity_ele = document.getElementsByClassName("uniname")[0];
    let graducationyear_ele = document.getElementsByClassName("graducationyear")[0];
    let allskills_ele = document.getElementsByClassName("skill-input");
    let workexperience_ele = document.getElementsByClassName("workexperience")[0];
    if (profilepic_ele && fullName_ele && email_ele && contact_ele && address_ele && githublink_ele && degree_ele && univercity_ele && graducationyear_ele && allskills_ele && workexperience_ele) {
        const profile = ((_a = profilepic_ele.files) === null || _a === void 0 ? void 0 : _a[0]) ? URL.createObjectURL(profilepic_ele.files[0]) : 'profile picture';
        const fullname = fullName_ele.value || "<b>User Name</b>";
        const email = email_ele.value || "<b>User Email</b>";
        const contact = contact_ele.value || "<b>User Contact</b>";
        const address = address_ele.value || "<b>User Address</b>";
        const githublink = githublink_ele.value;
        const degree = degree_ele.value;
        const univercity = univercity_ele.value;
        const graduationyear = graducationyear_ele.value;
        const allskills = Array.from(allskills_ele).map((skill) => skill.value).join(', ');
        const workexperience = workexperience_ele.value || "<b>User workexperience</b>";
        // Update userform content
        const resumeoutput = document.getElementsByClassName("userform")[0];
        if (resumeoutput) {
            resumeoutput.innerHTML = `
        <div class="resume-header">
              
             <h2>Personal Information</h2>
            <div class="profile-container"><img id="profile-pic" src="${profile}" alt="Profile Picture" class="profile-pic"></div>
            <hr>
            <p id="user-fullname">${fullname}</p>
            <p id="user-email>${email}</p>
            <p id="user-contact">${contact}</p>
            <p id="user-address">${address}</p>
            <p id="user-github"><a href="${githublink}" target="_blank">GitHub Profile</a></p>
        </div>

  <div class="resume-education">
            <div class="education-remove">
             <h2>Education</h2>
              <label for=""><b>Degree</b>
            <p id="user-degree">${degree}</p>
            </label
            <label for=""><b>University</b>
            <p id="user-degree" >${univercity}</p>
             </label
               <label for=""><b>Graduation Year</b>
            <p id="user-degree"> ${graduationyear}</p>
              </label
        </div>
        </div>


    



        <div class="resume-skills">
          <h2>Skills</h2>
          <ul id="user-skills">
            ${allskills.split(', ').map(skill => `<li>${skill}</li>`).join('')}
          </ul>
        </div>
        <div class="resume-work-experience">
          <h2>Work Experience</h2>
          <p id="user-workexperience">${workexperience}</p>
        </div>
      `;
        }
    }
});
