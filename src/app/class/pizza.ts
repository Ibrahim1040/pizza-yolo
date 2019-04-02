export class Pizza {
	//proprietes
	prix = 10;

	//constructeur
	constructor(public nom, public ingredients, public image, prix?){
		if(prix){
			this.prix = prix;
		}
	}
//methode
direNom(){
	console.log('Je suis une pizza de type' + this.nom);
}
getImage(){
	return '/assets/images/' + this.image + '.jpeg';
}

}