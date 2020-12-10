# Secure Password Generator
# Shane O'Connell
## 12-10-2020

### User Story

![Screenshot-User-Story](./img/screenshot-userstory.png)

### Criteria

![Screenshot-criteria](./img/screenshot-criteria.png)

### Goal 

![Screenshot-password-generator](./img/screenshot-generator.png)


## Pseudocode Example

1. Use __prompts__ and __confirms__ to get user selections and save them as __variables__
2. Check if selected length meets the __8-128 range__
3. Check __IF__ the user wanted a certain character type, and __IF__ they do, __THEN__ add those characters to a list of possible characters
4. Once you have the array or string of possible characters made based on what the user selected, use a __FOR LOOP__ to loop through the list of possible characters and __randomly select__ a character from it each time, add that character to a new string, which will be the password.
