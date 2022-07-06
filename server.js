const express = require('express');
const app = express();
const PORT = 8000;

let titles = [
    // The Collected Short Stories of Louis L'Amour, Volume 1
    "The Gift of Cochise", "That Man From the Bitter Sands", "Desperate Men",
    "Dutchman's Flat", "From the Listening Hills", "Trap of Gold", 
    "Riches Beyond Dream", "The Lonesome Gods", "The Skull and the Arrow", 
    "End of the Drive", "Caprock Rancher", "Dead-End Drift", 
    "One Night Stand", "Marshal of Canyon Gap", "A Husband for Janey", 
    "Elisha Comes to Red Horse", "The Courting of Griselda", "Booty for a Badman", 
    "The Defense of Sentinel", "The One for the Mojave Kid", "A Mule for Santa Fe", 
    "War Party", "Ironwood Station", "Alkali Basin", 
    "Stage to Willowspring", "Let the Cards Decide", "Duffy's Man", 
    "The Strong Shall Live", "To Make a Stand", "Get Out of Town", 
    "One for the Pot", "Beyond the Chaparral", "Home is the Hunter", 
    "Rustler Roundup", "Moon of the Trees Broken by Snow",
    // The Collected Short Stories of Louis L'Amour, Volume 2
    "Law of the Desert Born", "The Town No Guns Could Tame", "Man Riding West", 
    "What Gold Does to a Man", "Horse Heaven", "The Ghosts of Buckskin Run", 
    "McNelly Knows a Ranger", "A Job for a Ranger", "Bowdrie Rides a Coyote Trail", 
    "A Trail to the West", "The Outlaws of Poplar Creek", "Bowdrie Follows a Cold Trail", 
    "More Brains Than Bullets", "The Road to Casa Piedras", "Bowdrie Passes Through",
    "Where Buzzards Fly", "South of Deadwood", "Too Tough to Brand", 
    "Case Closed - No Prisoners", "The Killer from the Pecos", "A Ranger Rides to Town", 
    "Rain on the Mountain Fork", "Down Sonora Way", "Strange Pursuit", 
    "Strawhouse Trail", "Keep Travelin', Rider", "No Man's Mesa", 
    "The Passing of Rope Nose", "Trail to Pie Town", "The Drift",
    // The Collected Short Stories of Louis L'Amour, Volume 3
    "Riding for the Brand", "Four-Card Draw", "One Last Gun Notch", 
    "Shandy Takes the Hook", "A Night at Wagon Camp", "Six-Gun Stampede", 
    "Valley of the Sun", "Fork Your Own Broncs", "Pardner from the Rio", 
    "The Guns Talk Loud", "Squatters on the Lonetree", "That Slash Seven Kid", 
    "Home in the Valley", "Red Butte Showdown", "Jackson of Horntown",
    "Ride or Start Shootin'", "Regan of the Slash B", "Lonigan", 
    "Lit a Shuck for Texas", "West of Dry Creek", "There's Always a Trail", 
    "We Shaped the Land with Our Guns", "To Hang Me High", "West of Dodge", 
    "Monument Rock", "A Gun for Kilkenny", "In Victorio's Country", 
    "That Packsaddle Affair",
    // The Collected Short Stories of Louis L'Amour, Volume 4: Part 2
    "East of Gorontalo", "On the Road to Amurang", "From Here to Banggai", 
    "The House of Qasavara", "Well of the Unholy Light", "West from Singapore", 
    "South of Suez", "Voyage to Tobalai", "Wings Over Brazil", 
    "Pirates of the Sky", "Flight to the North", "Coast Patrol", 
    "Wings Over Khabarovsk", "Flight to Enbetu", "Mission to Siberut",
    "Down Paagumene Way", "The Goose Flies South", "Tailwind to Tibet", 
    "Pirates with Wings", "Night Over the Solomons",
    // The Collected Short Stories of Louis L'Amour, Volume 5
    "No Man's Man", "The Nester and the Piute", "Desert Death Song", 
    "Heritage of Hate", "Hattan's Castle", "Big Man", 
    "Showdown on the Tumbling T", "Waltz Him Around Again, Shadow", "Rowdy Rides to Glory",
    "The Ghost Maker", "Down the Pogonip Trail", "The Romance of Piute Bill", 
    "That Triggernometry Tenderfoot", "The Sixth Shotgun", "Barney Takes a Hand", 
    "Rain on the Halfmoon", "When a Texan Takes Over", "Big Medicine", 
    "Gila Crossing", "The Marshal of Painted Rock", "Ride, You Tonto Raiders", 
    "No Trouble for the Cactus Kid", "Medicine Ground", "Love and the Cactus Kid",
    "The Cactus Kid Pays a Debt", "Battle at Burnt Camp", "The Cactus Kid", 
    // The Collected Short Stories of Louis L'Amour, Volume 6: Part 1
    "Unguarded Moment", "Police Band", "Time of Terror", 
    "The Gravel Pit", "The Hand of Kuan-Yin", "Sand Trap", 
    "Under the Hanging Wall", "Too Tough to Kill", "Anything for a Pal", 
    "Fighter's Fiasco", "Sideshow Champion", "Fighters Should Be Hungry",
    "The Money Punch", "Making It the Hard Way", "The Rounds Don't Matter", 
    "Fighters Don't Dive", "Gloves for a Tiger", "The Ghost Fighter", 
    // The Collected Short Stories of Louis L'Amour, Volume 6: Part 2
    "Dream Fighter", "Corpse on the Carpet", "With Death in His Corner", 
    "Dead Man's Trail", "The Street of Lost Corpses", "Stay Out of My Nightmare", 
    "The Hills of Homicide", "I Hate to Tell His Widow", "Collect from a Corpse",
    "The Unexpected Corpse", "The Sucker Switch", "A Friend of a Hero", 
    "The Vanished Blonde", "Backfield Battering Ram", "Moran of the Tigers",
    // The Collected Short Stories of Louis L'Amour, Volume 7
    "West Is Where the Heart Is", "The Turkeyfeather Riders", "A Man Named Utah", 
    "Merrano of the Dry Country", "Bluff Creek Station", "Here Ends the Trail", 
    "The Man from the Dead Hills", "His Brother's Debt", "The Black Rock Coffin Makers",
    "The Lion Hunter and the Lady", "Bill Carey Rides West", "The Marshal of Sentinel", 
    "No Rest for the Wicked", "Long Ride Home", "Mistakes Can Kill You", 
    "The Man From Battle Creek", "Death Song of the Sombrero", "The Outlaws of Mesquite", 
    "Murphy Plays His Hand", "Secret of Silver Springs", "Men to Match the Hills",
    "Trail to Squaw Springs", "West of the Pilot Range", "McQueen of the Tumbling K", 
    "Roundup in Texas", "West of the Tularosa", "Bad Place to Die", 
    "Grub Line Rider",
    // Hills of Homicide
    "The Hills of Homicide", "Unguarded Moment", "Dead Man's Trail", 
    "With Death in His Corner", "The Street of Lost Corpses", "Stay Out of My Nightmare",
    "Collect from a Corpse", "I Hate to Tell His Widow",
    // Golden Gunmen/Dutchman's Flat
    "Trap of Gold", "Keep Travelin', Rider", "Big Medicine", 
    "Trail to Pie Town", "McQueen of the Tumbling K", "Dutchman's Flat", 
    // Yondering
    "Death, Westbound", "Dead-End Drift", "Old Doc Yak", 
    "It's Your Move", "And Proudly Die", "Survival",
    "Show Me the Way to Go Home", "Thicker Than Blood", "The Admiral", 
    "The Man Who Stole Shakespeare", "Shanghai, Not Without Gestures", "Off the Mangrove Coast", 
    "The Dancing Kate", "Glorious! Glorious!", "By the Ruins of El Walarieh", 
    "Where There's Fighting", "The Cross and the Candle", "A Friend of the General",
    "Author's Tea", "Let Me Forget....",
    // The Strong Land
    "The One for the Mojave Kid", "His Brother's Debt", "A Strong Land Growing", 
    "Lit a Shuck for Texas", "The Nester and the Piute", "Barney Takes a Hand", 
    // Draw Straight: A Western Sextet
    "Fork Your Own Broncs", "Keep Travelin', Rider", "McQueen of the Tumbling K", 
    "Four-Card Draw", "Mistakes Can Kill You", "Showdown on the Tumbling T",
    // May There Be a Road
    "A Friend of a Hero", "May There Be A Road", "Fighter's Fiasco", 
    "The Cactus Kid", "Making It the Hard Way", "The Hand of Kuan-Yin", 
    "Red Butte Showdown", "The Ghost Fighter", "Wings Over Brazil", 
    "The Vanished Blonde",
    // Beyond the Great Snow Mountains
    "By the Waters of San Tadeo", "Meeting at Falmouth", "Roundup in Texas",
    "Sideshow Champion", "Crash Landing", "Under the Hanging Wall", 
    "Coast Patrol", "The Gravel Pit", "The Money Punch", 
    "Beyond the Great Snow Mountains",
    // Monument Rock
    "A Man Named Utah", "Battle at Burnt Camp", "Ironwood Station",
    "Here Ends the Trail", "Strawhouse Trail", "The Man from the Dead Hills", 
    "Monument Rock",
    // Night Over the Solomons
    "Night Over the Solomons", "Mission to Siberut", "Pirates with Wings", 
    "Tailwind to Tibet", "The Goose Flies South", "Wings Over Khabarovsk", 
    // Buckskin Run
    "The Ghosts of Buckskin Run", "No Trouble for the Cactus Kid", "Horse Heaven",
    "Squatters on the Lonetree", "Jackson of Horntown", "There's Always a Trail", 
    "Down the Pogonip Trail", "What Gold Does to a Man",
    // Long Ride Home
    "The Cactus Kid Pays a Debt", "Bad Place to Die", "That Triggernometry Tenderfoot", 
    "The Town No Guns Could Tame", "Shandy Takes the Hook", "No Man's Man", 
    "Ride or Start Shootin'", "Long Ride Home",
    // West From Singapore
    "East of Gorontalo", "On the Road to Amurang", "From Here to Banggai",
    "The House of Qasavara", "Well of the Unholy Light", "West from Singapore", 
    "South of Suez",
    // The Trail to Crazy Man
    "The Trail to Crazy Man", "Riders of the Dawn", "Showdown on the Hogback", 
    // The Strong Shall Live
    "The Strong Shall Live", "One Night Stand", "Trail to Squaw Springs",
    "Merrano of the Dry Country", "The Romance of Piute Bill", "Hattan's Castle", 
    "Duffy's Man", "Big Man", "The Marshal of Sentinel", 
    "Bluff Creek Station",
    // Bowdrie
    "Bowdrie Rides a Coyote Trail", "A Job for a Ranger", "Bowdrie Passes Through", 
    "A Trail to the West", "More Brains Than Bullets", "Too Tough to Brand",
    "The Killer from the Pecos", "Bowdrie Follows a Cold Trail",
    // Law of the Desert Born
    "Law of the Desert Born", "Riding On", "The Black Rock Coffin Makers", 
    "Desert Death Song", "Ride, You Tonto Raiders", "One Last Gun Notch", 
    "Death Song of the Sombrero", "The Guns Talk Loud", "Grub Line Rider", 
    "The Marshal of Painted Rock", "Trap of Gold",
    // Bowdrie's Law
    "McNelly Knows a Ranger", "Where Buzzards Fly", "Case Closed - No Prisoners", 
    "Down Sonora Way", "The Road to Casa Piedras", "A Ranger Rides to Town", 
    "South of Deadwood", "The Outlaws of Poplar Creek", "Rain on the Mountain Fork",
    "Strange Pursuit",
    // Man Riding West
    "Big Medicine", "Man Riding West", "His Brother's Debt", 
    "Four-Card Draw", "Keep Travelin', Rider", "Dutchman's Flat", 
    "The Trail to Peach Meadow Canyon",
    // The Rider of the Ruby Hills
    "The Rider of the Ruby Hills", "Showdown Trail", "A Man Called Trent",
    "The Trail to Peach Meadow Canyon",
    // Lonigan
    "Lonigan", "Regan of the Slash B", "Heritage of Hate", 
    "Rowdy Rides to Glory", "Pardner from the Rio", "Bill Carey Rides West",
    // Grub Line Rider 
    "The Black Rock Coffin Makers", "Grub Line Rider", "Desert Death Song", 
    "One Last Gun Notch", "Ride, You Tonto Raiders", "War Party",
    "Law of the Desert Born",
    // The Outlaws of Mesquite
    "The Outlaws of Mesquite", "Love and the Cactus Kid", "The Ghost Maker", 
    "The Drift", "No Rest for the Wicked", "That Packsaddle Affair", 
    "Showdown on the Tumbling T", "The Sixth Shotgun",
    // West of the Tularosa
    "Mistakes Can Kill You", "The Man from Battle Flat", "The Lion Hunter and the Lady",
    "The One for the Mojave Kid", "West Is Where the Heart Is", "Home in the Valley", 
    "Fork Your Own Broncs", "West of the Tularosa",
    // Valley of the Sun
    "We Shaped the Land with Our Guns", "West of the Pilot Range", "When a Texan Takes Over",
    "No Man's Mesa", "Gila Crossing", "Medicine Ground",
    "Valley of the Sun", "That Slash Seven Kid", "In Victorio's Country", 
    // West of Dodge
    "Beyond the Chaparral", "A Husband for Janey", "West of Dodge", 
    "The Passing of Rope Nose", "To Make a Stand", "That Man From the Bitter Sands", 
    "Let the Cards Decide", "Riches Beyond Dream", "West of Dry Creek",
    "Marshal of Canyon Gap", "Home is the Hunter", "Rain on the Halfmoon", 
    "Stage to Willowspring", "To Hang Me High",
    // Mistakes Can Kill You
    "The Black Rock Coffin Makers", "The Nester and the Piute", "Mistakes Can Kill You", 
    "Four-Card Draw", "Law of the Desert Born", "The Trail to Peach Meadow Canyon", 
    "Ride, You Tonto Raiders", "Trail to Pie Town", "Lit a Shuck for Texas",
    // Off the Mangrove Coast
    "Fighters Should Be Hungry", "The Cross and the Candle", "Off the Mangrove Coast", 
    "It's Your Move", "The Rounds Don't Matter", "The Diamond of Jeru", 
    "The Unexpected Corpse", "Secret of Silver Springs", "Time of Terror", 
    // With These Hands
    "Fighters Don't Dive", "With These Hands", "Corpse on the Carpet", 
    "Six-Gun Stampede", "Pirates of the Sky", "The Sucker Switch",
    "Gloves for a Tiger", "Police Band", "Flight to Enbetu", 
    "Dream Fighter", "Voyage to Tobalai",
    // From the Listening Hills
    "Anything for a Pal", "Backfield Battering Ram", "Down Paagumene Way",
    "Flight to the North", "From the Listening Hills", "Moon of the Trees Broken by Snow",
    "Moran of the Tigers", "Murphy Plays His Hand", "Sand Trap", 
    "A Night at Wagon Camp", "Too Tough to Kill", "Waltz Him Around Again, Shadow", 
    // The Man from Battle Flat
    "The Man from Battle Flat", "Mistakes Can Kill You", "The Rider of the Ruby Hills", 
    // The Chick Bowdrie Short Stories Bundle
    "McNelly Knows a Ranger", "A Job for a Ranger", "Bowdrie Rides a Coyote Trail",
    "A Trail to the West", "The Outlaws of Poplar Creek", "Bowdrie Follows a Cold Trail", 
    "More Brains Than Bullets", "The Road to Casa Piedras", "Bowdrie Passes Through", 
    "Where Buzzards Fly", "South of Deadwood", "Too Tough to Brand", 
    "Case Closed - No Prisoners", "The Killer from the Pecos", "A Ranger Rides to Town", 
    "Rain on the Mountain Fork", "Down Sonora Way", "Strange Pursuit",
    "Strawhouse Trail",
    // Misc
    "Where There's Fighting"
];


