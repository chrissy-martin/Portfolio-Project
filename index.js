

var fact = document.getElementById('fact');

    var funFacts = ["Chrissy has a degree in Psychology.", 
    "Chrissy's favorite animal is the rhinocerous.", 
    "Chrissy has a freckle on her left eyeball.", 
    "Chrissy enjoys cooking and exploring different cultures through food.",
    "Chrissy is a coffee snob.", "Chrissy has two cats, Sasha and Myshka.",
    "Chrissy's favorite color changes often but it is usually either green or pink.", 
    "Chrissy enjoys making craft cocktails.", 
    "Chrissy still has her Christmas tree set up in her living room. It is now July.", 
    "Chrissy loves food.", "Chrissy's favorite flower is the magnolia.", 
    "Chrissy loves otters and would like to keep them in her mouth for safe keeping. Only safe keeping.",
    "Chrissy would absolutley move to Japan for the sole purpose of being able to own otters.", 
    "Chrissy loves to travel and visit new places.",
    "Chrissy has been bitten by a lemur. His name is Deeglan.", 
    "Chrissy has been bitten many times by a flamingo named Mambo.", 
    "Chrissy has been in animal care for a decade and is ready for a career change.", 
    "Chrissy loves to listen to all genres of music, except country."
    ]
    function factSelector () {
      var i = Math.floor(Math.random() * funFacts.length) | 0;
      fact.innerText = funFacts[i]

    }
    
    factSelector();







