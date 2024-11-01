import React from "react";

const Turismo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-blue-800">
            Descubre Maravillas en Argentina
          </h1>

          <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600"></div>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            ¡Bienvenidos a una experiencia única en el corazón de Sudamérica!
            Argentina te espera con sus paisajes impresionantes, desde los
            glaciares majestuosos de la Patagonia hasta las coloridas montañas
            del norte, pasando por las vibrantes calles de Buenos Aires.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Prepárate para sumergirte en una cultura rica en tradiciones,
            saborear nuestra extraordinaria gastronomía y conocer a personas que
            te recibirán con los brazos abiertos. Tu aventura comienza aquí.
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 mx-auto block">
            Explorar Destinos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Turismo;