titles = titles.sort();
// // got help from https://www.cloudhadoop.com/typescript-remove-duplicates-array/
let finalTitles = [...new Set(titles)];
// console.log(titles);
// console.log(titles.length);
// console.log(finalTitles.length);
// console.log(finalTitles);

// Novel Titles

const novelTitles = {
    // Sacketts
    'the daybreakers': {
        'title': 'The Daybreakers',
        'category': 'Sacketts',
        'publishDate': '1960'
    },
    'sackett': {
        'title': 'Sackett',
        'category': 'Sacketts',
        'publishDate': '1961'
    },
    'lando': {
        'title': 'Lando',
        'category': 'Sacketts',
        'publishDate': '1962'
    },
    'mojave crossing': {
        'title': 'Mojave Crossing',
        'category': 'Sacketts',
        'publishDate': '1964'
    },
    'the sackett brand': {
        'title': 'The Sackett Brand',
        'category': 'Sacketts',
        'publishDate': '1965'
    },
    'mustang man': {
        'title': 'Mustang Man',
        'category': 'Sacketts',
        'publishDate': '1966'
    },
    'the sky-liners': {
        'title': 'The Sky-Liners',
        'category': 'Sacketts',
        'publishDate': '1967'
    },
    'the lonely men': {
        'title': 'The Lonely Men',
        'category': 'Sacketts',
        'publishDate': '1969'
    },
    'galloway': {
        'title': 'Galloway',
        'category': 'Sacketts',
        'publishDate': '1970'
    },
    'ride the dark trail': {
        'title': 'Ride the Dark Trail',
        'category': 'Sacketts',
        'publishDate': '1972'
    },
    'treasure mountain': {
        'title': 'Treasure Mountain',
        'category': 'Sacketts',
        'publishDate': '1972'
    },
    'war party': {
        'title': 'War Party',
        'category': 'Sacketts',
        'publishDate': '1973'
    },
    'sackett\'s land': {
        'title': 'Sackett\'s Land',
        'category': 'Sacketts',
        'publishDate': '1974'
    },
    'to the far blue mountains': {
        'title': 'To the Far Blue Mountains',
        'category': 'Sacketts',
        'publishDate': '1976'
    },
    'lonely on the mountain': {
        'title': 'Lonely on the Mountain',
        'category': 'Sacketts',
        'publishDate': '1980'
    },
    'ride the river': {
        'title': 'Ride the River',
        'category': 'Sacketts',
        'publishDate': '1983'
    },
    'the warrior\'s path': {
        'title': 'The Warrior\'s Path',
        'category': 'Sacketts',
        'publishDate': '1984'
    },
    'jubal sackett': {
        'title': 'Jubal Sackett',
        'category': 'Sacketts',
        'publishDate': '1985'
    },
    'end of the drive': {
        'title': 'End of the Drive',
        'category': 'Sacketts',
        'publishDate': '1997'
    },
    // Talon
    'rivers west': {
        'title': 'Rivers West',
        'category': 'Talon',
        'publishDate': '1975'
    },
    'the man from the broken hills': {
        'title': 'The Man from the Broken Hills',
        'category': 'Talon',
        'publishDate': '1975'
    },
    'milo talon': {
        'title': 'Milo Talon',
        'category': 'Talon',
        'publishDate': '1981'
    },
    // Chantry
    'north to the rails': {
        'title': 'North to the Rails',
        'category': 'Chantry',
        'publishDate': '1971'
    },
    'fair blows the wind': {
        'title': 'Fair Blows the Wind',
        'category': 'Chantry',
        'publishDate': '1973'
    },
    'the ferguson rifle': {
        'title': 'The Ferguson Rifle',
        'category': 'Chantry',
        'publishDate': '1973'
    },
    'over on the dry side': {
        'title': 'Over on the Dry Side',
        'category': 'Chantry',
        'publishDate': '1975'
    },
    'borden chantry': {
        'title': 'Borden Chantry',
        'category': 'Chantry',
        'publishDate': '1977'
    },
    // Kilkenny
    'kilkenny': {
        'title': 'Kilkenny',
        'category': 'Kilkenny',
        'publishDate': '1954'
    },
    'the rider of lost creek': {
        'title': 'The Rider of Lost Creek',
        'category': 'Kilkenny',
        'publishDate': '1976'
    },
    'the mountain valley war': {
        'title': 'The Mountain Valley War',
        'category': 'Kilkenny',
        'publishDate': '1978'
    },
    'a gun for kilkenny': {
        'title': 'A Gun for Kilkenny',
        'category': 'Kilkenny',
        'publishDate': '1997'
    },
    'a man called trent': {
        'title': 'A Man Called Trent',
        'category': 'Kilkenny',
        'publishDate': '2015'
    },
    // Hopalong Cassidy
    'the riders of high rock': {
        'title': 'The Riders of High Rock',
        'category': 'Hopalong Cassidy',
        'publishDate': '1951'
    },
    'the rustlers of west fork': {
        'title': 'The Rustlers of West Fork',
        'category': 'Hopalong Cassidy',
        'publishDate': '1951'
    },
    'the trail to seven pines': {
        'title': 'The Trail to Seven Pines',
        'category': 'Hopalong Cassidy',
        'publishDate': '1951'
    },
    'trouble shooter': {
        'title': 'Trouble Shooter',
        'category': 'Hopalong Cassidy',
        'publishDate': '1952'
    },
    // Standalone Novels
    'hondo': {
        'title': 'Hondo',
        'category': 'Standalone Novels',
        'publishDate': '1953'
    },
    'showdown at yellow butte': {
        'title': 'Showdown at Yellow Butte',
        'category': 'Standalone Novels',
        'publishDate': '1953'
    },
    'crossfire trail': {
        'title': 'Crossfire Trail',
        'category': 'Standalone Novels',
        'publishDate': '1954'
    },
    'utah blaine': {
        'title': 'Utah Blaine',
        'category': 'Standalone Novels',
        'publishDate': '1954'
    },
    'to tame a land': {
        'title': 'To Tame a Land',
        'category': 'Standalone Novels',
        'publishDate': '1955'
    },
    'heller with a gun': {
        'title': 'Heller with a Gun',
        'category': 'Standalone Novels',
        'publishDate': '1955'
    },
    'guns of the timberlands': {
        'title': 'Guns of the Timberlands',
        'category': 'Standalone Novels',
        'publishDate': '1955'
    },
    'silver canyon': {
        'title': 'Silver Canyon',
        'category': 'Standalone Novels',
        'publishDate': '1956'
    },
    'the burning hills': {
        'title': 'The Burning Hills',
        'category': 'Standalone Novels',
        'publishDate': '1956'
    },
    'sitka': {
        'title': 'Sitka',
        'category': 'Standalone Novels',
        'publishDate': '1957'
    },
    'last stand at papago wells': {
        'title': 'Last Stand at Papago Wells',
        'category': 'Standalone Novels',
        'publishDate': '1957'
    },
    'the tall stranger': {
        'title': 'The Tall Stranger',
        'category': 'Standalone Novels',
        'publishDate': '1957'
    },
    'taggart': {
        'title': 'Taggart',
        'category': 'Standalone Novels',
        'publishDate': '1959'
    },
    'radigan': {
        'title': 'Radigan',
        'category': 'Standalone Novels',
        'publishDate': '1959'
    },
    'flint': {
        'title': 'Flint',
        'category': 'Standalone Novels',
        'publishDate': '1960'
    },
    'killoe': {
        'title': 'Killoe',
        'category': 'Standalone Novels',
        'publishDate': '1962'
    },
    'high lonesome': {
        'title': 'High Lonesome',
        'category': 'Standalone Novels',
        'publishDate': '1962'
    },
    'shalako': {
        'title': 'Shalako',
        'category': 'Standalone Novels',
        'publishDate': '1962'
    },
    'how the west was won': {
        'title': 'How the West Was Won',
        'category': 'Standalone Novels',
        'publishDate': '1962'
    },
    'dark canyon': {
        'title': 'Dark Canyon',
        'category': 'Standalone Novels',
        'publishDate': '1963'
    },
    'kiowa trail': {
        'title': 'Kiowa Trail',
        'category': 'Standalone Novels',
        'publishDate': '1964'
    },
    'hanging woman creek': {
        'title': 'Hanging Woman Creek',
        'category': 'Standalone Novels',
        'publishDate': '1964'
    },
    'the key-lock man': {
        'title': 'The Key-Lock Man',
        'category': 'Standalone Novels',
        'publishDate': '1965'
    },
    'the high graders': {
        'title': 'The High Graders',
        'category': 'Standalone Novels',
        'publishDate': '1965'
    },
    'the broken gun': {
        'title': 'The Broken Gun',
        'category': 'Standalone Novels',
        'publishDate': '1966'
    },
    'kid rodelo': {
        'title': 'Kid Rodelo',
        'category': 'Standalone Novels',
        'publishDate': '1966'
    },
    'kilrone': {
        'title': 'Kilrone',
        'category': 'Standalone Novels',
        'publishDate': '1966'
    },
    'matagorda': {
        'title': 'Matagorda',
        'category': 'Standalone Novels',
        'publishDate': '1967'
    },
    'down the long hills': {
        'title': 'Down the Long Hills',
        'category': 'Standalone Novels',
        'publishDate': '1968'
    },
    'brionne': {
        'title': 'Brionne',
        'category': 'Standalone Novels',
        'publishDate': '1968'
    },
    'chancy': {
        'title': 'Chancy',
        'category': 'Standalone Novels',
        'publishDate': '1968'
    },
    'the man called noon': {
        'title': 'The Man Called Noon',
        'category': 'Standalone Novels',
        'publishDate': '1969'
    },
    'the empty land': {
        'title': 'The Empty Land',
        'category': 'Standalone Novels',
        'publishDate': '1969'
    },
    'conagher': {
        'title': 'Conagher',
        'category': 'Standalone Novels',
        'publishDate': '1969'
    },
    'fallon': {
        'title': 'Fallon',
        'category': 'Standalone Novels',
        'publishDate': '1969'
    },
    'reilly\'s luck': {
        'title': 'Reilly\'s Luck',
        'category': 'Standalone Novels',
        'publishDate': '1970'
    },
    'under the sweetwater rim': {
        'title': 'Under the Sweetwater Rim',
        'category': 'Standalone Novels',
        'publishDate': '1971'
    },
    'tucker': {
        'title': 'Tucker',
        'category': 'Standalone Novels',
        'publishDate': '1971'
    },
    'calleghen': {
        'title': 'Calleghen',
        'category': 'Standalone Novels',
        'publishDate': '1972'
    },
    'the man from skibbereen': {
        'title': 'The Man from Skibbereen',
        'category': 'Standalone Novels',
        'publishDate': '1973'
    },
    'the quick and the dead': {
        'title': 'The Quick and the Dead',
        'category': 'Standalone Novels',
        'publishDate': '1973'
    },
    'the californios': {
        'title': 'The Californios',
        'category': 'Standalone Novels',
        'publishDate': '1974'
    },
    'where the long grass blows': {
        'title': 'Where the Long Grass Blows',
        'category': 'Standalone Novels',
        'publishDate': '1976'
    },
    'westward the tide': {
        'title': 'Westward the Tide',
        'category': 'Standalone Novels',
        'publishDate': '1976'
    },
    'bendigo shafter': {
        'title': 'Bendigo Shafter',
        'category': 'Standalone Novels',
        'publishDate': '1979'
    },
    'the iron marshal': {
        'title': 'The Iron Marshal',
        'category': 'Standalone Novels',
        'publishDate': '1979'
    },
    'the proving trail': {
        'title': 'The Proving Trail',
        'category': 'Standalone Novels',
        'publishDate': '1979'
    },
    'comstock lode': {
        'title': 'Comstock Lode',
        'category': 'Standalone Novels',
        'publishDate': '1981'
    },
    'the cherokee trail': {
        'title': 'The Cherokee Trail',
        'category': 'Standalone Novels',
        'publishDate': '1982'
    },
    'the shadow riders': {
        'title': 'The Shadow Riders',
        'category': 'Standalone Novels',
        'publishDate': '1982'
    },
    'the lonesome gods': {
        'title': 'The Lonesome Gods',
        'category': 'Standalone Novels',
        'publishDate': '1983'
    },
    'son of a wanted man': {
        'title': 'Son of a Wanted Man',
        'category': 'Standalone Novels',
        'publishDate': '1984'
    },
    'the walking drum': {
        'title': 'The Walking Drum',
        'category': 'Standalone Novels',
        'publishDate': '1984'
    },
    'passin\' through': {
        'title': 'Passin\' Through',
        'category': 'Standalone Novels',
        'publishDate': '1985'
    },
    'where buzzards fly': {
        'title': 'Where Buzzards Fly',
        'category': 'Standalone Novels',
        'publishDate': '1986'
    },
    'riding for the brand': {
        'title': 'Riding for the Brand',
        'category': 'Standalone Novels',
        'publishDate': '1986'
    },
    'last of the breed': {
        'title': 'Last of the Breed',
        'category': 'Standalone Novels',
        'publishDate': '1986'
    },
    'south of deadwood': {
        'title': 'South of Deadwood',
        'category': 'Standalone Novels',
        'publishDate': '1986'
    },
    'the haunted mesa': {
        'title': 'The Haunted Mesa',
        'category': 'Standalone Novels',
        'publishDate': '1987'
    },
    'showdown trail': {
        'title': 'Showdown Trail',
        'category': 'Standalone Novels',
        'publishDate': '1987'
    },
    'dead end drift': {
        'title': 'Dead End Drift',
        'category': 'Standalone Novels',
        'publishDate': '1987'
    },
    'bowdrie passes through': {
        'title': 'Bowdrie Passes Through',
        'category': 'Standalone Novels',
        'publishDate': '1988'
    },
    'the marshal of sentinel': {
        'title': 'The Marshal of Sentinel',
        'category': 'Standalone Novels',
        'publishDate': '1995'
    },
    'the sixth shotgun': {
        'title': 'The Sixth Shotgun',
        'category': 'Standalone Novels',
        'publishDate': '2003'
    },
    'the first fast draw': {
        'title': 'The First Fast Draw',
        'category': 'Standalone Novels',
        'publishDate': '2003'
    },
    'home in the valley': {
        'title': 'Home in the Valley',
        'category': 'Standalone Novels',
        'publishDate': '2005'
    },
    'trailing west': {
        'title': 'Trailing West',
        'category': 'Standalone Novels',
        'publishDate': '2008'
    },
    'big medicine': {
        'title': 'Big Medicine',
        'category': 'Standalone Novels',
        'publishDate': '2008'
    },
    'dawn riders': {
        'title': 'Dawn Riders',
        'category': 'Standalone Novels',
        'publishDate': '2010'
    },
    'the black rock coffin makers': {
        'title': 'The Black Rock Coffin Makers',
        'category': 'Standalone Novels',
        'publishDate': '2013'
    },
    'riders of the tumbling k': {
        'title': 'Riders of the Tumbling K',
        'category': 'Standalone Novels',
        'publishDate': '2014'
    },
    'showdown': {
        'title': 'Showdown',
        'category': 'Standalone Novels',
        'publishDate': '2017'
    },
    'three bullets for the cactus kid': {
        'title': 'Three Bullets for the Cactus Kid',
        'category': 'Standalone Novels',
        'publishDate': '2018'
    },
    'catlow': {
        'title': 'Catlow',
        'category': 'Standalone Novels',
        'publishDate': '2018'
    },
    'no traveller returns': {
        'title': 'No Traveller Returns',
        'category': 'Standalone Novels',
        'publishDate': '2018'
    },
    'bannon': {
        'title': 'Bannon',
        'category': 'Standalone Novels',
        'publishDate': '2019'
    },
    // Poetry Collection
    'smoke from this altar': {
        'title': 'Smoke from This Altar',
        'category': 'Poetry Collection',
        'publishDate': '1939'
    },
    // Short Story Collections
    'the strong shall live': {
        'title': 'The Strong Shall Live',
        'category': 'Short Story Collections',
        'publishDate': '1980'
    },
    'yondering': {
        'title': 'Yondering',
        'category': 'Short Story Collections',
        'publishDate': '1980'
    },
    'buckskin run': {
        'title': 'Buckskin Run',
        'category': 'Short Story Collections',
        'publishDate': '1981'
    },
    'the hills of homicide': {
        'title': 'The Hills of Homicide',
        'category': 'Short Story Collections',
        'publishDate': '1983'
    },
    'bowdrie': {
        'title': 'Bowdrie',
        'category': 'Short Story Collections',
        'publishDate': '1983'
    },
    'law of the desert born': {
        'title': 'Law of the Desert Born',
        'category': 'Short Story Collections',
        'publishDate': '1983'
    },
    'bowdrie\'s law': {
        'title': 'Bowdrie\'s Law',
        'category': 'Short Story Collections',
        'publishDate': '1984'
    },
    'dutchman\'s flat': {
        'title': 'Dutchman\'s Flat',
        'category': 'Short Story Collections',
        'publishDate': '1986'
    },
    'night over the solomons': {
        'title': 'Night Over the Solomons',
        'category': 'Short Story Collections',
        'publishDate': '1986'
    },
    'the trail to crazy man': {
        'title': 'The Trail to Crazy Man',
        'category': 'Short Story Collections',
        'publishDate': '1986'
    },
    'man riding west': {
        'title': 'Man Riding West',
        'category': 'Short Story Collections',
        'publishDate': '1986'
    },
    'the rider of the ruby hills': {
        'title': 'The Rider of the Ruby Hills',
        'category': 'Short Story Collections',
        'publishDate': '1986'
    },
    'west from singapore': {
        'title': 'West from Singapore',
        'category': 'Short Story Collections',
        'publishDate': '1987'
    },
    'lonigan': {
        'title': 'Lonigan',
        'category': 'Short Story Collections',
        'publishDate': '1988'
    },
    'long ride home': {
        'title': 'Long Ride Home',
        'category': 'Short Story Collections',
        'publishDate': '1989'
    },
    'grub line rider': {
        'title': 'Grub Line Rider',
        'category': 'Short Story Collections',
        'publishDate': '1990'
    },
    'the outlaws of mesquite': {
        'title': 'The Outlaws of Mesquite',
        'category': 'Short Story Collections',
        'publishDate': '1990'
    },
    'west of the tularosa': {
        'title': 'West of the Tularosa',
        'category': 'Short Story Collections',
        'publishDate': '1992'
    },
    'valley of the sun': {
        'title': 'Valley of the Sun',
        'category': 'Short Story Collections',
        'publishDate': '1995'
    },
    'west of dodge': {
        'title': 'West of Dodge',
        'category': 'Short Story Collections',
        'publishDate': '1996'
    },
    'mistakes can kill you': {
        'title': 'Mistakes Can Kill You',
        'category': 'Short Story Collections',
        'publishDate': '1997'
    },
    'monument rock': {
        'title': 'Monument Rock',
        'category': 'Short Story Collections',
        'publishDate': '1998'
    },
    'beyond the great snow mountains': {
        'title': 'Beyond the Great Snow Mountains',
        'category': 'Short Story Collections',
        'publishDate': '1999'
    },
    'off the mangrove coast': {
        'title': 'Off the Mangrove Coast',
        'category': 'Short Story Collections',
        'publishDate': '2000'
    },
    'may there be a road': {
        'title': 'May There Be a Road',
        'category': 'Short Story Collections',
        'publishDate': '2001'
    },
    'with these hands': {
        'title': 'With These Hands',
        'category': 'Short Story Collections',
        'publishDate': '2002'
    },
    'from the listening hills': {
        'title': 'From the Listening Hills',
        'category': 'Short Story Collections',
        'publishDate': '2003'
    },
    'the collected short stories of louis l\'amour, volume 1': {
        'title': 'The Collected Short Stories of Louis L\'Amour, Volume 1',
        'category': 'Short Story Collections',
        'publishDate': '2003'
    },
    'the collected short stories of louis l\'amour, volume 2': {
        'title': 'The Collected Short Stories of Louis L\'Amour, Volume 2',
        'category': 'Short Story Collections',
        'publishDate': '2004'
    },
    'the collected short stories of louis l\'amour, volume 3': {
        'title': 'The Collected Short Stories of Louis L\'Amour, Volume 3',
        'category': 'Short Story Collections',
        'publishDate': '2005'
    },
    'the collected short stories of louis l\'amour, volume 4': {
        'title': 'The Collected Short Stories of Louis L\'Amour, Volume 4',
        'category': 'Short Story Collections',
        'publishDate': '2006'
    },
    'the collected short stories of louis l\'amour, volume 4: part 1': {
        'title': 'The Collected Short Stories of Louis L\'Amour, Volume 4: Part 1',
        'category': 'Short Story Collections',
        'publishDate': '2015'
    },
        'the collected short stories of louis l\'amour, volume 4: part 2': {
        'title': 'The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2',
        'category': 'Short Story Collections',
        'publishDate': '2015'
    },
    'the collected short stories of louis l\'amour, volume 5': {
        'title': 'The Collected Short Stories of Louis L\'Amour, Volume 5',
        'category': 'Short Story Collections',
        'publishDate': '2007'
    },
    'the collected short stories of louis l\'amour, volume 6': {
        'title': 'The Collected Short Stories of Louis L\'Amour, Volume 6',
        'category': 'Short Story Collections',
        'publishDate': '2008'
    },
    'the collected short stories of louis l\'amour, volume 6: part 1': {
        'title': 'The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1',
        'category': 'Short Story Collections',
        'publishDate': '2016'
    },
    'the collected short stories of louis l\'amour, volume 6: part 2': {
        'title': 'The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2',
        'category': 'Short Story Collections',
        'publishDate': '2016'
    },
    'the collected short stories of louis l\'amour, volume 7': {
        'title': 'The Collected Short Stories of Louis L\'Amour, Volume 7',
        'category': 'Short Story Collections',
        'publishDate': '2009'
    },
    'the frontier stories': {
        'title': 'The Frontier Stories',
        'category': 'Short Story Collections',
        'publishDate': '2009'
    },
    'the man from battle flat': {
        'title': 'The Man from Battle Flat',
        'category': 'Short Story Collections',
        'publishDate': '2010'
    },
    'the strong land': {
        'title': 'The Strong Land',
        'category': 'Short Story Collections',
        'publishDate': '2012'
    },
    'we shaped the land with our guns': {
        'title': 'We Shaped the Land with Our Guns',
        'category': 'Short Story Collections',
        'publishDate': '2014'
    },
    'the chick bowdrie short stories bundle': {
        'title': 'The Chick Bowdrie Short Stories Bundle',
        'category': 'Short Story Collections',
        'publishDate': '2015'
    },
    // Non-Fiction Books
    'frontier': {
        'title': 'Frontier',
        'category': 'Non-Fiction Books',
        'publishDate': '1984'
    },
    'the sackett companion': {
        'title': 'The Sackett Companion',
        'category': 'Non-Fiction Books',
        'publishDate': '1988'
    },
    'a trail of memories: the quotations of louis l\'amour': {
        'title': 'A Trail of Memories: The Quotations of Louis L\'Amour',
        'category': 'Non-Fiction Books',
        'publishDate': '1988'
    },
    'education of a wandering man': {
        'title': 'Education of a Wandering Man',
        'category': 'Non-Fiction Books',
        'publishDate': '1989'
    },
    'louis l\'amour\'s lost treasures': {
        'title': 'Louis L\'Amour\'s Lost Treasures',
        'category': 'Non-Fiction Books',
        'publishDate': '2018'
    },
    // Anthologies
    'western movies': {
        'title': 'Western Movies',
        'category': 'Anthologies',
        'publishDate': '1997'
    },
    'the golden west': {
        'title': 'The Golden West',
        'category': 'Anthologies',
        'publishDate': '2003'
    },
    'the untamed west': {
        'title': 'The Untamed West',
        'category': 'Anthologies',
        'publishDate': '2004'
    },
    'lost trails': {
        'title': 'Lost Trails',
        'category': 'Anthologies',
        'publishDate': '2007'
    },
    'the lawless west': {
        'title': 'The Lawless West',
        'category': 'Anthologies',
        'publishDate': '2007'
    },
    'ghost towns': {
        'title': 'Ghost Towns',
        'category': 'Anthologies',
        'publishDate': '2010'
    },
    'three classic westerns': {
        'title': 'Three Classic Westerns',
        'category': 'Anthologies',
        'publishDate': '2013'
    },
    'trailin\' west': {
        'title': 'Trailin\' West',
        'category': 'Anthologies',
        'publishDate': '2016'
    },
    'unknown': {
        'title': 'unknown',
        'category': 'unknown',
        'publishDate': 'unknown'
    }
}

