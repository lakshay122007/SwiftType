const words = [
  "the","and","for","you","that","with","this","have","from","they",
  "know","want","been","good","much","some","time","very","when","come",
  "here","just","like","long","make","many","more","only","over","such",
  "take","than","them","well","were","what","your","about","after","again",
  "below","could","every","first","great","house","large","learn","never","other",
  "place","plant","point","right","small","sound","spell","still","study","their",
  "there","these","thing","think","three","water","where","which","world","would",
  "write","apple","bread","chair","table","light","night","smile","laugh","happy",
  "peace","dream","sleep","drink","break","bring","carry","catch","drive","begin",
  "build","teach","reach","watch","listen","speak","read","count","start","close",

  "open","clear","clean","dirty","sweet","sugar","spice","salt","fruit","grape",
  "lemon","mango","peach","berry","melon","bread","toast","cream","cheese","butter",
  "water","juice","drink","glass","plate","spoon","knife","fork","table","chair",
  "floor","walls","roof","door","window","clock","watch","phone","radio","music",
  "sound","voice","noise","quiet","loud","happy","sad","angry","brave","calm",
  "kind","nice","mean","fair","true","false","right","wrong","early","late",
  "today","night","morning","even","week","month","year","daily","often","never",
  "maybe","sure","again","always","begin","start","finish","end","pause","stop",

  "move","walk","run","jump","sit","stand","fall","rise","turn","roll",
  "push","pull","lift","drop","throw","catch","hold","keep","give","take",
  "send","bring","carry","drive","ride","fly","swim","climb","reach","touch",
  "feel","smell","taste","hear","see","look","watch","find","lose","gain",
  "learn","teach","study","read","write","draw","paint","build","create","design",
  "think","know","guess","hope","wish","plan","decide","choose","agree","argue",

  "work","play","rest","sleep","dream","relax","focus","train","fight","win",
  "lose","score","match","game","team","group","party","event","show","stage",
  "movie","drama","story","plot","scene","actor","role","voice","sound","music",
  "song","tune","beat","dance","style","trend","model","dress","shirt","pants",

  "color","black","white","green","blue","brown","pink","shade","light","dark",
  "bright","clear","cloud","rain","storm","wind","snow","sun","heat","cold",
  "cool","warm","fresh","clean","dirty","dry","wet","soft","hard","rough",
  "smooth","sharp","dull","thick","thin","wide","narrow","deep","shallow","high",

  "low","near","far","left","right","front","back","inside","outside","above",
  "below","under","around","along","across","through","between","within","beyond","toward",
  "before","after","during","while","since","until","about","into","onto","upon",

  "city","town","road","street","bridge","river","field","forest","hill","valley",
  "park","house","home","room","space","area","place","point","spot","site",
  "store","shop","market","bank","hotel","school","office","clinic","court","hall",

  "power","force","energy","speed","motion","value","price","cost","total","sum",
  "count","level","grade","rank","score","point","mark","result","output","input",
  "data","info","file","code","debug","test","build","deploy","server","client"
];

function getRandomWords(count = 30) {
  return Array.from({ length: count }, () =>
    words[Math.floor(Math.random() * words.length)]
  ).join(" ");
}

export default getRandomWords;