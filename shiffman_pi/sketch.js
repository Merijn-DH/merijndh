let videos = [];
let currentVideo = 0;
let index = 0;
let hue = 0;
let pi = "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201065485863278865936153381827968230301952035301852968995773622599413891249721775283479131515574857242454150695950829533116861727855889075098381754637464939319255060400927701671139009848824012858361603563707660104710181942955596198946767837449448255379774726847104047534646208046684259069491293313677028989152104752162056966024058038150193511253382430035587640247496473263914199272604269922796782354781636009341721641219924586315030286182974555706749838505494588586926995690927210797509302955321165344987202755960236480665499119881834797753566369807426542527862551818417574672890977772793800081647060016145249192173217214772350141441973568548161361157352552133475741849468438523323907394143334547762416862518983569485562099219222184272550254256887671790494601653466804988627232791786";
let blobs = [];

function preload() {
  for (let i = 0; i < 10; i++) {
    videos.push(createVideo("videos/" + i + ".webm"));
    videos[i].hide();
  }
  videos.push(createVideo("videos/p.webm"));
  videos[10].hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  videos[3].play();
  blobs.push(new Blob("3"));
  currentVideo = 3;
  setInterval(function(){ nextDigit(); }, 600);
}

function draw() {
  background(240);

  for (let i = 0; i < blobs.length; i++) {
    blobs[i].update();
    blobs[i].show();
  }

  if (blobs.length > 50) {
    for (let i = blobs.length - 50; i > 0; i--) {
      blobs[i].alpha -= 0.4;
      if (blobs[i].alpha < 1) {
        blobs.splice(i, 1)
      }
    }
  }
  let w = windowWidth;
  if (windowWidth/windowHeight > 14/9) {
    w = windowWidth * 0.8;
  }
  let h = w / 16 * 9;
  image(videos[currentVideo], (windowWidth - w) * 0.5, windowHeight - h, w, h);
  textSize(windowWidth/15);
  fill(80);
  textAlign(CENTER);
  stroke(50);
  strokeWeight(3);
  text("The Random Digits of Pi", windowWidth/2, windowWidth/14)
  textSize(windowWidth/35);
  text("with Daniel Shiffman", windowWidth/4*3, windowWidth/9)
}

function nextDigit() {
  index += 1;
  let newDigit = pi.substring(index, index + 1);
  blobs.push(new Blob(newDigit));
  if (newDigit == ".") {
    newDigit = 10;
  }
  videos[currentVideo].stop();
  currentVideo = parseInt(newDigit);
  videos[currentVideo].play();
}

class Blob {
  constructor(digit) {
    this.digit = digit;
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.d = random(40,100);
    this.hue = random(100);
    this.vx = 0;
    this.vy = 0;
    this.alpha = 80;
  }
  show() {
    noStroke();
    fill(this.hue, 70, 70, this.alpha);
    ellipse(this.x, this.y, this.d);
    fill(100, this.alpha);
    textAlign(CENTER);
    textSize(this.d * 0.7);
    text(this.digit, this.x, this.y + this.d / 4);
  }
  update() {
    this.x += this.vx + random(-2, 2);
    this.y += this.vy + random(-2, 2);
  }
}