// Short Story Titles

const shortTitles = {
    // Title, category, date
    'a friend of a hero': {
        'title': 'A Friend of a Hero',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'May There Be a Road']
    },
    'a friend of the general': {
        'title': 'A Friend of the General',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'a gun for kilkenny': {
        'title': 'A Gun for Kilkenny',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3']
    },
    'a husband for janey': {
        'title': 'A Husband for Janey',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'West of Dodge']
    },
    'a job for a ranger': {
        'title': 'A Job for a Ranger',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie', 'The Chick Bowdrie Short Stories Bundle']
    },
    'a man called trent': {
        'title': 'A Man Called Trent',
        'category': 'short story',
        'collection': ['The Rider of the Ruby Hills']
    },
    'a man named utah': {
        'title': 'A Man Named Utah',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Monument Rock']
    },
    'a mule for santa fe': {
        'title': 'A Mule for Santa Fe',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'a night at wagon camp': {
        'title': 'A Night at Wagon Camp',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', '']
    },
    'a ranger rides to town': {
        'title': 'A Ranger Rides to Town',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2 ', 'Bowdrie\'s Law', 'The Chick Bowdrie Short Stories Bundle ']
    },
    'a strong land growing': {
        'title': 'A Strong Land Growing',
        'category': 'short story',
        'collection': ['The Strong Land']
    },
    'a trail to the west': {
        'title': 'A Trail to the West',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2 ', 'Bowdrie', 'The Chick Bowdrie Short Stories Bundle ']
    },
    'alkali basin': {
        'title': 'Alkali Basin',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'and proudly die': {
        'title': 'And Proudly Die',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'anything for a pal': {
        'title': 'Anything for a Pal',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1 ', 'From the Listening Hills ']
    },
    'author\'s tea': {
        'title': 'Author\'s Tea',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'backfield battering ram': {
        'title': 'Backfield Battering Ram',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'From the Listening Hills']
    },
    'bad place to die': {
        'title': 'Bad Place to Die',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7 ', 'Long Ride Home']
    },
    'barney takes a hand': {
        'title': 'Barney Takes a Hand',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'The Strong Land']
    },
    'battle at burnt camp': {
        'title': 'Battle at Burnt Camp',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Monument Rock']
    },
    'beyond the chaparral': {
        'title': 'Beyond the Chaparral',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'West of Dodge']
    },
    'beyond the great snow mountains': {
        'title': 'Beyond the Great Snow Mountains',
        'category': 'short story',
        'collection': ['Beyond the Great Snow Mountains']
    },
    'big man': {
        'title': 'Big Man',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'The Strong Shall Live']
    },
    'big medicine': {
        'title': 'Big Medicine',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Golden Gunmen/Dutchman\'s Flat', 'Man Riding West']
    },
    'bill carey rides west': {
        'title': 'Bill Carey Rides West',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Lonigan']
    },
    'bluff creek station': {
        'title': 'Bluff Creek Station',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'The Strong Shall Live']
    },
    'booty for a badman': {
        'title': 'Booty for a Badman',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'bowdrie follows a cold trail': {
        'title': 'Bowdrie Follows a Cold Trail',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie', 'The Chick Bowdrie Short Stories Bundle']
    },
    'bowdrie passes through': {
        'title': 'Bowdrie Passes Through',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie', 'The Chick Bowdrie Short Stories Bundle']
    },
    'bowdrie rides a coyote trail': {
        'title': 'Bowdrie Rides a Coyote Trail',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie', 'The Chick Bowdrie Short Stories Bundle']
    },
    'by the ruins of el walarieh': {
        'title': 'By the Ruins of El Walarieh',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'by the waters of san tadeo': {
        'title': 'By the Waters of San Tadeo',
        'category': 'short story',
        'collection': ['Beyond the Great Snow Mountains']
    },
    'caprock rancher': {
        'title': 'Caprock Rancher',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'case closed no prisoners': {
        'title': 'Case Closed - No Prisoners',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie\'s Law', 'The Chick Bowdrie Short Stories Bundle']
    },
    'coast patrol': {
        'title': 'Coast Patrol',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'Beyond the Great Snow Mountains']
    },
    'collect from a corpse': {
        'title': 'Collect from a Corpse',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'Hills of Homicide']
    },
    'corpse on the carpet': {
        'title': 'Corpse on the Carpet',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'With These Hands']
    },
    'crash landing': {
        'title': 'Crash Landing',
        'category': 'short story',
        'collection': ['Beyond the Great Snow Mountains']
    },
    'dead man\'s trail': {
        'title': 'Dead Man\'s Trail',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'Hills of Homicide']
    },
    'dead-end drift': {
        'title': 'Dead-End Drift',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'Yondering']
    },
    'death song of the sombrero': {
        'title': 'Death Song of the Sombrero',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Law of the Desert Born']
    },
    'death, westbound': {
        'title': 'Death, Westbound',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'desert death song': {
        'title': 'Desert Death Song',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Law of the Desert Born', 'Grub Line Rider']
    },
    'desperate men': {
        'title': 'Desperate Men',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'down paagumene way': {
        'title': 'Down Paagumene Way',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'From the Listening Hills']
    },
    'down sonora way': {
        'title': 'Down Sonora Way',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie\'s Law', 'The Chick Bowdrie Short Stories Bundle']
    },
    'down the pogonip trail': {
        'title': 'Down the Pogonip Trail',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Buckskin Run']
    },
    'dream fighter': {
        'title': 'Dream Fighter',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'With These Hands']
    },
    'duffy\'s man': {
        'title': 'Duffy\'s Man',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'The Strong Shall Live']
    },
    'dutchman\'s flat': {
        'title': 'Dutchman\'s Flat',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'Golden Gunmen/Dutchman\'s Flat', 'Man Riding West']
    },
    'east of gorontalo': {
        'title': 'East of Gorontalo',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'West From Singapore']
    },
    'elisha comes to red horse': {
        'title': 'Elisha Comes to Red Horse',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'end of the drive': {
        'title': 'End of the Drive',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'fighter\'s fiasco': {
        'title': 'Fighter\'s Fiasco',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'May There Be a Road']
    },
    'fighters don\'t dive': {
        'title': 'Fighters Don\'t Dive',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'With These Hands']
    },
    'fighters should be hungry': {
        'title': 'Fighters Should Be Hungry',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'Off the Mangrove Coast']
    },
    'flight to enbetu': {
        'title': 'Flight to Enbetu',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'With These Hands']
    },
    'flight to the north': {
        'title': 'Flight to the North',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'From the Listening Hills']
    },
    'fork your own broncs': {
        'title': 'Fork Your Own Broncs',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Draw Straight: A Western Sextet', 'West of the Tularosa']
    },
    'four-card draw': {
        'title': 'Four-Card Draw',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Draw Straight: A Western Sextet', 'Man Riding West', 'Mistakes Can Kill You']
    },
    'from here to banggai': {
        'title': 'From Here to Banggai',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'West From Singapore']
    },
    'from the listening hills': {
        'title': 'From the Listening Hills',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'From the Listening Hills']
    },
    'get out of town': {
        'title': 'Get Out of Town',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'gila crossing': {
        'title': 'Gila Crossing',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Valley of the Sun']
    },
    'glorious! glorious!': {
        'title': 'Glorious! Glorious!',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'gloves for a tiger': {
        'title': 'Gloves for a Tiger',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'With These Hands']
    },
    'grub line rider': {
        'title': 'Grub Line Rider',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Law of the Desert Born', 'Grub Line Rider']
    },
    'hattan\'s castle': {
        'title': 'Hattan\'s Castle',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'The Strong Shall Live']
    },
    'here ends the trail': {
        'title': 'Here Ends the Trail',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Monument Rock']
    },
    'heritage of hate': {
        'title': 'Heritage of Hate',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Lonigan']
    },
    'his brother\'s debt': {
        'title': 'His Brother\'s Debt',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'The Strong Land', 'Man Riding West']
    },
    'home in the valley': {
        'title': 'Home in the Valley',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'West of the Tularosa']
    },
    'home is the hunter': {
        'title': 'Home is the Hunter',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'West of Dodge']
    },
    'horse heaven': {
        'title': 'Horse Heaven',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Buckskin Run']
    },
    'i hate to tell his widow': {
        'title': 'I Hate to Tell His Widow',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'Hills of Homicide']
    },
    'in victorio\'s country': {
        'title': 'In Victorio\'s Country',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Valley of the Sun']
    },
    'ironwood station': {
        'title': 'Ironwood Station',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'Monument Rock']
    },
    'it\'s your move': {
        'title': 'It\'s Your Move',
        'category': 'short story',
        'collection': ['Yondering', 'Off the Mangrove Coast']
    },
    'jackson of horntown': {
        'title': 'Jackson of Horntown',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Buckskin Run']
    },
    'keep travelin\', rider': {
        'title': 'Keep Travelin\', Rider',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Golden Gunmen/Dutchman\'s Flat', 'Draw Straight: A Western Sextet', 'Man Riding West']
    },
    'law of the desert born': {
        'title': 'Law of the Desert Born',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Law of the Desert Born', 'Grub Line Rider', 'Mistakes Can Kill You']
    },
    'let me forget...': {
        'title': 'Let Me Forget...',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'let the cards decide': {
        'title': 'Let the Cards Decide',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'West of Dodge']
    },
    'lit a shuck for texas': {
        'title': 'Lit a Shuck for Texas',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'The Strong Land', 'Mistakes Can Kill You']
    },
    'long ride home': {
        'title': 'Long Ride Home',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Long Ride Home']
    },
    'lonigan': {
        'title': 'Lonigan',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Lonigan']
    },
    'love and the cactus kid': {
        'title': 'Love and the Cactus Kid',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'The Outlaws of Mesquite']
    },
    'making it the hard way': {
        'title': 'Making It the Hard Way',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'May There Be a Road']
    },
    'man riding west': {
        'title': 'Man Riding West',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Man Riding West']
    },
    'marshal of canyon gap': {
        'title': 'Marshal of Canyon Gap',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'West of Dodge']
    },
    'may there be a road': {
        'title': 'May There Be A Road',
        'category': 'short story',
        'collection': ['May There Be A Road']
    },
    'mcnelly knows a ranger': {
        'title': 'McNelly Knows a Ranger',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie\'s Law', 'The Chick Bowdrie Short Stories Bundle']
    },
    'mcqueen of the tumbling k': {
        'title': 'McQueen of the Tumbling K',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Golden Gunmen/Dutchman\'s Flat', 'Draw Straight: A Western Sextet']
    },
    'medicine ground': {
        'title': 'Medicine Ground',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Valley of the Sun']
    },
    'meeting at falmouth': {
        'title': 'Meeting at Falmouth',
        'category': 'short story',
        'collection': ['Beyond the Great Snow Mountains']
    },
    'men to match the hills': {
        'title': 'Men to Match the Hills',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7']
    },
    'merrano of the dry country': {
        'title': 'Merrano of the Dry Country',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'The Strong Shall Live']
    },
    'mission to siberut': {
        'title': 'Mission to Siberut',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'Night Over the Solomons']
    },
    'mistakes can kill you': {
        'title': 'Mistakes Can Kill You',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Draw Straight: A Western Sextet', 'West of the Tularosa', 'Mistakes Can Kill You', 'The Man From Battle Flat']
    },
    'monument rock': {
        'title': 'Monument Rock',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Monument Rock']
    },
    'moon of the trees broken by snow': {
        'title': 'Moon of the Trees Broken By Snow',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'From the Listening Hills']
    },
    'moran of the tigers': {
        'title': 'Moran of the Tigers',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'From the Listening Hills']
    },
    'more brains than bullets': {
        'title': 'More Brains Than Bullets',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie', 'The Chick Bowdrie Short Stories Bundle']
    },
    'murphy plays his hand': {
        'title': 'Murphy Plays His Hand',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'From the Listening Hills']
    },
    'night over the solomons': {
        'title': 'Night Over the Solomons',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'Night Over the Solomons']
    },
    'no man\'s man': {
        'title': 'No Man\'s Man',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Long Ride Home']
    },
    'no man\'s mesa': {
        'title': 'No Man\'s Mesa',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Valley of the Sun']
    },
    'no rest for the wicked': {
        'title': 'No Rest for the Wicked',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'The Outlaws of Mesquite']
    },
    'no trouble for the cactus kid': {
        'title': 'No Trouble for the Cactus Kid',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Buckskin Run']
    },
    'off the mangrove coast': {
        'title': 'Off the Mangrove Coast',
        'category': 'short story',
        'collection': ['Yondering', 'Off the Mangrove Coast']
    },
        'old doc yak': {
        'title': 'Old Doc Yak',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'on the road to amurang': {
        'title': 'On the Road to Amurang',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'West From Singapore']
    },
    'one last gun notch': {
        'title': 'One Last Gun Notch',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Law of the Desert Born', 'Grub Line Rider']
    },
    'one night stand': {
        'title': 'One Night Stand',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'The Strong Shall Live']
    },
    'one for the pot': {
        'title': 'One for the Pot',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
        'pardner from the rio': {
        'title': 'Pardner from the Rio',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Lonigan']
    },
    'pirates of the sky': {
        'title': 'Pirates of the Sky',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'With These Hands']
    },
    'pirates with wings': {
        'title': 'Pirates with Wings',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'Night Over the Solomons']
    },
    'police band': {
        'title': 'Police Band',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'With These Hands']
    },
    'rain on the halfmoon': {
        'title': 'Rain on the Halfmoon',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'West of Dodge']
    },
        'rain on the mountain fork': {
        'title': 'Rain on the Mountain Fork',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie\'s Law', 'The Chick Bowdrie Short Stories Bundle']
    },
    'red butte showdown': {
        'title': 'Red Butte Showdown',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'May There Be a Road']
    },
    'regan of the slash b': {
        'title': 'Regan of the Slash B',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Lonigan']
    },
    'riches beyond dream': {
        'title': 'Riches Beyond Dream',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'West of Dodge']
    },
    'ride or start shootin\'': {
        'title': 'Ride or Start Shootin\'',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Long Ride Home']
    },
    'ride, you tonto raiders': {
        'title': 'Ride, You Tonto Raiders',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Law of the Desert Born', 'Grub Line Rider', 'Mistakes Can Kill You']
    },
    'riders of the dawn': {
        'title': 'Riders of the Dawn',
        'category': 'short story',
        'collection': ['The Trail to Crazy Man']
    },
    'riding on': {
        'title': 'Riding On',
        'category': 'short story',
        'collection': ['Law of the Desert Born']
    },
    'riding for the brand': {
        'title': 'Riding for the Brand',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3']
    },
    'roundup in texas': {
        'title': 'Roundup in Texas',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Beyond the Great Snow Mountains']
    },
    'rowdy rides to glory': {
        'title': 'Rowdy Rides to Glory',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Lonigan']
    },
    'rustler roundup': {
        'title': 'Rustler Roundup',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'sand trap': {
        'title': 'Sand Trap',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'From the Listening Hills']
    },
    'secret of silver springs': {
        'title': 'Secret of Silver Springs',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Off the Mangrove Coast']
    },
    'shandy takes the hook': {
        'title': 'Shandy Takes the Hook',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Long Ride Home']
    },
    'shanghai, not without gestures': {
        'title': 'Shanghai, Not Without Gestures',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'show me the way to go home': {
        'title': 'Show Me the Way to Go Home',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'showdown trail': {
        'title': 'Showdown Trail',
        'category': 'short story',
        'collection': ['The Rider of the Ruby Hills']
    },
    'showdown on the hogback': {
        'title': 'Showdown on the Hogback',
        'category': 'short story',
        'collection': ['The Trail to Crazy Man']
    },
    'showdown on the tumbling t': {
        'title': 'Showdown on the Tumbling T',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Draw Straight: A Western Sextet', 'The Outlaws of Mesquite']
    },
    'sideshow champion': {
        'title': 'Sideshow Champion',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'Beyond the Great Snow Mountains']
    },
    'six-gun stampede': {
        'title': 'Six-Gun Stampede',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'With These Hands']
    },
    'south of deadwood': {
        'title': 'South of Deadwood',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie\'s Law', 'The Chick Bowdrie Short Stories Bundle']
    },
    'south of suez': {
        'title': 'South of Suez',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'West From Singapore']
    },
    'squatters on the lonetree': {
        'title': 'Squatters on the Lonetree',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Buckskin Run']
    },
    'stage to willowspring': {
        'title': 'Stage to Willowspring',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'West of Dodge']
    },
    'stay out of my nightmare': {
        'title': 'Stay Out of My Nightmare',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'Hills of Homicide']
    },
    'strange pursuit': {
        'title': 'Strange Pursuit',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie\'s Law', 'The Chick Bowdrie Short Stories Bundle']
    },
    'strawhouse trail': {
        'title': 'Strawhouse Trail',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Monument Rock', 'The Chick Bowdrie Short Stories Bundle']
    },
    'survival': {
        'title': 'Survival',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'tailwind to tibet': {
        'title': 'Tailwind to Tibet',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'Night Over the Solomons']
    },
    'that man from the bitter sands': {
        'title': 'That Man From the Bitter Sands',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'West of Dodge']
    },
    'that packsaddle affair': {
        'title': 'That Packsaddle Affair',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'The Outlaws of Mesquite']
    },
    'that slash seven kid': {
        'title': 'That Slash Seven Kid',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Valley of the Sun']
    },
    'that triggernometry tenderfoot': {
        'title': 'That Triggernometry Tenderfoot',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Long Ride Home']
    },
    'the admiral': {
        'title': 'The Admiral',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'the black rock coffin makers': {
        'title': 'The Black Rock Coffin Makers',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Law of the Desert Born', 'Grub Line Rider', 'Mistakes Can Kill You']
    },
    'the cactus kid': {
        'title': 'The Cactus Kid',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'May There Be a Road']
    },
    'the cactus kid pays a debt': {
        'title': 'The Cactus Kid Pays a Debt',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Long Ride Home']
    },
    'the courting of griselda': {
        'title': 'The Courting of Griselda',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'the cross and the candle': {
        'title': 'The Cross and the Candle',
        'category': 'short story',
        'collection': ['Yondering', 'Off the Mangrove Coast']
    },
    'the dancing kate': {
        'title': 'The Dancing Kate',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'the defense of sentinel': {
        'title': 'The Defense of Sentinel',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'the diamond of jeru': {
        'title': 'The Diamond of Jeru',
        'category': 'short story',
        'collection': ['Off the Mangrove Coast']
    },
    'the drift': {
        'title': 'The Drift',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'The Outlaws of Mesquite']
    },
    'the ghost fighter': {
        'title': 'The Ghost Fighter',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'May There Be a Road']
    },
    'the ghost maker': {
        'title': 'The Ghost Maker',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'The Outlaws of Mesquite']
    },
    'the ghosts of buckskin run': {
        'title': 'The Ghosts of Buckskin Run',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Buckskin Run']
    },
    'the gift of cochise': {
        'title': 'The Gift of Cochise',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'the goose flies south': {
        'title': 'The Goose Flies South',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'Night Over the Solomons']
    },
    'the gravel pit': {
        'title': 'The Gravel Pit',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'Beyond the Great Snow Mountains']
    },
    'the guns talk loud': {
        'title': 'The Guns Talk Loud',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Law of the Desert Born']
    },
    'the hand of kuan-yin': {
        'title': 'The Hand of Kuan-Yin',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'May There Be a Road']
    },
    'the hills of homicide': {
        'title': 'The Hills of Homicide',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'Hills of Homicide']
    },
    'the house of qasavara': {
        'title': 'The House of Qasavara',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'West From Singapore']
    },
    'the killer from the pecos': {
        'title': 'The Killer from the Pecos',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie', 'The Chick Bowdrie Short Stories Bundle']
    },
    'the lion hunter and the lady': {
        'title': 'The Lion Hunter and the Lady',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'West of the Tularosa']
    },
    'the lonesome gods': {
        'title': 'The Lonesome Gods',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'the man from battle creek': {
        'title': 'The Man From Battle Creek',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7']
    },
    'the man from battle flat': {
        'title': 'The Man from Battle Flat',
        'category': 'short story',
        'collection': ['West of the Tularosa', 'The Man From Battle Flat']
    },
    'the man from the dead hills': {
        'title': 'The Man from the Dead Hills',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Monument Rock']
    },
    'the man who stole shakespeare': {
        'title': 'The Man Who Stole Shakespeare',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'the marshal of painted rock': {
        'title': 'The Marshal of Painted Rock',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Law of the Desert Born']
    },
    'the marshal of sentinel': {
        'title': 'The Marshal of Sentinel',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'The Strong Shall Live']
    },
    'the money punch': {
        'title': 'The Money Punch',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'Beyond the Great Snow Mountains']
    },
    'the nester and the piute': {
        'title': 'The Nester and the Piute',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'The Strong Land', 'Mistakes Can Kill You']
    },
    'the one for the mojave kid': {
        'title': 'The One for the Mojave Kid',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'The Strong Land', 'West of the Tularosa']
    },
    'the outlaws of mesquite': {
        'title': 'The Outlaws of Mesquite',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'The Outlaws of Mesquite']
    },
    'the outlaws of poplar creek': {
        'title': 'The Outlaws of Poplar Creek',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie\'s Law', 'The Chick Bowdrie Short Stories Bundle']
    },
    'the passing of rope nose': {
        'title': 'The Passing of Rope Nose',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'West of Dodge']
    },
    'the rider of the ruby hills': {
        'title': 'The Rider of the Ruby Hills',
        'category': 'short story',
        'collection': ['The Rider of the Ruby Hills', 'The Man From Battle Flat']
    },
    'the road to casa piedras': {
        'title': 'The Road to Casa Piedras',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie\'s Law', 'The Chick Bowdrie Short Stories Bundle']
    },
    'the romance of piute bill': {
        'title': 'The Romance of Piute Bill',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'The Strong Shall Live']
    },
    'the rounds don\'t matter': {
        'title': 'The Rounds Don\'t Matter',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'Off the Mangrove Coast']
    },
    'the sixth shotgun': {
        'title': 'The Sixth Shotgun',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'The Outlaws of Mesquite']
    },
    'the skull and the arrow': {
        'title': 'The Skull and the Arrow',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1']
    },
    'the street of lost corpses': {
        'title': 'The Street of Lost Corpses',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'Hills of Homicide']
    },
    'the strong shall live': {
        'title': 'The Strong Shall Live',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'The Strong Shall Live']
    },
    'the sucker switch': {
        'title': 'The Sucker Switch',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'With These Hands']
    },
    'the town no guns could tame': {
        'title': 'The Town No Guns Could Tame',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Long Ride Home']
    },
    'the trail to crazy man': {
        'title': 'The Trail to Crazy Man',
        'category': 'short story',
        'collection': ['The Trail to Crazy Man']
    },
    'the trail to peach meadow canyon': {
        'title': 'The Trail to Peach Meadow Canyon',
        'category': 'short story',
        'collection': ['Man Riding West', 'The Rider of the Ruby Hills', 'Mistakes Can Kill You']
    },
    'the turkeyfeather riders': {
        'title': 'The Turkeyfeather Riders',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7']
    },
    'the unexpected corpse': {
        'title': 'The Unexpected Corpse',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'Off the Mangrove Coast']
    },
    'the vanished blonde': {
        'title': 'The Vanished Blonde',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'May There Be a Road']
    },
    'there\'s always a trail': {
        'title': 'There\'s Always a Trail',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Buckskin Run']
    },
    'thicker than blood': {
        'title': 'Thicker Than Blood',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'time of terror': {
        'title': 'Time of Terror',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'Off the Mangrove Coast']
    },
    'to hang me high': {
        'title': 'To Hang Me High',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'West of Dodge']
    },
    'to make a stand': {
        'title': 'To Make a Stand',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'West of Dodge']
    },
    'too tough to brand': {
        'title': 'Too Tough to Brand',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie', 'The Chick Bowdrie Short Stories Bundle']
    },
    'too tough to kill': {
        'title': 'Too Tough to Kill',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'From the Listening Hills']
    },
    'trail to pie town': {
        'title': 'Trail to Pie Town',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Golden Gunmen/Dutchman\'s Flat', 'Mistakes Can Kill You']
    },
    'trail to squaw springs': {
        'title': 'Trail to Squaw Springs',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'The Strong Shall Live']
    },
    'trap of gold': {
        'title': 'Trap of Gold',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'Golden Gunmen/Dutchman\'s Flat', 'Law of the Desert Born']
    },
    'under the hanging wall': {
        'title': 'Under the Hanging Wall',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'Beyond the Great Snow Mountains']
    },
    'unguarded moment': {
        'title': 'Unguarded Moment',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 1', 'Hills of Homicide']
    },
    'valley of the sun': {
        'title': 'Valley of the Sun',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'Valley of the Sun']
    },
    'voyage to tobalai': {
        'title': 'Voyage to Tobalai',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'With These Hands']
    },
    'waltz him around again, shadow': {
        'title': 'Waltz Him Around Again, Shadow',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'From the Listening Hills']
    },
    'war party': {
        'title': 'War Party',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 1', 'Grub Line Rider']
    },
    'we shaped the land with our guns': {
        'title': 'We Shaped the Land with Our Guns',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3 ', 'Valley of the Sun']
    },
    'well of the unholy light': {
        'title': 'Well of the Unholy Light',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'West From Singapore']
    },
    'west is where the heart is': {
        'title': 'West Is Where the Heart Is',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'West of the Tularosa']
    },
    'west from singapore': {
        'title': 'West from Singapore',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'West From Singapore']
    },
    'west of dodge': {
        'title': 'West of Dodge',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'West of Dodge']
    },
    'west of dry creek': {
        'title': 'West of Dry Creek',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 3', 'West of Dodge']
    },
    'west of the pilot range': {
        'title': 'West of the Pilot Range',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'Valley of the Sun']
    },
    'west of the tularosa': {
        'title': 'West of the Tularosa',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 7', 'West of the Tularosa']
    },
    'what gold does to a man': {
        'title': 'What Gold Does to a Man',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Buckskin Run']
    },
    'when a texan takes over': {
        'title': 'When a Texan Takes Over',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 5', 'Valley of the Sun']
    },
    'where buzzards fly': {
        'title': 'Where Buzzards Fly',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 2', 'Bowdrie\'s Law', 'The Chick Bowdrie Short Stories Bundle']
    },
    'where there\'s fighting': {
        'title': 'Where There\'s Fighting',
        'category': 'short story',
        'collection': ['Yondering']
    },
    'wings over brazil': {
        'title': 'Wings Over Brazil',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'May There Be a Road']
    },
    'wings over khabarovsk': {
        'title': 'Wings Over Khabarovsk',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 4: Part 2', 'Night Over the Solomons']
    },
    'with death in his corner': {
        'title': 'With Death in His Corner',
        'category': 'short story',
        'collection': ['The Collected Short Stories of Louis L\'Amour, Volume 6: Part 2', 'Hills of Homicide']
    },
    'with these hands': {
        'title': 'With These Hands',
        'category': 'short story',
        'collection': ['With These Hands']
    }
}

// Need to count for edge cases (short story and novel title match)

// let list = "<ul>";
// for (let i of finalTitles) {
//     list += `<li>${i}</li>`;
// }
// list += "</ul>"

// document.getElementById("list").innerHTML = list;

app.get('/', (request, response) => {
    // Start looking from the directory you're in and look for index.html
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:bookName', (request, response) => {
    const booksName = request.params.bookName.toLowerCase();

    if(shortTitles[booksName] && novelTitles[booksName]) {
        console.log(shortTitles[booksName]);
        console.log(novelTitles[booksName]);
        response.json({
            'short story': shortTitles[booksName],
            'book':novelTitles[booksName]
        })
    } else if (shortTitles[booksName]) {
        console.log(shortTitles[booksName]);
        response.json(shortTitles[booksName]);
    } else if (novelTitles[booksName]) {
        console.log(novelTitles[booksName]);
        response.json(novelTitles[booksName]);
    } else {
        response.json(novelTitles['unknown']);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})