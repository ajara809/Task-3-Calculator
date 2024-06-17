const c=document.getElementById('inp')
function add(input)
{
    c.value += input
}

function sum()
{ 
    try{
        c.value=eval(c.value)
    }
    catch(error)
    {
        c.value="Error"
    }
    
}

function clea()
{
    c.value=""
}