import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Grid, Paper, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './Home.css'


AOS.init();

const Home = () => {

    return (
        <Container style={{ 'marginTop': '120px' }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper elevation={0}>
                        <div data-aos="fade-right" data-aos-duration="2000">
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={5} style={{ 'textAlign': 'center' }}>
                                    <img src={require("../../images/covid.png").default} alt="covid" width="80%" className="moving" />
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography variant="h3" className="title" align="center">
                                        Qu'est-ce que la COVID-19?
                                    </Typography>
                                    <p></p>

                                    <Typography variant="h6" color="textSecondary" align="justify">
                                        La COVID-19 est la maladie infectueuse causée par le coronavirus, le SARS-CoV-2 (Coronavirus 2 du syndrome respiratoire aigu sévère). Elle apparaît le 16 novembre 2019 à Wuhan, dans la province de Hubei (en Chine centrale), avant de se propager dans le monde. Le 11 mars 2020, l'épidémie de Covid-19 est déclarée pandémie par l'OMS.<br />
                                        L'image ci-contre représente l'illustration de la morphologie des coronavirus. Les péplomères, pointes virales en forme de massue ici colorées en rouge, créent l'apparence d'une couronne entourant le virion, lorsqu'ils sont vus au microscope électronique.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <br />
                            <br />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} className="hide-scroll">
                        <div data-aos="fade-left" data-aos-duration="2000">
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={7}>
                                    <Typography variant="h3" className="title" align="center">
                                        Comment la COVID-19 se propage-t-elle ?
                                    </Typography>
                                    <p></p>

                                    <Typography variant="h6" color="textSecondary" align="justify">
                                        La COVID-19 est transmise par des personnes porteuses du virus. La maladie peut se transmettre d’une personne à l’autre principalement par des gouttelettes respiratoires expulsées par le nez ou par la bouche lorsqu’une personne tousse ou éternue.<br />

                                        Ces gouttelettes peuvent se retrouver sur des objets ou des surfaces autour de la personne en question. On peut alors contracter la COVID-19 si on touche ces objets ou ces surfaces et si on se touche ensuite les yeux, le nez ou la bouche. <br />

                                        Il est également possible de contracter la COVID-19 en respirant des gouttelettes d’une personne malade qui vient de tousser ou d’éternuer. C’est pourquoi il est important de se tenir à plus d’un mètre d’une personne malade. <br />

                                        Le risque de contracter la COVID-19 au contact d’une personne qui ne présente aucun symptôme est très faible. Cependant, beaucoup de personnes atteintes présentent des symptômes discrets aux premiers stades de la maladie (par exemple, une toux légère). Il est alors possible de contracter la COVID-19 au contact de ces personnes, même si elles ne se sentent pas malades.
                                    </Typography>
                                </Grid>
                                <Grid item xs={5} style={{ 'textAlign': 'center' }}>
                                    <img src={require("../../images/covid-propag.png").default} alt="covid" width="80%" />
                                </Grid>
                            </Grid>
                            <br />
                            <br />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0} className="hide-scroll">
                        <div data-aos="fade-right" data-aos-duration="2000">
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={5} style={{ 'textAlign': 'center' }}>
                                    <img src={require("../../images/covid-symptom.png").default} alt="covid" width="80%" />
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography variant="h3" className="title" align="center">
                                        Quels sont les symptômes de la COVID-19 ?
                                    </Typography>
                                    <p></p>

                                    <Typography variant="h6" color="textSecondary" align="justify">
                                        La COVID-19 affecte les individus de différentes manières. La plupart des personnes infectées développent une forme légère à modérée de la maladie et guérissent sans hospitalisation.
                                    </Typography>
                                    <br />
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography variant="h6" className="title">Symptômes les plus fréquents</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="spt-detail">
                                            <Typography variant="h6" color="textSecondary" >
                                                <ul>
                                                    <li>fièvre</li>
                                                    <li>toux sèche</li>
                                                    <li>fatigue</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <Typography variant="h6" className="title">Symptômes moins fréquents</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="spt-detail">
                                            <Typography variant="h6" color="textSecondary">
                                                <ul>
                                                    <li>Courbatures</li>
                                                    <li>Maux de gorge</li>
                                                    <li>Diarrhée</li>
                                                    <li>Conjonctivite</li>
                                                    <li>Maux de tête</li>
                                                    <li>Perte de l’odorat ou du goût</li>
                                                    <li>Éruption cutanée, ou décoloration des doigts ou des orteils</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3a-content"
                                            id="panel3a-header"
                                        >
                                            <Typography variant="h6" className="title">Symptômes graves</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails className="spt-detail">
                                            <Typography variant="h6" color="textSecondary">
                                                <ul>
                                                    <li>Difficultés à respirer ou essoufflement</li>
                                                    <li>Sensation d’oppression ou douleur au niveau de la poitrine</li>
                                                    <li>Perte d’élocution ou de motricité</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                            </Grid>
                            <br />
                            <br />
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={0}>
                        <div data-aos="fade-up" data-aos-duration="2000">
                            <Typography variant="h3" className="title" align="center">
                                Que faire en cas de symptômes de la COVID-19 ?
                            </Typography>
                            <p></p>


                            <Grid container justify="center" spacing={4}>
                                <Grid item xs={6} style={{ 'textAlign': 'center' }}>
                                    <Typography variant="h6" color="textSecondary" align="justify">
                                        <ul>
                                            <li>Appelez votre professionnel de santé ou l'assistance téléphonique dédiée à la COVID-19 pour savoir où et quand vous faire tester.</li>
                                            <li>Si vous ne pouvez pas vous faire tester, restez chez vous et évitez tout contact pendant 14 jours.</li>
                                            <li> Pendant votre quarantaine, ne vous rendez pas sur votre lieu de travail, ni à l'école ou dans des lieux publics. Demandez à un proche de vous apporter vos courses à domicile.</li>
                                            <li>Maintenez une distance d'au moins un mètre avec tout le monde, y compris les membres de votre famille.</li>
                                            <li>Portez un masque chirurgical afin de protéger les autres personnes, même en cas de rendez-vous médical.</li>
                                        </ul>

                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6" color="textSecondary" align="justify">
                                        <ul>
                                            <li>Restez dans une chambre séparée des autres membres de la famille et aérez bien la pièce.</li>
                                            <li>
                                                Si vous partagez votre chambre avec une autre personne, espacez les lits d'au moins un mètre.
                                            </li>
                                            <li> Surveillez l'apparition de symptômes pendant 14 jours.
                                                Contactez immédiatement votre professionnel de santé si vous développez l'un de ces symptômes sévères : difficultés respiratoires, perte de la parole ou de la mobilité, état confusionnel ou douleurs dans la poitrine.</li>
                                            <li> Gardez une attitude positive en maintenant un contact avec vos proches par téléphone ou en ligne et en faisant de l'exercice chez vous.</li>
                                        </ul>
                                    </Typography>
                                </Grid>
                            </Grid>

                        </div>
                        <div><br /></div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper elevation={0}>
                        <div data-aos="fade-up" data-aos-duration="1500">
                            <Typography variant="h3" className="title" align="center">
                                Comment se protéger et protéger les autres tout en empêchant la propagation de la COVID-19 ?
                            </Typography>

                            <Grid container spacing={3}>
                                <Grid item xs={3}>
                                    <img data-aos="zoom-in" data-aos-duration="2000" src={require("../../images/stay-home.gif").default} alt="Restez chez vous" width="100%" />
                                    <Typography variant="h6" color="textSecondary" align="center">
                                        Restez chez vous
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <img data-aos="zoom-in" data-aos-duration="2000" src={require("../../images/hands-wash.gif").default} alt="Lavez vos mains" width="100%" />
                                    <Typography variant="h6" color="textSecondary" align="center">
                                        Lavez vos mains
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <img data-aos="zoom-in" data-aos-duration="2000" src={require("../../images/cover-cough.gif").default} alt="Couvrez votre toux" width="100%" />
                                    <Typography variant="h6" color="textSecondary" align="center">
                                        Couvrez votre toux
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <img data-aos="zoom-in" data-aos-duration="2000" src={require("../../images/dont-touch.gif").default} alt="Evitez de toucher votre nez" width="100%" />
                                    <Typography variant="h6" color="textSecondary" align="center">
                                        Evitez de toucher votre nez
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <img data-aos="zoom-in" data-aos-duration="2000" src={require("../../images/keep-distance.gif").default} alt="Gardez votre distance" width="100%" />
                                    <Typography variant="h6" color="textSecondary" align="center">
                                        Gardez votre distance
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <img data-aos="zoom-in" data-aos-duration="2000" src={require("../../images/wear-mask.gif").default} alt="Portez un masque" width="100%" />
                                    <Typography variant="h6" color="textSecondary" align="center">
                                        Portez un masque
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} style={{ marginTop: '95px' }}>
                                    <img data-aos="zoom-in" data-aos-duration="2000" src={require("../../images/check-temperature.gif").default} alt="Faites-vous tester" width="100%" />
                                    <Typography variant="h6" color="textSecondary" align="center">
                                        Faites-vous tester
                                    </Typography>
                                </Grid>
                                <Grid item xs={3} style={{ marginTop: '125px' }}>
                                    <img data-aos="zoom-in" data-aos-duration="2000" src={require("../../images/no-handshake.gif").default} alt="Ne serrez pas la main" width="100%" />
                                    <Typography variant="h6" color="textSecondary" align="center">
                                        Ne serrez pas la main
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home