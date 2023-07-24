import React, { Component } from 'react'
import NewsItem from './NewsItem';

class NewsContent extends Component {

  articles = [
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Berlin 'lioness': Wild animal probably a boar, authorities say - BBC",
    "description": "Authorities call off a search for a suspected big cat spotted near the German capital.",
    "url": "https://www.bbc.com/news/world-europe-66268558",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/759C/production/_130480103_lioness_boar_getty.jpg",
    "publishedAt": "2023-07-21T16:25:36Z",
    "content": "German officials have called off their search for a suspected lioness after finding no evidence of a big cat on the loose in Berlin's suburbs.\r\nPolice were searching for more than a day after being n… [+2470 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Motorsport.com"
    },
    "author": "Jake Boxall-Legge",
    "title": "F1 Hungarian GP: Leclerc pips Norris by 0.015s in second practice - Motorsport.com",
    "description": "Charles Leclerc led a mixed-up Formula 1 FP2 order in preparation for the Hungarian Grand Prix, as neither Red Bull made it into the top 10 on the timing board.",
    "url": "https://www.motorsport.com/f1/news/f1-hungarian-gp-leclerc-pips-norris-by-0015s-in-second-practice/10498215/",
    "urlToImage": "https://cdn-3.motorsport.com/images/amp/6D19pWJ0/s6/charles-leclerc-ferrari-sf-23-.jpg",
    "publishedAt": "2023-07-21T16:08:20Z",
    "content": "In contrast to the two red-flag periods and inclement weather that interrupted the earlier hour-long session, second practice was run in the dry despite earlier threats of continued rainfall.\r\nThe Wi… [+3057 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Matthew Cappucci",
    "title": "More records will fall as brutal heat wave continues across southern U.S. - The Washington Post",
    "description": "Approximately 116 million Americans are included in heat advisories or excessive heat watches and warnings. That’s more than a third of the U.S. population.",
    "url": "https://www.washingtonpost.com/weather/2023/07/21/heat-wave-record-temperatures-south-forecast/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/W5OCOCZGLBB5BHJX4VWCUQOIFQ.png&w=1440",
    "publishedAt": "2023-07-21T16:04:07Z",
    "content": "Comment on this story\r\nComment\r\nFor more than a month, a blistering heat wave has baked much of the Lower 48, reaching from the Pacific to the Atlantic and bringing triple digit temperatures to nearl… [+3702 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Russian hardline Putin critic and commander Strelkov detained - BBC",
    "description": "He played a key role in Russia's landgrab in 2014 and has bitterly criticised the flagging campaign.",
    "url": "https://www.bbc.com/news/world-europe-66265892",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6674/production/_130482262_88edbf6c-0572-4b68-96e9-8bacd80071ff.jpg",
    "publishedAt": "2023-07-21T15:30:16Z",
    "content": "Russian authorities have detained outspoken pro-war blogger Igor Girkin, a hardline nationalist critic of Russia's flagging military campaign in Ukraine, also known as Strelkov.\r\nHis wife said he was… [+3661 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Julia Musto",
    "title": "Hawaii health officials call for action as syphilis cases rise - Fox News",
    "description": "The Hawaii Department of Health warned this week that expanded screening and treatment are crucial steps to address an increasing rate of syphilis cases there in women and newborns.",
    "url": "https://www.foxnews.com/health/hawaii-health-officials-call-action-syphilis-cases-rise",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/07/Honolulu-Skyline.jpg",
    "publishedAt": "2023-07-21T15:04:00Z",
    "content": "Hawaii health officials, including physician Gov. Josh Green, said Wednesday that expanded screening and treatment are necessary to address the increasing rate of syphilis cases in women and newborns… [+2259 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Melanie Radzicki McManus",
    "title": "What’s more important as you age — stretching, balance work or strength training? - CNN",
    "description": "Muscle mass and strength decline as we age. While boosting strength, balance and flexibility are all important, is one more critical than another? Experts weigh in.",
    "url": "https://www.cnn.com/2023/07/21/health/exercises-for-aging-bodies-wellness/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230713155822-03-strength-flexibility-balance-aging-strength-training-wellness-stock.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-07-21T14:56:00Z",
    "content": "Editors note: Before beginning any new exercise program, consult your doctor. Stop immediately if you experience pain.\r\nPeople often bemoan gray hair and wrinkled skin as some of the most unpleasant … [+5018 chars]"
    },
    {
    "source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": null,
    "title": "Redditors troll an AI content farm into covering a fake 'WoW' feature - Engadget",
    "description": "Redditors tricked a website that apparently uses AI to generate blog posts into covering a fake World of Warcraft feature..",
    "url": "https://www.engadget.com/redditors-troll-an-ai-content-farm-into-covering-a-fake-wow-feature-145006066.html",
    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/Kxmmevh368evqQEkExO3Ow--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/2634f960-27d4-11ee-b8f5-5f6760eb48fc.cf.jpg",
    "publishedAt": "2023-07-21T14:51:58Z",
    "content": "Some redditors seem very excited about a new World of Warcraft\r\n feature called Glorbo, which some believe will \"make a huge impact on the game.\" Their palpable enthusiasm for Glorbo caught the atten… [+3276 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Kerry Breen",
    "title": "\"Surprise\" discovery: 37 swarming boulders spotted near asteroid hit by NASA spacecraft last year - CBS News",
    "description": "NASA said that redirecting an asteroid could lead to \"a cluster of threatening boulders heading in our direction.\"",
    "url": "https://www.cbsnews.com/news/surprise-discovery-37-swarming-boulders-spotted-near-asteroid-hit-by-nasa-spacecraft-last-year/",
    "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/21/030af4f6-5d2b-4439-aac7-8f3c8615d3d1/thumbnail/1200x630/6def6abf7ba88bb13c7dee4c3362ba40/screen-shot-2023-07-21-at-9-38-36-am.png?v=8be0a296491a12ce38351fd824e37a16",
    "publishedAt": "2023-07-21T14:49:00Z",
    "content": "A recent experiment gave NASA scientists a closer look at how attempting to redirect or destroy asteroids approaching Earth could lead to even more projectiles. \r\nAsteroids \"present a real collision … [+4004 chars]"
    },
    {
    "source": {
    "id": "nbc-news",
    "name": "NBC News"
    },
    "author": "Rebecca Shabad",
    "title": "JFK's grandson calls RFK Jr.'s presidential candidacy an 'embarrassment' and 'vanity project' - NBC News",
    "description": "President John F. Kennedy's grandson, Jack Schlossberg, ridiculed Robert F. Kennedy Jr.'s candidacy and spreading of conspiracy theories.",
    "url": "https://www.nbcnews.com/politics/2024-election/jfks-grandson-calls-rfk-jrs-presidential-candidacy-embarrassment-vanit-rcna95525",
    "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-07/230721-robert-f-kennedy-main-mn-0915-ed680d.jpg",
    "publishedAt": "2023-07-21T14:44:54Z",
    "content": "WASHINGTON The grandson of President John F. Kennedy, Jack Schlossberg, ridiculed Robert F. Kennedy Jr., on Friday for not endorsing Joe Biden's re-election bid and running for president himself as h… [+2534 chars]"
    },
    {
    "source": {
    "id": "nbc-news",
    "name": "NBC News"
    },
    "author": "Curtis Bunn",
    "title": "Magic Johnson officially joins NFL’s Commanders as co-owner - NBC News",
    "description": "Entrepreneur and NBA Hall of Famer Magic Johnson added to his voluminous business portfolio by officially becoming part-owner of the Washington Commanders.",
    "url": "https://www.nbcnews.com/news/nbcblk/magic-johnson-officially-joins-nfls-commanders-co-owner-rcna95341",
    "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-07/230720-magic-johnson-al-1131-6bf815.jpg",
    "publishedAt": "2023-07-21T14:39:00Z",
    "content": "Entrepreneur and NBA Hall of Famer Magic Johnson added to his voluminous business portfolio by officially becoming part-owner of the Washington Commanders.\r\nIts the biggest thing Ive ever done in my … [+3531 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Video Games Chronicle"
    },
    "author": "Tom Ivan",
    "title": "Microsoft's Activision Blizzard acquisition bodes well for Ubisoft, CEO says | VGC - Video Games Chronicle",
    "description": "The anticipated mega merger validates Ubisoft’s strategic focus, according to Yves Guillemot…",
    "url": "https://www.videogameschronicle.com/news/microsofts-activision-blizzard-acquisition-bodes-well-for-ubisoft-ceo-says/",
    "urlToImage": "https://www.videogameschronicle.com/files/2023/07/ubisoft-games-and-name-a.jpg",
    "publishedAt": "2023-07-21T14:06:45Z",
    "content": "Ubisoft CEO Yves Guillemot has said Microsofts bid to acquire Activision Blizzard can be viewed as a sign that Ubisoft is on the right track with its current business strategy.\r\nWhile the merger has … [+3605 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Katelyn Polantz, Tierney Sneed, Kara Scannell",
    "title": "Judge sets May 2024 trial date for Donald Trump in documents case - CNN",
    "description": "A federal judge ordered Friday that the trial in the classified documents case that special counsel Jack Smith brought against former President Donald Trump begin in May 2024.",
    "url": "https://www.cnn.com/2023/07/21/politics/trump-trial-date/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230619091729-01-donald-trump-230613-file.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-07-21T14:02:00Z",
    "content": "A federal judge ordered Friday that the trial in the classified documents case that special counsel Jack Smith brought against former President Donald Trump begin in May 2024.\r\nUS District Judge Aile… [+5163 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Times of Israel"
    },
    "author": null,
    "title": "1,142 Air Force reservists to end volunteer duty in protest of judicial overhaul - The Times of Israel",
    "description": "Hundreds of pilots, drone operators, air traffic control officers and others call on government to 'reach broad agreements' or they will suspend their service",
    "url": "https://www.timesofisrael.com/over-1100-air-force-reservists-to-end-volunteer-duty-in-protest-of-judicial-overhaul/",
    "urlToImage": "https://static.timesofisrael.com/www/uploads/2023/07/F211024OF16-1024x640.jpg",
    "publishedAt": "2023-07-21T13:52:30Z",
    "content": "More than 1,100 Israeli Air Force reservists, including hundreds of pilots, issued a letter on Friday announcing that they will suspend their volunteer reserve duty in protest of the government’s pla… [+6257 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "AL.com"
    },
    "author": "Leada Gore | lgore@al.com",
    "title": "Amazon launches pay-by-palm scan technology at Whole Foods locations nationwide - AL.com",
    "description": "Whole Foods customers will soon be able to pay with their palms when shopping at stores nationwide.",
    "url": "https://www.al.com/news/2023/07/amazon-launches-pay-by-palm-scan-technology-at-whole-foods-locations-nationwide.html",
    "urlToImage": "https://www.al.com/resizer/HNEjJnLZZDrH4ZUq_mdNPHakrL4=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/VMBCMB7SIFFTXPY4GRG6ENP6RE.jpg",
    "publishedAt": "2023-07-21T13:51:00Z",
    "content": "Whole Foods customers will soon be able to pay with their palms when shopping at stores nationwide.\r\nAmazon announced Thursday it was bringing Amazon Ones palm recognition service to more than 400 Wh… [+834 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "Jordan Mendoza, Scooby Axson",
    "title": "British Open 2023 leaderboard, live updates: Second round underway - USA TODAY",
    "description": "Second round action from the Royal Liverpool Golf Club in Hoylake, England is underway for the final major championship of 2023.",
    "url": "https://www.usatoday.com/story/sports/golf/pga/2023/07/21/british-open-leaderboard-highlights-round-2-live-upates/70441595007/",
    "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/07/21/USAT/70443092007-ap-british-open-golf-15.jpg?crop=2779,1570,x0,y0&width=2779&height=1570&format=pjpg&auto=webp",
    "publishedAt": "2023-07-21T13:18:45Z",
    "content": "After a first round full of surprises and a frustrating 18th hole for several players, the second round of the 2023 British Open is underway at Royal Liverpool Golf Club in Hoylake, England.\r\nThree g… [+9927 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hollywood Reporter"
    },
    "author": "Pamela McClintock",
    "title": "Barbie Movie Marketing Campaign Was One for the Ages - Hollywood Reporter",
    "description": "From custom Crocs to a special Prada line to gay pride parade floats, Greta Gerwig's 'Barbie' movie has attracted more than 100 promotional partners and generated countless headlines.",
    "url": "https://www.hollywoodreporter.com/movies/movie-news/barbie-movie-marketing-campaign-1235534537/",
    "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/barbie-H-2023-1.jpg?w=1024",
    "publishedAt": "2023-07-21T13:00:43Z",
    "content": "Pink is the new green.\r\nBarbie‘s release in theaters this weekend caps one of the most extensive and impressive extensive marketing campaigns in recent memory. Put another way: rarely does a film tur… [+5841 chars]"
    },
    {
    "source": {
    "id": "fox-sports",
    "name": "Fox Sports"
    },
    "author": "Fox Sports",
    "title": "Spain vs. Costa Rica Highlights | 2023 FIFA Women's World Cup - FOX Sports",
    "description": "Spain and Costa Rica started their 2023 FIFA Women's World Cup campaign in Group C of the soccer action! Spain came out strong in the first half and didn't look back. After an own goal from  Aitana Bonmatí, Valeria Del Campo and Esther González bagged in two …",
    "url": "https://www.foxsports.com/watch/play-68751f4ee00096c",
    "urlToImage": "https://a57.foxsports.com/static-media.fox.com/ms/stg1/sports/1280/720/play-68751f4ee00096c--Spain_of_Pain_1689930786337.jpg?ve=1&tl=1",
    "publishedAt": "2023-07-21T12:53:45Z",
    "content": null
    },
    {
    "source": {
    "id": "nbc-news",
    "name": "NBC News"
    },
    "author": "Lawrence Hurley",
    "title": "Liberal justices blast Supreme Court majority for allowing Alabama execution - NBC News",
    "description": "Liberal Supreme Court justices criticized conservative colleagues for allowing the execution of an Alabama death row inmate who raised claims about botched lethal injections.",
    "url": "https://www.nbcnews.com/politics/supreme-court/liberal-justices-blast-supreme-court-majority-allowing-alabama-executi-rcna95502",
    "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-07/230721-supreme-court-mb-1247-956166.jpg",
    "publishedAt": "2023-07-21T12:42:41Z",
    "content": "WASHINGTON The three liberal Supreme Court justices took aim at their conservative colleagues for allowing the early Friday execution of an Alabama death row inmate who had raised claims about the st… [+2038 chars]"
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "CHARLES J. GANS",
    "title": "Tony Bennett, masterful stylist of American musical standards, dies at 96 - The Associated Press",
    "description": "Tony Bennett, the eminent stylist and last of the great saloon singers whose devotion to classic American songs and knack for creating new standards such as \"I Left My Heart In San Francisco\" graced a decadeslong career, has died at 96. His publicist said he …",
    "url": "https://apnews.com/article/tony-bennett-dies-c3b3a7e2360449fb936a38794c7c3266",
    "urlToImage": "https://dims.apnews.com/dims4/default/d6cfeae/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F85%2F43%2F7ae338ad29d8a018469dd4c16496%2Fb0676f64492a4a3798cffc9b29a1a71d",
    "publishedAt": "2023-07-21T12:26:00Z",
    "content": "NEW YORK (AP) Tony Bennett, the eminent and timeless stylist whose devotion to classic American songs and knack for creating new standards such as I Left My Heart In San Francisco graced a decadeslon… [+12661 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Will Dunham",
    "title": "Introducing Janus, the exotic 'two-faced' white dwarf star - Reuters.com",
    "description": "Some people are two-faced, figuratively speaking of course. The ancient Roman god Janus was two-faced, literally - with one looking forward and another backward, representing transitions and duality. But a two-faced star? Yes, indeed.",
    "url": "https://www.reuters.com/science/introducing-janus-exotic-two-faced-white-dwarf-star-2023-07-21/",
    "urlToImage": "https://www.reuters.com/resizer/Wdblz079Cnhs1RQ7CoGGGNvLnRE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2KMEGALF3JMFPAKLOC5YBTRNDM.jpg",
    "publishedAt": "2023-07-21T12:25:00Z",
    "content": "WASHINGTON, July 21 (Reuters) - Some people are two-faced, figuratively speaking of course. The ancient Roman god Janus was two-faced, literally - with one looking forward and another backward, repre… [+3568 chars]"
    }
    ];

  constructor() {
    super();
    console.log("Hi constructor !")
    this.state = { articles : this.articles };
  }



  render() {
    return (
      <div className="container">
        <h3 className="my-3" style={{color: "white"}}>Today's Top Headlines !!</h3>
        <div className="container text-center">
            <div className="row align-items-start">
                {this.state.articles.map((element) => {
                  return <div className="col-sm-4" key={element.url}>
                    <NewsItem title={element.title.slice(0, 30)} description={element.description.slice(0, 50)} imgUrl={element.urlToImage} articleUrl={element.url} />
                  </div>
                })}
            </div>
        </div>
      </div>
    )
  }
}

export default NewsContent;
