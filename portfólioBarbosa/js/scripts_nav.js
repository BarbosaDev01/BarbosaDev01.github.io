
/**https://youtu.be/ebuGMC9mUYg?si=B32hy0eZtoAIkCts 
 * 
 * https://www.google.com/search?client=firefox-b-d&q=boxicons+cdn
 * 
 * https://cdnjs.com/libraries/boxicons/2.1.0
 * 
 * https://boxicons.com/
 * 
 * https://youtu.be/F2Enina_FEY?feature=shared
 * 
 * https://youtu.be/x-4z_u8LcGc?feature=shared
 * 
*/

//**PEGANDO ELEMENTOS DO DOM */
const navLinks = document.querySelector('#navLinks')
const menuIcon = document.querySelector('.menu-icon')

navLinks.style.maxHeight = '0px'

menuIcon.addEventListener('click', () =>{
    if(navLinks.style.maxHeight === '0px'){
        navLinks.style.maxHeight = '380px'
    }else{
        navLinks.style.maxHeight = '0px'
    }
})

