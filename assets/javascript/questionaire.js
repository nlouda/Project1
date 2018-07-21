  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyD96eOR5BLQPgz8RKKblfL7Eillmiwn4jI",
      authDomain: "project1-2556e.firebaseapp.com",
      databaseURL: "https://project1-2556e.firebaseio.com",
      projectId: "project1-2556e",
      storageBucket: "project1-2556e.appspot.com",
      messagingSenderId: "378894157269"
  };
  firebase.initializeApp(config);

  //Pseudo code::
  //problem1: Present user with 3 questions with 3 answers to each question

  //numbers that the answers will add up to to identify desired location:
  // libary (3-5)
  // coffee (6-7)
  // bar (8-9)

  //Q1: How would you describle your personality? 
  //1. introvert (1 points)
  //2. introvert but like to party sometime (2 points)
  //3. extrovert (3 points)

  //Q2: What would you like to have while you are study? 
  //1. no food distraction (1 point)
  //2. coffee (2 points)
  //3. beer (3 points)

  //Q3: At your study location: are you going to need external resources handy? (books/ magazines/ charger outlets) 
  //1. Yes! I will definitely need external resources handy!  (1 points)
  //2. Maybe! I may need an outlet or two!(2 points)
  //3. Nope,,, I just want to party! \^~^/ (3 points)


  //problem 2: CODING LOGIC: questions with answers that will add up to a specific number that will identify a desired study locations
  //1)assign answer 1 to be worth 1point, answ.2 to be worth 2points & answ.3 to be worth 3points.


  //create three arrays containing 
  //run a function to add up all the points from all three answers

  // create "userinput" var. that will gather all 3 answers that the user selected.

  //using var "userinput", invoke argument into function that 

  //Run if/else if statement to determine which numerical value point range they fall into

  //if answer points is between 3-5
  //connect to Libary buttom
  //if answer points is between 6-7
  //connect to coffee shop buttom
  //if answer points is between 8-9
  //connect to bar buttom