# Platzom
Platzom es un idioma inventado para el curso de [fundamentos de 
JavaScript](https://platzi.com/js) de Platzi.

## Descripción del idioma

-1 Si la palabra termina con "ar", se le quitan esas 2 letras
-2 Si inicia con "Z " se le añade "pe" al final
-3 si la palabra traducida tiene 10 o más letras, se debe partir
	por la mitad y unir con un guion medio
-4 Por último, si la palabra original es un palindromo, ninguna regal anterior cuenta
	y se devuelve la misma palabra pero con mayusculas y minusculas intercaladas

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'


platzom("programar") ////program
```

##Créditos
- Sacha Lifszyc

##Licencia

[MIT](https://opensource.org/licenses/MIT)

