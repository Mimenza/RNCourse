# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Instala expo-cli globalmente
RUN npm install -g expo-cli

# Instala @expo/ngrok globalmente
RUN npm install -g @expo/ngrok

# Copia el resto de la aplicación
COPY . .

# Instala expo-font
RUN npx expo install expo-font

# Instala expo-font y expo-app-loading
RUN npx expo install expo-font expo-app-loading

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]