
1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.

    Sessions can be used to keep to the user logged in. It is stored in a cookie. It can log the users moves on website and be set to expire after a certain amount of time. 
    JSON web token use a token to store user access. it contains a header, payload, and signature.

2. What does `bcryptjs` do to help us store passwords in a secure manner?

    Bcrypt hashes passwords so they are not visable over the web. It encrypts the password based on the secret and not easily decrypted.

3. How are unit tests different from integration and end-to-end testing?

    Unit tests check the functionality of small specific functions in the code, whereas integration testing check the functionality of a group of units. 

4. How does _Test Driven Development_ change the way we write applications and tests?

    It is the ideal way to write code, with a safety net to check when code is non-functional when reconstituting.  it adds to error handling