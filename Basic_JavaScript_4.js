function my_Dictionary() {
    var plant= {
        Species:"Philodendren",
        Color:"dark green",
        Size:"2ft",
        Age:"3",
        Location:"Tropical",
    };
    delete plant.Location
    document.getElementById("Dictionary").innerHTML=plant.Location;
}