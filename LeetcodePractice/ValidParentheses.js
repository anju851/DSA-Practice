var isValid = function(s) {
    let stak =[];
    //to iterate throughh each character of the string
    for(let ch of s){
        if(ch == '(' || ch =='{' || ch =='['){
            stak.push(ch);
            continue;
        }

        if(stak.length ==0) return false;
        let top;
        switch(ch){
            case ')':
            top=stak.pop();
            if(top=='{' || top=='[') return false;
            break;

            case '}':
            top=stak.pop();
            if(top=='(' || top=='[') return false;
            break;

            case ']':
            top=stak.pop();
            if(top=='{' || top=='(') return false;
            break;
        }
    }

    return (stak.length ==0);
};