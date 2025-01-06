// Array example for holding user data
const users = [
        { name: 'John Doe', email: 'johndoe@example.com', age: 25 },
        { name: 'Jane Smith', email: 'janesmith@example.com', age: 30 }
    ];
    
    // Creating a new user and adding it to the array
    function createUser(name, email, age) {
        const newUser = { name, email, age };
        users.push(newUser);
        console.log('User created:', newUser);
    }
    
    // Demonstrating array filtering
    function filterUsersByAge(age) {
        return users.filter(user => user.age >= age);
    }
    
    // Example of a map function (mapping user names to uppercase)
    function getUppercaseUserNames() {
        return users.map(user => user.name.toUpperCase());
    }
    
    // Example of using reduce to get the average age of users
    function getAverageAge() {
        const totalAge = users.reduce((sum, user) => sum + user.age, 0);
        return totalAge / users.length;
    }
    
    // Function to execute after a timeout
    setTimeout(() => {
        alert("Reminder: Your session is about to expire!");
    }, 5000); // Shows after 5 seconds
    
    // Callback function example
    function displayMessage(message, callback) {
        console.log(message);
        callback();
    }
    
    // Calling callback after message display
    displayMessage("Hello, welcome to Unetwork!", () => {
        console.log("Callback executed!");
    });
    