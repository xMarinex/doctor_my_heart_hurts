function voir_info (id)
{	
	var text = "";
    if (id) {
		switch (id)
		{
			case "epaule":
				text = "L'épaule : <br><br> (nom féminin) C'est la région morphologique se situant à la jonction du tronc avec le membre supérieur. Elle comporte plusieurs articulations qui concourent à en faire le complexe articulaire le plus mobile du corps humain. Elle permet d'orienter le membre supérieur dans l'espace, autorisant en particulier son extrémité effectrice, la main, à assurer ses rôles de préhension et de communication avec l'environnement situé à sa portée.";
			break;

			case "coude":
					text = "Le coude : <br><br> ou articulation olécranienne est la partie du membre supérieur située entre le bras et l'avant-bras. Cette articulation comprend en avant la région du « pli du coude » (ou fosse cubitale). C'est un complexe articulaire synovial du membre supérieur humain reliant le bras à l'avant-bras. Il unit ainsi trois os entre eux : le radius, l'ulna (cubitus) et l'humérus.";
				
				break;

			case "poignet":
				text = "Le poignet: est une région du membre supérieur située entre la main et l'avant-bras, et contenant le carpe.Élément-clé pour le fonctionnement de la main, il permet les mouvements (c'est-à-dire les changements de place et d’orientation) de la main par rapport à l’avant-bras, transmet les forces appliquées de la main à l’avant-bras, permet d'adapter la capacité de flexion-extension maximale des doigts et de la préhension.";
			break;

			case "hanche":
				text = "La hanche: <br><br> ou articulation coxo-fémorale est une articulation (énarthrose) qui permet de joindre la cuisse au bassin. Elle met en jeu deux os : l'os iliaque et le fémur.Elle possède trois degrés de liberté: elle permet d'effectuer des mouvements comme se tourner dans un sens sans bouger les jambes.Pour l'anatomie populaire (dans le langage courant, non-scientifique), la hanche est généralement un attribut féminin. Le mot n'est alors plus appliqué à une articulation osseuse mais à la configuration musculaire et surtout adipeuse du haut de la cuisse (localisations graisseuses péri-trochanteriennes).";
			break;

			case "genou":
				text = "Le genou:  se situe sur les membres inférieur du corps, il y a un genou par membre inférieur. La région antérieure du genou est formée par les parties molles et la patella, situées en avant de l'articulation du genou. La région postérieure du genou ou poplitée est placée en arrière de l'articulation du genou.Le genou est une articulation qui permet de joindre la jambe à la cuisse. Elle met en jeu trois os, le fémur, le tibia et la patella, par le biais de trois articulations, l'articulation fémoro-patellaire et la double articulation fémoro-tibiale. Le cartilage assure la fluidité des mouvements du genou. Le tissu élastique fin, le cartilage, protège l'os et fait en sorte que les surfaces de l'articulation glissent facilement les unes contre les autres. Le genou renferme deux types de cartilages articulaires: le cartilage fibreux (ménisque) et le cartilage hyalin.";
			break;

			case "cheville":
				text = "La cheville: <br><br> est l'articulation qui relie la jambe et le pied.Une cheville adulte est composée, au point de vue osseux, de l'épiphyse inférieure du tibia (malléole interne et plafond), de l'épiphyse inférieure de la fibula (ou péroné) (malléole externe) et du talus (ou astragale). Classiquement, on parle d'articulation supinale de l'arrière pied.On peut la définir comme une articulation synoviale de type ginglyme (anciennement trochléenne) c'est-à-dire mettant en rapport un segment de poulie plein à un segment de poulie creux.Elle ne permet comme toute trochléenne que des mouvements dans un plan sagittal : des mouvements de flexion et d'extension.";
			break;

			default :
			break;
		}
		document.getElementById("info").innerHTML = text;
	}
}	