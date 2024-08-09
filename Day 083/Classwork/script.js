const foods = [
    {name :"pizza", 
    name2:"mwvadi", 
    name3:"khinkali"
    }];

foods.forEach(foods => {
    foods.getName2 = function(){
        return this.name2;
    };

    foods.getName = function(){
        return this.name1
    };

    foods.getName = function(){
        return this.name
    };
});
