
$(".openClose").on('click', () => {

    $('.my-animate').addClass('animate__backInUp')

    if ($(".openClose").hasClass('fa-align-justify')) {

        $(".openClose").removeClass('fa-align-justify').addClass('fa-x');
        $('.Mynav').animate({ left: "0" }, 500);
    }
    else {
        $(".openClose").removeClass('fa-x').addClass('fa-align-justify');
        $('.Mynav').animate({ left: "-22%" }, 500);
        $('.my-animate').removeClass('animate__backInUp')

    }

});



// ****************************** close x*****************************************************

function closeX() {


    $('.Details .fa-x').on('click', () => {
        $('.Details').addClass('d-none')
        $('.my-section').removeClass('d-none')

    })
}

// close all 3shan a2fel el display lma adows 3la sershe categre ... ... ... 
function closeall() {
    $('.Details').addClass('d-none')
    $('.my-section').removeClass('d-none')
}


function hidesection() {
    $('.my-sectionVip').removeClass('d-none');
    $('.my-search ').addClass('d-none');
    $('.countact-us ').addClass('d-none');
}


// ***********************************





// *********************** seerch by name *************

$('#Search').on('click', () => {

    closeall();

    $(".openClose").removeClass('fa-x').addClass('fa-align-justify');
    $('.Mynav').animate({ left: "-22%" }, 1000);

    $('.my-search ').removeClass('d-none');
    $('.my-sectionVip').addClass('d-none');
    $('.countact-us').addClass('d-none')



    $('#my-name').on('input', () => {

        let butVal = $('#my-name').val();


        if (butVal == '') {
            $('.my-sectionVip').addClass('d-none');

            butVal = 'a'

        }

        else {
            $('.my-sectionVip').removeClass('d-none');

        }


        (async function () {
            $('.loading').removeClass('d-none')

            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${butVal}`);

            let finalRes = await res.json();



            allMails = finalRes.meals;



            displayMails(allMails);

            $('.loading').addClass('d-none')


        })();




    });

    // mylatel
    $('#my-leter').on('input', () => {

        let butVal = $('#my-leter').val();

        (async function () {


            if (butVal == '') {
                $('.my-sectionVip').addClass('d-none');
                butVal = 'a'


            }

            else {
                $('.my-sectionVip').removeClass('d-none');

            }

            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${butVal}`);

            let finalRes = await res.json();

            allMails = finalRes.meals;


            displayMails(allMails);

        })();












    });




});



// ******************get api all meals**************************************************


(async function () {
    $('.loading').removeClass('d-none')

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);

    let finalRes = await res.json();

    allMails = finalRes.meals;

    // console.log(allMails);





    displayMails(allMails);
    $('.loading').addClass('d-none')



})();





// *******************display mails***************************************

function displayMails(allMails) {

    let mailBox = '';

    for (const mail of allMails) {
        mailBox += `<div  data-id="${mail.idMeal}"  class=" my-id col-lg-3 col-md-6">
        <div class="inner position-relative rounded overflow-hidden">
          <div>
            <img class="w-100" src="${mail.strMealThumb}" alt="">
          </div>
          <div class="layer position-absolute start-0 end-0 px-2 d-flex align-items-center" ">
            <h2 ">${mail.strMeal}</h2>
          </div>
        </div>



      </div>`

    }


    $('#allmails').html(mailBox);


    showDetails();





}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// *************************** get api Categories ********************

$('#categories').on('click', function () {

    closeall();

    // $('.my-sectionVip').removeClass('d-none');
    // $('.my-search ').addClass('d-none');

    hidesection();



    (async function () {
        $('.loading').removeClass('d-none')

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);

        let finalRes = await res.json();

        allCategre = finalRes.categories;

        // console.log(allMails);

        displayCategories(allCategre);

        $('.loading').addClass('d-none')


    })();

})



// *************************displayCategories********************************************

function displayCategories(allCategre) {

    let catBox = '';

    for (const cat of allCategre) {
        catBox += `<div data-name="${cat.strCategory}" class="col-lg-3 col-md-6 my-categre">
        <div class="inner position-relative rounded overflow-hidden">
          <div>
            <img class="w-100" src="${cat.strCategoryThumb}" alt="">
          </div>
          <div class="layer position-absolute start-0 end-0 py-4 px-2 text-center   ">
            <h2>${cat.strCategory}</h2>
            <p>${cat.strCategoryDescription.split(" ").slice(0, 15).join(" ")}</p>
          </div>
        </div>



      </div>`

    }


    $('#allmails').html(catBox);
    showAllCategre();








}




// /////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ********************  arya*****

