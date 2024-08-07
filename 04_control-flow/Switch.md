## Switch 

 Syntax 

    switch(key) {
    case value1:
        statement
        break;
    case value2:
        statement
        break;
    case valueN:    
        default:
            break;
    
If we don't use *break* then it will execute the remaining code also even after the key is matched except default case.    

In modern language, we don't need to apply *break* it automatically break the code after the key is matched