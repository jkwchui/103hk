/* The plan from physical simulation:
// 1. Prepare M dice, each having N sides
// 2. Roll all dice remaining
// 3. If dice is "1", remove
// 4. Count number of dice remaining, go back to 2
*/

// --- CONFIGURATION -------------------------------------

  // Declare what the die will be like
  var dieCount = 500 // 4026 // set number of die
  var dieCountMin = 50
  var dieCountMax = 3000
  var dieCountStep = 50

  var initialRemain = 500
  var initialRemainMin = 0
  var initialRemainMax = 3000
  var initialRemainStep = 10

  var dieSide = 50 // set sides of die
  var dieSideMin = 2
  var dieSideMax = 100

  // Prepare the die according to the numbers above
  var Die = {
    alive: true,
    value: 0
  }
  var dieArray = []

  // Set the conditions for when the die should flip
  var forwardConditions = 2 // when die should flip
  var backwardConditions = 2 // when die should flip back

  // Setup the record keeping
  var rounds = 0 // it's the 0th round at the beginning
  var survival = 0 // this keeps track of the number surviving in a particular round

  var eqmHistory = []
  var eqmHistoryDead = []

  // Display options
  var initialTime
  var MYSTERY = 1000 // What does this do?? o.O
  var MYSTERYMin = 500
  var MYSTERYMax = 2500

  var backgroundColor = 200
  var pause = false

// --- ONE-TIME SETUP ------------------------------------

function setup() {

  initialTime = millis()
  frameRate(30)

  let myCanvas = createCanvas(760, 910) // Setup the size of the canvas
  myCanvas.parent('myContainer')
  background(backgroundColor)

  var button = createButton('Play / Pause')
  button.parent('controls')
  button.class('button is-info')
  button.mousePressed(togglePause)

  var buttonReset = createButton('Reset')
  buttonReset.parent('controls')
  buttonReset.class('button is-warning')
  buttonReset.mousePressed(reset)

  var gui = createGui('Label', width + 80, 340)
  // gui.parent('GUIpanel')
  gui.addGlobals('dieCount', 'initialRemain', 'dieSide', 'forwardConditions', 'backwardConditions', 'MYSTERY')

  var dataDisplay = document.getElementById("dataDisplay");

  reset()

  // plotChart()
  stepThroughDieArray()

}

// --- ITERATIONS ----------------------------------------

function draw() {
  if ( !pause && (millis() - initialTime >= MYSTERY) ) {
    initialTime = millis()
    // console.log(initialTime)

    if (dieArray.length != dieCount) {
      reset()
    }

    stepThroughDieArray()
  }
}

function stepThroughDieArray () {
  survival = 0
  clearCanvas()

  for (var i = 0; i < dieCount; i++) {
    let x = 15 * ((i%50)+1)  // Dumb way to manually position the circle
    let y = 15 * int(i/50)+10

    dieArray[i].value = getRandomIntInclusive(1, dieSide)
    // clearCircle(x, y)

    if (dieArray[i].alive) { // die is alive
      survival++
      drawLiveCircle(x,y)

      if (dieArray[i].value <= forwardConditions) {
        dieArray[i].alive = false
        drawDyingCircle(x,y)
        // drawDeadCircle(x,y)
      }
    } else { // die is dead
      drawDeadCircle(x, y)
      if (dieArray[i].value <= backwardConditions) {
        dieArray[i].alive = true
        drawBirthingCircle(x, y)
        // drawLiveCircle(x,y)
      }
    }
  }

  // if ( (rounds % 10) === 0 ) {
  // console.log(rounds + ", " + survival)
    // }
  eqmHistory.push( {
    x: rounds,
    y: survival
  })

  eqmHistoryDead.push( {
    x: rounds,
    y: dieCount-survival
  })

  var display = ''
  for (var i = 0; i < eqmHistory.length; i++) {
    let thisRound = eqmHistory[i].x
    let thisSurvival = eqmHistory[i].y
    display = display + thisRound + ", " + thisSurvival + ", " + (dieCount-thisSurvival) + '\n'
  }

  dataDisplay.innerHTML = display

  rounds++

  if ( (rounds % 5) === 0) {
    plotChart()
  }
}

function clearCanvas () {
  stroke(backgroundColor)
  fill(backgroundColor)
  rect(0, 0, 1000, 930)
}

function drawLiveCircle (x, y) {
  fill(220,20,60,90);                  // Add a new red circle c/ black stroke
  stroke(0);
  ellipse(x, y, 10, 10);
}

function drawBirthingCircle (x, y) {
  fill(255,50,90); // Flashes if it has *just* died
  ellipse(x,y,13,13);
}

function drawDeadCircle (x, y) {
  stroke(0);
  fill(230,230,230);
  ellipse(x, y, 10, 10);
}

function drawDyingCircle (x,y) {
  fill(200,200,220); // Flashes if it has *just* come back to life
  ellipse(x,y,13,13);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function plotChart () {
  var ctx = document.getElementById("myChart").getContext('2d');
  var scatterChart = new Chart(ctx, {
      type: 'scatter',
      data: {
          datasets: [{
              label: '# remaining',
              data: eqmHistory,
              backgroundColor: 'rgba(200, 0, 0, 0.1)',
              borderColor: 'rgba(200, 0, 0, 0.5)'
          },
          {
              label: '# discarded',
              data: eqmHistoryDead
          }]
      },
      options: {
          elements: {
              line: {
                  tension: 0
              }
          },
          scales: {
              xAxes: [{
                  type: 'linear',
                  position: 'bottom'
              }],
              yAxes: [{
                  ticks: {
                    suggestedMin: 0
                  }
              }]

          },

      }
  });
}

function togglePause () {
  pause = !pause
}

function mousePressed() {
}

function reset () {
  eqmHistory = []
  eqmHistoryDead = []
  dieArray = []
  rounds = 0

  for (var i = 0; i < dieCount; i++) { // make all die alive at the beginning
    if (i < initialRemain) {
      dieArray.push( {
        alive: true,
        value: 0
      })
    } else {
      dieArray.push( {
        alive: false,
        value: 0
      })
    }

  }

  plotChart()

  pause = false

}
