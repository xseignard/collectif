import React from 'react';
import {
	Deck,
	Fill,
	Heading,
	Image,
	Layout,
	Link,
	ListItem,
	List,
	Slide,
	Spectacle,
	Text,
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';

// images
import hello from '../assets/hello.gif';
import motive from '../assets/motive.gif';
import vision from '../assets/vision.gif';
import call from '../assets/call.gif';

preloader({
	hello,
	motive,
	vision,
	call,
});

const theme = createTheme({
	primary: '#00a0e6',
});

const Presentation = () => (
	<Spectacle theme={theme}>
		<Deck transition={['zoom', 'fade']} transitionDuration={500}>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="black">
					artistes et techniciens
				</Heading>
				<Heading size={1} fit caps>
					du numérique
				</Heading>
			</Slide>
			<Slide bgColor="black">
				<Image src={motive} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Motivations
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							Alors que Nantes est très active sur le domaine du numérique et de la création, comme en attestent les structures déjà existantes, il est encore très difficile pour nous indépendants de bénéficier d’un lieu permettant de travailler dans de bonnes conditions dès que le numérique sort du triptyque clavier/écran/souris.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							A l’heure des objets connectés, le numérique a tendance à sortir du schéma classique, ce qui se traduit par un <b>glissement des terrains d’expression des artistes du numérique</b>. Nous voyons apparaître des oeuvres connectées, des sculptures interactives, etc.
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="primary">
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							Nous sommes en train de structurer un <b>collectif pluridisciplinaire dédié à la création numérique</b>, constitué d’un noyau fixe de six indépendants aux profils variés et complémentaires : artiste, architecte, régisseur, vidéaste, développeur, philosophe...
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Nous sommes aussi en contact avec un vivier, un réseau informel d’artistes numériques nantais qui ne demande qu’à se fédérer autour d’un projet, d’un lieu.
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="primary">
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							Nous cherchons à consolider notre collectif autour d’un lieu commun combinant des bureaux, de l’espace et du matériel de construction.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							En effet, bien qu’il soit possible d’expérimenter dans des structures déjà existantes, telles que Stereolux ou Ping, les contraintes de mise à disposition et de stockage sont des freins importants à notre développement.
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="primary">
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							L’idée de ce lieu est de pouvoir travailler autant nos projets individuels que collectifs en <b>favorisant le partage des compétences</b>. Nous avons le souhait d’utiliser le lieu comme un laboratoire d'expérimentation pour nos installations.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Toujours dans une philosophie de partage, <b>la notion d’éducation populaire nous est primordiale</b>, c’est pourquoi nous envisageons d’organiser différents événements tels que des master class, des workshops, résidences, etc.
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="black">
				<Image src={vision} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Vision
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							Si nous avons créé un collectif, c’est d’abord portés par <b>l’envie et le besoin</b> de réunir nos compétences et nos profils au sein d’un lieu de travail partagé.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							L’objectif étant de créer <b>les passerelles et les frictions nécessaires à la création</b>.
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="primary">
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							Nous sommes des <b>professionnels de l’interaction publique</b>, que ce soit via des installations numériques, du spectacle vivant ou via des expositions.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Par ailleurs, nous travaillons régulièrement à la <b>transmission</b> ou l’<b>échange</b> avec des publics divers en partenariat avec les structures du territoire (workshops, ateliers, cours, etc.).
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Dans ce contexte professionnel et artistique, il nous paraît riche de <b>favoriser la proximité</b> avec Les Badauds Associés, au sein d’un lieu commun.
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="primary">
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							C’est aussi la nature même de la Caserne Mellinet qui nous motive, il s’agit d’une superbe <b>opportunité de créer dans une temporalité intéressante</b>.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							La métamorphose qui s’annonce à l’échelle du quartier est un tournant. La caserne Mellinet nous semble être <b>un terrain de jeux et d'expérimentations riche</b>, et nous serons heureux de collaborer avec Les Badauds associés.
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="black">
				<Image src={hello} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Les membres
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Maël Pinard
				</Heading>
				<Heading size={2} caps fit textColor="black">
					Régisseur audiovisuel et art numérique.
				</Heading>
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							Maël accompagne les artistes et assure la régie technique des dispositifs multimédias et arts numériques (Stereolux, Festival Scopitone, Théâtre National de Chaillot ...).
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Maël intervient aussi comme enseignant vacataire sur les technologies numériques liées au spectacle vivant, pour l'université de Nantes.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Curieux et créatif, il utilise dans son travail les outils de fabrication numérique pour prototyper et créer des objets qui prennent part à la scénographie d'un dispositif multimédia.
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Maël Pinard
				</Heading>
				<Heading size={2} caps fit textColor="black">
					Régisseur audiovisuel et art numérique.
				</Heading>
				<List>
					<ListItem><Link href="https://www.linkedin.com/in/maelpinard" target="_blank">CV en ligne</Link></ListItem>
					<ListItem><Link href="https://vimeo.com/124980362" target="_blank">Kid birds - Installation</Link></ListItem>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Xavier Seignard
				</Heading>
				<Heading size={2} caps fit textColor="black">
					Développeur créatif et objets interactifs.
				</Heading>
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							Xavier est engagé dans une démarche qui repose sur les valeurs de la culture du Libre, du partage de connaissances et de l’esprit Do It Yourself.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Armé d’un diplôme d’ingénieur en informatique, il participe à la création de dispositifs interactifs, webdocs et expositions.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Il travaille notamment au sein des collectifs Étrange Miroir, la Bande Passante ou encore pour différentes agences (Sid Lee, Soixante Circuits, Matière Noire, etc.).
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Xavier Seignard
				</Heading>
				<Heading size={2} caps fit textColor="black">
					Développeur créatif et objets interactifs.
				</Heading>
				<List>
					<ListItem><Link href="http://drangies.fr/" target="_blank">Site personnel</Link></ListItem>
					<ListItem><Link href="https://www.youtube.com/watch?v=TioYIJhdaKo" target="_blank">Sid Lee, agence connectée</Link></ListItem>
					<ListItem><Link href="https://vimeo.com/170811756" target="_blank">La Bande Passante</Link></ListItem>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Guillaume Mazauric
				</Heading>
				<Heading size={2} caps fit textColor="black">
					Designer, illustrateur, peintre.
				</Heading>
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							Son travail se focalise sur les relations entre la peinture et la variété des images contemporaines.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Il réalise des tableaux figuratifs à partir d’images rassemblées dans des livres, sur internet ou prises avec les différents moyens dont il dispose (appareil photo, téléphone portable) qu’il recadre, assemble et détourne.
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Guillaume Mazauric
				</Heading>
				<Heading size={2} caps fit textColor="black">
					Designer, illustrateur, peintre.
				</Heading>
				<List>
					<ListItem><Link href="http://www.guillaume-mazauric.com/" target="_blank">Site personnel</Link></ListItem>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Laurent La Torpille
				</Heading>
				<Heading size={2} caps fit textColor="black">
					Artiste numérique.
				</Heading>
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							Laurent se consacre depuis les années 90 à la création numérique dans son acception la plus large.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Ses projets de concepteur multimédia l’ont conduit ainsi à collaborer avec de multiples partenaires (Festival des 3 Continents, Scopitone, Nowned…) dans le champ du design, de l’ingénierie, de la recherche et du développement.
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Laurent La Torpille
				</Heading>
				<Heading size={2} caps fit textColor="black">
					Artiste numérique.
				</Heading>
				<List>
					<ListItem><Link href="http://laurentlatorpille.com/" target="_blank">Site personnel</Link></ListItem>
					<ListItem><Link href="http://www.presseocean.fr/actualite/nantes-gaffe-laurent-la-torpille-debarque-au-festival-des-3-continents-24-11-2014-138448" target="_blank">Ouverture du Festival des 3 Continents</Link></ListItem>
					<ListItem><Link href="http://www.chateaunantes.fr/fr/evenement/laurent-la-torpille" target="_blank">Festival Scopitone</Link></ListItem>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Zaki Jawhari
				</Heading>
				<Heading size={2} caps fit textColor="black">
					Architecte, artiste 3D et video mapping.
				</Heading>
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							De nationalité grecque, Zaki est diplômé de l'École nationale d'architecture de Nantes (2007).
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Son travail de recherche se concentre sur la perception sensible d'un territoire. Un sujet de prédilection qui l'a porté à expérimenter plusieurs médiums à la fois sonores et visuels.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Il s’est donc naturellement tourné vers les arts numériques, les univers 3D et le vidéo mapping architectural.
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Zaki Jawhari
				</Heading>
				<Heading size={2} caps fit textColor="black">
					Architecte, artiste 3D et video mapping.
				</Heading>
				<List>
					<ListItem><Link href="http://www.fabmake.fr/portrait-de-fabmaker.html" target="_blank">Portrait</Link></ListItem>
					<ListItem><Link href="https://vimeo.com/169539448" target="_blank">Mapping vidéo pour la finale de la coupe d'europe de handball 2016</Link></ListItem>
					<ListItem><Link href="https://vimeo.com/167037315" target="_blank">Landscape Flow</Link></ListItem>
				</List>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Mickael Lafontaine
				</Heading>
				<Heading size={2} caps fit textColor="black">
					Artiste numérique.
				</Heading>
				<Layout>
					<Fill>
						<Text padding={20} textAlign="justify">
							Mickael est un artiste basé à Nantes et à Montréal. Il développe des projets multidisciplinaires avec des danseurs, des plasticiens, des poètes ou des comédiens.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							Il envisage la video, le son ou encore la typographie comme autant de matières qu’il peut sculpter en temps réel et les centrer sur l’humain, le sensible et la contemplation.
						</Text>
						<Text padding="0px 20px 20px 20px" textAlign="justify">
							En parallèle, il développe des projets de co-création en milieu éducatif et associatif afin d’utiliser l’art et les nouvelles technologies comme des facteurs de changement social.
						</Text>
					</Fill>
				</Layout>
			</Slide>
			<Slide bgColor="primary">
				<Heading size={1} fit caps lineHeight={1} textColor="white">
					Mickael Lafontaine
				</Heading>
				<Heading size={2} caps fit textColor="black">
					Artiste numérique.
				</Heading>
				<List>
					<ListItem><Link href="https://vimeo.com/158894540" target="_blank">À la Tombee des Mots</Link></ListItem>
					<ListItem><Link href="https://vimeo.com/164816615" target="_blank">Homo Faber</Link></ListItem>
					<ListItem><Link href="https://vimeo.com/186243553" target="_blank">Écosystemes #1</Link></ListItem>
				</List>
			</Slide>
			<Slide bgColor="black">
				<Image src={call} margin="0px auto 40px" height="293px" />
				<Heading size={2} caps fit textColor="primary">
					Contacts
				</Heading>
			</Slide>
			<Slide bgColor="primary">
				<List>
					<ListItem><Link href="mailto:maelpinard@gmail.com" target="_blank">maelpinard@gmail.com</Link></ListItem>
					<ListItem><Link href="mailto:xavier.seignard@gmail.com" target="_blank">xavier.seignard@gmail.com</Link></ListItem>
				</List>
			</Slide>
		</Deck>
	</Spectacle>
);

export default Presentation;
