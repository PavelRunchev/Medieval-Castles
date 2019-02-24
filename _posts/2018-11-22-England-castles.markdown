---
layout: site
type: post
title:  "England Castles!"
date:   2018-11-22 10:08:15 +0200
---

<section id="post-england">
    <div class="england-castles">
        <h2>Top 4 of England Castles</h2>
        <article class="bamburgh">
            <img src="{{ site.baseurl }}/assets/2.gif" data-src="{{ site.baseurl }}/assets/England Castles/bamburgh_castle.jpg" alt="photo">
            <h3>1. Bamburgh Castle</h3>
            <p>Bamburgh Castle is a castle on the northeast coast of England, by the village of Bamburgh in Northumberland. It is a Grade I listed building. The site was originally the location of a Celtic Brittonic fort known as Din Guarie and may have been the capital of the kingdom of Bernicia from its foundation in c. 420 to 547. After passing between the Britons and the Anglo-Saxons three times, the fort came under Anglo-Saxon control in 590. The fort was destroyed by Vikings in 993, and the Normans later built a new castle on the site, which forms the core of the present one. After a revolt in 1095 supported by the castle's owner, it became the property of the English monarch. The castle was briefly retaken by the Britons from his son Hussa during the war of 590 before being relieved later the same year. In c. 600, Hussa's successor Athelfrith passed it on to his wife Bebba, from whom the early name Bebbanburgh was derived. The Vikings destroyed the original fortification in 993.</p>
        </article>
        <article class="warwick">
            <img src="{{ site.baseurl }}/assets/2.gif" data-src="{{ site.baseurl }}/assets/England Castles/Warwick-Castle.jpg" alt="photo">
            <h3>2. Warwick Castle</h3>
            <p>Warwick Castle is a medieval castle developed from an original built by William the Conqueror in 1068. Warwick is the county town of Warwickshire, England, situated on a bend of the River Avon. The original wooden motte-and-bailey castle was rebuilt in stone in the 12th century. An Anglo-Saxon burh was established on the site in 914; with fortifications instigated by Ethelfleda, daughter of Alfred the Great. The burh she established was one of ten which defended Mercia against the invading Danes.
                Its position allowed it to dominate the Fosse Way, as well as the river valley and the crossing over the River Avon. Though the motte to the south-west of the present castle is now called "Ethelfleda's Mound", it is in fact part of the later Norman fortifications, and not of Anglo-Saxon origin. After the Norman conquest of England, William the Conqueror established a motte-and-bailey castle at Warwick in 1068 to maintain control of the Midlands as he advanced northwards. During the reign of King Henry II (1154–89), the motte-and-bailey was replaced with a stone keep castle. This new phase took the form of a shell keep with all the buildings constructed against the curtain wall.</p>
        </article>
        <article class="bodiam">
            <img src="{{ site.baseurl }}/assets/2.gif" data-src="{{ site.baseurl }}/assets/England Castles/bodiam.jpg" alt="photo">
            <h3>3. Bodiam Castle</h3>
            <p>Located to the southeast of London in East Sussex, Bodiam Castle is considered one of the best examples of a Medieval fortress, despite the fact that the 14th century structure was built more for status than for strength. After the conclusion of the 100 Years’ War, Richard II granted veteran soldier and landowner Sir Edward Dalyngigge a license to fortify his home as a measure of protection against French invasion.</p>
            <p>Looking like something out of a fairytale, Bodiam has all the attributes that people expect when visiting a Medieval castle, from its soaring towers and battlements to its forbidding portcullis and moat. The interior of the castle lies in ruin, however. It was dismantled during the English Civil War in the 1600s to prevent the castle from being used by the enemy. In 1829, art philanthropist John Fuller purchased the castle for 3,000 guineas to save it from demolition.</p>
        </article>
        <article class="windsor">
            <img src="{{ site.baseurl }}/assets/2.gif" data-src="{{ site.baseurl }}/assets/England Castles/windsor.jpg" alt="photo">
            <h3>4. Windsor Castle</h3>
            <p>Located about an hour west of London, Windsor Castle is often called the largest and oldest inhabited castle in the world. It is one of the official residences of Queen Elizabeth II who spends many weekends of the year at the castle, using it for both state and private entertaining. Windsor date from the reign of Henry II who came to the throne in 1154. Originally designed to protect Norman dominance around the outskirts of London, Windsor Castle was built as a motte and bailey castle, with three wards surrounding a central mound. Gradually replaced with stone fortifications, the castle withstood a prolonged siege during the First Barons’ War at the start of the 13th century.</p>
            <p>During the Tudor period, Henry VIII and Elizabeth I made increasing use of the castle as a royal court and center for diplomatic entertainment. Today, much of the castle, including the magnificent State Apartments and St Georges Chapel can be visited.</p>
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