$('#area').on('click', function () {

    closeall();

    // $('.my-sectionVip').removeClass('d-none');
    // $('.my-search ').addClass('d-none');
    hidesection();


    (async function () {

        $('.loading').removeClass('d-none')
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);

        let finalRes = await res.json();

        allarray = finalRes.meals;

        // console.log(allMails);


        displayarea(allarray)

        $('.loading').addClass('d-none')



    })();

})


function displayarea(allarray) {

    let areaBox = '';

    for (const area of allarray) {
        areaBox += `<div Area-name="${area.strArea}" class="col-lg-3 col-md-6 my-aryea">
        <div class="inner d-flex justify-content-center align-items-center flex-column text-white">

          <i class="fa-solid fa-house-laptop fa-4x"></i>

          <h2>${area.strArea}</h2>


        </div>



      </div>`

    }


    $('#allmails').html(areaBox);


    showAllArea()





}















// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ***************************ingrediensts************************






$('#ingrediensts').on('click', function () {

    closeall();


    // $('.my-sectionVip').removeClass('d-none');
    // $('.my-search ').addClass('d-none');
    // $('.countact-us ').addClass('d-none');

    hidesection();

    (async function () {


        $('.loading').removeClass('d-none')

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);

        let finalRes = await res.json();

        allingredienst = finalRes.meals;

        // console.log(allMails);

        displayIngrediensts(allingredienst)


        $('.loading').addClass('d-none')







    })();

})

// *********display ingrediensts*********
function displayIngrediensts(allingrediensts) {

    let ingredienstsBox = '';

    for (const ingrediensts of allingrediensts) {
        ingredienstsBox += `<div ingrediensts-name="${ingrediensts.strIngredient}"   class="col-lg-3 col-md-6  my-ingrediensts" >
          
          <div class="inner text-center text-white">
  
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h2>${ingrediensts.strIngredient}</h2>
              <p>${ingrediensts.strDescription ? ingrediensts.strDescription.split(' ').slice(0, 20).join(" ") : `There Is Not have a Description`}</p>
  
  
          </div>

        </div>`

    }


    $('#allmails').html(ingredienstsBox);

    showAllIngrediensts();



}







// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////









// ************show ditalis*********
function showDetails() {
    let allCards = $('.my-id')

    for (const card of allCards) {

        let idMeal = $(card).attr('data-id');




        $(card).on('click', function () {
            $('.my-section').addClass('d-none');
            $('.Details').removeClass('d-none');

            (async function GetDetailsForMeal() {
                $('.loading').removeClass('d-none')

                let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
                let response = await meal.json();

                let infoo = response.meals[0]

                cartoonaLi = ``;

                for (let i = 1; i <= 20; i++) {

                    let addres = infoo[`strIngredient${i}`];
                    let det = infoo[`strMeasure${i}`];

                    if (addres != "" && det != "") {

                        cartoonaLi += `
                        
                        <li class="bg-info-subtle text-black rounded m-2 p-2">${det} ${addres}</li>
    
                        `
                    }
                    else {
                        break;
                    }




                }

                displayMailsbyid(infoo);

                $('.loading').addClass('d-none')















            })();



        })







    }
}


function displayMailsbyid(id) {
    let allmailsByidBox = `
       <div class="container Details  position-relative">
       <i class="fa-solid fa-x fa-2x position-absolute text-white"></i>
       <div class="row py-5 g-4 text-white ">
        <div class="col-md-4">
          <img class="w-100 rounded-3" src="${id.strMealThumb}" alt="">
          <h2>${id.strMeal}</h2>
        </div>
        <div class="col-md-8">
          <h2>Instructions</h2>
          <p>${id.strInstructions}</p>
          <h3><span class="fw-bolder">Area : </span>${id.strArea}</h3>
          <h3><span class="fw-bolder">Category : </span>${id.strCategory}</h3>
          <h3>Recipes :</h3>
          <ul class="my-ul list-unstyled d-flex g-3 flex-wrap">
  
  
            ${cartoonaLi}
  
  
            
          </ul>
  
          <h3>Tags :</h3>
          <ul class="list-unstyled d-flex g-3 flex-wrap">
  
            <li class="alert alert-danger m-2 p-1">${id.strTags}</li>
          </ul>
  
          <a target="_blank" href="${id.strSource}" class="btn btn-success">Source</a>
          <a target="_blank" href="${id.strYoutube}" class="btn btn-danger">Youtube</a>
        </div>
      </div>
    </div>`


    $('.my-Details').html(allmailsByidBox);

    closeX()
}


// ////////////////////////////////////////////////////////////////////////////////////////////////////////




