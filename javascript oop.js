// Classe pour le Produit
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Classe pour un élément du panier
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Calcul du prix total pour cet élément
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Classe pour le panier d'achat
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Ajouter un élément au panier
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Supprimer un élément du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Obtenir le total des éléments dans le panier
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    // Afficher les éléments du panier
    displayItems() {
        if (this.items.length === 0) {
            console.log("Votre panier est vide.");
        } else {
            console.log("Contenu du panier :");
            this.items.forEach(item => {
                console.log(`Produit: ${item.product.name}, Quantité: ${item.quantity}, Total: ${item.getTotalPrice()} €`);
            });
            console.log(`Prix total du panier : ${this.getTotalPrice()} €`);
        }
    }
}

// Tester les fonctionnalités
// Création des produits
const product1 = new Product(1, "Ordinateur Portable", 1000);
const product2 = new Product(2, "Souris", 50);
const product3 = new Product(3, "Clavier", 70);

// Création d'un panier
const cart = new ShoppingCart();

// Ajouter des produits au panier
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// Afficher le contenu du panier
cart.displayItems();

// Supprimer un produit du panier
cart.removeItem(2);

// Afficher le contenu mis à jour du panier
cart.displayItems();
