package com.rictor.demo;

import java.util.ArrayList;


public class Broadcast {
    public String type;
    public short numPlayers;
    public short round;
    public int phase;
    public int time;
    public int indexOfIt;
    public ArrayList<String> players;
    public int[] scores;
    public String[][] quoteChoices;
    public String[][] submittedQuotes;
    public String[] quote;
    public boolean end;
    public boolean[] bonus;
    public boolean[] submitted;


    public Broadcast(Game g, boolean end) {
        this.type = "game_broadcast";
        this.quoteChoices = g.quoteChoices;
        this.submittedQuotes = g.submittedQuotes;
        this.numPlayers = g.numPlayers;
        this.players = g.playerNames;
        this.round = g.round;
        this.phase = g.phase;
        this.quote = g.quote;
        this.indexOfIt = g.indexOfIt;
        this.scores = g.scores;
        this.bonus = g.bonus;
        this.submitted = g.submitted;
        this.time = g.time;
        this.end = end;
    }
}

