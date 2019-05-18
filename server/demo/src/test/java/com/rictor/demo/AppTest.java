package com.rictor.demo;

import static org.junit.Assert.assertTrue;

import org.junit.Test;

/**
 * Unit test for simple App.
 */
public class AppTest 
{
    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue()
    {
        Game game = new Game();
        game.readFile("sourceQuotes");
        assertTrue( true );
    }
}
