# password-random

Challenge #3 - Refractor code for Password Generator.
    
    My first step is to write pseudocode to identify what will need
    to be created or fixed with the script.js file.
        Based on the Acceptance Criteria for this project, my first 
        task will be setup a series of prompts for the user to set their password (pswd). 
        Prompt Overview:
                instruct user to create pswd within a defined range of characters.
                ?length of password (between 8 and 128 characters) 
                    I will need to create an 'if' statement to define a range for password length and setup a prompt if the input does not meet criteria.
                notify user regarding character type requirements defined in the password such as lowercase, uppercase, numeric, and/or special characters.
                    I will need to create variables for each set of character types,
                    such as uppercaseABC, lowercaseABC, numbers, specialChar
        Based on the sample code included in the script.js file, I will need to create
        the body of the function 'generatePassword()'
        Finally, a random password will be generated based on the criteria that was either input or acknowledged by the user.   
    