---
layout: site
type: post 
title:  "Spain Castles!"
date:   2018-11-22 10:44:15 +0200
---

<section id="post-spain">
    <div class="spain-castles">
        <h2>Top 3 of Spain Castles</h2>
        <article class="la-mota">
            <img src="{{ site.baseurl }}/assets/2.gif" data-src="{{ site.baseurl }}/assets/Spain Castles/castle_of_la_mota.jpg" alt="photo">
            <h3>1. Castle of La Mota</h3>
            <p>The Castle of La Mota or Castillo de La Mota is a medieval fortress, located in the town of Medina del Campo, province of Valladolid, Spain. It is so named because of its location on an elevated hill, a mota (in Spanish), from where it dominates the town and surrounding land. The adjacent town came to be surrounded by an expanding series of walls in subsequent years, of which little remains. The Castle's main feature is the large outer barbican. The interior castle has a trapezoidal plan, with 4 towers and a square yard. It has a large square keep tower, and an inner curtain wall that was used for archers. In olden times, people entered the castle over a drawbridge. This medieval fortress has been reconstructed. At one time it was a well-known prison, housing such people as Hernando Pizarro, a conqueror of Peru, and Cesare Borgia.</p>
        </article>
        <article class="olite">
            <img src="{{ site.baseurl }}/assets/2.gif" data-src="{{ site.baseurl }}/assets/Spain Castles/olite_castle.jpg" alt="photo">
            <h3>2. Olite Castle</h3>
            <p>A trip to Olite Castle is to experience a different royalty culture in Spain, that of the kingdom of Navarre in the northern part of the country. Also known as the Palacio Real de Olite, the castle was built on first century Roman ruins, though the castle’s construction did not take place until several centuries later. Various monarchs added to it over the years, using a variety of architectural styles, with towers, courtyards and gardens. The castle fell into disrepair, though the Spanish government has been restoring it since 1937. The fortification is both castle and palace, although it was built more like a courtier building to fulfill a military function. Since the 13th-century the Castle of Olite was called as Palace of the King of Navarre. Then the palace was housing the Navarrese court from the 14th until 16th centuries, Since the annexation (integration) of the kingdom of Navarre for the Crown of Castile in 1512 began the decline of the castle and therefore its practically neglect and deterioration. At that time it was an official residence for the Viceroys of Navarre.</p>
        </article>
        <article class="alcazar">
            <img src="{{ site.baseurl }}/assets/2.gif" data-src="{{ site.baseurl }}/assets/Spain Castles/alcazar_of_segovia.jpg" alt="photo">
            <h3>3. Alcazar of Segovia</h3>
            <p>The Alcázar of Segovia, like many fortifications in Spain, started off as Roman fort, but apart from the foundations, little of the original structure remains. A Muslim era fort, which was itself largely replaced by the present structure, was built by the Berber Almoravid dynasty. The first reference to this particular "alcázar" was in 1120, around 32 years after the city of Segovia returned to Christian hands (during the time when King Alfonso VI reconquered lands to the south of the Duero river down to Toledo and beyond). The shape and form of the Alcázar was not known until the reign of King Alfonso VIII (1155–1214), however early documentation mentioned a wooden stockade fence. It can be concluded that prior to Alfonso VIII's reign, the Muslim era structure was no more than a wooden fort built over the old Roman foundations. Alfonso VIII and his wife, Eleanor of England, made this alcázar their principal residence and much work was carried out to erect the beginnings of the stone fortification we see today. In 1474, the Alcázar played a major role in the rise of Queen Isabella I. On 12 December news of the King Henry IV's death in Madrid reached Segovia and Isabella immediately took refuge within the walls of the Alcázar where she received the support of Andres Cabrera and Segovia's council. She was enthroned the next day as Queen of Castile and León. The next major renovation at the Alcázar was conducted by King Philip II after his marriage to Anna of Austria. He added the sharp slate spires to reflect the castles of central Europe. In 1587, architect Francisco de Morar completed the main garden and the School of Honor areas of the castle.</p>
        </article>
    </div> 
</section>
<script>
        window.addEventListener('load', function() {
          let allimages= document.getElementsByTagName('img');   
          for (const i of allimages) {
              i.setAttribute('src', i.getAttribute('data-src')); 
          }            
        }, false)
</script>