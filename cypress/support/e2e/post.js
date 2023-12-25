it('Create a user - POST', () => {
    let body = {
        
            "id": 0,
            "username": Cypress.env('username'),
            "firstName": "nic",
            "lastName": "ole",
            "email": "nicole",
            "password": "1234",
            "phone": "0823",
            "userStatus": 0
        }
        console.log(body)
        cy. request('POST', '/user', body).as('createUser');
        // adds new todo item by defining Todo name
        cy. get('@createUser').then(createUser => {
            expect(createUser.status).to.eq(200);
        });
});