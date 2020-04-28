# Lien vers la présentation
https://docs.google.com/presentation/d/1fTchN8dG3oAtI18jX1a2Sdj0Eg2d3cE0Xdo9qmKydII/edit?usp=sharing

# Alias docker poour executer gcloud 

```
alias gcloudd='docker run --rm -ti -v /var/run/docker.sock:/var/run/docker.sock --volumes-from gcloud-config -v $(pwd):/working -w /working --name gcloud-runtime google/cloud-sdk gcloud'

gcloudd init  # connect on your gcloud account
```

# Contenu d projet
- artiellery : Projet node qui permet de faire une monter en charge le service 
- express_appengine : Projet qui permet de déployer une application Node Express sur Appengine FLEX (runtime NodeJS)
- docker_appengine : Projet qui permet de déployer une application GO qui est "dockerisé" sur Appengine FLEX (runtime CUSTOM)
- front-react : Projet qui permet de déployer une application react sur Appengine Standard (runtime NodeJS)
Chaque projet contient un readme pour expliquer son utilisation.
