# Liste anniversaire — 8 novembre 2026

Page statique prête à héberger sur **GitHub Pages**. Un seul fichier : `index.html`.

## 1. Mettre en ligne sur GitHub Pages
1. Crée un dépôt GitHub (public ou privé selon si tu veux que ce soit indexé ou non).
2. Ajoute le fichier `index.html` à la racine du dépôt.
3. Va dans **Settings → Pages**, choisis la branche `main` et le dossier `/ (root)`.
4. Ta page sera disponible à une adresse du type `https://ton-pseudo.github.io/ton-depot/`.

## 2. Personnaliser les cadeaux
Dans `index.html`, chaque cadeau est un bloc :
```html
<article class="card" data-gift-id="gift-01">
```
Pour chaque cadeau, modifie les 4 zones indiquées par des commentaires `✏️` et `🖼️` et `🔗` :
- **Image** : remplace `<!-- <img src="" alt=""> -->` par `<img src="LIEN_IMAGE.jpg" alt="Nom du cadeau">`
- **Nom** : `<h3 class="card-name">...</h3>`
- **Description** : `<p class="card-desc">...</p>`
- **Prix** : `<p class="card-price">...</p>`
- **Lien produit** : `href="..."` sur le bouton "Voir le produit"

Pour ajouter un 5e cadeau, **duplique** un bloc `<article class="card" data-gift-id="gift-05">` entier
(pense à changer `data-gift-id` et les deux `id="check-gift-05"` en un identifiant unique, ex. `gift-05`).

## 3. Rendre la case "Je participe" visible par TOUT LE MONDE (Firebase, gratuit)

Par défaut, sans configuration, la case cochée n'est visible que sur l'appareil
de la personne qui l'a cochée (un bandeau le rappelle sur la page). Pour que
**tous les visiteurs voient en temps réel** qui participe à quoi, il faut un
petit espace de stockage partagé. Firebase Realtime Database (gratuit, sans
carte bancaire pour ce niveau d'usage) fait très bien l'affaire :

1. Va sur [console.firebase.google.com](https://console.firebase.google.com) et crée un projet (nom libre, ex. "anniversaire-2026").
2. Dans le menu de gauche : **Build → Realtime Database → Créer une base de données**.
   - Choisis une région proche de toi.
   - Démarre **en mode test** (accès libre en lecture/écriture pendant 30 jours — largement suffisant pour un anniversaire, voir note sécurité ci-dessous).
3. Toujours dans le projet, va dans **Paramètres du projet (⚙️) → Général**, descends jusqu'à "Vos applications", clique sur l'icône `</>` (Web) pour créer une appli web.
4. Firebase t'affiche un objet `firebaseConfig` avec des valeurs comme `apiKey`, `authDomain`, `databaseURL`, etc.
5. Copie ces valeurs dans `index.html`, tout en bas, à l'endroit où c'est écrit `REMPLACE_MOI` :
   ```js
   const firebaseConfig = {
     apiKey: "...",
     authDomain: "...",
     databaseURL: "...",
     projectId: "...",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "..."
   };
   ```
6. Republie/pousse le fichier sur GitHub Pages. Le bandeau "mode local" disparaît automatiquement, et les cases cochées sont désormais visibles par tous, en direct.

### Note sécurité
Le "mode test" de Firebase laisse la base ouverte en lecture/écriture à
quiconque connaît l'URL de ta base, pendant 30 jours (puis elle se verrouille
automatiquement). Pour une liste de cadeaux familiale à durée de vie courte,
c'est largement suffisant et sans risque réel (personne ne devine l'URL par
hasard). Si tu veux la garder ouverte plus longtemps, retourne dans
**Realtime Database → Règles** et prolonge la date, ou mets en place des
règles plus fines si tu es à l'aise avec ça.

## 4. Sans Firebase ?
Le site fonctionne très bien sans rien configurer : la page s'affiche, les
liens marchent, l'effet "projecteur" au survol fonctionne, et la case à
cocher fonctionne aussi — simplement chaque visiteur ne verra que ses propres
coches (stockage local à son navigateur), pas celles des autres.
