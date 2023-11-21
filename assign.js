const express = require('express')

const app = express()

app.listen(8080);

app.get('/',(req,res)=>{
    res.send('<p>Hi there, welcome to my assignment</p>');
})

app.get('/speak/:animals',(req,res)=>{
    var animal = req.params.animals;
    if(animal == 'pig'){
        var sound = "Oink";
    }
    else if (animal == 'cow'){
        var sound = "Moo";
    }
    else if (animal == 'dog'){
        var sound = "Woof Woof";
    }
    else if (animal == 'goat'){
        var sound = "bleh"
    }
    else{
        var sound = "blah blah blah"
    }
    res.send('The' + " " + animal + " " + 'says' + " " + sound );
});


app.get('*', (req,res)=>{
    res.send('Sorry, page not found... what are you doing with your life');
});

