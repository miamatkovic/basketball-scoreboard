let homeBtnOne = document.getElementById("home-btn-add-1")
let homeScoreEl = document.getElementById("score-home")
let homeScore = 0

function increaseHomeBy1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeBy2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeBy3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestBtnOne = document.getElementById("guest-btn-add-1")
let guestScoreEl = document.getElementById("score-guest")
let guestScore = 0

function increaseGuestBy1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestBy2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestBy3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function startNewGame() {
    homeScoreEl.textContent = 0
    homeScore = 0
    guestScoreEl.textContent = 0
    guestScore = 0
}
