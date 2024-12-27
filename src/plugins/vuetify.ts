/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'cyberpunkLightTheme',
    themes: {
      light: {
        colors: {
          primary: '#4BA3C3', // Azul vibrante
          secondary: '#9C6CD8', // Lila oscuro
          accent: '#FFD700', // Dorado (puede usarse como resaltador)
          success: '#00A878', // Verde brillante
          info: '#3AB0FF', // Azul claro
          warning: '#FFAA33', // Naranja cálido
          error: '#FF4C4C', // Rojo intenso
          background: '#F4F5F7', // Gris claro para el fondo
          surface: '#FFFFFF', // Blanco (cartas, botones, etc.)
        },
      },
      dark: {
        colors: {
          primary: '#4BA3C3', // Azul vibrante
          secondary: '#9C6CD8', // Lila oscuro
          accent: '#FFD700', // Dorado
          success: '#00A878', // Verde brillante
          info: '#3AB0FF', // Azul claro
          warning: '#FFAA33', // Naranja cálido
          error: '#FF4C4C', // Rojo intenso
          background: '#121212', // Gris oscuro para fondo
          surface: '#1E1E1E', // Otro gris oscuro para tarjetas
        },
      },
      monkTheme: {
        dark: true, // Un tema oscuro
        colors: {
          primary: '#5D4037', // Marrón cálido
          secondary: '#8D6E63', // Marrón claro
          background: '#3E2723', // Fondo marrón oscuro/negro
          surface: '#4E342E', // Superficies (como botones o tarjetas)
          error: '#D84315', // Naranja rojizo
          success: '#A1887F', // Marrón suave
          warning: '#FF7043', // Tono anaranjado
          info: '#FFE0B2', // Tono beige claro
        },
      },
      cyberpunkTheme: {
        dark: true, // El estilo es oscuro por defecto
        colors: {
          primary: '#FF00FF', // Rosa neón (color clave en cyberpunk)
          secondary: '#00FFFF', // Cian eléctrico
          background: '#111111', // Fondo oscuro (negro profundo)
          surface: '#1A1A2E', // Superficies ligeramente más claras
          error: '#FF1744', // Rojo neón
          success: '#76FF03', // Verde lima brillante
          warning: '#FFC400', // Amarillo vibrante
          info: '#18FFFF', // Azul eléctrico claro
        },
      },
      cyberpunkLightTheme: {
        dark: false, // Estilo claro
        colors: {
          primary: '#FF00FF', // Rosa neón
          secondary: '#00FFFF', // Cian eléctrico
          background: '#FFFFFF', // Fondo blanco
          surface: '#F5F5F5', // Superficies ligeramente grises
          error: '#FF1744', // Rojo brillante
          success: '#76FF03', // Verde lima
          warning: '#FFC400', // Amarillo intenso
          info: '#18FFFF', // Azul eléctrico
        },
      },
    },
  },
});

