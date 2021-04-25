class Breakfast {
    constructor(food, drink) {
        this.food = food
        this.drink = drink
    }
}

let mondayBreakfast = new Breakfast('Tropical Fruit Bowl', 'Iced Oat Latte');
let tuesdayBreakfast = new Breakfast('Savory Steel Cut Oats', 'Cold Brew Coffee');

mondayBreakfast;
tuesdayBreakfast;

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

let wednesdayLunch = new Lunch('Raw Artichoke Salad', 'English Pea Toast', 'Aperol Spritz')
let thurdayLunch = new Lunch('Asparagus, Nettle, & Green Frittata', 'Butter Lettuce Salad', 'Espresso Lunch')

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this._dessert = dessert
    }
}

let fridayDinner = new Dinner('Agrodolce Ramps on Grilled Bread', 'Charred Scallion Salsa Verde', 'Beet Slaw with Pistachios and Raisins', 'Celery Puntarelle-Style')
let saturdayDinner = new Dinner('Grilled Radishes with Dates, Apples, and Radish Tops', 'Leeks with Soft-Boiled Eggs', 'Sugar Snap Peas with Mustard Seeds and Tarragon', 'Pasta alla Gricia with Slivered Sugar Snap Peas')