function showAllCategre() {
    let allCategre = $('.my-categre');


    for (const cate of allCategre) {

        let nameCate = $(cate).attr('data-name');

        console.log(nameCate);

        $(cate).on('click', function () {




            (async function () {
                $('.loading').removeClass('d-none')
                let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameCate}`);

                let finalRes = await res.json();

                allcatbyname = finalRes.meals;



                displayMails(allcatbyname)
                $('.loading').addClass('d-none')


            })();
        })



    }


}
// /////////////////////////////////////////////////////////////////////////////////////////////////////

function showAllArea() {
    let allarray = $('.my-aryea');


    for (const aryea of allarray) {

        let nameArya = $(aryea).attr('Area-name');

        console.log(nameArya);

        $(aryea).on('click', function () {




            (async function () {
                let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nameArya}`);

                let finalRes = await res.json();

                AllArea = finalRes.meals;



                displayMails(AllArea)()



            })();
        })



    }


}

// /////////////////////////////////////////////////////////////////////////////////////////////////////


function showAllIngrediensts() {
    let allarray = $('.my-ingrediensts');


    for (const aryea of allarray) {

        let nameArya = $(aryea).attr('ingrediensts-name');

        // console.log(nameArya);

        $(aryea).on('click', function () {




            (async function () {
                $('.loading').removeClass('d-none')
                let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${nameArya}`);

                let finalRes = await res.json();

                allIngredienst = finalRes.meals;



                displayMails(allIngredienst)

                $('.loading').addClass('d-none')


            })();
        })



    }


}



// /////////////////////////////////////////////////////////////////////////////////////


$('#conatct').on('click', function () {
    $('.my-sectionVip').addClass('d-none');
    $('.countact-us').removeClass('d-none')
    $('.my-search').addClass('d-none');



    closeall();



})






// // ************************validachion*******************************************************

// Function to validate name
function validateName() {
    const nameInput = $('#nameInput');
    const nameMessage = $('#nameMessage');
    const nameValue = nameInput.val().trim();

    if (/^[a-zA-Z]{3,}$/.test(nameValue)) {
        nameMessage.addClass('d-none');
        return true;
    } else {
        nameMessage.removeClass('d-none');
        return false;
    }
}

// Function to validate email
function validateEmail() {
    const emailInput = $('#emailInput');
    const emailMessage = $('#emailMessage');
    const emailValue = emailInput.val().trim();

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailMessage.addClass('d-none');
        return true;
    } else {
        emailMessage.removeClass('d-none');
        return false;
    }
}

// Function to validate phone number
function validatePhone() {
    const phoneInput = $('#phoneInput');
    const phoneMessage = $('#phoneMessage');
    const phoneValue = phoneInput.val().trim();

    if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneValue)) {
        phoneMessage.addClass('d-none');
        return true;
    } else {
        phoneMessage.removeClass('d-none');
        return false;
    }
}


// Function to validate age
function validateAge() {
    const ageInput = $('#ageInput');
    const ageMessage = $('#ageMessage');
    const ageValue = ageInput.val();

    if (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(ageValue)) {
        ageMessage.addClass('d-none');
        return true;
    } else {
        ageMessage.removeClass('d-none');
        return false;
    }
}


// Function to validate password
function validatePassword() {
    const passwordInput = $('#passwordInput');
    const passwordMessage = $('#passwordMessage');
    const passwordValue = passwordInput.val().trim();

    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordValue)) {
        passwordMessage.addClass('d-none');
        return true;
    } else {
        passwordMessage.removeClass('d-none');
        return false;
    }
}


// Function to validate password match
function validateRepassword() {
    const repasswordInput = $('#repasswordInput');
    const repasswordMessage = $('#repasswordMessage');
    const passwordInput = $('#passwordInput');
    const repasswordValue = repasswordInput.val().trim();
    const passwordValue = passwordInput.val().trim();

    if (repasswordValue === passwordValue) {
        repasswordMessage.addClass('d-none');
        return true;
    } else {
        repasswordMessage.removeClass('d-none');
        return false;
    }
}


// Function to enable or disable submit button based on validation results 
function updateSubmitButton() {
    let isValidName = validateName();
    let isValidEmail = validateEmail();
    let isValidPhone = validatePhone();
    let isValidAge = validateAge();
    let isValidPassword = validatePassword();
    let isValidRepassword = validateRepassword();

    let submitBtn = $('#submitBtn');
    if (isValidName && isValidEmail && isValidPhone && isValidAge && isValidPassword && isValidRepassword) {
        submitBtn.removeClass('disabled');
    } else {
        submitBtn.addClass('disabled');
    }
}


// Event listeners to trigger validation on input change
$('input').on('input', function () {
    updateSubmitButton();
});


