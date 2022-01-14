# HârnMaster 3 Automation for Foundry VTT

This module adds automatic handling for when actors fail
 * Shock Rolls
 * Fumble Rolls
 * Stumble Rolls

And also will auto-increment fatigue for Actors that cast spells.

## Shock Failure Automation

<img width=200 src="images/FailedShock.png" style="float:right;padding:5px"/>

If an actor fails a shock roll, it will automatically be
marked as 'defeated' and a Skull icon will appear over its
token.

If there is active combat, then the actor will be highlighted
in red in the combat tracker and should appear as dead there.

The actor also gets an Active Effect of 'Dead' added to its
effects. This Active Effect remains until removed.

## Stumble Failure Automation

<img width=100 src="images/FailedStumble.png" style="float:left;padding:5px"/>

If an actor fails a stumble roll, it will automatically be
marked as 'prone' and get an Active Effect of Prone and its
associated icon.

This Active Effect will automatically be disabled *after* the Actor's
next turn. The intent is that the icon serves as a reminder to the 
player that they must spend one round getting back up from prone.

The Active Effect will remain in the Actor's Effects tab. You
may delete it if you want. If the effect isn't there next time
the actor stumbles, a new effect will be created.

## Fumble Failure Automation

<img width=100 src="images/FailedFumble.png" style="float:left;padding:5px"/>

If an actor fails a fumble roll, it automatically gains an
active effect of "Fumble". This active effect will 
automatically be disabled *after* the player's next turn. 

The Active Effect will remain in the Actor's Effects tab. You
may delete it if you want. If the effect isn't there next time
the actor fumbles, a new effect will be created.

## Shek P'Var Fatigue Automation

<img width=200 src="images/SpellFatigue.png" style="float:right;padding:5px"/>

Whenever a spell is cast, depending on the roll result, fatigue will be
added to the actor casting the spell.

|Roll|Result|
|----|------|
|CS|No fatigue |
|MS|+1 fatigue |
|MF|+1 fatigue |
|CF|+1 fatigue |

# Future plans
* house rules for spell fatigue, e.g. low level spells don't cost fatigue
* Fatigue that auto-expires 10 minutes after getting it


