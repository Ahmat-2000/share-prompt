# ---------------------------------------------------- #
#                Next.js core concept                  #
# ---------------------------------------------------- #

app/layout.js : 
    C'est le point d'entré de l'application, contient tout comme index.js
    dans un projet react simple.L'objet metadata, répresente le header 
    d'une page html. Header et footer sont mis dans ce composant car 
    toutes nos pages les partagent 

app/page.js :
    Répresente la page d'accueil sur la route principal(localhos:3000/)

app/globals.css : 
    Contient le css global de l'application

Server Component : 
    Par défaut tout composant est un server component
    QOn utilise un server component quand on fait une logique backend, requetter la base de donné

Client Component : 
    'use client' au début d'un composant pour indiquer que c'est un client component
    On utilise un client component quand on utilise un hook, custom hook, class components

Routing system : 
    à chaque fois q'on veut créer une route, on créera un dossier sous /app 
    avec le nom de la route, puis on crée un composent page.js qui sera 
    afficher quand on accède cette route.
    Exemple on veut une route /user :
        - cd /app 
        - mkdir user
        - touch page.js
        voilà c'est simple on a créé notre route localhos:3000/user

Nesting route :
    par exemple une route vip sous user
    On repète la même chose que pour user
        - cd /app/user 
        - mkdir vip
        - touch page.js
    voilà c'est simple on a créé notre route localhos:3000/user/vip

Dynamic routing : 
    Pour afficher les pages personnelles des utilisateur, on a besoin des 
    routes de la sorte localhos:3000/user/userId
    On fait la même chose que pour Nesting route, mais en mettant le nom du
    dossier entre [userId]
        - cd /app/user 
        - mkdir [userId]
        - touch page.js
    Dans page.js, on a accès à la variable userId
    voilà c'est simple on a créé notre route localhos:3000/user/userId

Shared layout.js :
    Partage de UI dans une même route

Loader loading.js : 
    Quand le fichier page.js est entrain de se télécharger, loading.js sera
    affiché. Utile pour la gestion des erreurs.

Error with error.js :
    Quand une erreur est declanché dans une route, ce composent sera afficher

# ----------------------------------- #
#           Data fetching             #
# ----------------------------------- #

Full-stack-App : 
    Il faut créer un dossier /api dans /app, puis créer nos différent route 
    pour express afin d'accéder au données. On n'a pas besoin de configurer
    un server express, il faut directement écrire les méthodes GET, POST ...
    L'api est disponible sur : localhos:3000/api/


SEO :
    pour amélioer le seo, il faut utiliser le metadata dynamiquement

In NextJS : 
    On a pas besoin de " import React from 'react' "


Link :
    https://console.cloud.google.com
    https://www.mongodb.com/atlas