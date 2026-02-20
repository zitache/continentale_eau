import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Grid 4 colonnes exactement comme l'image */}
        <div className="grid grid-cols-4 gap-8 mb-8">
          
          {/* Colonne 1 - Logo et description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white">Intercontinental Eau</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour une eau pure et de qualité au Togo. Nous nous engageons à vous fournir le meilleur service.
            </p>
          </div>

          {/* Colonne 2 - Liens Rapides */}
         <div>
  <h4 className="font-semibold text-white mb-4">Liens Rapides</h4>
  <ul className="space-y-2 text-sm">
    <li><a href="/" className="text-gray-400 hover:text-blue-400 transition">Accueil</a></li>
    <li><a href="/about" className="text-gray-400 hover:text-blue-400 transition">À propos</a></li>
    <li><a href="/products" className="text-gray-400 hover:text-blue-400 transition">Produits</a></li>
    <li><a href="/contact" className="text-gray-400 hover:text-blue-400 transition">Contact</a></li>
  </ul>
</div>

          {/* Colonne 3 - Nos Produits */}
         <div>
  <h4 className="font-semibold text-white mb-4">Nos Produits</h4>
  <ul className="space-y-2 text-sm">
    <li><a href="/products" className="text-gray-400 hover:text-blue-400 transition">Sachets 500ml</a></li>
    <li><a href="/products" className="text-gray-400 hover:text-blue-400 transition">Bonbonnes 22L</a></li>
    <li><a href="/products" className="text-gray-400 hover:text-blue-400 transition">Pack Entreprise</a></li>
    <li><a href="/products" className="text-gray-400 hover:text-blue-400 transition">Abonnement</a></li>
  </ul>
</div>

          {/* Colonne 4 - Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+228 91 29 99 99</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>Intercontinentaleau@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
               <span>Hedranawoé, Lomé, Togo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - exactement comme l'image */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © 2024 Intercontinental Eau. Tous droits réservés. | Eau pure du Togo
        </div>
      </div>
    </footer>
  );
}