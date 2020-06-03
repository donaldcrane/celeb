import React from 'react';
import Lesson from './Lesson';

import logo from './marley.jpg';
import logo1 from './davido.jpg';
import logo2 from './wizkid.jpg';
import logo3 from './2face.jpg';
import logo4 from './burna.jpg';
import logo5 from './mayorkun.jpg';
import logo6 from './olamide.jpg';
import logo7 from './dremo.jpg';
import logo8 from './erriga.jpg';
import logo9 from './zlatan.jpg';

class Main extends React.Component {
    render() {
        const lessonList = [
            {
                name: 'dremo',
                image: [logo7],
                info: 'Dremo. Dremo real name is Aboriomoh Femi Raymond born in 1996, in Edo state, Nigeria is a recording artist/songwriter, record producer and a performing artist signed to HKN music or Davido worldwide Music label. Aboriomoh Femi Raymond was Born in Edo State Nigeria, then later moved to IbadanOyo State.'
            },
            {
                name: '2face',
                image: [logo3],
                info: 'Innocent Ujah Idibia (born on September,18 1975), known by his stage name 2Baba, is a Nigerian singer,songwriter, record producer, entrepreneur, philanthropist, humanitarian, and activist. Prior to July 2014, he went by the stage name 2face Idibia' 
            },
            {
                name: 'mayorkun',
                image: [logo5],
                info: 'Adewale Mayowa Emmanuel (born March 23, 1994), known professionally as Mayorkun, is a Nigerian singer, songwriter and pianist.[1] He released a cover of Davidos (The Money) single and was discovered by the singer on Twitter. Mayorkun signed with Davidos record label Davido Music Worldwide (DMW) in 2016; his debut single "Eleko" was released under the label.[3] Mayorkun released his debut studio album The Mayor of Lagos in November 2018. '
            },

            {
                name:'Naira marley',
                image: [logo],
                info: 'Azeez Fashola (born 10 May 1994), known professionally as Naira Marley, is a Nigerian singer and songwriter.[2] He is known as the president of his controversial fan base, Marlians.. Naira Marley was born in Agege, Lagos State, Nigeria. At the age of 11, he moved to Peckham, South London, England.[5] He studied at Porlock Hall before attending Walworth School, where he obtained his General Certificate of Secondary Education. Naira Marley graduated with a distinction in business from Peckham Academy. He also studied business law at Crossways College '            
            },
            {
                name: 'Davido',
                image: [logo1],
                info: 'David Adedeji Adeleke (born November 21, 1992), who is better known as Davido, is an American-born Nigerian singer, songwriter and record producer.[1][2] Davido was born in Atlanta, US, and raised in Lagos; Davido rose to fame after releasing "Dami Duro", the second single from his debut studio album Omo Baba Olowo (2012), from which six additional singles—"Back When", "Ekuro", "Overseas", "All of You", "Gbon Gbon", and "Feel Alright"—were taken. In 2012, Davido won the Next Rated award at The Headies.  '
            },
            {
                name:'wizkid',
                image: [logo2],
                info: 'Ayodeji Ibrahim Balogun (born 16 July 1990), known professionally as Wizkid (sometimes stylized as WizKid), is a Nigerian singer and songwriter. Wizkid signed a record deal with Empire Mates Entertainment (E.M.E) in 2009. He rose to prominence after releasing "Holla at Your Boy", the lead single from his debut studio album Superstar (2011). "Tease Me/Bad Guys", "Don`t Dull", "Pakurumo" and "Oluwa Lo Ni" were also released as singles from the Superstar album. '
            },
            {
                name: 'erigga',
                image: [logo8],
                info: 'Erigga Agarivbie was born in Warri, Warri, Delta State, where he grew up with his family. He is the first of five children. He attended Standard international School both primary and secondary. Erigga began his music career in early 2010. He has worked with several producers, PFizzy, Snow Man and Phizy Joe. Erigga`s first musical release was "Mo Street Gan". The music video for the song was shot in Nigeria, directed by AKIN Alabi.[2] The song became Radio Continental`s theme song. '
            },
            {
                name: 'olamide',
                image: [logo6],
                info: 'Olamide Adedeji (born 15 March 1989), known professionally as Olamide , is a Nigerian hip hop recording artist. He records mostly in Yoruba, his native tongue. In 2011, he released his debut studio album Rapsodi while signed to Coded Tunes. YBNL, his follow-up album, was released under his label imprint YBNL Nation. The album was supported by the singles "First of All", "Voice of the Street", "Stupid Love", and "Ilefo Illuminati". On 7 November 2013, he released his third studio album Baddest Guy Ever Liveth.'
            },
            {
                name:'zlatan',
                image: [logo9],
                info: 'Omoniyi Temidayo Raphael (born 19 December 1994), known professionally as Zlatan, is a Nigerian singer, songwriter and dancer.[1] In 2014, he won the Airtel-sponsored One Mic talent show held in Abeokuta, Ogun State.[2] Towards the end of 2018, Zlatan released a single titled "Zanku", with a new dance routine of the same name.[3] On 3 November 2019, he released his debut studio album Zanku, an acronym for Zlatan Abeg No Kill Us'
            },
            {
                name: 'burna',
                image: [logo4],
                info: 'Damini Ebunoluwa Ogulu (born 2 July 1991), known professionally as Burna Boy, is a Nigerian singer and songwriter. He rose to prominence in 2012 after releasing "Like to Party". His third studio album Outside marked his major-label debut.[3] In 2019, he won Best International Act at the 2019 BET Awards,. His fourth studio album African Giant was released in July 2019; it won Album of the Year at the 2019 All Africa Music Awards and was nominated for Best World Music Album at the 62nd Annual Grammy Awards' 
            }
        ];
        return (
            <div className='main-wrapper'>
              <div className='main'>
                <div className='copy-container'>
                  <h1>MY NIGERIA .</h1>
                  <h2>TOP CELEBRITIES!</h2>
                </div>
                <div className='lesson-container'>
                  
                  {lessonList.map((lessonItem) => {
                    return(
                    <Lesson
                        name={lessonItem.name}
                        image={lessonItem.image}
                        info = {lessonItem.info}
                      />
                    
                    );
                  })
                    
                    
                  }
                  
                </div>
              </div>
            </div>
          );
        }
      
}


export default Main;