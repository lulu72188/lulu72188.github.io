import Vue from "vue";

export const store = Vue.observable({
    isNavOpen: false,
    isAnswerOpen: false,
    puzzles: [
        {
          title: 'Section 3',
          id: 'mit_2003_section_3',
          hover: false,
          author: 'Bridget Copley, Lance Nathan, Marc Moskowitz',
          link: 'https://www.mit.edu/~puzzle/2003/www.acme-corp.com/teamGuest/3/index.html',
          solution: 'KRISHNA',
          solution_link: 'http://web.mit.edu/puzzle/www/2003/www.acme-corp.com/solutions/m3.html',
          solution_hints: {
            'MADASAMARCH': 'KEEP GOING',
            'HARE': 'KEEP GOING',
            'HAREKRISHNA': 'JUST THE SECOND WORD',
          },
          source: 'MIT 2003',
          flavor: `<p>Wednesday the boss went to church.</p>
<p>When you come through the doors of <span class='hint1'>Holy Trinity</span>, a <span class='hint2'>middle-aged</span> priest at the other end of the nave sees you and <span class='hint2'>strides down the center aisle</span> to greet you. "Good afternoon," he says warmly. "I'm <span class='hint1'>Msgr. Thurman</span>--like the actress in <span class='hint1'><i>Pulp Fiction</i></span>," he explains. "Can I help you?"</p>

<p>You explain your investigation, and his face falls; he leads you into his office. He sets aside a book about the first <span class='hint1'>Pope Gregory</span> ("Reading about the chants," he explains) and takes a seat behind his desk, looking saddened by the news.</p>

<p>"I'll miss him greatly," he tells you. "I remember when he first came here to ask how he could help. <span class='hint1'>Dame Fortune</span> must have smiled on us; he's been a pillar of the community ever since. Wednesday, in fact, he came to drop off some papers. Did you want to look through them?"</p>`,
          hints: [
            {
              id: 'hint1',
              name: 'Hint - First Step',
              text: 'There are a number of unusual proper nouns in the flavor text.  Do they have anything in common?',
              revealed: false,
            },
            {
              id: 'hint2',
              name: 'Hint - Extraction',
              text: 'Some flavor text indicates looking at something in the middle.',
              revealed: false,
            },
            {
              id: 'hint3',
              name: 'Hint - Final Step',
              text: 'You should have found a hint to a four-letter word.  It\'s the classic "do the thing again" final step - find this word\'s partner!',
              revealed: false,
            },
          ],
          feeders: [
            {
              title: 'Paranoia',
              solution: 'ECHO',
              revealed: false,
            },
            {
              title: 'Don\'t Make Me Say This Twice',
              solution: 'DIRE',
              revealed: false,
            },
            {
              title: 'Cans and Donations Gratefully Accepted',
              solution: 'GALL',
              revealed: false,
            },
            {
              title: 'Stained Glass',
              solution: 'FOOD',
              revealed: false,
            },
            {
              title: 'Titles',
              solution: 'GILA',
              revealed: false,
            },
            {
              title: 'Campaign Speeches',
              solution: 'LEVI',
              revealed: false,
            },
            {
              title: 'Bogots',
              solution: 'DOWN',
              revealed: false,
            },
            {
              title: 'The Price is Right',
              solution: 'CARD',
              revealed: false,
            },
            {
              title: 'Unprecedented Discovery',
              solution: 'BALL',
              revealed: false,
            },
            {
              title: 'Lost in a Maze',
              solution: 'SALK',
              revealed: false,
            },
            {
              title: 'The Property of Others',
              solution: 'SLOT',
              revealed: false,
            },
          ],
        },
        {
          title: 'Dossier 1 - Samantha Oriflamme',
          id: 'mit_2008_dossier_1',
          hover: false,
          author: 'Mark Halpin',
          link: 'https://devjoe.appspot.com/huntindex/hunt/mit2008',
          solution: 'HETRAMPLEDHERVIOLETS',
          solution_link: 'http://web.mit.edu/puzzle/www/2008/dossier_metas/dossier1_meta.shtml',
          source: 'MIT 2008 "Mystery Mystery Hunt"',
          flavor: '<p>Her neighbors in the quiet New England town of Saint Margaret\'s Mews, less than half an hour’s drive from Cambridge center, would\'ve been shocked to learn that the gentle old soul harbored a secret. They\'d have considered Miss Oriflamme incapable of any act more covert than the discreet insertion of a saucer beneath an errant teacup, the ginger elision of a name from an item of neighborhood gossip, or the surreptitious excision of an encroaching weed from her much-beloved garden. They\'d no inkling at all that she\'d been supplementing her meager widow\'s pension by designing websites from her home.</p>',
          puzzle_content: '<img src="http://web.mit.edu/puzzle/www/2008/dossier_metas/dossier1_card.gif">',
          notes: 'A physical copy of the business card was given to teams during hunt.  The link on the card is no longer active, but led to the above digital version of the card to help solvers.',
          hints: [
            {
              id: 'hint1',
              name: 'Hint - First Step',
              text: 'If you\'re not already familiar with any relationship between "x11" and swatches of color, now is a good time to google it.',
              revealed: false,
            },
            {
              id: 'hint2',
              name: 'Hint - Extraction',
              text: 'The color names can be matched to the feeder answers, with a little something leftover.',
              revealed: false,
            },
          ],
          feeders: [
            {
              title: 'Dream On',
              solution: 'REVIVALS',
              revealed: false,
            },
            {
              title: 'The More The Merrier',
              solution: 'THERMOLYSIS',
              revealed: false,
            },
            {
              title: 'Little Rascals',
              solution: 'MENAGERIES',
              revealed: false,
            },
            {
              title: 'Monopoles',
              solution: 'GRIDIRON',
              revealed: false,
            },
            {
              title: 'Cluesome',
              solution: 'EMOTIVE',
              revealed: false,
            },
            {
              title: 'Facebook',
              solution: 'PEARLYGATES',
              revealed: false,
            },
            {
              title: 'Mystery Rallye',
              solution: 'SLOTCAR',
              revealed: false,
            },
            {
              title: 'The Deadly Hobby of Murder',
              solution: 'ADENINES',
              revealed: false,
            },
            {
              title: 'This Puzzle Needs A Title',
              solution: 'ICONOCLASM',
              revealed: false,
            },
            {
              title: 'All Geared Up',
              solution: 'INTERLOCKS',
              revealed: false,
            },
            {
              title: 'Eight Not-So-Deadly Sins',
              solution: 'MANHOLES',
              revealed: false,
            },
          ],
        },
        {
          title: 'Stagecraft Man',
          id: 'mit_2011_stagecraft_man',
          hover: false,
          author: 'Aaron Dinkin, Noah Snyder, Ricky Liu',
          link: 'http://web.mit.edu/puzzle/www/2011/puzzles/mega_man/stagecraft.html',
          solution: 'WORDSWORD',
          solution_link: 'http://web.mit.edu/puzzle/www/2011/puzzles/mega_man/meta/stagecraft.html',
          solution_hints: {
            'WHATDOYOUREADMYLORD': 'KEEP GOING',
            'WORDSWORDSWORDS': 'KEEP GOING',
          },
          source: 'MIT 2011',
          flavor: '<p>Your fight with Stagecraft Man is also a battle against his rapier wit. Against him, therefore, <span class="hint2">it\'s what you say that counts.</span></p>',
          puzzle_content: '<p>□ □ □ □ _ _ _ _ _ □ □ □ □ □ _<p><ol><li>The Cat\'s Meow: <span class="hint2">(#24)</span></li><li>Rocky Horror: <span class="hint2">(#14)</span></li><li>Pointillisme: <span class="hint2">(#3)</span></li><li>Where\'s Antoinette?: <span class="hint2">(#26)</span></li><li>The Writing on the Wall: <span class="hint2">(all)</span></li></ol>',
          hints: [
            {
              id: 'hint1',
              name: 'Hint - First Step',
              text: 'You first have to notice what each answer has to do with stagecraft.  If you\'re not into theater, starting with Shakespeare is usually a safe bet.',
              revealed: false,
            },
            {
              id: 'hint2',
              name: 'Hint - Extraction',
              text: 'You need to do something with what each character says and the given numbers. (Yes, go find the scripts for each play. They\'re all available online).  This should clue a 15 letter phrase.',
              revealed: false,
            },
          ],
          feeders: [
            {
              title: 'The Cat\'s Meow',
              solution: 'BASSET',
              revealed: false,
            },
            {
              title: 'Rocky Horror',
              solution: 'ELBOW',
              revealed: false,
            },
            {
              title: 'Pointillisme',
              solution: 'SLY',
              revealed: false,
            },
            {
              title: 'Where\;s Antoinette?',
              solution: 'BOTTOM',
              revealed: false,
            },
            {
              title: 'The Writing on the Wall',
              solution: 'TAURUS',
              revealed: false,
            },
          ],
        },
        {
          title: 'The Mock Turtle',
          id: 'mit_2014_mock_turtle',
          hover: false,
          author: 'David Wilson, Erin Rhode',
          link: 'http://web.mit.edu/puzzle/www/2014/round/mock_turtle/',
          solution: 'MAKEEDITSTOYOURTABLESCHEMA',
          solution_link: 'http://web.mit.edu/puzzle/www/2014/round-solution/mock_turtle/',
          source: 'MIT 2014 "Wonderland"',
          flavor: `<p>Here you see a turtle-like <span class="hint1">animal who appears to be made of bits and pieces of other beings</span>. He looks at you sorrowfully.</p>
<p>"I used to be sad about not being a real turtle," he says, "but right now I have even more problems. The others are always having their tea parties, but I haven't been able to join them since the Beast came. You see, with all the craziness around here recently, and all of these outsiders" --he looks at you, but more in sadness than anything else-- "coming by, it's been very crowded, and there's just not enough room for everyone to fit anymore. I try to pretend they're with me by using mock versions of them, but it's not the same. If only there were a way to allow more people to fit comfortably around the table at tea time, then I could be with my friends again..."</p>`,
          puzzle_content: `___  creator and family (26,13)<br>
___'s airplane (in reality) (15,1)<br>
___'s "very small" character (5,2)<br>
Beverage endorsed by ___ (14,9)<br>
Container for ___ product (10,25)<br>
First word of ___'s children's TV show name (6,3)<br>
Focus of ___ meme (17,8)<br>
How "these ___" were preserv'd (7,22)<br>
Lancaster and ___, for example (4,21)<br>
Primary developer of the ___ library (20,24)<br>
Send email to experts on the ___ (23,16)<br>
Usin' a ___, perhaps? (12,11)<br>
What ___ does, before being shot (18,19)<br><br>
_ _ _ _ _ _ _ _ _ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __<br>
1  2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26<p></p>`,
          hints: [
            {
              id: 'hint1',
              name: 'Hint - Extraction',
              text: 'The correct answers should be <i>almost</i> the same as Carrollian characters.',
              revealed: false,
            },
          ],
          feeders: [
            {
              title: 'Nothing but a Pack of Cards',
              solution: 'WARDLEY',
              revealed: false,
            },
            {
              title: 'Common Bonds',
              solution: 'LOCKS',
              revealed: false,
            },
            {
              title: 'Cross-Pollination',
              solution: 'NUMBERTHEORY',
              revealed: false,
            },
            {
              title: 'Cut and Tape',
              solution: 'SNOOPY',
              revealed: false,
            },
            {
              title: 'Assemble Me',
              solution: 'TI85',
              revealed: false,
            },
            {
              title: 'Safer Sephiroth',
              solution: 'TORAH',
              revealed: false,
            },
            {
              title: 'Falling into Place',
              solution: 'JAMESBOND',
              revealed: false,
            },
            {
              title: 'Round Tripper',
              solution: 'TEDWILLIAMS',
              revealed: false,
            },
            {
              title: 'Initial Impressions',
              solution: 'AAMILNE',
              revealed: false,
            },
            {
              title: 'Introduction to Collegiate Notetaking',
              solution: 'LEVARBURTON',
              revealed: false,
            },
            {
              title: 'Please Remain Seated',
              solution: 'DOWNFALL',
              revealed: false,
            },
            {
              title: 'Stronghold Fire',
              solution: 'WORMTONGUE',
              revealed: false,
            },
            {
              title: 'Only Carmen Sandiego Explores Nigh Unstoppably',
              solution: 'CORNWALL',
              revealed: false,
            },
          ],
        },
        {
          title: 'Graveyard Meta',
          id: 'mit_2015_graveyard',
          hover: false,
          author: 'Matt "Halftime" Peairs',
          link: 'http://web.mit.edu/puzzle/www/2015/puzzle/graveyard_meta/',
          solution: 'MECHANICALSEAMONSTER',
          solution_link: 'http://web.mit.edu/puzzle/www/2015/puzzle/graveyard_meta/solution/',
          solution_hints: {
            'MERKERNERCURLSURMERNSTIR': 'SOUND IT OUT',
            'MERKERNERCURSURMERNSTIR': 'YOU DROPPED AN L',
            'MERKERNERCURLSURMERSTIR': 'YOU DROPPED AN N',
            'MERKERNERCURSURMERSTIR': 'YOU\'LL NEED THE FULL SYLLABLE',
          },
          source: 'MIT 2015 "20,000 Puzzles Under the Sea"',
          flavor: '<p></p>',
          puzzle_content: '<p></p>',
          hints: [
            {
              id: 'hint1',
              name: 'Hint - Ordering',
              text: 'This is a spooky puzzle - you might want to research Goosebumps.',
              revealed: false,
            },
            {
              id: 'hint2',
              name: 'Hint - Extraction',
              text: 'This is the most groan-worthy extraction of all time.  You might want to check out <a href="https://knowyourmeme.com/memes/ermahgerd">this reference.</a>',
              revealed: false,
            },
          ],
          feeders: [
            {
              title: 'Shark Blood',
              solution: 'WINNER',
              revealed: false,
            },
            {
              title: 'Say Cheese and Dive',
              solution: 'CURLUP',
              revealed: false,
            },
            {
              title: 'Welcome to Dead Waters',
              solution: 'SUMMER',
              revealed: false,
            },
            {
              title: 'Let\s Get Submersible',
              solution: 'SMSPOMMERN',
              revealed: false,
            },
            {
              title: 'Night of the Living Kraken',
              solution: 'STIRFRY',
              revealed: false,
            },
            {
              title: 'The Curse of the Atlantean\'s Tomb',
              solution: 'BIGSUR',
              revealed: false,
            },
            {
              title: 'Stay Out of the Trench',
              solution: 'KERFUFFLE',
              revealed: false,
            },
          ],
        },
        {
          title: 'The Fighter',
          id: 'mit_2017_the_fighter',
          hover: false,
          author: 'Todd McClary',
          link: 'http://web.mit.edu/puzzle/www/2017/round/fighter.html',
          solution: 'ONETWOCOMBO',
          solution_link: 'http://web.mit.edu/puzzle/www/2017/solution/fighter.html',
          source: 'MIT 2017 "Monsters et Manus"',
          flavor: '<p></p>',
          puzzle_content: '<p></p>',
          hints: [
            {
              id: 'hint1',
              name: 'Hint - First Step',
              text: 'You\'ll want to take note of the pattern of repeated letters in the answers.',
              revealed: false,
            },
            {
              id: 'hint2',
              name: 'Hint - Ordering',
              text: 'Note that all of the answers have different lengths.',
              revealed: false,
            },
          ],
          feeders: [
            {
              title: 'Before and After MASH',
              solution: 'COULDHAVEBEEN',
              revealed: false,
            },
            {
              title: 'Bigram Battleships',
              solution: 'HYDROCOOLS',
              revealed: false,
            },
            {
              title: 'Crossing Your Arms',
              solution: 'PRETEEN',
              revealed: false,
            },
            {
              title: 'Double-Crosser',
              solution: 'HOUSEMEETING',
              revealed: false,
            },
            {
              title: 'Get Her! Together!',
              solution: 'BOBBYHENDRICKS',
              revealed: false,
            },
            {
              title: 'It Takes Two',
              solution: 'DODDFRANK',
              revealed: false,
            },
            {
              title: 'Let\'s Get Physical',
              solution: 'LOLL',
              revealed: false,
            },
            {
              title: 'Now Where Was I?',
              solution: 'SANAA',
              revealed: false,
            },
            {
              title: 'Swifties',
              solution: 'OBSESS',
              revealed: false,
            },
            {
              title: 'A Turn of Phrase',
              solution: 'FIREWEED',
              revealed: false,
            },
            {
              title: 'Up in the Air',
              solution: 'MARYPOPPINS',
              revealed: false,
            },
          ],
        },
        {
          title: 'Traveling the Trail',
          id: 'cmu_2020_traveling_the_trail',
          hover: false,
          author: 'Misha Ivkov',
          link: 'https://puzzlehunt.club.cc.cmu.edu/puzzle/15020/',
          solution: 'QUARTERINWAGON',
          solution_link: 'https://puzzlehunt.club.cc.cmu.edu/protected/solutions/15020_sol/index.html',
          source: 'CMU Fall 2020 "Oregon Trail Puzzlehunt"',
          flavor: '<p><span class="hint1">While admiring the sights of the nearby national parks</span>, you find a torn-up diary with some kind of misshapen map. It seems to chronicle the journey of a family from east to west along the Oregon Trail. You can almost read the diary, but the ink has run and jumbled up at least one word in each entry. As night falls, you begin to take a break from the day. Where will you spend the night?</p>',
          puzzle_content: `<table>
                <tbody><tr>
                    <td class="puzzle_name">My Kingdom for a Horse</td>
                    <td>▶</td>
                    <td></td>
                    <td></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                </tr>
                <tr>
                    <td class="puzzle_name">Falling Rocks</td>
                    <td>▶</td>
                    <td></td>
                    <td></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td></td>
                    <td></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                </tr>
                <tr>
                    <td class="puzzle_name">Keep Talking and Nobody Explodes</td>
                    <td>▶</td>
                    <td></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="puzzle_name">Reasoning with Data</td>
                    <td>▶</td>
                    <td></td>
                    <td></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="puzzle_name">Little Experiments</td>
                    <td>▶</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="puzzle_name">Directions</td>
                    <td>▶</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="puzzle_name">Crossing the River</td>
                    <td>▶</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td></td>
                    <td></td>
                    <td class="gridded"></td>
                    <td class="gridded"></td>
                    <td></td>
                </tr>
            </tbody></table>
                    <p>Day 1:</p>
                    <p>
                        This is the first day of my diary. Already my children have been getting on my nerves. It seems they are doing this just to &lt;missing&gt; (3) me and have drawn the &lt;missing&gt; (3) of both me and my wife. I hope this does not continue once we set off.
                    </p>
                    <p>Day 2:</p>
                    <p>
                        The journey begins! Today we saw a man with some weird dancing syndrome, some members of our caravan called it &lt;missing&gt; (6). We hope this does not happen to any of us.
                    </p>
                    <p>Day 3:</p>
                    <p>
                        Today, we passed a traveling medicinal salesman who claims to be from India. He gave us some medicine to treat my son's callouses. It worked so well, and I'm now of the opinion that his practice of &lt;missing&gt; (8) should be introduced more in the States.
                    </p>
                    <p>Day 4:</p>
                    <p>
                        Today my daughter fell into some poison ivy. While plucking her out, we noticed the beautiful veins of the leaf and the &lt;missing&gt; (6) in between these veins. When I told this word to my children, they were confused because they thought it was referring to a colored body part. It's amazing how similar the nomenclature of plant and body parts is!
                    </p>
                    <p>Day 5:</p>
                    <p>
                        As we pass more and more towns, I can't help but wonder how the judicial process happens. I'm reminded of my grandmother's stories about the old English courts of &lt;missing&gt; (6). If anything would make sense here, it would be that kind of decentralized court system.
                    </p>
                    <p>Day 6:</p>
                    <p>
                        Both of our children fell sick today. We've heard there is an excellent doctor in the next town over, which just ups the &lt;missing&gt; (4) of this journey. We hope we will reach there in time.
                    </p>
                    <p>Day 7:</p>
                    <p>
                        Through this journey, we've managed to run the &lt;missing&gt; (5) of climates already, from the nice water of the Mississippi River to the cold Rocky Mountains. We've made it to the doctor's town today, and I wonder what lies ahead.
                    </p>
                    <p>Day 8:</p>
                    <p>
                        Our children finally look to be doing better! We thought of a new motto today: "what goes around, &lt;missing&gt; (5) around". Trading some cowskin with the doctor was well worth it.
                    </p>
<p></p>`,
          hints: [
            {
              id: 'hint1',
              name: 'Hint - First Step',
              text: 'You should identify national parks related to your answers.  The shape of the puzzle clues that they will be US national parks.',
              revealed: false,
            },
            {
              id: 'hint2',
              name: 'Hint - Extraction',
              text: 'You need to find your answers in the filled-out grid.  You\'d think from the clue text they run east-to-west, but I think that\'s a misdirect, you\'re better off just looking for contiguous letters in any order.',
              revealed: false,
            },
          ],
          feeders: [
            {
              title: 'My Kingdom for a Horse',
              solution: 'GEORGEGIST',
              revealed: false,
            },
            {
              title: 'Little Experiments',
              solution: 'GREENTABLE',
              revealed: false,
            },
            {
              title: 'Keep Talking and Nobody Explodes',
              solution: 'SNOWER',
              revealed: false,
            },
            {
              title: 'Falling Rocks',
              solution: 'CALDERA',
              revealed: false,
            },
            {
              title: 'Directions',
              solution: 'CACTUS',
              revealed: false,
            },
            {
              title: 'Reasoning with Data',
              solution: 'CATENARY',
              revealed: false,
            },
            {
              title: 'Crossing the River',
              solution: 'HEAVENLYREWARD',
              revealed: false,
            },
          ],
        },
        {
          title: 'Back to the Present',
          id: 'cmu_2018_back_to_the_present',
          hover: false,
          author: 'Samuel Yeom',
          link: 'https://puzzlehunt.club.cc.cmu.edu/puzzle/918/',
          solution: 'DOUBLENEGATIVE',
          solution_link: 'https://puzzlehunt.club.cc.cmu.edu/protected/solutions/918_sol.pdf',
          source: 'CMU Fall 2018 "Time Travel Hunt"',
          flavor: '<p>Now that you have successfully completed your mission, you just need to take the time machine back to the present. Unfortunately, <span class="hint2">the time machine only goes backward in time!</span> With the blueprint below, you decide to reverse-engineer the time machine, hoping to find a way to make it go forward in time.</p>',
          puzzle_content: '<img src='+require("@/assets/CMU_918.PNG")+' />',
          hints: [
            {
              id: 'hint1',
              name: 'Hint - Understanding the diagram',
              text: 'The diagram is showing that for each input word, the output word is made by deleting two letters from the middle.',
              revealed: false,
            },
            {
              id: 'hint2',
              name: 'Hint - First Step',
              text: 'The time machine only goes backwards - so instead of subtracting letters, try doing the reverse.',
              revealed: false,
            },
          ],
          feeders: [
            {
              title: 'Nixing the Lasers',
              solution: 'ROLE',
              revealed: false,
            },
            {
              title: 'Print Job',
              solution: 'FIST',
              revealed: false,
            },
            {
              title: 'Three-l33t',
              solution: 'SECT',
              revealed: false,
            },
            {
              title: 'A Time Difference',
              solution: 'LEANED',
              revealed: false,
            },
            {
              title: 'Smashing the Mirror',
              solution: 'BRIDES',
              revealed: false,
            },
            {
              title: 'One Step Forwards',
              solution: 'CORNED',
              revealed: false,
            },
            {
              title: 'Global Traveler',
              solution: 'WRINGS',
              revealed: false,
            },
          ],
        },
    ]
});

export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen
    },
    toggleAnswer() {
        store.isAnswerOpen = !store.isAnswerOpen
    },
    revealFeeder(meta_id,solution) {
        store.puzzles.find(o => o.id === meta_id).feeders.find(o => o.solution === solution).revealed = true
    },
    revealHint(meta_id,hint_id) {
        store.puzzles.find(o => o.id === meta_id).hints.find(o => o.id === hint_id).revealed = true
    },
};
