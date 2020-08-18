const details =[
    {
      myprofile:{
        Name:'Abhishek',
        Age:24,
        Email:'abhi14496@gmail.com',
        Qualification:'B.E',
        Place:'Bengaluru'
      },
      buddy:{
        firstfriendname:"Chethan",
        secondfriendname:"Suhas"
      }

    } 
];

const router =app=> {
app.get('/details', (request, response) => {
response.send(details);
});
}
// Export the router
module.exports = router;