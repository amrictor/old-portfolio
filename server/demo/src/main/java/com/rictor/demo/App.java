package com.rictor.demo;

public class App 
{
    public static void main(String[] args) {
        // MicroServer server = new MicroServer(getPort(args), getName(args));
        WebsocketServer wss = new WebsocketServer();
        
        wss.start();
      }
    }
