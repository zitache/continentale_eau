import React from "react";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f1419] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-4 gap-16 mb-12">
          
          {/* Colonne 1 - Entreprise */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-white font-bold">
                <img src="/logo_eau.png" alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <h3 className="font-bold text-lg text-white">Intercontinental Eau</h3>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Votre partenaire de confiance pour une eau pure et de qualité au Togo. Nous nous engageons à vous fournir le meilleur service.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-blue-400 transition"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition"><Twitter size={20} /></a>
              <a href="#" className="hover:text-pink-400 transition"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h4 className="font-semibold mb-6 text-base text-white">Liens Rapides</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="/" className="hover:text-blue-400 transition">Accueil</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">À propo</a></li>
              <li><a href="/products" className="hover:text-blue-400 transition">Produits</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 - Produits */}
          <div>
            <h4 className="font-semibold mb-6 text-base text-white">Nos Produits</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/products" className="hover:text-blue-400 transition">Sachets 500ml</a></li>
              <li><a href="/products" className="hover:text-blue-400 transition">Bonbonnes 22L</a></li>
              <li><a href="/products" className="hover:text-blue-400 transition">Pack Entreprise</a></li>
              <li><a href="/products" className="hover:text-blue-400 transition">Abonnement</a></li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-base text-white">Contact</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-gray-400 hover:text-blue-400 mt-0.5 flex-shrink-0 transition" />
                <a href="tel:+22800000000" className="hover:text-blue-400 transition">+228 91 29 99 99</a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-gray-400 hover:text-blue-400 mt-0.5 flex-shrink-0 transition" />
                <a href="mailto:contact@votre-email.tg" className="hover:text-blue-400 transition">Intercontinentaleau@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-400 hover:text-blue-400 mt-0.5 flex-shrink-0 transition" />
                <span>Hedranawoé, Lomé, Togo</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-500">
          © 2024 Intercontinental Eau. Tous droits réservés. | Eau pure du Togo
        </div>
      </div>
    </footer>
  );
}