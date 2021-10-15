/**
 * test si une chaîne de caratère ressembre a un adresse
 * @param {string} email 
 * @returns boolean
 */

//var email = prompt("votre email");

function testEmail(email) {
    var hasDot = false;
    var hasArobase = false;
    var isValidEmail = true;

    // for(var index = 0; index < email.length; index ++)
    for (var index in email) {
        // Récupère le caractère dont la position est index
        char = email.charAt(index);

        // Si on trouve un espace l'email ne peut être valide
        // de même que s'il y a plus d'une arobase
        // on arrête donc la boucle
        if (char == " " || ("@" == char && hasArobase)) {
            isValidEmail = false;
            break;
        }

        // test de l'existence d'un point
        if (char == "." && index > 0 && index < email.length - 1) {
            hasDot = true;
        }
        // test de l'existence d'une arobase
        if (char == "@" && index > 0 && index < email.length - 1) {
            hasArobase = true;
        }
    }

    return isValidEmail && hasArobase && hasDot;
}

/**
 *conversion
 * @param {string} celsius 
 * @returns boolean
 */


function testCelcius(celsius) {
    var celcius = 20;
    return (celcius * (9 / 5)) + 32;
}



/**
 * formulaire
 * @param {string} currentYear
 * @returns boolean
 * 
 */
function testAnnees(currentYear) {
    var currentYear = new Date().getFullYear();
    var option = "<select>";

    for (year = currentYear; year <= currentYear + nb_year; year++) {
        option += "<option>" + year + "</option>";
    } 
    return ( option +=  "</select>");


}





















