(this["webpackJsonpfish-frontend"] =
  this["webpackJsonpfish-frontend"] || []).push([
  [0],
  {
    14: function (e, t, a) {
      e.exports = a(23);
    },
    19: function (e, t, a) {},
    20: function (e, t, a) {},
    21: function (e, t, a) {},
    23: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        o = a.n(n),
        s = a(12),
        r = a.n(s),
        i = (a(19), a(2)),
        c = a(3),
        l = a(1),
        m = a(5),
        p = a(4);
      a(20), a(21);
      var h = function () {
          return o.a.createElement(
            "div",
            null,
            o.a.createElement("h1", null, "Fish"),
            o.a.createElement("h4", null, "By: Michael Zappa")
          );
        },
        u = a(24),
        d = (function (e) {
          Object(m.a)(a, e);
          var t = Object(p.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).addRoomClick = n.addRoomClick.bind(
                Object(l.a)(n)
              )),
              (n.joinRoomClick = n.joinRoomClick.bind(Object(l.a)(n))),
              (n.state = {
                roomToBeMade: "",
                roomToBeJoined: "",
                joiningPlayerName: "",
              }),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(
                        "form",
                        null,
                        o.a.createElement("input", {
                          placeholder: "Room Name",
                          type: "text",
                          name: "Room name",
                          value: this.state.roomToBeMade,
                          onChange: this.updateRoomToBeMadeState.bind(this),
                        }),
                        o.a.createElement(
                          u.a,
                          {
                            variant: "primary",
                            size: "lg",
                            onClick: this.addRoomClick,
                          },
                          "Submit"
                        )
                      )
                    ),
                    o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(
                        "form",
                        null,
                        o.a.createElement("input", {
                          placeholder: "Room Name",
                          type: "text",
                          name: "Room name",
                          value: this.state.roomToBeJoined,
                          onChange: this.updateJoiningRoomState.bind(this),
                        }),
                        o.a.createElement("input", {
                          placeholder: "Player Name",
                          type: "text",
                          name: "Player name",
                          value: this.state.joiningPlayerName,
                          onChange: this.updateJoiningPlayerState.bind(this),
                        }),
                        o.a.createElement(
                          u.a,
                          {
                            variant: "primary",
                            size: "lg",
                            onClick: this.joinRoomClick,
                          },
                          "Submit"
                        )
                      )
                    ),
                    o.a.createElement("div", null)
                  );
                },
              },
              {
                key: "updateRoomToBeMadeState",
                value: function (e) {
                  this.setState({ roomToBeMade: e.target.value });
                },
              },
              {
                key: "updateJoiningRoomState",
                value: function (e) {
                  this.setState({ roomToBeJoined: e.target.value });
                },
              },
              {
                key: "updateJoiningPlayerState",
                value: function (e) {
                  this.setState({ joiningPlayerName: e.target.value });
                },
              },
              {
                key: "addRoomClick",
                value: function () {
                  fetch("http://localhost:9000/rooms/", {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({ name: this.state.roomToBeMade }),
                  }),
                    this.setState({
                      roomToBeMade: "",
                      roomToBeJoined: "",
                      joiningPlayerName: "",
                    });
                },
              },
              {
                key: "joinRoomClick",
                value: function () {
                  var e = this,
                    t = this.state.roomToBeJoined,
                    a = this.state.joiningPlayerName;
                  fetch("http://localhost:9000/rooms/" + t, {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({ name: a }),
                  })
                    .then(function (e) {
                      return e.text();
                    })
                    .then(function (n) {
                      "Given room does not exist" === n
                        ? alert("Please enter a room which has been created")
                        : (e.props.setPlayerForApp(t, n, a),
                          e.props.updateHand(),
                          e.setState({
                            roomToBeMade: "",
                            roomToBeJoined: "",
                            joiningPlayerName: "",
                          }));
                    });
                },
              },
            ]),
            a
          );
        })(o.a.Component),
        f = (function (e) {
          Object(m.a)(a, e);
          var t = Object(p.a)(a);
          function a(e) {
            var n;
            return Object(i.a)(this, a), ((n = t.call(this, e)).state = {}), n;
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "h1",
                      null,
                      this.props.playerName,
                      "'s Hand"
                    ),
                    o.a.createElement(
                      "p",
                      { className: "App-intro" },
                      this.props.hand
                    )
                  );
                },
              },
            ]),
            a
          );
        })(o.a.Component),
        v = (function (e) {
          Object(m.a)(a, e);
          var t = Object(p.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).state = {
                opponents: [],
                playerAsked: "",
                desiredCard: "",
              }),
              (n.askForCard = n.askForCard.bind(Object(l.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement("h1", null, "Ask a Player for a Card"),
                    o.a.createElement(
                      "form",
                      null,
                      o.a.createElement(
                        "select",
                        {
                          id: "choose-opponent",
                          onChange: this.updatePlayerAskedState.bind(this),
                        },
                        o.a.createElement(
                          "option",
                          { selected: "selected" },
                          "Select Opponent"
                        ),
                        o.a.createElement(
                          "option",
                          { value: this.props.opponents[0] },
                          this.props.opponents[0]
                        ),
                        o.a.createElement(
                          "option",
                          { value: this.props.opponents[1] },
                          this.props.opponents[1]
                        ),
                        o.a.createElement(
                          "option",
                          { value: this.props.opponents[2] },
                          this.props.opponents[2]
                        )
                      ),
                      o.a.createElement("input", {
                        placeholder: "Card",
                        type: "text",
                        name: "card",
                        value: this.state.desiredCard,
                        onChange: this.updatedesiredCardState.bind(this),
                      }),
                      o.a.createElement(
                        u.a,
                        {
                          variant: "primary",
                          size: "lg",
                          onClick: this.askForCard,
                        },
                        "Ask for Card"
                      )
                    )
                  );
                },
              },
              {
                key: "updatePlayerAskedState",
                value: function (e) {
                  this.setState({ playerAsked: e.target.value });
                },
              },
              {
                key: "updatedesiredCardState",
                value: function (e) {
                  this.setState({ desiredCard: e.target.value });
                },
              },
              {
                key: "askForCard",
                value: function () {
                  var e = this;
                  fetch(
                    "http://localhost:9000/rooms/" + this.props.room + "/turn/"
                  )
                    .then(function (e) {
                      return e.text();
                    })
                    .then(function (t) {
                      console.log(t + "   " + e.props.player),
                        t === e.props.player &&
                          ((document.getElementById(
                            "choose-opponent"
                          ).selectedIndex = 0),
                          "Select Opponent" !== e.state.playerAsked &&
                            "" !== e.state.playerAsked &&
                            e.props.askCardFunc(
                              e.props.room,
                              e.props.team,
                              e.props.player,
                              e.state.playerAsked,
                              e.state.desiredCard
                            ),
                          e.setState({ playerAsked: "", desiredCard: "" }));
                    });
                },
              },
            ]),
            a
          );
        })(o.a.Component),
        y = (function (e) {
          Object(m.a)(a, e);
          var t = Object(p.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).state = {}),
              (n.makeClaim = n.makeClaim.bind(Object(l.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "h1",
                      null,
                      "Make Claim, enter cards for each teammate",
                      o.a.createElement("br", null),
                      ' separated by commas: "card,card,card,card,card,card"'
                    ),
                    o.a.createElement(
                      "form",
                      null,
                      o.a.createElement(
                        "label",
                        { htmlFor: "name1" },
                        this.props.teammates[0]
                      ),
                      o.a.createElement("input", {
                        placeholder: "cards",
                        type: "text",
                        id: "name1",
                        value: this.state.teammate1Cards,
                        onChange: this.setTeammate1ClaimState.bind(this),
                      }),
                      o.a.createElement(
                        "label",
                        { htmlFor: "name1" },
                        this.props.teammates[1]
                      ),
                      o.a.createElement("input", {
                        placeholder: "cards",
                        type: "text",
                        id: "name2",
                        value: this.state.teammate2Cards,
                        onChange: this.setTeammate2ClaimState.bind(this),
                      }),
                      o.a.createElement(
                        "label",
                        { htmlFor: "name1" },
                        this.props.teammates[2]
                      ),
                      o.a.createElement("input", {
                        placeholder: "cards",
                        type: "text",
                        id: "name3",
                        value: this.state.teammate3Cards,
                        onChange: this.setTeammate3ClaimState.bind(this),
                      }),
                      o.a.createElement(
                        u.a,
                        {
                          variant: "primary",
                          size: "lg",
                          onClick: this.makeClaim,
                        },
                        "Submit Claim"
                      )
                    )
                  );
                },
              },
              {
                key: "setTeammate1ClaimState",
                value: function (e) {
                  var t = e.target.value.split(",");
                  this.setState({ teammate1Cards: t });
                },
              },
              {
                key: "setTeammate2ClaimState",
                value: function (e) {
                  var t = e.target.value.split(",");
                  this.setState({ teammate2Cards: t });
                },
              },
              {
                key: "setTeammate3ClaimState",
                value: function (e) {
                  var t = e.target.value.split(",");
                  this.setState({ teammate3Cards: t });
                },
              },
              {
                key: "makeClaim",
                value: function () {
                  var e = [];
                  this.state.teammate1Cards &&
                    e.push([
                      this.props.teammates[0],
                      this.state.teammate1Cards,
                    ]),
                    this.state.teammate2Cards &&
                      e.push([
                        this.props.teammates[1],
                        this.state.teammate2Cards,
                      ]),
                    this.state.teammate3Cards &&
                      e.push([
                        this.props.teammates[2],
                        this.state.teammate3Cards,
                      ]),
                    console.log(e),
                    this.props.makeClaimFunc(
                      this.props.room,
                      this.props.team,
                      e
                    ),
                    this.setState({
                      teammate1Cards: "",
                      teammate2Cards: "",
                      teammate3Cards: "",
                    });
                },
              },
            ]),
            a
          );
        })(o.a.Component),
        C = (function (e) {
          Object(m.a)(a, e);
          var t = Object(p.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).processTeammates = n.processTeammates.bind(
                Object(l.a)(n)
              )),
              (n.processOpponents = n.processOpponents.bind(Object(l.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "h2",
                      null,
                      "Teammates: ",
                      this.processTeammates(),
                      " ",
                      o.a.createElement("br", null),
                      "Score: ",
                      this.props.teamScore
                    ),
                    o.a.createElement(
                      "h2",
                      null,
                      "Opponents: ",
                      this.processOpponents(),
                      " ",
                      o.a.createElement("br", null),
                      "Score:",
                      " ",
                      this.props.opponentsScore
                    )
                  );
                },
              },
              {
                key: "processTeammates",
                value: function () {
                  if (this.props.teammates)
                    return this.props.teammates.join(", ");
                },
              },
              {
                key: "processOpponents",
                value: function () {
                  if (this.props.opponents)
                    return this.props.opponents.join(", ");
                },
              },
            ]),
            a
          );
        })(o.a.Component),
        b = (function (e) {
          Object(m.a)(a, e);
          var t = Object(p.a)(a);
          function a() {
            return Object(i.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "h1",
                      null,
                      "Last move: ",
                      this.props.move
                    )
                  );
                },
              },
            ]),
            a
          );
        })(o.a.Component),
        S = (function (e) {
          Object(m.a)(a, e);
          var t = Object(p.a)(a);
          function a() {
            return Object(i.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(c.a)(a, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "h1",
                      null,
                      "Current Turn: ",
                      this.props.turn
                    )
                  );
                },
              },
            ]),
            a
          );
        })(o.a.Component),
        j = a(8),
        g = (function (e) {
          Object(m.a)(a, e);
          var t = Object(p.a)(a);
          function a(e) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = t.call(this, e)).state = {
                rooms: "",
                teammates: [],
                opponents: [],
                move: "",
                turn: "",
              }),
              (n.setPlayer = n.setPlayer.bind(Object(l.a)(n))),
              (n.updateHand = n.updateHand.bind(Object(l.a)(n))),
              (n.refreshState = n.refreshState.bind(Object(l.a)(n))),
              (n.getTeammates = n.getTeammates.bind(Object(l.a)(n))),
              (n.getOpponents = n.getOpponents.bind(Object(l.a)(n))),
              (n.getLastMove = n.getLastMove.bind(Object(l.a)(n))),
              (n.getTurnName = n.getTurnName.bind(Object(l.a)(n))),
              n
            );
          }
          return (
            Object(c.a)(a, [
              {
                key: "getDatabase",
                value: function () {
                  var e = this;
                  fetch("http://localhost:9000/rooms")
                    .then(function (e) {
                      return e.text();
                    })
                    .then(function (t) {
                      return e.setState({ rooms: t });
                    });
                },
              },
              {
                key: "componentWillMount",
                value: function () {
                  this.getDatabase();
                },
              },
              {
                key: "refreshState",
                value: function () {
                  this.updateHand(),
                    this.getTeammates(),
                    this.getOpponents(),
                    this.getLastMove(),
                    this.getTurnName();
                },
              },
              {
                key: "setPlayer",
                value: function (e, t, a) {
                  this.setState({ roomName: e, teamName: t, playerName: a }),
                    this.getTeammates(),
                    this.getOpponents(),
                    this.getLastMove(),
                    this.getTurnName();
                },
              },
              {
                key: "updateHand",
                value: function () {
                  var e = this;
                  fetch(
                    "http://localhost:9000/rooms/" +
                      this.state.roomName +
                      "/teams/" +
                      this.state.teamName +
                      "/users/" +
                      this.state.playerName
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (t) {
                      var a = t.hand
                        .sort(function (e, t) {
                          return e.slice(-1).localeCompare(t.slice(-1));
                        })
                        .sort(function (e, t) {
                          return 0 === e.slice(-1).localeCompare(t.slice(-1))
                            ? e.slice(0, 2).localeCompare(t.slice(0, 2))
                            : e.slice(-1).localeCompare(t.slice(-1));
                        })
                        .join(", ");
                      e.setState({ hand: a });
                    });
                },
              },
              {
                key: "getTeammates",
                value: function () {
                  var e = this;
                  fetch(
                    "http://localhost:9000/rooms/" +
                      this.state.roomName +
                      "/teams/" +
                      this.state.teamName
                  )
                    .then(function (e) {
                      return e.json();
                    })
                    .then(function (t) {
                      var a = Object.keys(t.players),
                        n = t.claims.length;
                      e.setState({ teammates: a, teamScore: n });
                    });
                },
              },
              {
                key: "getOpponents",
                value: function () {
                  var e,
                    t = this;
                  (e = "team1" === this.state.teamName ? "team2" : "team1"),
                    fetch(
                      "http://localhost:9000/rooms/" +
                        this.state.roomName +
                        "/teams/" +
                        e
                    )
                      .then(function (e) {
                        return e.json();
                      })
                      .then(function (e) {
                        var a = Object.keys(e.players),
                          n = e.claims.length;
                        t.setState({ opponents: a, opponentsScore: n });
                      });
                },
              },
              {
                key: "getLastMove",
                value: function () {
                  var e = this;
                  fetch(
                    "http://localhost:9000/rooms/" +
                      this.state.roomName +
                      "/move/"
                  )
                    .then(function (e) {
                      return e.text();
                    })
                    .then(function (t) {
                      e.setState({ move: t });
                    });
                },
              },
              {
                key: "getTurnName",
                value: function () {
                  var e = this;
                  fetch(
                    "http://localhost:9000/rooms/" +
                      this.state.roomName +
                      "/turn/"
                  )
                    .then(function (e) {
                      return e.text();
                    })
                    .then(function (t) {
                      e.setState({ turn: t });
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    { className: "App" },
                    o.a.createElement(
                      "header",
                      { className: "App-header" },
                      o.a.createElement(
                        "div",
                        null,
                        o.a.createElement(h, null)
                      ),
                      o.a.createElement(d, {
                        rooms: this.state.rooms,
                        setPlayerForApp: this.setPlayer,
                        updateHand: this.updateHand,
                      })
                    ),
                    o.a.createElement(
                      "div",
                      { className: "game-information" },
                      o.a.createElement(
                        "div",
                        { className: "game-stat" },
                        o.a.createElement(
                          "h1",
                          null,
                          "Room: ",
                          this.state.roomName
                        )
                      ),
                      o.a.createElement(
                        "div",
                        { className: "game-stat" },
                        o.a.createElement(C, {
                          teammates: this.state.teammates,
                          teamScore: this.state.teamScore,
                          opponents: this.state.opponents,
                          opponentsScore: this.state.opponentsScore,
                        })
                      ),
                      o.a.createElement(
                        "div",
                        { className: "game-stat" },
                        o.a.createElement(f, {
                          hand: this.state.hand,
                          playerName: this.state.playerName,
                        })
                      ),
                      o.a.createElement(
                        "div",
                        { className: "game-stat" },
                        o.a.createElement(b, { move: this.state.move })
                      ),
                      o.a.createElement(
                        "div",
                        { className: "game-stat" },
                        o.a.createElement(S, { turn: this.state.turn })
                      )
                    ),
                    o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(v, {
                        room: this.state.roomName,
                        team: this.state.teamName,
                        player: this.state.playerName,
                        askCardFunc: j.askForCard,
                        opponents: this.state.opponents,
                        inSameHalfSuit: j.inSameHalfSuit,
                      }),
                      o.a.createElement(y, {
                        room: this.state.roomName,
                        team: this.state.teamName,
                        makeClaimFunc: j.makeClaim,
                        teammates: this.state.teammates,
                      }),
                      o.a.createElement(
                        u.a,
                        { variant: "primary", onClick: this.refreshState },
                        "Refresh State"
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(o.a.Component);
      r.a.render(
        o.a.createElement(o.a.StrictMode, null, o.a.createElement(g, null)),
        document.getElementById("root")
      );
    },
    8: function (e, t, a) {
      var n = a(22);
      function o(e, t, a, o) {
        return s(e, t, a, function (s) {
          o.forEach(function (o) {
            var r = s.indexOf(o);
            return (
              r > -1 && s.splice(r, 1),
              n(
                "http://localhost:9000/rooms/" +
                  e +
                  "/teams/" +
                  t +
                  "/users/" +
                  a,
                {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  method: "PUT",
                  body: JSON.stringify({ hand: s }),
                }
              )
            );
          });
        });
      }
      function s(e, t, a, o) {
        return n(
          "http://localhost:9000/rooms/" + e + "/teams/" + t + "/users/" + a
        )
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            var t = e.hand;
            o(t);
          });
      }
      var r = [
        "2-H",
        "3-H",
        "4-H",
        "5-H",
        "6-H",
        "7-H",
        "9-H",
        "10-H",
        "J-H",
        "Q-H",
        "K-H",
        "A-H",
        "2-D",
        "3-D",
        "4-D",
        "5-D",
        "6-D",
        "7-D",
        "9-D",
        "10-D",
        "J-D",
        "Q-D",
        "K-D",
        "A-D",
        "2-S",
        "3-S",
        "4-S",
        "5-S",
        "6-S",
        "7-S",
        "9-S",
        "10-S",
        "J-S",
        "Q-S",
        "K-S",
        "A-S",
        "2-C",
        "3-C",
        "4-C",
        "5-C",
        "6-C",
        "7-C",
        "9-C",
        "10-C",
        "J-C",
        "Q-C",
        "K-C",
        "A-C",
        "8-H",
        "8-D",
        "8-S",
        "8-C",
        "B-J",
        "R-J",
      ];
      function i(e, t) {
        var a = r.indexOf(e),
          n = r.indexOf(t);
        return (
          console.log(a / 6 + "  " + n / 6),
          Math.floor(a / 6) === Math.floor(n / 6)
        );
      }
      e.exports = {
        askForCard: function (e, t, a, r, c) {
          s(e, t, a, function (l) {
            var m = l.reduce(function (e, t) {
              return console.log(t + "   " + c + "   " + i(t, c)), e || i(t, c);
            }, !1);
            if ((console.log(m), !1 === m))
              alert("You cannot ask for ".concat(c));
            else {
              var p = "team1" === t ? "team2" : "team1";
              s(e, p, r, function (i) {
                if (
                  i.reduce(function (e, t) {
                    return e || t === c;
                  }, !1)
                ) {
                  o(e, p, r, [c]),
                    (function (e, t, a, o) {
                      s(e, t, a, function (s) {
                        return (
                          s.push(o),
                          n(
                            "http://localhost:9000/rooms/" +
                              e +
                              "/teams/" +
                              t +
                              "/users/" +
                              a,
                            {
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              method: "PUT",
                              body: JSON.stringify({ hand: s }),
                            }
                          )
                        );
                      });
                    })(e, t, a, c);
                  var l = ""
                    .concat(a, " asked for the ")
                    .concat(c, " from ")
                    .concat(r, ", and received it.");
                  n("http://localhost:9000/rooms/" + e + "/move/", {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    method: "PUT",
                    body: JSON.stringify({ move: l }),
                  }),
                    n("http://localhost:9000/rooms/" + e + "/turn/", {
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      method: "PUT",
                      body: JSON.stringify({ turn: a }),
                    });
                } else {
                  var m = ""
                    .concat(a, " asked for the ")
                    .concat(c, " from ")
                    .concat(r, ", but ")
                    .concat(r, " did not have it.");
                  n("http://localhost:9000/rooms/" + e + "/move/", {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    method: "PUT",
                    body: JSON.stringify({ move: m }),
                  }),
                    n("http://localhost:9000/rooms/" + e + "/turn/", {
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      method: "PUT",
                      body: JSON.stringify({ turn: r }),
                    });
                }
              });
            }
          });
        },
        makeClaim: function (e, t, a) {
          var r = [];
          a.forEach(function (e) {
            e[1].forEach(function (e) {
              r.push(e);
            });
          }),
            console.log(r),
            (function (e) {
              var t = e.pop();
              console.log("Last card: " + t);
              var a = e.reduce(function (e, a) {
                return console.log("card being checked: " + a), e && i(t, a);
              }, !0);
              return console.log(a), a;
            })(r) &&
              (function e(t, a, r, i) {
                var c = i.pop();
                if (c) {
                  var l = c[0],
                    m = c[1];
                  s(t, a, l, function (s) {
                    var c;
                    if (
                      (m &&
                        (c = m.reduce(function (e, t) {
                          return (
                            console.log(
                              ""
                                .concat(l, " has card ")
                                .concat(t, ": ")
                                .concat(s.indexOf(t > -1))
                            ),
                            e || s.indexOf(t) > -1
                          );
                        }, !1)),
                      c)
                    )
                      if (i.length > 0) e(t, a, r, i);
                      else {
                        var p = [];
                        r.forEach(function (e) {
                          p.push(e[1]);
                        });
                        var h = p.flat().toString();
                        n("http://localhost:9000/rooms/" + t + "/teams/" + a)
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            var o = e.claims;
                            o.push(h),
                              n(
                                "http://localhost:9000/rooms/" +
                                  t +
                                  "/teams/" +
                                  a,
                                {
                                  headers: {
                                    Accept: "application/json",
                                    "Content-Type": "application/json",
                                  },
                                  method: "PUT",
                                  body: JSON.stringify({ claims: o }),
                                }
                              );
                          }),
                          r.forEach(function (e) {
                            var n = e[0],
                              s = e[1];
                            o(t, a, n, s);
                          });
                        var u = "".concat(a, " made the claim ").concat(h, ".");
                        n("http://localhost:9000/rooms/" + t + "/move/", {
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                          method: "PUT",
                          body: JSON.stringify({ move: u }),
                        });
                      }
                  });
                }
              })(e, t, a, a.slice());
        },
        inSameHalfSuit: i,
        updateHand: function () {
          var e = this;
          n(
            "http://localhost:9000/rooms/" +
              this.state.roomName +
              "/teams/" +
              this.state.teamName +
              "/users/" +
              this.state.playerName
          )
            .then(function (e) {
              return e.json();
            })
            .then(function (t) {
              var a = t.hand
                .sort(function (e, t) {
                  return e.slice(-1).localeCompare(t.slice(-1));
                })
                .sort(function (e, t) {
                  return 0 === e.slice(-1).localeCompare(t.slice(-1))
                    ? e.slice(0, 2).localeCompare(t.slice(0, 2))
                    : e.slice(-1).localeCompare(t.slice(-1));
                })
                .join(", ");
              e.setState({ hand: a });
            });
        },
        getTeammates: function () {
          var e = this;
          n(
            "http://localhost:9000/rooms/" +
              this.state.roomName +
              "/teams/" +
              this.state.teamName
          )
            .then(function (e) {
              return e.json();
            })
            .then(function (t) {
              var a = Object.keys(t.players),
                n = t.claims.length;
              e.setState({ teammates: a, teamScore: n });
            });
        },
        getOpponents: function () {
          var e,
            t = this;
          (e = "team1" === this.state.teamName ? "team2" : "team1"),
            n(
              "http://localhost:9000/rooms/" +
                this.state.roomName +
                "/teams/" +
                e
            )
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                var a = Object.keys(e.players),
                  n = e.claims.length;
                t.setState({ opponents: a, opponentsScore: n });
              });
        },
      };
    },
  },
  [[14, 1, 2]],
]);
//# sourceMappingURL=main.70be6e1c.chunk.js.map
